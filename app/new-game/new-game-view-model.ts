import { Observable, ObservableArray } from "@nativescript/core";
import { GameSettings } from "./game-settings";
import { TraceRaven } from 'nativescript-trace-raven'


export class NewGameViewModel extends Observable{

    private _theme: string

    constructor(private _context: {theme: string}) {
        super()
        this._theme = this._context.theme
    }

    get themeLabel(): string {
       return this._theme
    }
}