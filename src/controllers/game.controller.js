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

    async create (req, res) {
        try {
            const {name, plataform } = req.body;

            //Validação básica
            if (!name || !plataform) {
                return res
                .status(400)
                .json({ error: "Name and plataform fields are required!"         
                });
            }
const data = {
    name,
    plataform,
};
const newGame = await GameModel.create(data);

return res.status(201).json({
    message: "New Game successfully created!",
    newGame,
});
        } catch (error) {
            console.error("Error creating game:", error);
            return res.status(500).json({ error: "Error creating game" });
        }
        } 
}

export default new GameController();