import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import Footer from "./Components/Footer/Footer";
import LoginSign from "./Pages/LoginSign";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/mens"
          element={<ShopCategory category="men" banner={men_banner} />}
        />
        <Route
          path="/womens"
          element={<ShopCategory category="women" banner={women_banner} />}
        />
        <Route
          path="/kids"
          element={<ShopCategory category="kid" banner={kid_banner} />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSign />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
