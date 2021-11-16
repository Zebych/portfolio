import axios from "axios";

export const contactsAPI = {
    message(name: string , email: string , message: string) {
        return axios.post("https://git.heroku.com/smtp-portfolio.git/sendMessage", {name, email, message})
    }
}
