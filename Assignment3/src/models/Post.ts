export class Post {
    postId: number;
    createdDate: string;
    title: string;
    content: string;
    userId: string;
    headerImage: string;
    lastUpdated: string;
    constructor(
        postId: number,
        createdDate: string,
        title: string,
        content: string,
        userId: string,
        headerImage: string,
        lastUpdated: string 
      ) {
          this.postId = postId;
          this.createdDate = createdDate;
          this.title = title;
          this.content = content;
          this.userId = userId;
          this.headerImage = headerImage;
          this.lastUpdated = lastUpdated;
      }
      public toJSON() {
          let objString = JSON.stringify(Object.assign({}, this));
          return objString;
      }
}