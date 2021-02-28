"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userArray = exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const User_1 = require("../models/User");
function search(userID) {
    let searchResult = false;
    userArray.forEach(function (value) {
        if (value.UserID === userID) {
            searchResult = true;
        }
        else {
            searchResult = false;
        }
    });
    return searchResult;
}
function findUser(userID) {
    let returnUser = null;
    userArray.forEach(function (value) {
        if (value.UserID === userID) {
            returnUser = value;
        }
    });
    return returnUser;
}
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
let userArray = [];
exports.userArray = userArray;
// push an initial user object into the user array for testing
userArray.push(new User_1.User("fakeUser1", "fakeFname1", "fakeLname1", "fakeUser1@Email.com", "fakePassword1"));
// push another fake user object into the array
userArray.push(new User_1.User("fakeUser2", "fakeFname2", "fakeLname2", "fakeUser2@Email.com", "fakePassword2"));
userRouter.post("/", (req, res, next) => {
    // grab the UserID string
    let userIDString = req.body.UserID;
    // creat new User object using the specified parameters
    let addedUser = new User_1.User(req.body.UserID, req.body.FirstName, req.body.LastName, req.body.EmailAddress, req.body._password);
    // if we were unable to find the user given the specified UserID, throw an error
    if (!search(userIDString)) {
        // add the user to the UserArray object holding the array of users
        userArray.push(addedUser);
        // send the 201 status message and the stringified version of the User JSON object
        console.log('Response 201, user added to user array');
        res.status(201).send(JSON.parse(JSON.stringify(addedUser)));
    }
    else {
        console.log('response 404 user already exists in array');
        res
            .status(404)
            .send(`Error: User with UserID = ${userIDString} already exists. Please chose a new UserID and try again`);
    }
    userArray.forEach(function (value) {
        console.log(value);
    });
});
userRouter.get("/:ID", (req, res, next) => {
    let id = req.params.ID;
    let user = findUser(id);
    if (user === null) {
        res.status(404).send(`User with id ${id} not found`);
        return;
    }
    // send the 200 OK since we found the user
    res.status(200).send(JSON.parse(JSON.stringify(user)));
});
//# sourceMappingURL=UserRoutes.js.map