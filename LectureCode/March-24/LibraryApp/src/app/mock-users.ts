export class User {
  userId: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  constructor(
    userId: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    password: string
  ) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.password = password;
  }
  public toJSON() {
    return JSON.stringify(Object.assign({}, {userId: this.userId, firstName: this.firstName, lastName: this.lastName, emailAddress: this.emailAddress}));
}
 
}

let USERS: User[] = [];
USERS.push(
    new User(
        'admin',
        'Josh',
        'Taylor',
        'JoshuaTaylor@gmail.com',
        'asvnv8))&(ui3nv1cvwjfd'
    )
);

USERS.push(
    new User(
        'testUser1',
        'Robbie',
        'Lawlor',
        'TestUser1@gmail.com',
        'TestUser1Pass'
    )
);

USERS.push(
    new User(
        'testUser2',
        'Jon',
        'Jones',
        'TestUser2@gmail.com',
        'TestUser2Pass'
    )
);

export { USERS }