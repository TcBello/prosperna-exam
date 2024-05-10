import {
  getStorageItem,
  setStorageItem,
} from "../../utils/local_storage_helper";
import CartProductEntity from "../entities/cart_product_entity";
import CartRepository from "../repositories/cart_repository";
import { v4 } from "uuid";

export default class CartDataSource implements CartRepository {
  updateItem(
    cartItemId: string,
    name: string,
    price: number,
    quantity: number
  ): boolean {
    try {
      var cartItems = this.fetchItems();
      var cartProduct = new CartProductEntity(
        cartItemId,
        name,
        price,
        quantity
      );

      for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === cartProduct.id) {
          cartItems[i] = cartProduct;
          setStorageItem("cart", JSON.stringify(cartItems));
          return true;
        }
      }
    } catch (error) {
      console.log(error);
    }

    return false;
  }
  fetchItems(): CartProductEntity[] {
    try {
      const rawItem = getStorageItem("cart");

      if (rawItem != null) {
        const cart = CartProductEntity.fromJsonString(rawItem);
        return cart;
      }
    } catch (error) {
      console.log(error);
    }

    return [];
  }
  addToCart(name: string, price: number, quantity: number): boolean {
    try {
      var uuid = v4();
      var cartItems = this.fetchItems();
      var cartProduct = new CartProductEntity(uuid, name, price, quantity);

      cartItems.push(cartProduct);

      setStorageItem("cart", JSON.stringify(cartItems));

      return true;
    } catch (error) {
      console.log(error);
    }

    return false;
  }
}
