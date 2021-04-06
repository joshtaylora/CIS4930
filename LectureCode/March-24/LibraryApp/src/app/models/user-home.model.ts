import { User } from './user.model';
import { Post } from './post.model';

export class UserHome {
  user: User;
  posts: Post[];
  constructor(user: User, posts: Post[]) {
    this.user = user;
    this.posts = posts;
  }
}
