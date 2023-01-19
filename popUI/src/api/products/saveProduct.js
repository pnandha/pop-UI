import { postRequest } from "../connectors";

export function saveProduct(userId, ProductId, successHandler, errorHandeler){
    const data = {
        user_id: userId,
        saves: ProductId
    }
    const oauth = {
    }
    postRequest(`save`, oauth, data, successHandler, errorHandeler)
}

