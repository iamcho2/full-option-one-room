import {images} from "../db"

export const home = (req, res) => {
    res.render("home", {images});    //home 탬플릿에 db images 전달
};