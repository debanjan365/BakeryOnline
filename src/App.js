import NavbarComponent from './HomepageComponents/NavbarComponent.jsx';
import CarouselComponent from './HomepageComponents/CarouselComponent.jsx';
import BestSelling from './HomepageComponents/BestSellingComponent.jsx';
import FoodGallery from './HomepageComponents/FoodGallery.jsx';
import AddressMap from './HomepageComponents/Map.jsx';
import Footer from './HomepageComponents/FooterComponent.jsx';
function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <CarouselComponent/>
      <BestSelling/>
      <FoodGallery/>
      <AddressMap/>
      <Footer/>
    </div>
  );
}

export default App;
