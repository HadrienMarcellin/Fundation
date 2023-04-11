import { EventData, Page } from '@nativescript/core'
import { NewGameViewModel } from './new-game-view-model'

export function navigatingTo(args: EventData): void {
    const page = <Page>args.object
    page.bindingContext = new NewGameViewModel(page.navigationContext)
}