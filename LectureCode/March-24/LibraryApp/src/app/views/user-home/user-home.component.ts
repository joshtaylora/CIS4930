import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Location } from '@angular/common';

import { Post } from '../../mock-posts';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  userId: string = '';
  posts: Post[] | null = null;

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    const userId = this.route.snapshot.paramMap.get('userId');
    if (userId !== null) {
      this.userId = userId;
      this.userService
        .getUsersPosts(userId)
        .subscribe((posts) => (this.posts = posts));
    } else {
      this.location.back();
    }
  }
}
