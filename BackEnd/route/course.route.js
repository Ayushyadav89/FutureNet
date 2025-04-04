import express from "express";
import { getCourse } from "../controller/course.controller.js";

const route = express.Router();

route.get("/", getCourse);

export default route;
