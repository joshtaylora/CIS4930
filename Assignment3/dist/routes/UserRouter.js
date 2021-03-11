"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDB = exports.userRouter = exports.adminU = void 0;
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// user import's
const User_1 = require("../models/User");
const UserDatabase_1 = require("../models/UserDatabase");
//* =================================================================================== */
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
let sqlite = require("../modules/sqlite3");
let userDB = new UserDatabase_1.UserDatabase();
exports.userDB = userDB;
let adminU = new User_1.User("admin", "Josh", "Taylor", "JoshuaTaylorA@gmail.com", 'n4559fv[slmw21":23&jahdfae');
exports.adminU = adminU;
userDB.addUser(adminU);
userDB.addUser(new User_1.User("fakeUser1", "fakeFname1", "fakeLname1", "fakeUser1@Email.com", "fakePassword1"));
userDB.addUser(new User_1.User("fakeUser2", "fakeFname2", "fakeLname2", "fakeUser2@Email.com", "fakePassword2"));
userRouter.get("/", (req, res, next) => {
    console.log(userDB.toJSON());
    res.type("json").send(userDB.toJSON());
});
/**
 * Method: GET
 * URL: /User/
 * Description: reroutes a user from the search form to the /User/{ID} get request
 */
userRouter.get("/", (req, res, next) => {
    let id = req.query.userId;
    // redirect the user to the /User/{ID}
    res.redirect(`/User/${id}`);
    // send the request to the next route which will be the /User/{ID} route
    next();
});
/**
 * Method: GET
 * URL: /User/
 * Description: load the create user form
 */
userRouter.get("/Create", (req, res, next) => {
    res.render("create-user");
});
/**
 * Method: POST
 * URL: /User/
 * Description: creates a new Record in the database
 */
userRouter.post("/", (req, res, next) => {
    // grab the userId string
    let userIDString = req.body.userId;
    console.log(`CREATE USER userId: ${userIDString}`);
    // create new User object using the specified parameters
    let addedUser = userDB.addUser(new User_1.User(req.body.userId, req.body.firstName, req.body.lastName, req.body.emailAddress, req.body.password));
    // if a User with the specified userId does not already exist, create one
    if (addedUser !== null) {
        sqlite.addUser(req.body.userId, req.body.firstName, req.body.lastName, req.body.emailAddress, req.body.password);
        res.type("json").status(201).json(JSON.parse(addedUser.toJSON()));
    }
    else {
        console.log("User could not be added to database");
        // send the 201 status message and the stringified version of the User JSON object
        res
            .status(409)
            .send("User could not be added to the database successfully");
    }
    console.log(userDB.toJSON());
});
/**
 * Login Endpoint
 * Method: GET
 * URL: /Users/Login/{userId}/{Password}
 * Description: login endpoint that verifies the user's authenticity
 */
userRouter.get("/Login/:userId/:Password", (req, res, next) => {
    let userLogin = userDB.findUser(req.params.userId);
    if (userLogin !== null) {
        console.log(`user's password: ${userLogin.password}, password entered: ${req.params.Password}`);
        // let hash = userLogin.password;
        bcrypt_1.default.compare(req.params.Password, userLogin.password, function (err, result) {
            if (result && userLogin) {
                // generate a jwt token for the authorization token
                let token = jsonwebtoken_1.default.sign({ userId: userLogin.userId, firstName: userLogin.firstName }, "Mz8YXF6ZxLIAUX_mTJ-SwTLm-QRLwPLLdMoW3XKhzag", { expiresIn: 100, subject: userLogin.userId });
                // returns a cookie that has the token so you don't need to include the headers
                res.cookie("AuthToken", token);
                res.status(200).send(token);
            }
            else {
                res.status(401).send({ message: "Invalid Username and Password" });
            }
        });
    }
    else {
        res.status(401).send({ message: "User could not be found in the system" });
    }
});
/**
 * Method: DELETE
 * URL: /User/delete
 */
userRouter.delete("/:userId", (req, res, next) => {
    if (req.headers.authorization) {
        try {
            /* Mz8YXF6ZxLIAUX_mTJ-SwTLm-QRLwPLLdMoW3XKhzag */
            // SPlit the authorization token since the token will have 'Bearer: ' before the token
            let tokenPayload = jsonwebtoken_1.default.verify(req.headers.authorization.split(" ")[1].toString(), "Mz8YXF6ZxLIAUX_mTJ-SwTLm-QRLwPLLdMoW3XKhzag");
            console.log(tokenPayload);
            // Check if the token's userId is equal to the userId for the user attempting to be deleted
            if (tokenPayload.userId === req.params.userId) {
                userDB.deleteUser(req.params.userId);
                res.status(200).send("User deleted");
            }
            else {
                res.status(401).send({
                    message: "Error: you can only delete the user that is logged in.",
                });
            }
        }
        catch (ex) { }
    }
});
userRouter.post("/delete", (req, res, next) => {
    console.log(req.headers.token);
    let id = req.body.userId;
    // delete user
    let result = userDB.deleteUser(id);
    if (result === true) {
        res
            .status(200)
            .type("json")
            .send({ message: "User succesffully deleted from the database" });
    }
    else {
        res.status(404).json({
            message: `Error: user with userId = ${id} not found in the database and could not be deleted`,
            UserDatabase: `${userDB.toJSON()}`,
        });
    }
});
/**
 * Method: GET
 * URL: /User/Search
 * Description: Used by pug to load the form that allows a user to graphically
 * input userId and performa a search for that User in the db
 */
userRouter.get("/Search", (req, res, next) => {
    console.log(req.body);
    res.render("get-user");
});
userRouter.get("/Delete", (req, res, next) => {
    console.log(req.body);
    res.render("delete-user");
});
/**
 * Method: GET
 * URL: /User/{ID}
 * Description: used to retrieve a specific User record's fields
 */
userRouter.get("/:ID", (req, res, next) => {
    let id = req.params.ID;
    console.log(`ID: ${id}`);
    let user = userDB.findUser(id);
    if (user === null) {
        res.status(404).send(`User with id ${id} not found`);
        return;
    }
    // send the 200 OK since we found the user
    res
        .status(200)
        .type("json")
        .send(JSON.parse(JSON.stringify(user)));
    console.log(JSON.parse(JSON.stringify(user)));
});
userRouter.post("/delete", (req, res, next) => {
    let id = req.body.userId;
    // delete user
    let result = userDB.deleteUser(id);
    if (result === true) {
        res
            .status(200)
            .type("json")
            .send({ message: "User succesffully deleted from the database" });
    }
    else {
        res.status(404).json({
            message: `Error: user with userId = ${id} not found in the database and could not be deleted`,
            UserDatabase: `${userDB.toJSON()}`,
        });
    }
});
userRouter.patch("/:ID", (req, res, next) => {
    let id = req.params.ID;
    let fname = null;
    let lname = null;
    let email = null;
    let pass = null;
    if (req.body.firstName === undefined) {
        fname = null;
    }
    else {
        fname = req.body.firstName;
    }
    if (req.body.lastName === undefined) {
        lname = null;
        //console.log("UNDEFINED LAST NAME");
    }
    else {
        lname = req.body.lastName;
    }
    if (req.body.emailAddress === undefined) {
        email = null;
    }
    else {
        email = req.body.emailAddress;
    }
    if (req.body.password === undefined) {
        pass = null;
    }
    else {
        pass = req.body.password;
    }
    let updateUser = userDB.updateUser(id, fname, lname, email, pass);
    // ensure that we were able to update the user
    if (updateUser !== null) {
        res.status(200).type("json").send(`${updateUser.toJSON()}`);
        console.log(`UPDATED USER\n${updateUser.toJSON()}`);
    }
    else {
        res.status(404).send({ message: `User [${id}] unable to be updated` });
        console.log(`UNABLE TO UPDATE USER\nUSERID:${id}`);
    }
});
/**
 * Method: delete
 * URL: /User/{ID}
 */
userRouter.delete("/:ID", (req, res, next) => {
    let id = req.params.ID;
    // delete user
    let result = userDB.deleteUser(id);
    if (result === true) {
        res
            .status(200)
            .json({ message: "User succesffully deleted from the database" });
    }
    else {
        res.status(404).json({
            message: `Error: user with userId = ${id} not found in the database and could not be deleted`,
        });
    }
});
//# sourceMappingURL=UserRouter.js.map