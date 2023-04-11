import { TileModel } from "~/models/tile.model";

export class TileService {

    private tiles: TileModel[] = [
        {
            id: 0,
            position: 0,
            genre: "hidden",
            image: "",
            url: ""
        },
        {
            id: 1,
            position: 1,
            genre: "hidden",
            image: "",
            url: ""
        }
    ]

    static getInstance(): TileService {
        return TileService._instance
    }

    private static _instance: TileService = new TileService()

    getTiles(): TileModel[] {
        return this.tiles
    }

    getTileByNumber(id: number): TileModel {
        return this.tiles.find(tile => tile.id === id) || undefined
    }
}