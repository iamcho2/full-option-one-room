import express from "express";
import { qna } from "../controllers/qnaController";
import routes from "../routes"

const qnaRouter = express.Router();

qnaRouter.get(routes.qna, qna);


export default qnaRouter;