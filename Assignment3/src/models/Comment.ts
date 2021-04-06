export class Comment {
  commentId: number;
  comment: string;
  userId: string;
  postId: number;
  commentDate: string;
  constructor(
    commentId: number,
    comment: string,
    userId: string,
    postId: number,
    commentDate: string
  ) {
    this.commentId = commentId;
    this.comment = comment;
    this.userId = userId;
    this.postId = postId;
    this.commentDate = commentDate;
  }
  public toJSON() {
    return JSON.stringify(
      Object.assign(
        {},
        {
          commentId: this.commentId,
          comment: this.comment,
          userId: this.userId,
          postId: this.postId,
          commentDate: this.commentDate,
        }
      )
    );
  }
}
