import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    counter: counterReducer
})
export type AppStateType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers, applyMiddleware(thunk))

type AppStoreType = typeof store
