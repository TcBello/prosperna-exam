import CartProductEntity from "../entities/cart_product_entity";

export default interface CartRepository {
  fetchItems(): CartProductEntity[];
  addToCart(name: string, price: number, quantity: number): boolean;
  updateItem(
    cartItemId: string,
    name: string,
    price: number,
    quantity: number
  ): boolean;
}
