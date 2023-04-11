import { GameThemes } from "~/models/button.model"

export class GameSettings {
    public nbTiles: number
    public theme: string
    public players: Array<Player>

    constructor() {
        this.nbTiles = 32
        this.theme = GameThemes.PHARAONS
        this.players = [new Player('Player 0'), new Player("Payer 1")]
    }
}

export class Player {
    public name: string
    public id: number

    constructor(_name: string) {
        this.name = _name
        this.id = 0
    }
}