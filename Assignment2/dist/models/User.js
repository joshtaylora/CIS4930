"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(UserID, FirstName, LastName, EmailAddress, _password) {
        this.UserID = UserID;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.EmailAddress = EmailAddress;
        this._password = _password;
    }
    toJSON() {
        let objString = JSON.stringify(Object.assign({}, this));
        return objString;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map