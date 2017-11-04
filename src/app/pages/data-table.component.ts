import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data/data.service';
import { Person } from '../data/person';

/**
 * Here we want to display a data table to the user. Data is retrieved from
 * the server and displayed here.
 */
@Component({
  selector: 'flo-data-table',
  templateUrl: './tmpl/data-table.component.html',
  styleUrls: [ './style/data-table.component.css' ]
})
export class DataTableComponent implements OnInit {
  peeps: Person[] = [];

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataService.getAllPeople()
      .then(people => this.peeps = people);
  }

  onSelect(person: Person): void {
    this.router.navigate(['/person', person.id]);
  }

  delete(person: Person): void {
    this.dataService.deletePerson(person.id);
  }
}
