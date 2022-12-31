import { getRequest } from "../connectors";

export function getProductsSearch(search, page, successHandler, errorHandeler){
    const oauth = {}
    getRequest(`products?page=${page}&search=${search}`, oauth, successHandler, errorHandeler)
}

