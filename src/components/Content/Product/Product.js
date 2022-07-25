import * as React from "react";
import { Button, Container } from "reactstrap";
import CloseIcon from "@mui/icons-material/Close";
import ModalProduct from "./ModalProductSingle";
import "font-awesome/css/font-awesome.min.css";
import "../Product/Product.css";
import { useState,useEffect } from "react";
import { Grid } from "@mui/material";
export default function Product() {
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
  const [openModalProduct, setOpenModalProduct] = useState(false);
  const [descripe, setDescripe] = useState("");
  const [dataImage, setDataImage] = useState([]);
  const handleCloseProduct = () => setOpenModalProduct(false);
  const callAPI = async (url, paramOptions = {}) => {
    const res = await fetch(url, paramOptions);
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    callAPI("http://localhost:8000/products-limit/9")
      .then((data) => {
        console.log(data);
        setDataImage(data.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);
//   let data = [
//     {
//       id: 1,
//       title: "Đèn Chùm Pha Lê Hiện Đại",
//       description: "Đèn trang trí",
//       imgSrc: image1,
//       modalDetail: `Sản Phẩm: ĐÈN CHÙM PHA LÊ 1512
// CHI TIẾT SẢN PHẨM:
// - Chất liệu: Hợp kim cao cấp sơn tĩnh điện, pha lê
// - Kích Thước : D600*H220mm – dây cáp 800mm
// - Nguồn Sáng : Led 3 chế độ
// - Công suất: 55W – 180W
// - Bảo hành: 24 tháng
// * Chế Độ  thay đổi 3 màu, điều khiển từ xa `,
//     },
//     {
//       id: 2,
//       title: "Đèn Chùm Nghệ Thuật",
//       description: "Đèn trang trí",
//       imgSrc: image2,
//       modalDetail: `Sản Phẩm: ĐÈN CHÙM PHA LÊ 1512
// CHI TIẾT SẢN PHẨM:
// - Chất liệu: Hợp kim cao cấp sơn tĩnh điện, pha lê
// - Kích Thước : D600*H220mm – dây cáp 800mm
// - Nguồn Sáng : Led 3 chế độ
// - Công suất: 55W – 180W
// - Bảo hành: 24 tháng
// * Chế Độ  thay đổi 3 màu, điều khiển từ xa `,
//     },
//     {
//       id: 3,
//       title: "Đèn Thả Trang Trí Bằng Đồng ",
//       description: "Đèn trang trí",
//       imgSrc: image3,
//       modalDetail: `Sản Phẩm: ĐÈN CHÙM PHA LÊ 1512
// CHI TIẾT SẢN PHẨM:
// - Chất liệu: Hợp kim cao cấp sơn tĩnh điện, pha lê
// - Kích Thước : D600*H220mm – dây cáp 800mm
// - Nguồn Sáng : Led 3 chế độ
// - Công suất: 55W – 180W
// - Bảo hành: 24 tháng
// * Chế Độ  thay đổi 3 màu, điều khiển từ xa `,
//     },
//     {
//       id: 4,
//       title: "Đèn chùm, đèn chùm thả trần pha lê cao cấp 1512 hiện đại",
//       description: "Đèn trang trí",
//       imgSrc: image4,
//       modalDetail: `Sản Phẩm: ĐÈN CHÙM PHA LÊ 1512
// CHI TIẾT SẢN PHẨM:
// - Chất liệu: Hợp kim cao cấp sơn tĩnh điện, pha lê
// - Kích Thước : D600*H220mm – dây cáp 800mm
// - Nguồn Sáng : Led 3 chế độ
// - Công suất: 55W – 180W
// - Bảo hành: 24 tháng
// * Chế Độ  thay đổi 3 màu, điều khiển từ xa `,
//     },
//     {
//       id: 5,
//       title: "ĐÈN ĐƯỜNG NĂNG LƯỢNG MẶT TRỜI 200W SOLAR LIGHT",
//       description: "Đèn năng lượng mặt trời",
//       imgSrc: image5,
//       modalDetail: `Sản Phẩm: ĐÈN CHÙM PHA LÊ 1512
// CHI TIẾT SẢN PHẨM:
// - Chất liệu: Hợp kim cao cấp sơn tĩnh điện, pha lê
// - Kích Thước : D600*H220mm – dây cáp 800mm
// - Nguồn Sáng : Led 3 chế độ
// - Công suất: 55W – 180W
// - Bảo hành: 24 tháng
// * Chế Độ  thay đổi 3 màu, điều khiển từ xa `,
//     },
//     {
//       id: 6,
//       title: "Quạt Trần Pha Lê Giấu Cánh",
//       description: "Đèn trang trí",
//       imgSrc: image6,
//       modalDetail: `Tính nghệ thuật và tinh tế: Họa tiết trên khung đèn được khắc họa tinh tế tạo ra điểm ấn tượng cho không gian.
//       Khung đèn: Khung hợp kim sơn tĩnh điện bền, đẹp. Khung đèn được khéo léo mạ một lớp vàng bên ngoài giúp làm tăng độ sang trọng của toàn thể chiếc đèn chùm.
//       Chao đèn: Làm từ thủy tinh cao cấp, dày dặn, được bọc trong hộp xốp rất cẩn thận, cho ánh sáng hiển thị cực đẹp do sử dụng bóng LED chuyên dụng.`,
//     },
//     {
//       id: 7,
//       title: "Đèn Trang Trí Để Bàn Bằng Gỗ ",
//       description: "Đèn để bàn",
//       imgSrc: image7,
//       modalDetail: `100% Thương hiệu mới, chất lượng cao

//       Đèn trần Led pha lê hiện đại lãng mạn đẹp, trang trí tốt cho ngôi nhà của bạn.
      
//       Thiết kế đèn LED công suất lớn siêu sáng, chiếu sáng diện tích lớn.
      
//       Tiết kiệm năng lượng, sử dụng bền bỉ.
      
//       Bức xạ nhanh, bảo vệ an toàn linh kiện điện tử.
      
//       Tích hợp ổ đĩa IC thông minh, ngăn ngừa quá điện áp, tuổi thọ dài an toàn.
      
//       Dễ dàng cài đặt, không cần bảo trì, trình điều khiển bên ngoài. `,
//     },
//   ];
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
            paddingBottom: "20px",
            paddingLeft: "20px",
          }}
        >
          <h2>Product</h2>
        </Grid>
        <Grid item>
          <Button
            color="success"
            style={{
              marginTop: "125px",
              marginLeft: "1035px",
            }}
            outline
            onClick={()=>{window.location.href = '/products'}}
          >
            More detail
          </Button>
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
      <div className="gallery">
        {dataImage.map((item, index) => {
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
      </div>
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
