import express from "express";
import routes from "../routes"

export default qnaRouter;

qnaRouter.get(routes.qna, (req, res) => res.send('user index'));