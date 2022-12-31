import { postRequest } from "../connectors";

export function postLogout(
    successHandler, 
    errorHandeler){
    const oauth = {}
    const data = {}
    postRequest('logout', oauth, data, successHandler, errorHandeler)
}