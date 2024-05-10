import {
  Button,
  Container,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import NavigationBar from "../../components/navigation_bar";
import Footer from "../../components/footer";
import useNewEditProductPageController from "../controllers/new_edit_product_page_controller";

export default function NewEditProductPage() {
  const {
    name,
    price,
    categories,
    description,
    imageUrl,
    addProduct,
    editProduct,
    onChangeProductName,
    onChangeCategories,
    onChangeDescription,
    onChangeImageUrl,
    onChangePrice,
  } = useNewEditProductPageController();

  return (
    <Container maxWidth={"100vw"} minHeight={"95vh"}>
      <NavigationBar />
      <Container maxWidth={"100vw"} minHeight={"85vh"} padding={"16px"}>
        <VStack spacing={8}>
          <Input
            placeholder="Add image URL"
            variant={"filled"}
            bg={"blue.100"}
            onChange={onChangeImageUrl}
            value={imageUrl}
          />
          <Input
            placeholder="Add product name"
            variant={"filled"}
            bg={"blue.100"}
            onChange={onChangeProductName}
            value={name}
          />
          <Input
            placeholder="Add categories"
            variant={"filled"}
            bg={"blue.100"}
            onChange={onChangeCategories}
            value={categories}
          />
          {/* <Input
            placeholder="Add price"
            variant={"filled"}
            bg={"blue.100"}
            onChange={onChangePrice}
            value={price.toString()}
          /> */}
          <NumberInput
            defaultValue={price}
            width={"94vw"}
            onChange={onChangePrice}
          >
            <NumberInputField bg={"blue.100"} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Textarea
            placeholder="Add description"
            variant={"filled"}
            bg={"blue.100"}
            onChange={onChangeDescription}
            value={description}
          />
          <Button justifySelf={"center"} bg={"blue.200"} onClick={addProduct}>
            Add
          </Button>
        </VStack>
      </Container>
      <Footer />
    </Container>
  );
}
