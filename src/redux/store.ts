import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'
import {contactsReducer} from "./contacts-reducer";
import thunkMiddleware from 'redux-thunk'

export const rootReducer = combineReducers({
    contacts:contactsReducer,
    form:formReducer,
})

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;
export default store;



