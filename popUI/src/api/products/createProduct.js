import { postformRequest } from "../connectors";

export function createProduct(formData, successHandler, errorHandeler){
    postformRequest(`create_product`, formData, successHandler, errorHandeler)
}