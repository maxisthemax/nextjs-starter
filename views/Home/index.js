//*lodash

//*components
import { ImagesCarousel } from "components/Images";

//*material-ui
import Box from "@mui/material/Box";

//*assets

//*redux

//*utils

//*helpers

//*styles

//*custom components
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  //*define

  //*states

  //*const

  //*let

  //*ref

  //*useEffect

  //*functions

  return (
    <Box key="imageCarousel_1" width="100%">
      <ImagesCarousel
        images={[
          "https://source.unsplash.com/1416x800/?gaming%20pc",
          "https://source.unsplash.com/1416x800/?gaming%20setup",
        ]}
      />
    </Box>
  );
}

export default Home;
