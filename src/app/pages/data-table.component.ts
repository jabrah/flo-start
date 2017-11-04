import { Component, OnInit } from '@angular/core';

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

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAllPeople()
      .then(people => this.peeps = people);
  }
}
