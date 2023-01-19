import { postRequest } from "../connectors";

export function postRegister(
    selectedName,
    selectedEmail, 
    selectedPassword, 
    selectedMobileNumber,
    location,
    stringLocation,
    successHandler, 
    errorHandeler){
    const oauth = {}
    const data = {
        name: selectedName,
        email: selectedEmail,
        password: selectedPassword,
        mobileNumber: selectedMobileNumber,
        userLocation: location,
        stringLocation: stringLocation,
    }
    postRequest('register', oauth, data, successHandler, errorHandeler)
}