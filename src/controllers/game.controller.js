import GameModel from "../models/game.model.js";

class GameController {
    async findAll(req, res) {
        try {
            const games = await GameModel.findAll();

            res.status(200).json(games);
        } catch (error) {
            console.error("Error finding all games:", error);
            return res.
            status(500)
            .json({ message: "Error finding all games" });
        }
    }
}

export default new GameController();