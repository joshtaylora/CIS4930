import { User } from "./User";

class UserDatabase {
  private userArray: Array<User>;
  private size: number;
  private records: { [key: string]: { record: User } };
  public constructor() {
    this.userArray = [];
    this.size = 0;
    this.records = {};
  }

  public addUser(newUser: User): User | null {
    let addedUser: User | null = newUser;
    if (this.size === 0) {
      this.userArray.push(newUser);
      this.records[addedUser.userId] = { record: newUser };
      this.size++;
    } else if (newUser.userId.length === 0) {
      return null;
    } else {
      this.userArray.forEach(function (value: User) {
        // if we find a user with a matching userId,
        // we need to return null and not add the user to the DB
        if (value.userId === newUser.userId) {
          addedUser = null;
          return addedUser;
        }
      });
    }
    this.userArray.push(addedUser);
    this.records[addedUser.userId] = { record: addedUser };
    this.size++;
    return addedUser;
  }
  public findUser(userID: string): User | null {
    let foundUser: User | null = null;
    this.userArray.forEach(function (value: User) {
      if (value.userId === userID) {
        foundUser = value;
      }
    });
    return foundUser;
  }

  public indexOfUser(userID: string): number | null {
    let userIndex: number | null = null;
    for (let i = 0; i < this.userArray.length; i++) {
      if (this.userArray[i].userId === userID) {
        userIndex = i;
        break;
      }
    }
    return userIndex;
  }
  public deleteUser(userID: string): boolean {
    let returnCondition: boolean = false;
    let userToDelete: number | null = this.indexOfUser(userID);
    if (userToDelete !== null) {
      this.userArray.splice(userToDelete, 1);
      this.size = this.userArray.length;
      returnCondition = true;
    }
    return returnCondition;
  }
  public length(): number {
    return this.userArray.length;
  }
  public getUser(userID: string): User | null {
    if (this.records[userID].record.userId === userID) {
      return this.records[userID].record;
    } else {
      return null;
    }
  }
  public updateUser(
    userID: string,
    fName: string | null,
    lName: string | null,
    email: string | null,
    pass: string | null
  ): User | null {
    let updateUser: User | null = this.findUser(userID);
    let userIndex: number | null = this.indexOfUser(userID);

    if (updateUser !== null && userIndex !== null) {
      // if we were able to find the user in the database
      if (fName !== null) {
        this.userArray[userIndex].firstName = fName;
      }
      if (lName !== null) {
        this.userArray[userIndex].lastName = lName;
      }
      if (email !== null) {
        this.userArray[userIndex].emailAddress = email;
      }
      if (pass !== null) {
        this.userArray[userIndex].password = pass;
      }
      return this.userArray[userIndex];
    } else {
      return null;
    }
  }
  public toJSON() {
    // let objString = JSON.stringify(Object.assign({}, this.records));
    // let objJSON = JSON.parse(objString);
    let array = [];
    let obj: UserRecord = {};
    this.userArray.forEach((item) => (obj[item.userId] = item.toJSON()));
	let stringArray = [] as JSON[];
	this.userArray.forEach(function (entry) {
		stringArray.push(JSON.parse(entry.toJSON()));
	})
    // let objString = JSON.stringify(this.userArray);
    return stringArray;
  }
}

const getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) =>
  obj[key];
interface UserRecord {
  [key: string]: string;
}

export { UserDatabase };
