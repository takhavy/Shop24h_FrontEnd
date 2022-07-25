import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductDetails  from './pages/Product'
import ProductList from './pages/ProductList'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route  path='/products/:paramId' element={<ProductDetails/>}></Route>
        <Route  path='/products' element={<ProductList/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
