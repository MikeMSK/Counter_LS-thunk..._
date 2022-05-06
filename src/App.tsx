import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValuesTC, setValueFromLocalStorageTC} from "./bll/counter-reducer";

function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setValueFromLocalStorageTC())
    }, [])

    const incHandler = () => {
        dispatch(incValuesTC())
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>Inc</button>
        </div>
    );
}

export default App;


// useEffect(() => {
//     let valueAsString = localStorage.getItem("counterValue")
//     if (valueAsString) {
//         let newValue = JSON.parse(valueAsString)
//         setValue(newValue)
//         //не работает setValue
//     }
// }, [])
//
// seEffeuct(() => {
//     localStorage.setItem("counterValue", JSON.stringify(value))
// }, [value])

