import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Person } from '../data/person';
import { PersonDetailMode } from '../data/person-detail-mode';
import { DataService } from '../data/data.service';

/**
 * This component has is used to view details about a person, edit details
 * about a person, or add details to a newly created person, to be added
 * to the database.
 *
 * The component is meant to switch on a URL fragment matching one of three
 * operating modes: VIEW, EDIT, CREATE
 */
@Component({
  selector: 'person-detail',
  templateUrl: './tmpl/person-detail.component.html',
  styleUrls: [ './style/person-detail.component.css' ]
})
export class PersonDetailComponent implements OnInit {
  it: Person;
  mode: PersonDetailMode;

  // Used in template
  savable: boolean = false;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    // Check mode, then retrieve person if applicable
    this.route.fragment
      .subscribe((frag: string)  => {
        this.mode = PersonDetailMode[frag];

        if (this.mode === PersonDetailMode.CREATE || this.mode === PersonDetailMode.EDIT) {
          this.savable = true;
        }
        if (this.mode === PersonDetailMode.VIEW || this.mode === PersonDetailMode.EDIT) {
          this.route.paramMap
            .switchMap((params: ParamMap) => this.dataService.getPerson(params.get('id')))
            .subscribe(person => this.it = person);
        } else {
          this.it = Person.toPerson({});
        }
      });

  }

  doTheThing(): void {
    if (this.mode === PersonDetailMode.CREATE) {
      this.create();
    } else if (this.mode === PersonDetailMode.EDIT) {
      this.save();
    }
    this.router.navigate(['/all']);
  }

  goBack(): void {
    this.location.back();
  }

  /**
   * Update the record for a given person.
   */
  private save(): void {
    if (!this.it) {
      console.log("[Client] No person selected.");
    } else {
      this.dataService.updatePerson(this.it);
    }
  }

  /**
   * Add a new person based on the information provided in the UI.
   */
  private create(): void {
    this.dataService.addPerson(this.it);
  }

}
