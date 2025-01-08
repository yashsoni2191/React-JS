import {combineReducers, legacy_createStore } from "redux"
import { INC, DEC } from "./actionType"
import { YS } from "./Render"
import { YS2 } from "./More"

const store1 = combineReducers({
    CC1:YS,
    CC2:YS2
})

export const Yash = legacy_createStore(store1)