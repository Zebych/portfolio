import axios from "axios";

export const contactsAPI = {
    message(name: string , email: string , message: string) {
        return axios.post("https://smtp-portfolio.herokuapp.com/sendMessage", {name, email, message})
        // return axios.post("http://localhost:3010/sendMessage", {name, email, message})
    }
}
