import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../mock-posts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  @Output() PostStateChanged = new EventEmitter<boolean>();

  constructor(private httpC: HttpClient) {}

  private baseURL = 'http://localhost:3000/Posts/';

  userIsLoggedIn: boolean = false;

  getPosts(): Observable<Post[]> {
    return this.httpC.get<Post[]>(this.baseURL);
  }

  getPost(postId: number): Observable<Post> {
    return this.httpC.get<Post>(`http://localhost:3000/Posts/${postId}`);
  }
}
