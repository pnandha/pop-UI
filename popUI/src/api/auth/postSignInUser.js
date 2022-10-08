import { postRequest } from "../connectors";

export function postSignIn(
    selectedEmail, 
    selectedPassword, 
    successHandler, 
    errorHandeler){
    const oauth = {}
    const data = {
        email: selectedEmail,
        password: selectedPassword,
    }
    postRequest('login', oauth, data, successHandler, errorHandeler)
}

