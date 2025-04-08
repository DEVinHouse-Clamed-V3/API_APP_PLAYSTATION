import { Router } from "express";
import ListGamersController from "../controllers/ListGamersController";
import FeedBackController from "../controllers/FeedBackController";

const feedbackRouter = Router();

const feedback = new FeedBackController();

feedbackRouter.post('/', feedback.create)

export default feedbackRouter;