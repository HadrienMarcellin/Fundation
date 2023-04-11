import { ButtonModel, Constants, Displays} from "~/models/button.model";

export class ButtonService {

    private buttons: ButtonModel[] = [
        {
            id: 0,
            position: 0,
            text: Displays.NEW_GAME,
            scenario: Constants.NEW_GAME
        },
        {
            id: 1,
            position: 1,
            text: Displays.SETTINGS,
            scenario: Constants.SETTINGS
        }
    ]

    static getInstance(): ButtonService {
        return ButtonService._instance
    }

    private static _instance: ButtonService = new ButtonService()

    public getButtons(): ButtonModel[] {
        return this.buttons
    }

    public getTileByNumber(id: number): ButtonModel {
        return this.buttons.find(button => button.id === id) || undefined
    }

}