// Please don't change the pre-written code
// Import the necessary modules here
import { renderBlogForm } from "./src/controllers/blog.controller.js";
import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import { Server } from "http";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);

// Write your code here
app.get("/createblog", renderBlogForm)

export default app;