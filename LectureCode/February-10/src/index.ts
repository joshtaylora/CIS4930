import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';

// class for the User objects that will be stored in "database"
class User
{
	UserID: string;
	FirstName: string;
	LastName: string;
	EmailAddress: string;
	_password: string;
	constructor(
		UserID:string, 
		FirstName:string, 
		LastName:string,
		EmailAddress:string,
		_password:string)
		{
			this.UserID = UserID;
			this.FirstName = FirstName;
			this.LastName = LastName;
			this.EmailAddress = EmailAddress;
			this._password = _password;
		}
}

let app = express();
let server = http.createServer(app);
const port: number = 8000;


// global array of Users
let userArray: User[] = [];

app.use(bodyParser.urlencoded);

// default route, links to help page
app.get("/")

app.post("/User", (req, res, next) =>
{
	res.status(200).send('<form method="POST"><input type="text" name="Name"')
});

// route for GET method to return all users in the database
app.get("/Users", (req, res, next) =>
{
	// return an array of all users in the database
	console.log(req.body);
	res.send();
});

server.listen(port);