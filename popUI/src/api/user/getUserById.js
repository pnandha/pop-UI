import { getRequest } from "../connectors";

export function getUserInfoById(
    id,
    successHandler, 
    errorHandeler ){
    const oauth = {}
    getRequest(`user/info?id=${id}`, oauth, successHandler, errorHandeler)
}

