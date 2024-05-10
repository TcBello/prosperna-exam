import { createBrowserRouter } from "react-router-dom";
import CartPage from "../pages/cart/cart_page";
import NewEditProductPage from "../pages/new_edit_product/new_edit_product_page";
import SingleProductPage from "../pages/single_product/single_product_page";
import StorePage from "../pages/store/store_page";

export default class WebRouter {
  static router = createBrowserRouter([
    {
      path: "/",
      element: <StorePage />,
    },
    {
      path: "cart",
      element: <CartPage />,
    },
    {
      path: "new-edit",
      element: <NewEditProductPage />,
    },
    {
      path: "product",
      element: <SingleProductPage />,
    },
  ]);
}
