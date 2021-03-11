"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
const path_1 = __importDefault(require("path"));
let dbString = path_1.default.join(process.cwd(), 'assignment3DB.db');
let db = new sqlite3_1.default.Database(dbString);
module.exports = {
    getUser: function (userId) {
        return db.run(`SELECT * FROM Users WHERE userId = "${userId}"`);
    },
    getUsers: function (callback) {
        db.all('SELECT * FROM Users', function (err, res) {
            callback(res);
        });
    },
    getPosts: function (callback) {
        db.all('SELECT * FROM Posts', function (err, res) {
            callback(res);
        });
    },
    addUser: function (userId, firstName, lastName, emailAddress, password) {
        return db.run('INSERT INTO Users(userId, firstName, lastName, emailAddress, password) VALUES (?, ?, ?, ?, ?)', [userId, firstName, lastName, emailAddress, password]);
    },
    deleteUser: function (userId, firstName, lastName, emailAddress, password, callback) {
        db.run('DELETE FROM Users WHERE userId=$userId', {
            $userId: userId
        }, function () {
            callback();
        });
    },
};
//# sourceMappingURL=sqlite3.js.map