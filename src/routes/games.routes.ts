import { Router } from "express";
import ListGamersController from "../controllers/ListGamersController";

const gamesRouter = Router();

const Games = new ListGamersController();

gamesRouter.get('/', Games.getAll)

export default gamesRouter;