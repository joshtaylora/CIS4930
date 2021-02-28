"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
/*
    User object with constructor that will initialize all of
    the necessary user class variables
*/
class User {
    constructor(UserID, FirstName, LastName, EmailAddress, _password) {
        this.UserID = UserID;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.EmailAddress = EmailAddress;
        this._password = _password;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map