"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const PostDatabase_1 = require("../models/PostDatabase"); // <-- gets the PostDatabase class from the models dir
const UserRouter_1 = require("./UserRouter");
const postRouter = express_1.default.Router();
exports.postRouter = postRouter;
const imagesDir = path_1.default.join(process.cwd(), "images");
// initialize the Post Database that will hold all of the Post objects
let postDB = new PostDatabase_1.PostDatabase();
// add some mock Posts to the database
postDB.createPost("Admin Test Post 0", "Joshua Taylor CIS4930 Assignment3", UserRouter_1.adminU.userId, path_1.default.join(imagesDir, "Josh.JPG"));
postDB.createPost("Admin Test Post 1", "Test Post with postId=1", UserRouter_1.adminU.userId, path_1.default.join(imagesDir, "Josh.JPG"));
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
    let postId = +req.params.postId;
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
function authenticateToken(req, res, next) {
    const authorizationHeader = req.headers['Authorization'];
    if (authorizationHeader !== undefined) {
        // get the token located after the 'Bearer: ' text
        const token = authorizationHeader.split(' ')[1];
    }
    else {
        // send the error code for unauthorized access
        res.status(401);
    }
}
//# sourceMappingURL=PostRouter.js.map