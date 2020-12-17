import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import homeRouter from "./routers/homeRouter";
import qnaRouter from "./routers/qnaRouter";
import routes from "./routes";



const app = express();

const handleListening = () => console.log(`Listening on: https://localhost:${PORT}`);

const handleHome = (req, res) => res.send("hello from home!");
const handleProfile = (req, res) => res.send("You are on my profile");

app.set('view engine', "pug");
app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, homeRouter);
app.use(routes.qna, qnaRouter);

export default app; 