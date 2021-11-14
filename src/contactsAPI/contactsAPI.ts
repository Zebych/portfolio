import axios from "axios";

export const contactsAPI={
    message(name:string,email:string,message:string){
       return axios.post("http:localhost:3010/send", {name, email, message})
    }
}