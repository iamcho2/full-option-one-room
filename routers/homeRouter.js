import express from "express";
import { home, result_enfj, result_enfp, result_entj, result_entp, result_esfj, result_esfp, result_estj, result_estp, result_infj, result_infp, result_intj, result_intp, result_isfj, result_isfp, result_istj, result_istp   } from "../controllers/homeController";
import routes from "../routes"

const homeRouter = express.Router();

homeRouter.get(routes.home, home)
homeRouter.get(routes.result_enfj, result_enfj)
homeRouter.get(routes.result_enfp, result_enfp)
homeRouter.get(routes.result_entj, result_entj)
homeRouter.get(routes.result_entp, result_entp)
homeRouter.get(routes.result_esfj, result_esfj)
homeRouter.get(routes.result_esfp, result_esfp)
homeRouter.get(routes.result_estj, result_estj)
homeRouter.get(routes.result_estp, result_estp)

homeRouter.get(routes.result_infj, result_infj)
homeRouter.get(routes.result_infp, result_infp)
homeRouter.get(routes.result_intj, result_intj)
homeRouter.get(routes.result_intp, result_intp)
homeRouter.get(routes.result_isfj, result_isfj)
homeRouter.get(routes.result_isfp, result_isfp)
homeRouter.get(routes.result_istj, result_istj)
homeRouter.get(routes.result_istp, result_istp)


export default homeRouter;