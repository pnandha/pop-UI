import { postRequest } from "../connectors";

export function postRegister(
    selectedName,
    selectedEmail, 
    selectedPassword, 
    selectedMobileNumber,
    successHandler, 
    errorHandeler){
    const oauth = {}
    const data = {
        name: selectedName,
        email: selectedEmail,
        password: selectedPassword,
        mobileNumber: selectedMobileNumber
    }
    postRequest('register', oauth, data, successHandler, errorHandeler)
}