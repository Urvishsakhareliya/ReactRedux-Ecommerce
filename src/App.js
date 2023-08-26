// import logo from "./logo.svg";
import "./assets/css/App.css";
import "./assets/css/responsive.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import WishList from "./pages/WishList";
import Navbar from "./component/Navbar";
import ProductsDetails from "./pages/ProductsDetails";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Products />} />
        <Route
          path="/ProductDetails/:ProductId"
          element={<ProductsDetails />}
        />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/WishList" element={<WishList />} />
      </Routes>
    </>
  );
}

export default App;
