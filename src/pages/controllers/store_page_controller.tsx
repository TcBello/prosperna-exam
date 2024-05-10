import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductEntity from "../../data/entities/product_entity";
import ProductDataSource from "../../data/data_sources/product_data_source";
import CartDataSource from "../../data/data_sources/cart_data_source";

export default function useStorePageController() {
  const navigate = useNavigate();

  const _productRepo = new ProductDataSource();
  const _cartRepo = new CartDataSource();

  const [products, setProducts] = useState<ProductEntity[]>([]);

  function handleSelectProduct(product: ProductEntity) {
    navigate("/product", { state: product });
  }

  function fetchProducts() {
    const data = _productRepo.fetchProducts();
    setProducts(data);
  }

  function addToCart(
    event: React.MouseEvent<HTMLButtonElement>,
    product: ProductEntity
  ) {
    event.stopPropagation();

    var isAdded = _cartRepo.addToCart(product.name, product.price, 1);

    if (isAdded) {
      navigate("/cart");
    }
  }

  return { handleSelectProduct, products, fetchProducts, addToCart };
}
