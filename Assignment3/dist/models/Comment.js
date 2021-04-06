"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
class Comment {
    constructor(commentId, comment, userId, postId, commentDate) {
        this.commentId = commentId;
        this.comment = comment;
        this.userId = userId;
        this.postId = postId;
        this.commentDate = commentDate;
    }
    toJSON() {
        return JSON.stringify(Object.assign({}, {
            commentId: this.commentId,
            comment: this.comment,
            userId: this.userId,
            postId: this.postId,
            commentDate: this.commentDate,
        }));
    }
}
exports.Comment = Comment;
//# sourceMappingURL=Comment.js.map