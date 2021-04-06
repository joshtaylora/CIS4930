import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  userIsLoggedIn: boolean = false;

  constructor(private router: Router, private userSvc: UserService, private postSvc: PostService) {

  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    let userToken = this.userSvc.getLoggedInUser();
    console.log(userToken);
    if (userToken !== null && userToken.UserData !== undefined) {
      this.userIsLoggedIn = true;
      this.userSvc.getUsersPosts(userToken.UserData.userId).subscribe((postArray) => {
        this.posts = postArray;
        console.log(this.posts);
      }, (err)=> {
        console.log(err);
      });
    } else {
      this.userIsLoggedIn = false;
      this.router.navigate(['/login']);
    }
  }

}
