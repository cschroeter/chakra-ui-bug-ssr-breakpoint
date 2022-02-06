import { Box, Button, Container, useBreakpointValue } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box
      bg={useBreakpointValue({ base: "red.500", md: "teal.500" })}
      minH="100vh"
    >
      <Button size={useBreakpointValue({ base: "sm", md: "lg" })}>
        Hello Chakra
      </Button>
    </Box>
  );
};

export default Home;
