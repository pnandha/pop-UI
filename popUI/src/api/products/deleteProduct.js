import { deleteRequest } from "../connectors";

export function deleteProduct(ProductId, successHandler, errorHandeler){
    const data = {
        id: ProductId,
    }
    const oauth = {
    }
    deleteRequest(`delete_products`, oauth, data, successHandler, errorHandeler)
}
