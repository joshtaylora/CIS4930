import express from "express";
import http from 'http';

let app = express();
const port: number = 8000;

app.get("/")

// route for GET method to return all users in the database
app.get("/Users")