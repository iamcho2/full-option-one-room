import express from "express";
import { home } from "../controllers/homeController";
import express from "express";
import routes from "../routes"

const homeRouter = express.Router();

homeRouter.net(routes.home, home)


export default homeRouter;