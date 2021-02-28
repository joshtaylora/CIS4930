import express from "express";
import { User } from "../models/User";

function search(userID: string): boolean {
  let searchResult: boolean = false;
  userArray.forEach(function (value: User) {
    if (value.UserID === userID) {
      searchResult = true;
    } else {
      searchResult = false;
    }
  });
  return searchResult;
}

function findUser(userID: string): User | null {
  let returnUser: User | null = null;
  userArray.forEach(function (value: User) {
    if (value.UserID === userID) {
      returnUser = value;
    }
  });
  return returnUser;
}

const userRouter = express.Router();

let userArray: User[] = [];
// push an initial user object into the user array for testing
userArray.push(
  new User(
    "fakeUser1",
    "fakeFname1",
    "fakeLname1",
    "fakeUser1@Email.com",
    "fakePassword1"
  )
);
// push another fake user object into the array
userArray.push(
  new User(
    "fakeUser2",
    "fakeFname2",
    "fakeLname2",
    "fakeUser2@Email.com",
    "fakePassword2"
  )
);

userRouter.post("/", (req, res, next) => {
  // grab the UserID string
  let userIDString: string = req.body.UserID;
  // creat new User object using the specified parameters
  let addedUser: User = new User(
    req.body.UserID,
    req.body.FirstName,
    req.body.LastName,
    req.body.EmailAddress,
    req.body._password
  );
  // if we were unable to find the user given the specified UserID, throw an error
  if (!search(userIDString)) {
    // add the user to the UserArray object holding the array of users
    userArray.push(addedUser);
    // send the 201 status message and the stringified version of the User JSON object
	console.log('Response 201, user added to user array');
    res.status(201).send(JSON.parse(JSON.stringify(addedUser)));
  } else {
	console.log('response 404 user already exists in array');
    res
      .status(404)
      .send(
        `Error: User with UserID = ${userIDString} already exists. Please chose a new UserID and try again`
      );
  }
  userArray.forEach(function (value) {
    console.log(value);
  });
});

userRouter.get("/:ID", (req, res, next) => {
  let id = req.params.ID;
  let user: User | null = findUser(id);
  if (user === null) {
    res.status(404).send(`User with id ${id} not found`);
    return;
  }
  // send the 200 OK since we found the user
  res.status(200).send(JSON.parse(JSON.stringify(user)));
});

userRouter.delete("/:ID", (req, res, next) =>
{
  let id = req.params.ID;
  let user: User | null = findUser(id);
  if (user === null)
  {
    res.status(404).send(`User ${id} could not be deleted as it does not exist.`);
  }
  else
  {
    // remove the user from the user array
  }
});

export { userRouter };
export { userArray };
