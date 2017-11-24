import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  constructor(private http: Http) {}

  getAllPosts() {
    console.log("Angular Moo");
    return this.http.get('/api/posts').map(res => res.json());
  }
}