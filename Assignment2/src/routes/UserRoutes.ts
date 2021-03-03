import express from "express";
import path from "path";
import { User } from "../models/User";
import { UserDatabase } from "../models/UserDatabase";
//* =================================================================================== */
const userRouter = express.Router();

let userDB: UserDatabase = new UserDatabase();

userDB.addUser(
  new User(
    "fakeUser1",
    "fakeFname1",
    "fakeLname1",
    "fakeUser1@Email.com",
    "fakePassword1"
  )
);

userDB.addUser(
  new User(
    "fakeUser2",
    "fakeFname2",
    "fakeLname2",
    "fakeUser2@Email.com",
    "fakePassword2"
  )
);

/**
 * Method: GET
 * URL: /User/
 * Description: reroutes a user from the search form to the /User/{ID} get request
 */
userRouter.get("/", (req, res, next) => {
  let id = req.query.UserID;
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
  // grab the UserID string
  let userIDString: string = req.body.UserID;
  // create new User object using the specified parameters
  let addedUser: User | null = userDB.addUser(
    new User(
      req.body.UserID,
      req.body.FirstName,
      req.body.LastName,
      req.body.EmailAddress,
      req.body._password
    )
  );
  // if a User with the specified UserID does not already exist, create one
  if (addedUser !== null) {
    res
      .type("json")
      .status(201)
      .json(JSON.parse(addedUser.toJSON()));
  } else{
    console.log("User could not be added to database");
    // send the 201 status message and the stringified version of the User JSON object
    res
      .status(409)
      .send("User could not be added to the database successfully");
  }
  console.log(userDB.toJSON);
});

/**
 * Method: GET
 * URL: /User/Search
 * Description: Used by pug to load the form that allows a user to graphically
 * input UserID and performa a search for that User in the db
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
  let id: string = req.params.ID;
  console.log(`ID: ${id}`);
  let user: User | null = userDB.findUser(id);
  if (user === null) {
    res.status(404).send(`User with id ${id} not found`);
    return;
  }
  // send the 200 OK since we found the user
  res.status(200).type('json').send(JSON.parse(JSON.stringify(user)));
  console.log(JSON.parse(JSON.stringify(user)));
});

userRouter.post("/delete", (req, res, next) => {
  let id = req.body.UserID;
  // delete user
  let result: boolean = userDB.deleteUser(id);
  if (result === true) {
    res.status(200).type('json').send({message:"User succesffully deleted from the database"});
  } else {
    res.status(404).json({
      message: `Error: user with UserID = ${id} not found in the database and could not be deleted`,
      UserDatabase: `${userDB.toJSON()}`,
    });
  }
});

userRouter.patch("/:ID", (req, res, next) => {
  let id = req.params.ID;
  let fname: string | null = null;
  let lname: string | null = null;
  let email: string | null = null;
  let pass: string | null = null;

  if (req.body.FirstName === undefined) {
    fname = null;
  } else {
    fname=req.body.FirstName;
  }
  if (req.body.LastName === undefined) {
    lname = null;
    //console.log("UNDEFINED LAST NAME");
  } else {
    lname = req.body.LastName;
  }
  if (req.body.EmailAddress === undefined) {
    email = null;
  } else {
    email = req.body.EmailAddress;
  }
  if (req.body._password === undefined) {
    pass = null;
  } else {
    pass = req.body._password;
  }
  let updateUser: User | null = userDB.updateUser(
    id,
    fname,
    lname,
    email,
    pass
  );
  // ensure that we were able to update the user
  if (updateUser !== null) {
    res.status(200).type('json').send(`${updateUser.toJSON()}`);
    console.log(`UPDATED USER\n${updateUser.toJSON()}`);
  } else {
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
  let result: boolean = userDB.deleteUser(id);
  if (result === true) {
    res
      .status(200)
      .json({ message: "User succesffully deleted from the database" });
  } else {
    res.status(404).json({
      message: `Error: user with UserID = ${id} not found in the database and could not be deleted`,
    });
  }
});

export { userRouter };
export { userDB };
