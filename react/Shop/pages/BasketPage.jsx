import { useLoaderData } from "react-router";

function Cart() {
    const cart = useLoaderData();
    console.log(cart);
    return <div>
        Корзина
    </div>
};

export default Cart;