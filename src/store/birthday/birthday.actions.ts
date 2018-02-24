import {Injectable} from '@angular/core'
import {Action, ActionReducer} from '@ngrx/store'

import { Birthday } from '../../models/birthday'

export const ADD_BIRTHDAY = 'ADD_BIRTHDAY'
export const UPDATE_BIRTHDAY = 'UPDATE_BIRTHDAY'
export const DELETE_BIRTHDAY = 'DELETE_BIRTHDAY'

export class AddBirtday implements Action {
    readonly type = ADD_BIRTHDAY
    constructor(public payload: Birthday) { }
}

export class UpdateBirthday implements Action {
    readonly type = UPDATE_BIRTHDAY
    constructor(public payload: Birthday) { }
}

export class DeleteBirthday implements Action {
    readonly type = DELETE_BIRTHDAY
    constructor(public payload: Birthday) { }
}

export type Actions =   AddBirtday
                        | UpdateBirthday
                        | DeleteBirthday