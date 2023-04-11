import { Frame, ItemEventData, Observable, ObservableArray } from '@nativescript/core'
import { ButtonModel } from '~/models/button.model'
import { GameSettings } from '~/new-game/game-settings'
import { ButtonService } from '~/services/button.service'

export class HomeViewModel extends Observable {

  private _buttons: ButtonModel[]
  private _settings: GameSettings

  constructor() {
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
    Frame.topmost().navigate({
      moduleName: 'new-game/new-game-page',
      context: { theme: this._settings.theme }
    })
  }
}
