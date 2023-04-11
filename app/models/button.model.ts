export interface ButtonModel {
    id: number
    position: number
    text: string
    scenario: string
}

export class Constants {
    static NEW_GAME: string = "NEW_GAME"
    static SETTINGS: string = "SETTINGS"
}


export class Displays {
    static NEW_GAME: string = "New game"
    static SETTINGS: string = "Settings"
}

export class GameThemes {
    static PHARAONS: string = "Pharaons"
}