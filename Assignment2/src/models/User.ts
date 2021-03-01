import { stringify } from "querystring";

/*
	User object with constructor that will initialize all of 
	the necessary user class variables
*/
interface UserI {

  UserID: string;
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  _password: string;
}
class User implements UserI{
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
  public toJSON()
  {
    let objString = JSON.stringify(Object.assign({}, this));
    return objString; 
  }
}

export { User };
export { UserI };
