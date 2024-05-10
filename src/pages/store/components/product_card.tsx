import { Card, CardBody, VStack, Button, Text, Image } from "@chakra-ui/react";
import useStorePageController from "../../controllers/store_page_controller";
import ProductEntity from "../../../data/entities/product_entity";

export default function ProductCard(props: { product: ProductEntity }) {
  const { handleSelectProduct, addToCart } = useStorePageController();

  return (
    <Card maxWidth={"xs"} onClick={() => handleSelectProduct(props.product)}>
      <CardBody>
        <Image src={props.product.imageUrl} borderRadius={"lg"} />
        <VStack align={"flex-start"}>
          <Text fontSize={"2xl"}>{props.product.name}</Text>
          <Text fontSize={"20px"}>P{props.product.price.toString()}</Text>
          <Button
            alignSelf={"center"}
            bg={"blue.200"}
            onClick={(e) => addToCart(e, props.product)}
          >
            Add to cart
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
}
