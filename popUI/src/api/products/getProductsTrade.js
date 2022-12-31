import { getRequest } from "../connectors";

export function getProductsTrade(trade, page, successHandler, errorHandeler){
    const oauth = {}
    getRequest(`products?page=${page}&tradingfor=${trade}`, oauth, successHandler, errorHandeler)
}

