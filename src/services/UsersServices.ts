import axios from "axios"

export class UsersServices{
    private static URL:string = 'https://61bc1bd2d8542f00178245ab.mockapi.io/'

    public static getAllUsers(){
        let UsersURL:string = `${this.URL}/products`
        let AllProductsURL:string = `${this.URL}/allProducts`
        return axios.get(UsersURL)
    }
}