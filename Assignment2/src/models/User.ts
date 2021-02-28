import { userArray } from "../routes/UserRoutes";

/*
	User object with constructor that will initialize all of 
	the necessary user class variables
*/
class User {
  UserID: string;
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  _password: string;
  constructor(
    UserID: string,
    FirstName: string,
    LastName: string,
    EmailAddress: string,
    _password: string
  ) {
    this.UserID = UserID;
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.EmailAddress = EmailAddress;
    this._password = _password;
  }
}

export { User };
