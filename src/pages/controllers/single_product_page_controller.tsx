import { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductEntity from "../../data/entities/product_entity";
import CartDataSource from "../../data/data_sources/cart_data_source";

export default function useSingleProductPageController() {
  var location = useLocation();

  const product = location.state as ProductEntity;

  const _cartRepo = new CartDataSource();

  function addToCart() {
    _cartRepo.addToCart(product.name, product.price, 1);
  }

  return { product, addToCart };
}
