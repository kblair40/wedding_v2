import React, { useEffect } from "react";
import { Text, Heading, Flex, Grid, GridItem, Box } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import loadable from "@loadable/component";

import SectionLabel from "components/SectionLabel";

import ringBearers from "assets/images/wedding_party/augustfrederick.webp"; // good
import sarlota from "assets/images/wedding_party/sarlota.webp"; // good
import andras from "assets/images/wedding_party/andras.webp";
import cameron from "assets/images/wedding_party/cameron.webp"; // good
import ted2 from "assets/images/wedding_party/ted2.webp";
import trevor from "assets/images/wedding_party/trevor.webp";
import caleb3 from "assets/images/wedding_party/caleb3.webp";
import andrew2 from "assets/images/wedding_party/andrew2.webp";
import karissa from "assets/images/wedding_party/karissa.webp"; // good
import cassidy from "assets/images/wedding_party/cassidy.webp";
import erin2 from "assets/images/wedding_party/erin2.webp"; // good
import kelly2 from "assets/images/wedding_party/kelly2.webp"; // good
import margot from "assets/images/wedding_party/margot.jpg"; // good

const Us = loadable(() => import("components/Us"));

const WeddingParty = ({ setInView, scrollPosition }) => {
  const [inViewRef, inView] = useInView({ threshold: 0.01 });

  useEffect(() => {
    if (inView) {
      setInView("weddingParty");
    }
  }, [inView]);

  return (
    <Flex direction="column" alignItems="center" bg="#fff" pb="24px">
      <SectionLabel label="wedding party" />

      <Us />

      <Grid
        rowGap={{ base: "1rem", sm: "1.25rem", md: "1rem" }}
        columnGap={{ sm: "1rem" }}
        justifyItems={{ base: "center" }}
        templateAreas={{
          base: `
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
          'margot'
          'andras'
          'cam'
        `,
          sm: `
          'erin caleb'
          'kelly trevor'
          'karissa andrew'
          'cassidy ted'
          'rb fg'
          'andras cam'
        `,
          lg: `
          'erin kelly caleb trevor'
          'karissa cassidy andrew ted'
          'rb fg andras cam'
        `,
        }}
      >
        <GridItem gridArea="caleb" ref={inViewRef}>
          <Partier
            name="caleb magnuson"
            role="BEST MAN"
            imgURL={caleb3}
            position="center 20%"
            scrollPosition={scrollPosition}
          />
        </GridItem>

        <GridItem gridArea="trevor">
          <Partier
            name="trevor weidner"
            role="GROOMSMAN"
            imgURL={trevor}
            position="center 20%"
            scrollPosition={scrollPosition}
          />
        </GridItem>

        <GridItem gridArea="andrew">
          <Partier
            name="andrew payne"
            role="GROOMSMAN"
            imgURL={andrew2}
            position="center 10%"
            scrollPosition={scrollPosition}
          />
        </GridItem>
        <GridItem gridArea="ted">
          <Partier
            name="ted keller"
            role="GROOMSMAN"
            imgURL={ted2}
            position="center 10%"
            scrollPosition={scrollPosition}
          />
        </GridItem>

        <GridItem gridArea="erin">
          <Partier
            name="erin dunne"
            role="MAID OF HONOR"
            imgURL={erin2}
            position="center 10%"
            scrollPosition={scrollPosition}
          />
        </GridItem>
        <GridItem gridArea="kelly">
          <Partier
            name="kelly brown"
            role="MATRON OF HONOR"
            imgURL={kelly2}
            position="center 10%"
            scrollPosition={scrollPosition}
          />
        </GridItem>

        <GridItem gridArea="karissa">
          <Partier
            name="karissa leith"
            role="MAIDEN OF HONOR"
            imgURL={karissa}
            position="center 45%"
            scrollPosition={scrollPosition}
          />
        </GridItem>

        <GridItem gridArea="cassidy">
          <Partier
            name="cassidy gerber"
            role="BRIDESMAID"
            imgURL={cassidy}
            scrollPosition={scrollPosition}
          />
        </GridItem>

        <GridItem mt={{ lg: "2rem" }} gridArea="rb">
          <Partier
            name="august & frederick gerber"
            role="RING BEARERS"
            imgURL={ringBearers}
            position="center 30%"
            scrollPosition={scrollPosition}
          />
        </GridItem>

        <GridItem mt={{ lg: "2rem" }} gridArea="fg">
          <Partier
            name="sarlota reichle"
            role="FLOWER GIRL"
            imgURL={sarlota}
            scrollPosition={scrollPosition}
          />
        </GridItem>

        <GridItem mt={{ lg: "2rem" }} gridArea="andras">
          <Partier
            name="andras reichle"
            role="HEAD USHER"
            imgURL={andras}
            position="center 10%"
            scrollPosition={scrollPosition}
          />
        </GridItem>

        <GridItem mt={{ lg: "2rem" }} gridArea="cam">
          <Partier
            name="cameron reichle"
            role="ASST. TO ANDRAS"
            imgURL={cameron}
            scrollPosition={scrollPosition}
            flex={1}
          />
        </GridItem>

        <GridItem mt={{ lg: "2rem" }} gridArea="margot">
          <Partier
            name="Margot Desmarais"
            role="Flower Girl"
            imgURL={margot}
            scrollPosition={scrollPosition}
            flex={1}
          />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default trackWindowScroll(WeddingParty);

export const Partier = ({ name, role, imgURL, scrollPosition }) => {
  return (
    <Box>
      <Flex
        className="partier"
        w={{ base: "280px", sm: "232px" }}
        direction="column"
        alignItems="center"
        px={{ base: 0, lg: "16px" }}
      >
        <Box
          boxSize={{ base: "250px", sm: "180px" }}
          borderRadius="full"
          mb="8px"
          overflow="hidden"
        >
          <LazyLoadImage
            height="100%"
            width="100%"
            alt="image of member of wedding party"
            src={imgURL}
            effect="opacity"
            scrollPosition={scrollPosition}
            threshold={3000}
          />
        </Box>

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
    </Box>
  );
};
