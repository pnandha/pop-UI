import { getRequest } from "../connectors";

export function getUserInfo(
    successHandler, 
    errorHandeler ){
    const oauth = {}
    getRequest('user', oauth, successHandler, errorHandeler)
}

