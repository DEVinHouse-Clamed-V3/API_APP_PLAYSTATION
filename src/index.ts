require("dotenv").config();

import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";

import cors from "cors";

import gamesRouter from "./routes/games.routes";

import { handleError } from "./middlewares/handleError";

import logger from "./config/winston";
import feedbackRouter from "./routes/feedback.routes";

const app = express();

app.use(cors()); // Permite que o express entenda requisições de outros domínios

app.use(express.json()); // Permite que o express entenda JSON

app.use("/games", gamesRouter);
app.use("/feedback", feedbackRouter);


app.get("/env", (req, res) => {
  res.json({
    port: process.env.PORT,
    node_env: process.env.NODE_ENV,
  });
});

app.use(handleError);

AppDataSource.initialize()
  .then(() => {
    app.listen(process.env.PORT, () => {
      logger.info(
        `O servidor está rodando em http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => console.log(error));
