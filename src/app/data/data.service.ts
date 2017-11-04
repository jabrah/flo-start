import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'txjs/add/operator/toPromise';

import { Person } from './person';

@Injectable()
export class DataService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getAllPeople(): Promise<Person[]> {
    return new Person[0];
  }

  getPerson(id: number): Promise<Person> {
    return null;
  }

  /**
   * Add a person to the DB.
   * @param dude : the person to add
   * @returns {Promise<Person>} the person added or NULL if person
   *                            could not be added
   */
  addPerson(dude: Person): Promise<Person> {
    return null;
  }

  updatePerson(dudette: Person): Promise<Person> {
    return null;
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
