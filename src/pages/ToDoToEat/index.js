import React from "react";
import {
  Text,
  Button,
  Box,
  Flex,
  Heading,
  HStack,
  VStack,
  Stack,
} from "@chakra-ui/react";

import { addGuest } from "api/api";
import { MAX_WIDTHS } from "utils/constants";
import PageContainer from "components/containers/PageContainer";
import ToDoToEatCard from "components/containers/ToDoToEatCard";
import Activities from "components/Activities";

const ToDoToEat = () => {
  return (
    <PageContainer center>
      <Flex alignItems="center" direction="column" w="100%" pt="24px">
        <Activities />
      </Flex>
    </PageContainer>
  );
};

export default ToDoToEat;

// return (
//   <PageContainer center px={{ base: 0, md: "24px" }}>
//     <Flex
//       // border="1px solid green"
//       justify="center"
//       mt="36px"
//       w="100%"
//       pb="32px"
//     >
//       <Flex
//         maxW={{
//           // base: "420px",
//           // sm: "480px",
//           md: "720px",
//           lg: "900px",
//         }}
//         // maxW={MAX_WIDTHS()}
//         align="center"
//         direction="column"
//         w="100%"
//         // border="1px solid red"
//       >
//         <Stack
//           // border="1px solid red"
//           spacing={{ base: "16px" }}
//           direction={{ base: "column", md: "row" }}
//           justifyContent="center"
//           w="100%"
//         >
//           <Box>
//             <ToDoToEatCard heading="Eat" />
//           </Box>
//           <Box>
//             <ToDoToEatCard heading="Drink" />
//           </Box>
//           <Box>
//             <ToDoToEatCard heading="Play" />
//           </Box>
//         </Stack>
//         <Box mt="16px" w="100%">
//           <ToDoToEatCard heading="For the Kiddos" />
//         </Box>
//       </Flex>
//     </Flex>
//   </PageContainer>
// );

// const ToDoToEat = () => {
//   return (
//     <PageContainer
//       center
//     >
//       <Flex
//         aligItems="center"
//         direction="column"
//         justifyContent="center"
//         w="100%"
//         border="1px solid red"
//         pt="24px"
//       >
//         <Flex
//           direction="column"
//           maxW={{
//             md: "720px",
//             lg: "900px",
//           }}
//           alignItems="center"
//         >
//           <Activities />
//         </Flex>
//       </Flex>
//     </PageContainer>
//   );
// };

// export default ToDoToEat;

// return (
//   <PageContainer center px={{ base: 0, md: "24px" }}>
//     <Flex
//       // border="1px solid green"
//       justify="center"
//       mt="36px"
//       w="100%"
//       pb="32px"
//     >
//       <Flex
//         maxW={{
//           // base: "420px",
//           // sm: "480px",
//           md: "720px",
//           lg: "900px",
//         }}
//         // maxW={MAX_WIDTHS()}
//         align="center"
//         direction="column"
//         w="100%"
//         // border="1px solid red"
//       >
//         <Stack
//           // border="1px solid red"
//           spacing={{ base: "16px" }}
//           direction={{ base: "column", md: "row" }}
//           justifyContent="center"
//           w="100%"
//         >
//           <Box>
//             <ToDoToEatCard heading="Eat" />
//           </Box>
//           <Box>
//             <ToDoToEatCard heading="Drink" />
//           </Box>
//           <Box>
//             <ToDoToEatCard heading="Play" />
//           </Box>
//         </Stack>
//         <Box mt="16px" w="100%">
//           <ToDoToEatCard heading="For the Kiddos" />
//         </Box>
//       </Flex>
//     </Flex>
//   </PageContainer>
// );
