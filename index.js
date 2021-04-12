import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";

const app = express();

const PORT = 4000;
 
const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => {
    res.send("Hi from home!");
}
const handleProfile = (req, res) => res.send('You are a my profile!');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);