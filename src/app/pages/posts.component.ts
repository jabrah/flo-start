
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../data/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './tmpl/posts.component.html',
  styleUrls: [ './style/posts.component.css' ]
})
export class PostsComponent implements OnInit {

  posts: any = [];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getAllPosts().subscribe(posts => this.posts = posts);
  }

}
