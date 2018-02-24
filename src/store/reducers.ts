import { ActionReducerMap } from '@ngrx/store'

import * as fromBirthdays from './birthday/birthday.reducer'

export interface State {
    birthdays: fromBirthdays.State
}

export const reducers: ActionReducerMap<State> = {
    birthdays: fromBirthdays.reducer
}