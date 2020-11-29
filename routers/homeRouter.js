import express from "express";
import { home, result } from "../controllers/homeController";
import routes from "../routes"

const homeRouter = express.Router();

homeRouter.get(routes.home, home)
homeRouter.get(routes.result, result)


export default homeRouter;