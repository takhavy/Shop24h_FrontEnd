import { Container } from "reactstrap";
import Content from "../components/ContentPageProduct/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Product() {
  return (
    <Container fluid className='p-0'>
      <Header/>
      <Content/>
      <Footer/>
    </Container>
  );
}

export default Product;
