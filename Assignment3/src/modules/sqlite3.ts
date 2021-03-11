import sqlite3 from 'sqlite3';
import path from 'path';

let dbString:string = path.join(process.cwd(), 'assignment3DB.db');

let db = new sqlite3.Database(dbString);
module.exports = {
    getUser: function(userId:string) {
        return db.run(`SELECT * FROM Users WHERE userId = "${userId}"`);
    },
    getUsers: function(callback:any) {
        db.all('SELECT * FROM Users', function(err:any, res:any) {
            callback(res);
        });
    },
    getPosts: function(callback:any) {
        db.all('SELECT * FROM Posts', function(err:any, res:any) {
            callback(res);
        });
    },
    addUser: function(userId:string, firstName:string, lastName:string, emailAddress:string, password:string) {
        return db.run('INSERT INTO Users(userId, firstName, lastName, emailAddress, password) VALUES (?, ?, ?, ?, ?)',
        [ userId, firstName, lastName, emailAddress, password]);
    },
    deleteUser: function(userId:string, firstName:string, lastName:string, emailAddress:string, password:string, callback:any) {
        db.run('DELETE FROM Users WHERE userId=$userId', {
            $userId: userId
        }, function() {
            callback();
        });
    },
};