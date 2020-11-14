import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 4000;


app.use(morgan("dev"));
app.use(helmet())
app.use(bodyParser.json());
app.use(cookieParser());

function handleListening(){
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);