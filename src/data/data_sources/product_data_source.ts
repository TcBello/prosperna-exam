import {
  getStorageItem,
  setStorageItem,
} from "../../utils/local_storage_helper";
import ProductEntity from "../entities/product_entity";
import ProductRepository from "../repositories/product_repository";
import { v4 } from "uuid";

export default class ProductDataSource implements ProductRepository {
  fetchProducts(): ProductEntity[] {
    try {
      const rawItem = getStorageItem("products");

      if (rawItem != null) {
        const products = ProductEntity.fromJsonString(rawItem);
        return products;
      }
    } catch (error) {
      console.log(error);
    }

    return [];
  }
  addProduct(
    name: string,
    price: number,
    categories: string,
    description: string,
    imageUrl: string
  ): boolean {
    try {
      const uuid = v4();
      var products = this.fetchProducts();
      var product = new ProductEntity(
        uuid,
        name,
        price,
        categories,
        description,
        imageUrl
      );

      products.push(product);

      //   var jsonProducts = newList.map((value, index) => value.toJSON());
      setStorageItem("products", JSON.stringify(products));

      return true;
    } catch (error) {
      console.log(error);
    }

    return false;
  }
  editProduct(
    id: string,
    name: string,
    price: number,
    categories: string,
    description: string,
    imageUrl: string
  ): boolean {
    try {
      var products = this.fetchProducts();
      var product = new ProductEntity(
        id,
        name,
        price,
        categories,
        description,
        imageUrl
      );

      for (var i = 0; i < products.length; i++) {
        if (products[i].id === product.id) {
          products[i] = product;
          //   const jsonProducts = products.map((value, index) => value.toJSON());
          setStorageItem("products", JSON.stringify(products));
          return true;
        }
      }
    } catch (error) {
      console.log(error);
    }

    return false;
  }
}
