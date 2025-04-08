import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Games } from "../entities/Games";
import { FeedBack } from "../entities/FeedBack";

class FeedBackController {
    private feedbackRepository;
    private gamesRepository;

    constructor() {
        this.feedbackRepository = AppDataSource.getRepository(FeedBack);
        this.gamesRepository = AppDataSource.getRepository(Games);
    }

    create = async (req: Request, res: Response) => {
        try {
            const { productId, name, email, feedback, experience, recommend } = req.body;
            const game = await this.gamesRepository.findOne({ where: { id: Number(productId) } });
            if (!game) {
                res.status(404).json({ message: "Game not found" });
                return;
            }

            const newFeedback = await this.feedbackRepository.save({
                productId: game,
                name,
                email,
                feedback,
                experience,
                recommend,
            });
            res.status(201).json({ newFeedback });

        } catch (error) {
            res.status(500).json({ message: "Error creating feedback", error });
            return;

        }
    };
}

export default FeedBackController;