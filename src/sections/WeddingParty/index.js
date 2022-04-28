import React, { useEffect } from "react";
import {
  Text,
  Heading,
  Flex,
  Avatar,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import SectionLabel from "components/SectionLabel";

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
import ted from "assets/images/wedding_party/ted.jpeg";
import trevor from "assets/images/wedding_party/trevor.jpeg";
import caleb from "assets/images/wedding_party/caleb.jpeg";
import andrew from "assets/images/wedding_party/andrew.jpg";

import karissa from "assets/images/wedding_party/karissa.jpg";
import cassidy from "assets/images/wedding_party/cassidy.jpeg";
import erin from "assets/images/wedding_party/erin.jpeg";
import kelly from "assets/images/wedding_party/kelly.jpeg";

const WeddingParty = ({ setInView }) => {
  const [inViewRef, inView] = useInView({ threshold: 0.01 });

  useEffect(() => {
    console.log("WEDDING PARTY IN VIEW:", inView);
    if (inView) {
      setInView("weddingParty");
    }
  }, [inView]);

  return (
    <Flex direction="column" alignItems="center" bg="#f7f5f1" pb="24px">
      <SectionLabel label="wedding party" />

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

        <GridItem gridArea="caleb" ref={inViewRef}>
          <Partier
            name="caleb magnuson"
            role="BEST MAN"
            imgURL={caleb}
            position="center 0%"
          />
        </GridItem>

        <GridItem gridArea="trevor">
          <Partier
            name="trevor weidner"
            role="GROOMSMAN"
            imgURL={trevor}
            position="center 20%"
          />
        </GridItem>

        <GridItem gridArea="andrew">
          <Partier
            name="andrew payne"
            role="GROOMSMAN"
            imgURL={andrew}
            position="center 10%"
          />
        </GridItem>
        <GridItem gridArea="ted">
          <Partier
            name="ted keller"
            role="GROOMSMAN"
            imgURL={ted}
            position="center 10%"
          />
        </GridItem>

        <GridItem gridArea="bride">
          <Partier
            name="shannon dunne"
            role="BRIDE"
            imgURL={shannon}
            position="center 20%"
          />
        </GridItem>

        <GridItem gridArea="erin">
          <Partier
            name="erin dunne"
            role="MAID OF HONOR"
            imgURL={erin}
            position="center 0%"
          />
        </GridItem>
        <GridItem gridArea="kelly">
          <Partier
            name="kelly dunne"
            role="MATRON OF HONOR"
            imgURL={kelly}
            position="center 0%"
          />
        </GridItem>

        <GridItem gridArea="karissa">
          <Partier
            name="karissa leith"
            role="BRIDESMAID"
            imgURL={karissa}
            position="center 40%"
          />
        </GridItem>

        <GridItem gridArea="cassidy">
          <Partier name="cassidy blair" role="BRIDESMAID" imgURL={cassidy} />
        </GridItem>

        <GridItem mt={{ lg: "2rem" }}>
          <Partier
            gridArea="rb"
            name="august & frederick gerber"
            role="RING BEARERS"
            imgURL={ringBearers}
            position="center 30%"
          />
        </GridItem>

        <GridItem mt={{ lg: "2rem" }}>
          <Partier
            gridArea="fg"
            name="charlotte reichle"
            role="FLOWER GIRL"
            imgURL={sarlota}
          />
        </GridItem>

        <GridItem mt={{ lg: "2rem" }}>
          <Partier
            gridArea="andras"
            name="andras reichle"
            role="HEAD USHER"
            imgURL={andras}
            position="center 10%"
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

const Partier = ({ name, role, imgURL, position = "center 50%" }) => {
  return (
    <Flex
      w={{ base: "280px", sm: "232px" }}
      direction="column"
      alignItems="center"
      px={{ base: 0, lg: "16px" }}
    >
      <Box
        borderRadius="full"
        boxSize={{ base: "250px", sm: "180px" }}
        mb="8px"
        bgImage={imgURL}
        bgPosition={position}
        bgRepeat="no-repeat"
        bgSize="cover"
      />
      {/* <Avatar boxSize={{ base: "250px", sm: "180px" }} mb="8px" src={imgURL} /> */}
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
