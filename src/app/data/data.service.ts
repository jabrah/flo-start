import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Person } from './person';

@Injectable()
export class DataService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private dataUrl = 'api/data';

  constructor(private http: Http) {}

  getAllPeople(): Promise<Person[]> {
    return this.http.get(this.dataUrl)
      .toPromise()
      .then(resp => resp.json() as Person[])
      .catch(this.handleError);
  }

  getPerson(id: string): Promise<Person> {
    const url = `${this.dataUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(resp => resp.json() as Person)
      .catch(this.handleError);
  }

  /**
   * Add a person to the DB.
   * @param dude : the person to add
   * @returns {Promise<Person>} the person added or NULL if person
   *                            could not be added
   */
  addPerson(dude: Person): Promise<Person> {
    return this.http.post(this.dataUrl, JSON.stringify(dude), {headers: this.headers})
      .toPromise()
      .then(resp => resp.json() as Person)
      .catch(this.handleError);
  }

  updatePerson(dudette: Person): Promise<Person> {
    const url = `${this.dataUrl}/${dudette.moo}`;
    return this.http.put(url, JSON.stringify(dudette), {headers: this.headers})
      .toPromise()
      .then(() => dudette)
      .catch(this.handleError);
  }

  // When done, find all people in DB and return
  deletePerson(id: string): Promise<Person[]> {
    const url = `${this.dataUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(resp => resp.json() as Person[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log("Sad Moo: " + JSON.stringify(error));
    return Promise.reject(error.message || error);
  }
}
