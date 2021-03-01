"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formsRouter = void 0;
const express_1 = __importDefault(require("express"));
let formsRouter = express_1.default.Router();
exports.formsRouter = formsRouter;
/**
 * Method: GET
 * URL: /Form/Create/
 * Description: load the create user form
 */
formsRouter.get("/Create", (req, res, next) => {
    res.render('create-user');
});
/**
 * Method: GET
 * URL: /Form/Search
 * Description: Used by pug to load the form that allows a user to graphically
 * input UserID and performa a search for that User in the db
 */
formsRouter.get("/Search", (req, res, next) => {
    console.log(req.body);
    res.render('get-user');
});
/**

* Method: GET
 * URL: /Form/Search
 * Description: reroutes a user from the search form to the /User/{ID} get request
 */
formsRouter.get('/Search', (req, res, next) => {
    let id = req.query.UserID;
    req.url = `/User/${id}`;
    // redirect the user to the /User/{ID}
    res.redirect(`/User/${id}`);
    // send the request to the next route which will be the /User/{ID} route
    next();
});
formsRouter.get("/Delete", (req, res, next) => {
    console.log(req.body);
    res.render('delete-user');
});
//# sourceMappingURL=FormRoutes.js.map