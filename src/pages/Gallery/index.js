import React from "react";
import { Box } from "@chakra-ui/react";

import PageContainer from "components/containers/PageContainer";
import GalleryImages from "components/GalleryImages";

const Gallery = () => {
  return (
    <PageContainer center>
      <GalleryImages />
    </PageContainer>
  );
};

export default Gallery;
