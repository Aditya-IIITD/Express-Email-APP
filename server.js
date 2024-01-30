import express from "express";
import path from "path";
import FormController from "./src/Controller/form.controller.js";
import { EmailMiddleware } from "./src/Middlewares/email.middleware.js";
import ejsLayouts from "express-ejs-layouts";

const server = express();

server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "View"));
server.use(ejsLayouts);
server.use(express.urlencoded({ extended: true }));

const formController = new FormController();

server.get("/", formController.getForm);
server.get("/goback", formController.goBack);
server.post("/", EmailMiddleware, formController.postForm);
server.use(express.static("src/View"));

server.listen(3000, () => {
  console.log("Server is listening at 3000");
});
