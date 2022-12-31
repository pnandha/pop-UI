import { getRequest } from "../connectors";

export function getProductsByCat(catergoryID, successHandler, errorHandeler){
    const oauth = {}
    getRequest(`products?categoryid=${catergoryID}`, oauth, successHandler, errorHandeler)
}

