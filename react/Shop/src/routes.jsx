import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/RootLayout";
import CatalogPage from "../pages/CatalogPage";
import ContactsPage from "../pages/ContactsPage";

import Cart from "../pages/BasketPage";
import ProductPage from "../pages/ProductPage";
import AboutPage from "../pages/AboutPage";
import productsApi from "./api/productsApi";
import cartApi from "./api/cartsApi";

const router = createBrowserRouter ([
    {
        id: 'root',
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                loader: productsApi.getAll,
                element: <CatalogPage />,

            },
            {
                path: '/about',
                element: <AboutPage />,
            },
            {
                path: '/products/:id',
                loader: ({ params }) => productsApi.get(params.id),
                element: <ProductPage />
            },
            {
                path: '/cart',
                loader: cartApi.get,
                element: <Cart />,
            },
            {
                path: '/contacts',
                element: <ContactsPage />,
            },
        ]
    }
])

export default router;