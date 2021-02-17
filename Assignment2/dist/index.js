"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
class User {
    constructor(UserID, FirstName, LastName, EmailAddress, _password) {
        this.UserID = UserID;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.EmailAddress = EmailAddress;
        this._password = _password;
    }
    /**
     * Used to query array of User objects for a specific user
     * @param userID the user ID of a user attempting to be retrieved
     */
    getUser(userID) {
        if (this.UserID === userID) {
            return this;
        }
        else {
            return null;
        }
    }
    toJSON() {
        return {
            UserID: this.UserID,
            FirstName: this.FirstName,
            LastName: this.LastName,
            EmailAddress: this.EmailAddress,
            _password: this._password,
        };
    }
}
exports.User = User;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    insertAtHead(data) {
        // initialize a new node
        const node = new Node(data);
        // if the head is null (list is empty), add this node as the head
        if (!this.head) {
            this.head = node;
        }
        else {
            // set the node as the first node in the LL
            this.head.prev = node;
            node.next = this.head;
            // point the head to this node
            this.head = node;
        }
        return node;
    }
    insertAtTail(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
        }
        else {
            const getTail = (node) => {
                return node.next ? getTail(node.next) : node;
            };
            const tail = getTail(this.head);
            node.prev = tail;
            tail.next = node;
        }
        return node;
    }
    deleteNode(node) {
        if (!node.prev) {
            // if this node is the current head, update the head to point to the next node
            this.head = node.next;
        }
        else {
            const prevNode = node.prev;
            prevNode.next = node.next;
        }
    }
    traverse() {
        const array = [];
        if (!this.head) {
            // if the LL is empty, return an empty array
            return array;
        }
        const addNodesToArray = (node) => {
            array.push(node.data);
            return node.next ? addNodesToArray(node.next) : array;
        };
        return addNodesToArray(this.head);
    }
    size() {
        return this.traverse().length;
    }
    search(comparator) {
        const checkNext = (node) => {
            if (comparator(node.data)) {
                return node;
            }
            return node.next ? checkNext(node.next) : null;
        };
        return this.head ? checkNext(this.head) : null;
    }
}
class UserArray {
    constructor() {
        this.UserArray = [];
        this.ArraySize = 0;
    }
    addUser(userID, fName, lName, email, pass) {
        let newUser = this.findUser(userID);
        // check to see if the findUser function returned a User object or not
        if (newUser === null) {
            newUser = new User(userID, fName, lName, email, pass);
            // push the new user to the list
            this.UserArray.push(newUser);
            this.ArraySize++;
        }
        else {
            // newUser should already be null if findUser returned null but just to be safe...
            newUser = null;
        }
        return newUser;
    }
    findUser(userID) {
        // for each User in the user array...
        this.UserArray.forEach((userElem) => {
            // if the current User obj being checked has the same UserID as the search string
            // then return the matching User obj
            if (userElem.UserID === userID) {
                // if we found the User object with the matching user id, return it
                return userElem;
            }
        });
        // if we were unable to find the User in the array given the provided UserID,
        // then we return null
        return null;
    }
    toJSON() {
        // let userArrayMap = new Map<number, User>();
        // let index:number = 0;;
        // this.UserArray.forEach(element => {
        // 	userArrayMap.set(index, element);
        // 	let numInd:number = +index;
        // 	index++;
        // });
        // return JSON.stringify([...userArrayMap]);
        return JSON.stringify(this.UserArray);
    }
}
const userLL = new LinkedList();
let fakeUser1 = new User("fakeUser1", "fakeFname1", "fakeLname1", "fakeName1@Email.com", "fakePassword1");
let fakeUser2 = new User("fakeUser2", "FakeFname2", "fakeLname2", "fakeName2@Email.com", "fakePassword2");
userLL.insertAtTail(fakeUser1);
userLL.insertAtTail(fakeUser2);
let userArray = new UserArray();
/**
 * Test array items
 */
userArray.addUser("fakeUser1", "FakeFname1", "fakeLname1", "fakeEmail1", "fakePass1");
userArray.addUser("fakeUser2", "FakeFname2", "fakeLname2", "fakeEmail2", "fakePass2");
// create the express application
let app = express_1.default();
let server = http_1.default.createServer(app);
app.use(body_parser_1.default.urlencoded());
/**
 * Endpoints for api
 */
app.get("/", (req, res, next) => {
    console.log(req.url);
    res.send('<h1>Help Page</h1><form method="POST"><input type="text" name="Name"/><input type="submit"/></form>');
});
app.post("/", (req, res, next) => {
    console.log(req.body);
    res.status(201).send("POST successfull");
});
app.get("/Users", (req, res, next) => {
    console.log(userArray.UserArray);
    // res.json(JSON.parse(JSON.stringify(userArray)));
    res.json(JSON.parse(userArray.toJSON()));
});
app.post("/User", (req, res, next) => {
    // grab the UserID string
    let userIDString = req.body.UserID;
    // if we were unable to find the user given the specified UserID, throw an error
    if (userArray.findUser(userIDString) === null) {
        // add the user to the UserArray object holding the array of users
        let addedUser = userArray.addUser(req.body.UserID, req.body.FirstName, req.body.LastName, req.body.EmailAdress, req.body._password);
        // send the 201 status message and the stringified version of the User JSON object
        res.status(201).json(JSON.parse(JSON.stringify(addedUser)));
    }
    else {
        res
            .status(404)
            .send(`Error: User with UserID = ${userIDString} already exists. Please chose a new UserID and try again`);
    }
});
app.get("/User/:ID", (req, res, next) => {
    let id = req.params.ID;
    let user = userArray.findUser(id);
    if (user === null) {
        res.status(404).send(`User with id ${id} not found`);
        return;
    }
    res.status(200).send(user.toJSON());
});
server.listen(3000);
//# sourceMappingURL=index.js.map