export class Comment {
  commentId:      number;
  comment:        string;
  userId:         string;
  postId:         string;
  commentDate:    string;

  constructor(
    commentId:    number,
    comment:      string,
    userId:       string,
    postId:       string,
    commentDate:  string
  ) {
    this.commentId = commentId;
    this.comment = comment;
    this.userId = userId;
    this.postId = postId;
    this.commentDate = commentDate;
  }
}
