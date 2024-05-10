import {
  Button,
  Center,
  Container,
  HStack,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { MdOutlineSearch, MdShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();

  function _handleCart() {
    navigate("/cart");
  }

  function _handleHome() {
    navigate("/");
  }

  function _handleAdd() {
    navigate("/new-edit");
  }

  return (
    <Container
      height={100}
      maxWidth={"100vw"}
      bg={"blue.50"}
      position={"sticky"}
      padding={8}
    >
      <HStack justify={"space-evenly"}>
        <Button fontSize={"3xl"} onClick={_handleHome} variant={"none"}>
          MyStore
        </Button>
        <HStack>
          <Input placeholder="Search..." width={"50vw"} borderColor={"black"} />
          <Button bgColor={"blue.300"}>
            <Icon as={MdOutlineSearch} />
          </Button>
        </HStack>
        <Button bgColor={"blue.300"} onClick={_handleCart}>
          <Icon as={MdShoppingCart} />
        </Button>
        <Button bgColor={"blue.300"} onClick={_handleAdd}>
          Add Product
        </Button>
      </HStack>
    </Container>
  );
}
