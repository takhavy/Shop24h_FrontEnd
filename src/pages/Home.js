import { Container } from "reactstrap";
import Content from "../components/Content/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <Container fluid className='p-0'>
      <Header/>
      <Content/>
      <Footer/>
    </Container>
  );
}

export default Home;
