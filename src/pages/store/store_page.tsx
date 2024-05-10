import {
  Card,
  CardBody,
  Container,
  Wrap,
  WrapItem,
  Image,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import Footer from "../../components/footer";
import { transform } from "typescript";
import NavigationBar from "../../components/navigation_bar";
import ProductCard from "./components/product_card";
import useStorePageController from "../controllers/store_page_controller";
import { useEffect } from "react";
import { storageDeleteItem } from "../../utils/local_storage_helper";

export default function StorePage() {
  const { products, fetchProducts } = useStorePageController();

  useEffect(() => {
    fetchProducts();
    // storageDeleteItem("cart");
  }, []);

  // console.log(products[0].id);

  return (
    <Container maxWidth={"100vw"} minHeight={"95vh"}>
      <NavigationBar />
      <Container
        maxWidth={"100vw"}
        minHeight={"85vh"}
        padding={8}
        bg={"whitesmoke"}
      >
        <Wrap>
          {products.map((value, index) => {
            return (
              <WrapItem key={value.id}>
                <ProductCard product={value} />
              </WrapItem>
            );
          })}
        </Wrap>
      </Container>
      <Footer />
    </Container>
  );
}
