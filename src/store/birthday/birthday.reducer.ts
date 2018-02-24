import {  Action } from '@ngrx/store'

// Import birthday actions
import * as BirthdayActions from './birthday.actions'

// Import model(s)
import { Birthday } from '../../models/birthday';
import { InitialState } from '@ngrx/store/src/models';

import { uuid } from 'uuid/v4'

export interface State {
    birthdays: Birthday[]
}

const initialState: State = {
    birthdays: []
}

export function reducer(state = initialState, action: BirthdayActions.Actions): State {
    switch (action.type) {
        case BirthdayActions.ADD_BIRTHDAY:
            let temp = {
                ...state,
                birthdays: [
                    ...state.birthdays,
                    action.payload
                    //Object.assign({}, action.payload, { id: uuid()})
                ]
            }

            return temp
        case BirthdayActions.UPDATE_BIRTHDAY:
            return {
                ...state
            }
        case BirthdayActions.DELETE_BIRTHDAY:
            return {
                ...state,
                birthdays: state.birthdays.filter(birthday => {
                    birthday.id !== action.payload.id
                })
            }
        default:
            return state
    }
}