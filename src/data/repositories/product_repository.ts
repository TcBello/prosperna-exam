import ProductEntity from "../entities/product_entity";

export default interface ProductRepository {
  fetchProducts(): ProductEntity[];
  addProduct(
    name: string,
    price: number,
    categories: string,
    description: string,
    imageUrl: string
  ): boolean;
  editProduct(
    id: string,
    name: string,
    price: number,
    categories: string,
    description: string,
    imageUrl: string
  ): boolean;
}
