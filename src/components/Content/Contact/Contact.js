import { Grid } from "@mui/material";
import { Container, Form, FormGroup, Label, Col, Row,Input, Button } from "reactstrap";
import "./Contact.css";
export default function Contact() {
  return (
    <Container>
      <div
      id="contact"
        className="section-title"
        style={{
          marginTop: "50px",
          marginBottom: "50px",
          borderLeft: "10px solid pink",
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "20px",
        }}
      >
        <h2>Contact</h2>
      </div>
      <Grid container>
        <Grid item md={5} alignItems>
          <div className="info">
            <div className="address">
              <i className="fa-solid fa-location-dot"></i>
              <h4>Địa chỉ:</h4>
              <p>
                231 Đ. Nam Kỳ Khởi Nghĩa, Phường 14, Quận 3, Thành phố Hồ Chí
                Minh 72415, Vietnam
              </p>
            </div>

            <div className="email">
              <i className="fa-solid fa-envelope-circle-check"></i>
              <h4>Email:</h4>
              <p>ngoinhaxinh88@gmail.com</p>
            </div>

            <div className="phone">
              <i className="fa-solid fa-square-phone"></i>
              <h4>Số điện thoại:</h4>
              <p>0933784226</p>
            </div>

            <div style={{ width: "100%" }} className="google-map-code">
              <iframe
              title="address"
                width="100%"
                height="290"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=290&amp;hl=en&amp;q=C%C3%B4ng%20Ty%20Thi%E1%BA%BFt%20K%E1%BA%BF%20N%E1%BB%99i%20Th%E1%BA%A5t%20Nh%C3%A0%20Xinh%20-%20Qu%E1%BA%ADn%203,%20%C4%90%C6%B0%E1%BB%9Dng%20Nam%20K%E1%BB%B3%20Kh%E1%BB%9Fi%20Ngh%C4%A9a,%20V%C3%B5%20Th%E1%BB%8B%20S%C3%A1u,%20District%203,%20Ho%20Chi%20Minh%20City,%20Vietnam+(Ngoi%20nha%20xinh)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/farm-gps/">agricultural gps</a>
              </iframe>
            </div>
          </div>
        </Grid>
        <Grid item md={7} alignItems>
          <Form className="form-contact">
            <Row>
              <Col sm={6}>
                <FormGroup>
                  <Label for="Name" >
                    Họ và tên
                  </Label>
                  <Col >
                    <Input name="name" />
                  </Col>
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup>
                  <Label for="Email" >
                    Email
                  </Label>
                  <Col >
                    <Input name="email" />
                  </Col>
                </FormGroup>
              </Col>
            </Row>
            <Col sm={12}>
            <FormGroup>
                  <Label for="address" >
                    Địa chỉ
                  </Label>
                  <Col >
                    <Input name="address" />
                  </Col>
                </FormGroup>
            </Col>
            <Col sm={12}>
            <FormGroup>
                  <Label for="title" >
                    Tiêu đề
                  </Label>
                  <Col >
                    <Input name="title" />
                  </Col>
                </FormGroup>
            </Col>
            <Col sm={12}>
            <FormGroup>
                  <Label for="message" >
                    Lời nhắn
                  </Label>
                  <Col >
                    <Input type="textarea" name="message" style={{height:'200px'}} />
                  </Col>
                </FormGroup>
            </Col>
            <Button color="success" style={{paddingLeft:'40px',paddingRight:'40px',marginLeft:'300px',marginTop:'12.5px'}}>Gửi</Button>
          </Form>
        </Grid>
      </Grid>
    </Container>
  );
}
