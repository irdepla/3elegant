import { apiClient } from "../API/axios"


const PRODUCTS_GET_URL = "http://localhost:5000/products"

export async function fetchProducts() {
    const res = await apiClient.get(PRODUCTS_GET_URL)
    return res?.data?.data 
}