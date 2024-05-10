import { Center, Container } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Container
      //   height={100}
      maxWidth={"98vw"}
      bg={"blue.50"}
      position={"absolute"}
      bottom={0}
      paddingTop={"2%"}
      paddingBottom={"2%"}
    >
      <Center>Footer</Center>
    </Container>
  );
}
