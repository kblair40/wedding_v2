import React from "react";
import { Box } from "@chakra-ui/react";

import PageContainer from "components/containers/PageContainer";
import GalleryImages from "components/GalleryImages";

const Gallery = () => {
  return (
    <PageContainer center px={{ base: "16px", md: "24px" }}>
      <GalleryImages />
    </PageContainer>
  );
};

export default Gallery;
