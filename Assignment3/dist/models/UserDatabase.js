"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDatabase = void 0;
class UserDatabase {
    constructor() {
        this.userArray = [];
        this.size = 0;
        this.records = {};
    }
    // method to add a new User object into the database 
    addUser(newUser) {
        // Declare the variable that will be returned to be either:
        //  - A User object if we were able to find the User
        //  - null if we were unable to find the user
        let addedUser = newUser;
        if (this.size === 0) {
            this.userArray.push(newUser);
            this.records[addedUser.userId] = { record: newUser };
            this.size++;
        }
        else if (newUser.userId.length === 0) {
            return null;
        }
        else {
            this.userArray.forEach(function (value) {
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
    findUser(userID) {
        let foundUser = null;
        this.userArray.forEach(function (value) {
            if (value.userId === userID) {
                foundUser = value;
            }
        });
        return foundUser;
    }
    indexOfUser(userID) {
        let userIndex = null;
        for (let i = 0; i < this.userArray.length; i++) {
            if (this.userArray[i].userId === userID) {
                userIndex = i;
                break;
            }
        }
        return userIndex;
    }
    deleteUser(userID) {
        let returnCondition = false;
        let userToDelete = this.indexOfUser(userID);
        if (userToDelete !== null) {
            this.userArray.splice(userToDelete, 1);
            this.size = this.userArray.length;
            returnCondition = true;
        }
        return returnCondition;
    }
    length() {
        return this.userArray.length;
    }
    getUser(userID) {
        if (this.records[userID].record.userId === userID) {
            return this.records[userID].record;
        }
        else {
            return null;
        }
    }
    updateUser(userID, fName, lName, email, pass) {
        let updateUser = this.findUser(userID);
        let userIndex = this.indexOfUser(userID);
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
        }
        else {
            return null;
        }
    }
    toJSON() {
        // let objString = JSON.stringify(Object.assign({}, this.records));
        // let objJSON = JSON.parse(objString);
        let array = [];
        let obj = {};
        this.userArray.forEach((item) => (obj[item.userId] = item.toJSON()));
        let stringArray = [];
        this.userArray.forEach(function (entry) {
            stringArray.push(JSON.parse(entry.toJSON()));
        });
        // let objString = JSON.stringify(this.userArray);
        return stringArray;
    }
}
exports.UserDatabase = UserDatabase;
const getKeyValue = (key) => (obj) => obj[key];
//# sourceMappingURL=UserDatabase.js.map