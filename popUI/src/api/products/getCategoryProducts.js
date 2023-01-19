import { getRequest } from "../connectors";

export function getCategoryProducts(catergoryID, page, successHandler, errorHandeler){
    const oauth = {}
    getRequest(`products?categoryid=${catergoryID}&page=${page}`, oauth, successHandler, errorHandeler)
}