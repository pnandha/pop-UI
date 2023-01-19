import { postRequest } from "../connectors";

export function unSaveProduct(ProductId, successHandler, errorHandeler){
    const data = {
        product_id: ProductId
    }
    const oauth = {
    }
    postRequest(`unsave`, oauth, data, successHandler, errorHandeler)
}

