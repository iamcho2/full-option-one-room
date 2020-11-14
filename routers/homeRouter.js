import express from "express";
import { home } from "../controllers/homeController";
import express from "express";
import routes from "../routes"

const homeRouter = express.Router();

homeRouter.get(routes.home, home)


export default homeRouter;