import { Frame, ItemEventData, Observable, ObservableArray } from '@nativescript/core'
import { ButtonModel } from '~/models/button.model'
import { GameSettings } from '~/new-game/game-settings'
import { ButtonService } from '~/services/button.service'

export class HomeViewModel extends Observable {

  private _buttons: ButtonModel[]
  private _settings: GameSettings

  constructor() {
    console.log("welcome to home page")

    super()
    this.populateButtons()
    this._settings = new GameSettings()
  }

  
  populateButtons(): void {
    this._buttons = ButtonService.getInstance().getButtons()
  }

  get buttons(): ObservableArray<ButtonModel> {
    return new ObservableArray(this._buttons)
  }

  onButtonTap(args: ItemEventData): void {
    console.log("onButtonTap")
    Frame.topmost().navigate({
      moduleName: 'settings/settings-page',
      context: {}
    })
  }
}
