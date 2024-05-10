import {
  Box,
  Container,
  HStack,
  Image,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import NavigationBar from "../../components/navigation_bar";
import Footer from "../../components/footer";
import useSingleProductPageController from "../controllers/single_product_page_controller";

export default function SingleProductPage() {
  const { product, addToCart } = useSingleProductPageController();

  return (
    <Container maxWidth={"100vw"} minHeight={"95vh"}>
      <NavigationBar />
      <Container maxWidth={"100vw"} minHeight={"85vh"} padding={"16px"}>
        <VStack justifyContent={"center"}>
          <HStack spacing={16}>
            <Image src={product.imageUrl} maxW={"xs"} borderRadius={"lg"} />
            <VStack align={"flex-start"}>
              <Text fontSize={36} fontWeight={"bold"}>
                {product.name}
              </Text>
              <Text fontSize={28} fontWeight={"600"}>
                P{product.price}
              </Text>
              <Text fontSize={20}>{product.categories}</Text>
              <HStack>
                <Button bg={"blue.200"}>Buy</Button>
                <Button
                  variant={"outline"}
                  borderColor={"blue.200"}
                  color={"blue.200"}
                  onClick={addToCart}
                >
                  Add to cart
                </Button>
              </HStack>
            </VStack>
          </HStack>
          <Box h={"16px"} />
          <Text>{product.description}</Text>
        </VStack>
      </Container>
      <Footer />
    </Container>
  );
}
