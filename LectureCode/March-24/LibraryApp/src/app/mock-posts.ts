export class Post {
    postId:         number;
    createdDate:    string;
    title:          string;
    content:        string;
    userId:         string;
    headerImage:    string;
    lastUpdated:    string;
    constructor(postId:number,createdDate:string, title:string,content:string,userId:string,headerImage:string, lastUpdated:string) {
        this.postId = postId;
        this.createdDate = createdDate;
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.headerImage = headerImage;
        this.lastUpdated = lastUpdated;
    }
}
let POSTS:Post[] = [];
POSTS.push(new Post(
        1,
        "2021-03-13",
        "First Test Post",
        "This is a test post, the first of its kind. Hopefully this sqlite3 database insert works!",
        "admin",
        "Josh.JPG",
        "2021-03-13"
));
POSTS.push(new Post(
    2,
    "2021-03-14",
    "Second Test Post",
    "Test of the Patch Post route/method",
    "TestUser3",
    "NoOp.png",
    "2021-03-21"
));
POSTS.push(new Post(
    3,
    "2021-03-14",
    "Second Test Post",
    "This is a test post, the SECOND of its kind. SQLite experiment worked",
    "TestUser3",
    "Josh1.JPG",
    "2021-03-14"
));
POSTS.push(new Post(
    4,
    "2021-03-14",
    "Third Test Post",
    "This is a test post, the THIRD of its kind. SQLite experiment worked",
    "TestUser6",
    "Josh1.JPG",
    "2021-03-21"
));
POSTS.push(new Post(
    5,
    "2021-03-21",
    "Test Post 3/21",
    "Testing testing 123",
    "TestUser6",
    "Josh1.JPG",
    "2021-03-21"
));
POSTS.push(new Post(
    6,
    "2021-03-21",
    "Hello World",
    "... 456",
    "TestUser6",
    "Josh1.JPG",
    "2021-03-21"
));
POSTS.push(new Post(
    7,
    "2021-03-21",
    "Hello World part 2",
    "Test of the Patch Post route/method",
    "TestUser6",
    "NoOp.png",
    "2021-03-21"
));
POSTS.push(new Post(
    8,
    "2021-03-22",
    "Hello World part 2",
    "... 789",
    "TestUser3",
    "Josh1.JPG",
    "2021-03-22"
));
export { POSTS }
