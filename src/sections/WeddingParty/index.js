import React, { useEffect } from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Avatar,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

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

const WeddingParty = ({ setInView }) => {
  const [inViewRef, inView] = useInView({ threshold: 0.01 });

  useEffect(() => {
    console.log("WEDDING PARTY IN VIEW:", inView);
    if (inView) {
      setInView("weddingParty");
    }
  }, [inView]);

  return (
    <Flex
      direction="column"
      alignItems="center"
      // bg="neutral.100"
      bg="#f7f5f1"
      pt="32px"
      pb="24px"
    >
      <Flex direction="column" alignItems="center">
        <Text
          fontSize={{ base: "3xl", sm: "48px" }}
          textAlign="center"
          fontWeight="500"
          w="100%"
          // mt="32px"
          letterSpacing="2px"
        >
          WEDDING PARTY
        </Text>
        <Box h="3px" w="50px" bg="neutral.800" mb="24px" ref={inViewRef} />
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
            role="HEAD USHER"
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
      <Text letterSpacing="1.25px" fontSize="sm">
        {role}
      </Text>
    </Flex>
  );
};
