import { Global } from "@emotion/react";

const Fonts = () => {
  return (
    <Global
      styles={`
    @font-face {
      font-family: 'Cormorant Garamond';
      font-style: bold;
      font-weight: 700;
      font-display: swap;
      src: url('./Cormorant_Garamond/CormorantGaramond-Bold.ttf') format('truetype');
    }
    
    @font-face {
      font-family: 'Cabin';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('./Cabin/Cabin-Regular.ttf') format('truetype');
    }
    `}
    />
  );
};

export default Fonts;
