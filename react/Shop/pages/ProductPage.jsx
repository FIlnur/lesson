import { useLoaderData, } from "react-router";
import cartApi from "../src/api/cartsApi";

function ProductPage() {
   const product = useLoaderData();

   const onAddItem = () => {
    cartApi.addItem(product, 1);
   }

    return <div>
        <img src={product.image} alt="картинка товара"/>
        <span>{product.title}</span>
        <span>{product.price}</span>
        <button className="btn-prd-page" onClick={onAddItem}>добавить в корзину</button>
    </div>
};



export default ProductPage