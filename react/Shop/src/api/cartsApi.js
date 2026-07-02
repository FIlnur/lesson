import sessionApi from "./sessionApi";
import config from "../config";

const apiUrl = config.apiUrl + '/carts';

const cartApi = {
    async get() {
        const responce = await fetch(apiUrl + `?sessionId=${sessionApi.getSessionId()}`);

        const carts = await responce.json();
        
        //если корзина не нашласть, то создаем корзину
        if (carts.length === 0) {
            const cart =   {
                "id": "1",
                "sessionId": sessionApi.getSessionId(),
                "date": "2020-03-02T00:00:00.000Z",
                "products": [ ],
                "__v": 0
            }
            await fetch(apiUrl, {method: "POST", body: JSON.stringify(cart) })
           // NOTE: возможно понадобится получать полный обьект корзины с сервера
            return cart;
        } 




        return carts[0];
    },

    async addItem(product, quantity = 1) {
        const card = await this.get();
        const foundProduct = card.products.find((p) => p.productId === product.id)
        console.log(card.products)
        console.log(product)
        if (foundProduct) {
            foundProduct.quantity += quantity;
        } else {
            card.products.push({
                productId: product.id,
                quantity
            })
        }

        const responce = await fetch(apiUrl + `/${card.id}`, {
            method: 'PUT',
            body: JSON.stringify(card)
        });
        return responce.ok;
    }
}

export default cartApi;