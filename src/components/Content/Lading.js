import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../../assets/image/slide/image.png";
import image2 from "../../assets/image/slide/pexels-max-vakhtbovych-6758237.jpg";
import image3 from "../../assets/image/slide/pexels-rachel-claire-5490917.jpg";
import image4 from "../../assets/image/slide/image1.png";
import { Container } from "reactstrap";
import { Carousel } from "react-bootstrap";
export default function Lading() {
  return (
    <Container fluid className="p-0">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Second slide" />

          <Carousel.Caption>
            <h1>The largest lighting selection</h1>
            <h2> Enhance your home interior</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100"  src={image2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
