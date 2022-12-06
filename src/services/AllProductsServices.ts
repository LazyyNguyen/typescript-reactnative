import axios from "axios"
import {Product} from '../modules/AllProducts'
export class AllProductsServices{
    private static URL:string = 'https://61bc1bd2d8542f00178245ab.mockapi.io'

    public static async getAllProducts(){
        let AllProductsURL:string = `${this.URL}/allProducts`
        return await axios.get(AllProductsURL)
    }
    public static async createProduct(data:Product){
        let AllProductsURL:any = `${this.URL}/allProducts`
        return axios.post(AllProductsURL,data)
    }
    public static async addCart(data:Product){
        let AllProductsURL:any = `${this.URL}/cart`
        return axios.post(AllProductsURL,data)
    }
    public static async showCart(){
        let AllProductsURL:any = `${this.URL}/cart`
        return axios.get(AllProductsURL)
    }
}