import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'


export type AppStateType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    form:formReducer,
})


export const store = createStore(rootReducer)


// @ts-ignore
window.store = store;
export default store;



