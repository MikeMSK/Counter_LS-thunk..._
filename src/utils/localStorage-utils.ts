import {AppStateType} from "../bll/store";

export const loadState = () => {
    try {
        const serializadState = localStorage.getItem("app-state")
        if (serializadState === null) {
            return undefined
        }
        return JSON.parse(serializadState)
    } catch (err) {
        return undefined
    }
};

export const saveState = (state:AppStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("app-state", serializedState)
    } catch {
        //ignore write errors
    }
};