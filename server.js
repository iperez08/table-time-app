import dotenv from "dotenv"
dotenv.config()
import db from "./db/connection.js";
import express from "express"
const app = express()
import chalk from "chalk";
import cors from "cors"

const PORT = 3000

db.on("connected", () => {
    console.clear();
    console.log(chalk.blue("Connected to MongoDB!"));
  
    app.listen(PORT, () => {
      console.log(`Express server running on port: ${PORT}`);
    });
  }) 