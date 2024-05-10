import {
  Container,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import NavigationBar from "../../components/navigation_bar";
import Footer from "../../components/footer";
import useCartPageController from "../controllers/cart_page_controller";
import { useEffect } from "react";

export default function CartPage() {
  const { cartItems, total, fetchItems, onChangeQuantity } =
    useCartPageController();

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Container maxWidth={"100vw"} minHeight={"95vh"}>
      <NavigationBar />
      <Container maxWidth={"100vw"} minHeight={"85vh"} padding={"16px"}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Product Name</Th>
                <Th>Unit Price</Th>
                <Th>Quantity</Th>
                <Th>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cartItems.map((value, index) => {
                return (
                  <Tr key={value.id}>
                    <Td>{value.name}</Td>
                    <Td>P{value.price}</Td>
                    <Td>
                      <NumberInput
                        defaultValue={value.quantity}
                        maxWidth={"xs"}
                        onChange={(valueAsString, valueAsNumber) =>
                          onChangeQuantity(
                            valueAsString,
                            valueAsNumber,
                            value.id,
                            value.name,
                            value.price
                          )
                        }
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </Td>
                    <Td>P{value.price * value.quantity}</Td>
                  </Tr>
                );
              })}
            </Tbody>
            <Tfoot>
              {cartItems.length > 0 ? (
                <Tr>
                  <Th />
                  <Th />
                  <Th>Total</Th>
                  <Td>P{total}</Td>
                </Tr>
              ) : (
                <div></div>
              )}
            </Tfoot>
          </Table>
        </TableContainer>
      </Container>
      <Footer />
    </Container>
  );
}
