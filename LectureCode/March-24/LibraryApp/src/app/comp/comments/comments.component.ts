import { Component, Input, OnInit } from '@angular/core';

import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments: Comment[] | null = null;
  selectedComment?: Comment;
  newComment: Comment | null = null;

  constructor() {}

  ngOnInit(): void {}
}
