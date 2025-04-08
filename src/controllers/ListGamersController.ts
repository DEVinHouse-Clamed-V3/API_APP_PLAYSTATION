import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Games } from "../entities/Games";

class ListGamersController {
  private recipeGames;

  constructor() {
    this.recipeGames = AppDataSource.getRepository(Games)
  }


  getAll = async (req: Request, res: Response) => {
    try {
      const games = await this.recipeGames.find()
      res.status(200).json(games)
      return
    } catch (error) {
      res.status(500).json({ message: "Error retrieving games", error })
      return
    }
  }
}

export default ListGamersController;
