import React from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Avatar,
  Divider,
  Stack,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import kevin from "assets/galleryImages/shannon/shan_eight.jpg";
import shannon from "assets/galleryImages/shannon/shan_six.jpg";

import five from "assets/galleryImages/shannon/shan_five.jpg";
import four from "assets/galleryImages/shannon/shan_four.jpg";
import three from "assets/galleryImages/shannon/shan_three.jpg";
import two from "assets/galleryImages/shannon/shan_two.jpg";
import ringBearers from "assets/images/wedding_party/augustfrederick.jpg";
import sarlota from "assets/images/wedding_party/sarlota.jpg";
import andras from "assets/images/wedding_party/andras.jpg";
import cameron from "assets/images/wedding_party/cameron.jpg";

const WeddingParty = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      bg="neutral.100"
      pt="24px"
      pb="32px"
    >
      <Flex direction="column" alignItems="center">
        <Text
          fontSize={{ base: "3xl", sm: "48px" }}
          textAlign="center"
          fontWeight="500"
          w="100%"
          mt="32px"
          letterSpacing="2px"
        >
          WEDDING PARTY
        </Text>
        <Box h="3px" w="50px" bg="neutral.800" mb="24px" />
      </Flex>

      <Grid
        rowGap={{ base: "1rem" }}
        columnGap={{ sm: "1rem" }}
        justifyItems={{ base: "center" }}
        templateAreas={{
          base: `
          'bride'
          'groom'
          'erin'
          'caleb'
          'kelly'
          'trevor'
          'karissa'
          'andrew'
          'cassidy'
          'ted'
          'rb'
          'fg'
          'andras'
          'cam'
        `,
          sm: `
          'bride groom'
          'erin caleb'
          'kelly trevor'
          'karissa andrew'
          'cassidy ted'
          'rb fg'
          'andras cam'
        `,
          lg: `
          'bride bride groom groom'
          'erin kelly caleb trevor'
          'karissa cassidy andrew ted'
          'rb fg andras cam'
        `,
        }}
      >
        <GridItem gridArea="groom">
          <Partier name="kevin blair" role="GROOM" imgURL={kevin} />
        </GridItem>

        <GridItem gridArea="caleb">
          <Partier name="caleb magnuson" role="BEST MAN" imgURL={five} />
        </GridItem>
        <GridItem gridArea="trevor">
          <Partier name="trevor weidner" role="GROOMSMAN" imgURL={four} />
        </GridItem>

        <GridItem gridArea="andrew">
          <Partier name="andrew payne" role="GROOMSMAN" imgURL={three} />
        </GridItem>
        <GridItem gridArea="ted">
          <Partier name="ted keller" role="GROOMSMAN" imgURL={two} />
        </GridItem>

        {/* <Divider
        borderColor="neutral.400"
        mt="16px"
        mb="32px"
        display={{ sm: "none" }}
      /> */}

        <GridItem gridArea="bride">
          <Partier name="shannon dunne" role="BRIDE" imgURL={shannon} />
        </GridItem>

        <GridItem gridArea="erin">
          <Partier name="erin dunne" role="MAID OF HONOR" imgURL={two} />
        </GridItem>
        <GridItem gridArea="kelly">
          <Partier name="kelly dunne" role="MATRON OF HONOR" imgURL={three} />
        </GridItem>

        <GridItem gridArea="karissa">
          <Partier name="karissa leith" role="BRIDESMAID" imgURL={four} />
        </GridItem>

        <GridItem gridArea="cassidy">
          <Partier name="cassidy blair" role="BRIDESMAID" imgURL={five} />
        </GridItem>

        <GridItem mt={{ lg: "2rem" }}>
          <Partier
            gridArea="rb"
            name="august & frederick gerber"
            role="RING BEARERS"
            imgURL={ringBearers}
            flex={1}
          />
        </GridItem>

        <GridItem mt={{ lg: "2rem" }}>
          <Partier
            gridArea="fg"
            name="charlotte reichle"
            role="FLOWER GIRL"
            imgURL={sarlota}
            flex={1}
          />
        </GridItem>

        <GridItem mt={{ lg: "2rem" }}>
          <Partier
            gridArea="andras"
            name="andras reichle"
            role="HEAD OF SECURITY"
            imgURL={andras}
            flex={1}
          />
        </GridItem>

        <GridItem mt={{ lg: "2rem" }}>
          <Partier
            gridArea="cam"
            name="cameron reichle"
            role="ASST. TO ANDRAS"
            imgURL={cameron}
            flex={1}
          />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default WeddingParty;

const Partier = ({ name, role, imgURL, flex, mr = 0 }) => {
  return (
    <Flex
      w={{ base: "280px", sm: "232px" }}
      // border="1px solid #ccc"
      direction="column"
      alignItems="center"
      px={{ base: 0, lg: "16px" }}
    >
      <Avatar boxSize={{ base: "250px", sm: "180px" }} mb="8px" src={imgURL} />
      <Heading
        fontWeight="700"
        fontSize="28px"
        textAlign="center"
        lineHeight="28px"
        mb="4px"
      >
        {name}
      </Heading>
      <Text letterSpacing="1px">{role}</Text>
    </Flex>
  );
};

const ColumnContainer = ({ children }) => {
  return (
    <Box w={{ base: "100%", sm: "50%" }} px="24px">
      {children}
    </Box>
  );
};

/*  OLD FLEXBOX VERSION   */
//
//
//
// const WeddingParty = () => {
//   return (
//     <Flex
//       bg="neutral.100"
//       // border="1px solid green"
//       className="fade-in-immediate"
//       alignItems="center"
//       direction="column"
//       w="100%"
//       pt="24px"
//       pb="32px"
//     >
//       <Text
//         fontSize={{ base: "3xl", sm: "48px" }}
//         textAlign="center"
//         fontWeight="500"
//         // border="1px solid orange"
//         w="100%"
//         mt="32px"
//         letterSpacing="2px"
//       >
//         WEDDING PARTY
//       </Text>

//       <Box h="3px" w="50px" bg="neutral.800" mb="24px" />

//       {/* <WeddingParty /> */}

//       <Flex
//         direction="column"
//         alignItems="center"
//         // border="1px solid red"
//       >
//         <Flex
//           // border="1px solid blue"
//           direction={{ base: "column", sm: "row" }}
//           mt="16px"
//           justifyContent="center"
//         >
//           <ColumnContainer>
//             <Flex justifyContent={{ base: "center" }}>
//               <Partier name="kevin blair" role="GROOM" imgURL={kevin} />
//             </Flex>

//             <Flex
//               direction={{ base: "column", lg: "row" }}
//               justifyContent="center"
//             >
//               <Partier name="caleb magnuson" role="BEST MAN" imgURL={five} />
//               <Partier name="trevor weidner" role="GROOMSMAN" imgURL={four} />
//             </Flex>

//             <Flex
//               direction={{ base: "column", lg: "row" }}
//               justifyContent="center"
//             >
//               <Partier name="andrew payne" role="GROOMSMAN" imgURL={three} />
//               <Partier name="ted keller" role="GROOMSMAN" imgURL={two} />
//             </Flex>
//           </ColumnContainer>

//           <Divider
//             borderColor="neutral.400"
//             mt="16px"
//             mb="32px"
//             display={{ sm: "none" }}
//           />

//           <ColumnContainer>
//             <Flex justifyContent={{ base: "center" }}>
//               <Partier name="shannon dunne" role="BRIDE" imgURL={shannon} />
//             </Flex>

//             <Flex
//               direction={{ base: "column", lg: "row" }}
//               justifyContent="center"
//             >
//               <Partier name="erin dunne" role="MAID OF HONOR" imgURL={two} />
//               <Partier
//                 name="kelly dunne"
//                 role="MATRON OF HONOR"
//                 imgURL={three}
//               />
//             </Flex>

//             <Flex
//               direction={{ base: "column", lg: "row" }}
//               wrap="wrap"
//               justifyContent="center"
//             >
//               <Partier name="karissa leith" role="BRIDESMAID" imgURL={four} />
//               <Partier name="cassidy blair" role="BRIDESMAID" imgURL={five} />
//             </Flex>
//           </ColumnContainer>
//         </Flex>
//       </Flex>

//       <Flex
//         direction={{ base: "column", lg: "row" }}
//         justifyContent={{ base: "center", md: "space-between" }}
//         alignItems={{ base: "center", lg: "flex-start" }}
//         // alignItems={{ base: "center" }}
//         mt="1.5rem"
//         px="24px"
//         // border="1px solid #000"
//         w="100%"
//         maxW={{ lg: "1026px" }}
//         minW={{ base: undefined, lg: "1026px" }}
//       >
//         <Stack
//           direction={{
//             base: "column",
//             sm: "row",
//           }}
//           // border="1px solid #999"
//         >
//           <Partier
//             name="august & frederick gerber"
//             role="RING BEARERS"
//             imgURL={ringBearers}
//             flex={1}
//           />
//           <Partier
//             name="charlotte reichle"
//             role="FLOWER GIRL"
//             imgURL={sarlota}
//             flex={1}
//           />
//         </Stack>

//         <Stack
//           px="24px"
//           direction={{ base: "column", sm: "row" }}
//           // border="1px solid #999"
//           spacing={{ base: "8px", sm: "64px", lg: "8px" }}
//         >
//           <Partier
//             name="andras reichle"
//             role="HEAD OF SECURITY"
//             imgURL={andras}
//             flex={1}
//           />
//           <Partier
//             name="cameron reichle"
//             role="ASST. TO ANDRAS"
//             imgURL={cameron}
//             flex={1}
//           />
//         </Stack>
//       </Flex>
//     </Flex>
//   );
// };

// export default WeddingParty;

// const Partier = ({ name, role, imgURL, flex, mr = 0 }) => {
//   return (
//     <Flex
//       // maxW="232px"
//       w="232px"
//       border="1px solid #ccc"
//       flex={flex}
//       mr={mr}
//       mb={{ base: "24px" }}
//       direction="column"
//       alignItems="center"
//       px={{ base: 0, lg: "16px" }}
//     >
//       <Avatar boxSize={{ base: "250px", sm: "180px" }} mb="8px" src={imgURL} />
//       <Heading
//         fontWeight="700"
//         // fontSize="3xl"
//         fontSize="28px"
//         textAlign="center"
//         lineHeight="28px"
//         mb="4px"
//       >
//         {name}
//       </Heading>
//       <Text letterSpacing="1px">{role}</Text>
//     </Flex>
//   );
// };

// const ColumnContainer = ({ children }) => {
//   return (
//     <Box w={{ base: "100%", sm: "50%" }} px="24px">
//       {children}
//     </Box>
//   );
// };
