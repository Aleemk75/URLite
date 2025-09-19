import express from "express"
 
const Router = express.Router();
import {home, handleNcreateurl, redirectUrl } from "../controllers/url.controller.js";

Router.get("/" ,home)
Router.post("/url",handleNcreateurl);
Router.get("/:id",redirectUrl);

export default Router;