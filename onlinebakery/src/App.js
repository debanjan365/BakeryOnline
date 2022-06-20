import NavbarComponent from "./HomepageComponents/NavbarComponent.jsx";
import CarouselComponent from "./HomepageComponents/CarouselComponent.jsx";
import BestSelling from "./HomepageComponents/BestSellingComponent.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./AddToCart/Cart.jsx";
import Shop from "../src/Shop/ProductComponent.jsx";
import Login from "../src/Login/Login.jsx";
import Registration from "../src/Login/Registration/Registration.jsx";




function App() {
  return (
    <div className="">
      <BrowserRouter>
        <div>
          <NavbarComponent />
        </div>
        <Routes>
          <Route
            index
            element={
              <div>
                <CarouselComponent />
                <BestSelling />
              </div>
            }
          />
          <Route path="shop" element={<Shop />} /> 
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
