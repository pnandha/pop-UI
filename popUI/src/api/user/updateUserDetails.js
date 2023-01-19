import { postRequest } from "../connectors";

export function postUserDetails(
    name,
    location,
    stringLocation,
    successHandler, 
    errorHandeler){
    const oauth = {}
    const data = {
        name: name,
        location: location,
        stringLocation: stringLocation
    }
    postRequest('update', oauth, data, successHandler, errorHandeler)
}