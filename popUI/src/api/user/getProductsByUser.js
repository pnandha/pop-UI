import { getRequest } from "../connectors";

export function getProductsByUser(page,successHandler, errorHandeler){
    const oauth = {}
    getRequest(`products_by_user?page=${page}`, oauth, successHandler, errorHandeler)
}

