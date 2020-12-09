import express from "express";
import { home, result_enfj, result_enfj_book, result_enfj_cafe, result_enfp, result_enfp_book, result_enfp_cafe, result_entj, result_entj_book, result_entj_cafe, result_entp, result_entp_book, result_entp_cafe, result_esfj, result_esfj_book, result_esfj_cafe, result_esfp, result_esfp_book, result_esfp_cafe, result_estj, result_estj_book, result_estj_cafe, result_estp, result_estp_book, result_estp_cafe, result_infj, result_infj_book, result_infj_cafe, result_infp, result_infp_book, result_infp_cafe, result_intj, result_intj_book, result_intj_cafe, result_intp, result_intp_book, result_intp_cafe, result_isfj, result_isfj_book, result_isfj_cafe, result_isfp, result_isfp_book, result_isfp_cafe, result_istj, result_istj_book, result_istj_cafe, result_istp, result_istp_book, result_istp_cafe   } from "../controllers/homeController";
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

//cafe_cafe
homeRouter.get(routes.result_enfj_cafe, result_enfj_cafe)
homeRouter.get(routes.result_enfp_cafe, result_enfp_cafe)
homeRouter.get(routes.result_entj_cafe, result_entj_cafe)
homeRouter.get(routes.result_entp_cafe, result_entp_cafe)
homeRouter.get(routes.result_esfj_cafe, result_esfj_cafe)
homeRouter.get(routes.result_esfp_cafe, result_esfp_cafe)
homeRouter.get(routes.result_estj_cafe, result_estj_cafe)
homeRouter.get(routes.result_estp_cafe, result_estp_cafe)

homeRouter.get(routes.result_infj_cafe, result_infj_cafe)
homeRouter.get(routes.result_infp_cafe, result_infp_cafe)
homeRouter.get(routes.result_intj_cafe, result_intj_cafe)
homeRouter.get(routes.result_intp_cafe, result_intp_cafe)
homeRouter.get(routes.result_isfj_cafe, result_isfj_cafe)
homeRouter.get(routes.result_isfp_cafe, result_isfp_cafe)
homeRouter.get(routes.result_istj_cafe, result_istj_cafe)
homeRouter.get(routes.result_istp_cafe, result_istp_cafe)

//book
homeRouter.get(routes.result_enfj_book, result_enfj_book)
homeRouter.get(routes.result_enfp_book, result_enfp_book)
homeRouter.get(routes.result_entj_book, result_entj_book)
homeRouter.get(routes.result_entp_book, result_entp_book)
homeRouter.get(routes.result_esfj_book, result_esfj_book)
homeRouter.get(routes.result_esfp_book, result_esfp_book)
homeRouter.get(routes.result_estj_book, result_estj_book)
homeRouter.get(routes.result_estp_book, result_estp_book)

homeRouter.get(routes.result_infj_book, result_infj_book)
homeRouter.get(routes.result_infp_book, result_infp_book)
homeRouter.get(routes.result_intj_book, result_intj_book)
homeRouter.get(routes.result_intp_book, result_intp_book)
homeRouter.get(routes.result_isfj_book, result_isfj_book)
homeRouter.get(routes.result_isfp_book, result_isfp_book)
homeRouter.get(routes.result_istj_book, result_istj_book)
homeRouter.get(routes.result_istp_book, result_istp_book)


export default homeRouter;