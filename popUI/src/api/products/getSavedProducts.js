import { getRequest } from "../connectors";

export function getSavedProduct(page, successHandler, errorHandeler){
    oauth = {}
    getRequest(`save?page=${page}`, oauth, successHandler, errorHandeler)
}

