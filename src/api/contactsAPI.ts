import axios from "axios";

export const contactsAPI = {
    message(name: string , email: string , message: string) {
        return axios.post("https://smtp-portfolio.herokuapp.com/sendMessage", {name, email, message})
    }
}
