import { stringify } from "querystring";

/*
	User object with constructor that will initialize all of 
	the necessary user class variables
*/

class User{
  userId: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  constructor(
    UserID: string,
    FirstName: string,
    LastName: string,
    EmailAddress: string,
    password: string
  ) {
    this.userId = UserID;
    this.firstName = FirstName;
    this.lastName = LastName;
    this.emailAddress = EmailAddress;
    this.password = password;
  }

  public ValidatePassword(password:string):boolean {
    // should validate the password and return true if it was correct, false otherwise
    return false;
  }

  public toJSON()
  {
    let objString = JSON.stringify(Object.assign({}, this));
    return objString; 
  }
}

export { User };
