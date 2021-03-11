import express, { NextFunction } from "express";
import path from "path";
import { PostDatabase } from "../models/PostDatabase"; // <-- gets the PostDatabase class from the models dir
import { adminU } from "./UserRouter";
const postRouter = express.Router();

const imagesDir = path.join(process.cwd(), "images");

// initialize the Post Database that will hold all of the Post objects
let postDB = new PostDatabase();
// add some mock Posts to the database
postDB.createPost(
  "Admin Test Post 0",
  "Joshua Taylor CIS4930 Assignment3",
  adminU.userId,
  path.join(imagesDir, "Josh.JPG")
);

postDB.createPost(
  "Admin Test Post 1",
  "Test Post with postId=1",
  adminU.userId,
  path.join(imagesDir, "Josh.JPG")
);

/**
 * Default route for the Posts endpoint
 * Response = JSON array of all Posts in the posts database
 **/
postRouter.get("/", (req, res, next) => {
  // default posts route
  res.status(200).json(postDB.toJSON());
});

/**
 * GET post by ID
 */
postRouter.get("/:postId", (req, res, next) => {
  let postId: number = +req.params.postId;
  let getPostFromDB = postDB.retrievePostById(postId);
  if (getPostFromDB !== null) {
    res.status(200).json(JSON.parse(getPostFromDB.toJSON()));
  }
});
/**
 * POST method that creates a new Post and adds it to the database
 * Requires an Authentication token in the request header
 */
postRouter.post("/", (req, res, next) => {
  let postId = req.body.postId;
});

function authenticateToken(req:express.Request, res:express.Response, next:express.NextFunction) {
  const authorizationHeader = req.headers['Authorization'] as string;
  if (authorizationHeader !== undefined) {
    // get the token located after the 'Bearer: ' text
    const token = authorizationHeader.split(' ')[1];

  } else {
    // send the error code for unauthorized access
    res.status(401);
  }
  
}

export { postRouter };
