"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
/*
    User object with constructor that will initialize all of
    the necessary user class variables
*/
class User {
    constructor(UserID, FirstName, LastName, EmailAddress, password) {
        this.userId = UserID;
        this.firstName = FirstName;
        this.lastName = LastName;
        this.emailAddress = EmailAddress;
        this.password = password;
    }
    ValidatePassword(password) {
        // should validate the password and return true if it was correct, false otherwise
        return false;
    }
    toJSON() {
        let objString = JSON.stringify(Object.assign({}, this));
        return objString;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map