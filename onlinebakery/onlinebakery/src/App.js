import NavbarComponent from "./HomepageComponents/NavbarComponent.jsx";
import CarouselComponent from "./HomepageComponents/CarouselComponent.jsx";
import BestSelling from "./HomepageComponents/BestSellingComponent.jsx";
import {LazyLoad} from "react-observer-api";
import { useLocation, Routes, Route } from "react-router-dom";
import CartContainer from "./AddToCart/Cart.jsx";
import Shop from "../src/Shop/ProductComponent.jsx";
import Login from "../src/Login/Login.jsx";
import Signup from "../src/Login/Registration/Registration.jsx";
import React, { useState } from "react";
import MyContext from "./context/Context.js";
import FoodGallery from "./HomepageComponents/FoodGallery.jsx";
import Howitworks from "./HomepageComponents/HowItWorks.jsx";
import Reviews from "./HomepageComponents/Review.jsx";
import Feedback from "./HomepageComponents/Feedback.jsx";
import AddressMap from "./HomepageComponents/Map.jsx";
import Footer from "./HomepageComponents/Footer.jsx";
import About from "./HomepageComponents/About.jsx";


function App() {
  const location=useLocation();
  const [cartData, setCartData] = useState([]);
  return (
    <MyContext.Provider value={{ cartData, setCartData }}>
      <div className="">
         <LazyLoad>
          <div>
          <NavbarComponent status={location.state}/>
          </div>
          <Routes>
            <Route
              index
              element={
                <div>
                  <CarouselComponent />
                  <BestSelling />
                  <FoodGallery />
                  <Howitworks />
                  <Reviews />
                  <Feedback />
                  <AddressMap />
                  <Footer />
                </div>
              }
            />
            <Route path="shop" element={<Shop />} />
            <Route path="cart" element={<CartContainer />} />
            <Route path="about" element={<About/>} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
          </LazyLoad>
      </div>
    </MyContext.Provider>
  );
}

export default App;
