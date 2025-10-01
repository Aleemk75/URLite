import express from "express";
import { connectdb } from "./utils/connectDB.js";
import path from 'path';
import { fileURLToPath } from 'url';
import "dotenv/config";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const app = express();

connectdb()
    .then(() => {
        console.log("connected to DB");

    })
    .catch((e) => {
        console.log(e);
    });


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


import Router from "./routes/url.route.js";



app.use("/", Router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});