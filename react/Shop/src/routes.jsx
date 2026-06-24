import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/RootLayout";
import CatalogPage from "../pages/CatalogPage";

const router = createBrowserRouter ([
    {
        id: 'root',
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <CatalogPage />,
            },
        ]
    }
])

export default router;