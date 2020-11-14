import express from "express";
import routes from "../routes"

export default homeRouter;


homeRouter.get(routes.home, (req, res) => res.send('user index'))