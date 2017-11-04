import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.fragment
      .subscribe((frag: string)  => this.mode = PersonDetailMode[frag]);
  }

  /**
   * Update the record for a given person.
   */
  save(): void {

  }

  /**
   *
   */
  create(): void {

  }

  goBack(): void {
    this.location.back();
  }

}
