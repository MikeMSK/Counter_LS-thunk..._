

const initialState = {
    value: 0
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return {
                ...state, value: state.value + 1
            }
        case "SET-VALUE=FROM-LOCAL-STORAGE":
            return {
                ...state, value: action.value
            }
        default:
            return state
    }
}

export const incValueAC = () => ({
    type: "INC-VALUE"
} as const)
export const setValuesFromLocalStorageAC = (value: number) => ({
    type: "SET-VALUE=FROM-LOCAL-STORAGE",
    value
} as const)

export type IncValueActionType = ReturnType<typeof incValueAC>
export type SetValuesFromLocalStorageActionType = ReturnType<typeof setValuesFromLocalStorageAC>

//thunk
// export const incValuesTC = () => (dispath: Dispatch, getState: () => AppStateType) => {
//     let currentValue = getState().counter.value
//     localStorage.setItem("counterValue", JSON.stringify(currentValue + 1))
//     dispath(incValueAC())
// }
// export const setValueFromLocalStorageTC = () => (dispath: Dispatch) => {
//     let valueAsString = localStorage.getItem("counterValue")
//     if (valueAsString) {
//         let newValue = JSON.parse(valueAsString)
//         dispath(setValuesFromLocalStorageAC(newValue))
//     }
// }

export type ActionType = IncValueActionType | SetValuesFromLocalStorageActionType