import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//*lodash

//*components

//*material-ui
import Box from "@mui/material/Box";

//*assets

//*redux

//*utils

//*helpers

//*style

//*custom components

function ImagesCarousel({ images = [], interval = 20000 }) {
  //*define

  //*states

  //*const

  //*let

  //*ref

  //*useEffect

  //*functions

  return (
    <Carousel
      showStatus={false}
      dynamicHeight={true}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={interval}
      swipeable={true}
    >
      {images.map((image) => (
        <Box>
          <img style={{ height: "530px", objectFit: "cover" }} src={image} />
        </Box>
      ))}
    </Carousel>
  );
}
export default ImagesCarousel;
