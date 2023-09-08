import { Row, Col, List } from "reactstrap";
import { Typography } from "@mui/material";
import "font-awesome/css/font-awesome.min.css";
import { Container } from "react-bootstrap";
import logo from "../assets/image/logo/NgoiNhaXinhlogo3.png";
export default function Footer() {
  return (
    <Container
      fluid
      className="text-center"
      style={{ backgroundColor: "black", color: "white", marginTop: "100px" }}
    >
      <Row>
        <Col style={{ marginTop: "60px", marginLeft: "100px" }}>
          <Typography variant="h6" gutterBottom mt={5}>
            <b>Product</b>
          </Typography>
          <List type="unstyled">
            <li>Help Center</li>
            <li>Contact us</li>
            <li>Product Help</li>
            <li>Warrantly</li>
            <li>Order Status</li>
          </List>
        </Col>
        <Col style={{ marginTop: "60px", marginLeft: "100px" }}>
          <Typography variant="h6" gutterBottom mt={5}>
            <b>Service</b>
          </Typography>
          <List type="unstyled">
            <li>Help Center</li>
            <li>Contact us</li>
            <li>Product Help</li>
            <li>Warrantly</li>
            <li>Order Status</li>
          </List>
        </Col>
        <Col style={{ marginTop: "60px", marginLeft: "100px" }}>
          <Typography variant="h6" gutterBottom mt={5}>
            <b>Support</b>
          </Typography>
          <List type="unstyled">
            <li>Help Center</li>
            <li>Contact us</li>
            <li>Product Help</li>
            <li>Warrantly</li>
            <li>Order Status</li>
          </List>
        </Col>
        <Col style={{ marginBottom: "50px", marginTop: "30px" }} md={5}>
          <div>
            <img
              style={{ width: "180px" }}
              src={logo}
              alt="logo-ngoi-nha-xinh"
            />
          </div>
          <Typography variant="h4" gutterBottom>
            <b>Ngôi Nhà Xinh</b>
          </Typography>
          <div className="m-2">
            <a href="" className="facebook">
              <i
                className="fa-brands fa-facebook"
                style={{ marginRight: "15px" }}
              ></i>
            </a>
            <a href="" className="twitter">
              <i
                className="fa-brands fa-twitter"
                style={{ marginRight: "15px" }}
              ></i>
            </a>
            <a href="" className="instagram">
              {" "}
              <i
                className="fa-brands fa-instagram"
                style={{ marginRight: "15px" }}
              ></i>
            </a>
            <a href="" className="linkedin">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <small>
            <b>Powered by DEVCAMPfff</b>
          </small>
        </Col>
      </Row>
    </Container>
  );
}
