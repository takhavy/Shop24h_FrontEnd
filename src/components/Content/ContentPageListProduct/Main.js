import * as React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import CloseIcon from "@mui/icons-material/Close";
import ModalProduct from "../Product/ModalProductSingle";
import "font-awesome/css/font-awesome.min.css";
import "./Main.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Pagination,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
export default function ProductList() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 850,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const dispatch = useDispatch();
  const { allProduct, min, max, productType } = useSelector(
    (reduxData) => reduxData.taskReducer
  );

  //Limit: Số lượng bản ghi trên 1 trang
  //const limit = 10;
  const limit = 9;

  //Số trang: Tổng số lượng sản phẩm / limit - Số lớn hơn gần nhất
  const [countPage, setcountPage] = useState(0);
  const [type, setType] = useState([]);
  //Trang hiện tại:
  const [page, setPage] = useState(1);
  const [openModalProduct, setOpenModalProduct] = useState(false);
  const [descripe, setDescripe] = useState("");
  const handleCloseProduct = () => setOpenModalProduct(false);
  const callAPI = async (url, paramOptions = {}) => {
    const res = await fetch(url, paramOptions);
    const data = await res.json();
    return data;
  };
  const onChangePagination = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    if (
      (min === 0 || min === undefined) &&
      (max === 0 || max === undefined) &&
      productType === ""
    ) {
      callAPI("http://localhost:8000/products")
        .then((data) => {
          console.log(data);
          dispatch({
            type: "ALL_PRODUCT",
            data: data.data.slice((page - 1) * limit, page * limit),
            countPage: Math.ceil(data.data.length / limit),
          });
          setcountPage(Math.ceil(data.data.length / limit));
        })
        .catch((error) => {
          console.error(error.message);
        });
    } else if (
      (min === undefined || max === undefined) &&
      !(productType === "")
    ) {
      callAPI(`http://localhost:8000/products?type=${productType}`)
        .then((data) => {
          dispatch({
            type: "ALL_PRODUCT",
            data: data.data.slice((page - 1) * limit, page * limit),
            countPage: Math.ceil(data.data.length / limit),
          });
          setcountPage(Math.ceil(data.data.length / limit));
        })
        .catch((error) => {
          console.error(error.message);
        });
    } else if (min === undefined || max === 0 && !(productType === "")) {
      callAPI(`http://localhost:8000/products?max=${max}&type=${productType}`)
        .then((data) => {
          dispatch({
            type: "ALL_PRODUCT",
            data: data.data.slice((page - 1) * limit, page * limit),
            countPage: Math.ceil(data.data.length / limit),
          });
          setcountPage(Math.ceil(data.data.length / limit));
        })
        .catch((error) => {
          console.error(error.message);
        });
    } else if (max === undefined || max === 0 && !(productType === "")) {
      callAPI(`http://localhost:8000/products?min=${min}&type=${productType}`)
        .then((data) => {
          dispatch({
            type: "ALL_PRODUCT",
            data: data.data.slice((page - 1) * limit, page * limit),
            countPage: Math.ceil(data.data.length / limit),
          });
          setcountPage(Math.ceil(data.data.length / limit));
        })
        .catch((error) => {
          console.error(error.message);
        });
    } else {
      callAPI(
        `http://localhost:8000/products?min=${min}&max=${max}&type=${productType}`
      )
        .then((data) => {
          dispatch({
            type: "ALL_PRODUCT",
            data: data.data.slice((page - 1) * limit, page * limit),
            countPage: Math.ceil(data.data.length / limit),
          });
          setcountPage(Math.ceil(data.data.length / limit));
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
    //http://localhost:8000/products?min=${min}&max=${max}&type=${productType}
    // callAPI("http://localhost:8000/products")
    //   .then((data) => {
    //     console.log(data);
    //     setcountPage(Math.ceil(data.data.length / limit));
    //     setRows(data.data.slice((page - 1) * limit, page * limit));
    //   })
    //   .catch((err) => {
    //     console.error(err.message);
    //   });
  }, [page, limit, min, max, productType]);
  useEffect(() => {
    callAPI("http://localhost:8000/productTypes")
      .then((data) => {
        console.log(data.data);
        setType(data.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  const getModal = async (detailProp) => {
    fetch(setDescripe(detailProp))
      .then((res) => {
        console.log(res);
        console.log(detailProp);
      })
      .then(setOpenModalProduct(true));
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    dispatch({
      type: "FILTER_TYPE",
      productType: event.target.value,
    });
  };

  const changeMinPrice = (e) => {
    console.log(e.target.value);
    dispatch({
      type: "FILTER_MIN_PRICE",
      min: e.target.value,
    });
  };

  const changeMaxPrice = (e) => {
    console.log(e.target.value);
    dispatch({
      type: "FILTER_MAX_PRICE",
      max: e.target.value,
    });
  };
  return (
    <Container>
      <Grid container>
        <Grid
          item
          id="product"
          className="section-title"
          style={{
            marginTop: "100px",
            marginBottom: "50px",
            borderLeft: "10px solid pink",
            paddingTop: "20px",
            paddingLeft: "20px",
          }}
          md={3}
        >
          <h2>Product List</h2>
          {/*Breadcrumb*/}
          <Grid item className="breadcrumbs">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>All Product</li>
            </ol>
          </Grid>
        </Grid>
        <Grid item md={9}>
          <Grid container mt={15} justifyContent={"flex-end"}>
            <Row style={{ alignItems: "center" }}>
              <h5>Filter:</h5>
              <Col>
                <TextField
                  onChange={changeMinPrice}
                  type="number"
                  size="small"
                  label="Min"
                />
              </Col>
              <Col>
                <TextField
                  onChange={changeMaxPrice}
                  type="number"
                  size="small"
                  label="Max"
                />
              </Col>
              <Col>
                <FormControl fullWidth>
                  <InputLabel>Type</InputLabel>
                  <Select label="Type" onChange={handleChange}>
                    {type.map((type, index) => {
                      return (
                        <MenuItem key={index} value={type._id}>
                          {type.name}{" "}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Col>
            </Row>
          </Grid>
        </Grid>
      </Grid>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="img-product" />
        <CloseIcon
          onClick={() => {
            setModel(false);
          }}
        />
      </div>
      <Grid item md={12} className="gallery">
        {allProduct.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img
                src={item.imageUrl[0]}
                style={{
                  width: "100%",
                  zIndex: "1",
                  transition: "all easeInOut 0.3s",
                }}
                alt="img-product"
              />
              <div className="portfolio-info">
                <h4>{item.name} </h4>
                <div className="portfolio-links">
                  <a
                    title="Xem"
                    onClick={() => {
                      getImg(item.imageUrl[0]);
                    }}
                  >
                    <i className="fa-solid fa-eye"></i>
                  </a>
                  <a
                    title="Chi tiết"
                    onClick={() => {
                      setTempImgSrc(item.imageUrl[0]);
                      getModal(item);
                    }}
                  >
                    <i className="fa-solid fa-link"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </Grid>
      <Grid container mt={3} mb={3} justifyContent="flex-end">
        <Grid item>
          <Pagination
            count={countPage}
            defaultPage={page}
            onChange={onChangePagination}
          />
        </Grid>
      </Grid>
      <ModalProduct
        openModalProduct={openModalProduct}
        handleCloseProduct={handleCloseProduct}
        style={style}
        ImageProps={tempImgSrc}
        descriptionProp={descripe}
      />
    </Container>
  );
}
