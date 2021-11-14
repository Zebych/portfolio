import {ContactsFormPropsType} from "../contacts/Contacts";
import {Dispatch} from "redux";
import { contactsAPI } from "../contactsAPI/contactsAPI";
const initState={
    sentMessage:false,
    disable:false,
}
export const contactsReducer=(state:InitStateType=initState,action:ActionType):InitStateType=>{
switch (action.type){
    case 'SENT_MESSAGE':
        return {
            ...state,
            sentMessage:action.set
        }
        case 'DISABLE_BUTTON':
        return {
            ...state,
            disable:action.disable
        }
    default:
        return state
}
}
const setSentMessage=(set:boolean)=>({type:'SENT_MESSAGE',set}as const)
const disableButton=(disable:boolean)=>({type:'DISABLE_BUTTON',disable}as const)
//Thunk
export const contactsTC = (name:string,email:string,message:string) => async (dispatch: Dispatch) => {
    // dispatch(disableButton(true))
    let response = await contactsAPI.message(name,email,message)
    if(response){
        console.log(response)
        dispatch(setSentMessage(true))
        // dispatch(disableButton(false))
    }
}
/*export const contactsTC = (name:string,email:string,message:string) =>  (dispatch: Dispatch) => {
    // dispatch(disableButton(true))
    debugger
    contactsAPI.message(name,email,message).then((res)=>{
        debugger
        console.log(res)
    })
        .catch(()=>{
            debugger
            console.log('err')
        })

}*/
//Types
export type InitStateType= typeof initState
type ActionType=ReturnType<typeof setSentMessage>|ReturnType<typeof disableButton>