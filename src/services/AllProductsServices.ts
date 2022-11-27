import axios from "axios"

export class AllProductsServices{
    private static URL:string = 'https://61bc1bd2d8542f00178245ab.mockapi.io'

    public static getAllProducts(){
        let AllProductsURL:string = `${this.URL}/allProducts`
        return axios.get(AllProductsURL)
    }
}