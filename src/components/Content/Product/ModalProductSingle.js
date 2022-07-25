import { Grid, Box, Modal, Typography } from "@mui/material";
import { Button, Container } from "reactstrap";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
export default function SingleProductModal({
  ImageProps,
  openModalProduct,
  style,
  handleCloseProduct,
  descriptionProp,
}) {
  const [model, setModel] = useState(false);
  const getImg = () => {
    setModel(true);
  };
  const productDetails=()=>{
      window.location.href = '/products/'+descriptionProp._id;
  }
  return (
    <Container>
      <Modal
        open={openModalProduct}
        onClose={handleCloseProduct}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Grid item md={8} style={{ width: "80%", height: "70vh" }}>
              <img
                style={{ height: "500px", width: "85%" }}
                src={ImageProps}
                alt="image-product"
                onClick={() => {
                  getImg();
                }}
              />
            </Grid>
            <Grid item md={4}>
              <Typography
                mb={2}
                id="modal-modal-title"
                variant="h6"
                component="h6"
                mt={20}
              >
                <b>MÔ TẢ SẢN PHẨM:</b>
              </Typography>
              <p> {descriptionProp.name}</p>
              <p>Giá: {descriptionProp.promotionPrice}đ - {descriptionProp.buyPrice}đ</p>
              {/*
                            {
                descriptionProp.map((item,index)=>{
                  return (<p key={index}>{item}</p>)
                })
              }

              <p>- Màu sắc: có 3 chế độ sáng trắng, vàng và trung tính.</p>
              <p>- Loại: Đèn thả pha lê</p>
              <p>- Xuất xứ: 100% nhập khẩu</p>
              <p>- Kích thước:</p>
              <p>+ Thả 3 vòng D=30*50*70cm, dày 5cm</p>
              <p>+ Thả 3 vòng D=40*60*80cm, dày 5cm</p>
              <p>- Chất liệu: Pha lê cao cấp</p>
              <p>- Loại bóng sử dụng: Led</p>
              <p>
                - Ứng dụng: Phòng khách, sảnh, nhà hàng, khách sạn, phòng hội
                nghị…
              </p>
              */}
            </Grid>
          </Grid>
          <Button color="success" outline style={{ marginLeft: "600px" }} onClick={()=>{productDetails()}}>
            Chi tiết sản phẩm <NavigateNextIcon />
          </Button>
        </Box>
      </Modal>
      <div className={model ? "model open" : "model"}>
        <img src={ImageProps} alt="img-product" />
        <CloseIcon
          onClick={() => {
            setModel(false);
          }}
        />
      </div>
    </Container>
  );
}
