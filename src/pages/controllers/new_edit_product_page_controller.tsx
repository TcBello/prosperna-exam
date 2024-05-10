import { useState } from "react";
import ProductDataSource from "../../data/data_sources/product_data_source";
import ProductEntity from "../../data/entities/product_entity";

export default function useNewEditProductPageController() {
  const _productRepo = new ProductDataSource();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [categories, setCategories] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function _clear() {
    setName("");
    setPrice(0);
    setCategories("");
    setDescription("");
    setImageUrl("");
  }

  function addProduct() {
    const isAdded = _productRepo.addProduct(
      name,
      price,
      categories,
      description,
      imageUrl
    );

    if (isAdded) {
      //   fetchProducts();
      _clear();
      console.log("added");
    }
  }

  function editProduct(productId: string) {
    const isEdited = _productRepo.editProduct(
      productId,
      name,
      price,
      categories,
      description,
      imageUrl
    );

    if (isEdited) {
      //   fetchProducts();
      _clear();
      console.log("edited");
    }
  }

  function onChangeProductName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function onChangePrice(valueAsString: string, valueAsNumber: number) {
    if (valueAsString.length > 0) {
      setPrice(valueAsNumber);
    } else {
      setPrice(0);
    }
  }

  function onChangeCategories(e: React.ChangeEvent<HTMLInputElement>) {
    setCategories(e.target.value);
  }

  function onChangeDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setDescription(e.target.value);
  }

  function onChangeImageUrl(e: React.ChangeEvent<HTMLInputElement>) {
    setImageUrl(e.target.value);
  }

  return {
    name,
    price,
    imageUrl,
    categories,
    description,
    addProduct,
    editProduct,
    onChangeProductName,
    onChangePrice,
    onChangeCategories,
    onChangeDescription,
    onChangeImageUrl,
  };
}
