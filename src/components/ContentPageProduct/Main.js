import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { Carousel } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Main.css";
export default function ProductDetails() {
  const { paramId } = useParams();
  const [image, setImage] = useState([]);
  const [product, setProduct] = useState("");
  const [type, setType] = useState("");
  const callAPI = async (url, paramOptions = {}) => {
    const res = await fetch(url, paramOptions);
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    callAPI("http://localhost:8000/products/" + paramId)
      .then((data) => {
        console.log(data.data);
        setImage(data.data.imageUrl);
        setProduct(data.data);
        callAPI("http://localhost:8000/productTypes/" +data.data.type)
        .then((res) => {
          console.log(res);
          setType(res.data.name);
        })
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);
  return (
    <Container>
      <Grid container>
        <Grid
          item
          id="product"
          className="section-title"
          style={{
            marginTop: "100px",
            borderLeft: "10px solid pink",
            paddingTop: "20px",
            paddingLeft: "20px",
          }}
        >
          <h2>Product Details</h2>
          <Grid item className="breadcrumbs">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li><a href="/products">All Product</a></li>
              <li>Product Details</li>
            </ol>
          </Grid>
        </Grid>
      </Grid>
      <Grid container mt={5}>
        <Grid item md={7}>
          <Carousel>
            {image.map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={item}
                    alt="Product details slide"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Grid>
        <Grid item md={5}>
          <h3 style={{textAlign:'center',color:'green'}}>
            <b>Project Infomation</b>
          </h3>
            {
              <div style={{marginLeft:'50px',marginTop:'50px'}}>
                <h5 style={{color:'green'}}><b>Chi tiết sản phẩm: </b></h5>
                <p>{product.name}</p>
                <p>
                  <b>Type: </b>  {type}{" "}
                </p>
                <p>
                  <b>Price: </b>  {product.buyPrice}đ - {product.promotionPrice}đ{" "}
                </p>
                <p>
                  <b>Thông số kĩ thuật / Tính năng:</b>{" "}
                </p>
                <p>{product.description} </p>
              </div>
            }
        </Grid>
      </Grid>
    </Container>
  );
}
