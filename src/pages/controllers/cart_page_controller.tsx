import { useState } from "react";
import CartProductEntity from "../../data/entities/cart_product_entity";
import CartDataSource from "../../data/data_sources/cart_data_source";

export default function useCartPageController() {
  const _cartRepo = new CartDataSource();

  const [cartItems, setCartItems] = useState<CartProductEntity[]>([]);
  const [total, setTotal] = useState(0);

  function fetchItems() {
    var data = _cartRepo.fetchItems();
    var newTotal = 0;

    for (var i = 0; i < data.length; i++) {
      newTotal += data[i].price * data[i].quantity;
    }

    setTotal(newTotal);
    setCartItems(data);
  }

  function onChangeQuantity(
    valueAsString: string,
    valueAsNumber: number,
    cartItemId: string,
    name: string,
    price: number
  ) {
    if (valueAsString.length > 0) {
      var isUpdated = _cartRepo.updateItem(
        cartItemId,
        name,
        price,
        valueAsNumber
      );

      if (isUpdated) {
        fetchItems();
      }
    } else {
      var isUpdated = _cartRepo.updateItem(cartItemId, name, price, 0);

      if (isUpdated) {
        fetchItems();
      }
    }
  }

  return { cartItems, total, fetchItems, onChangeQuantity };
}
