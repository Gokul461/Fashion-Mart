import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; 
import Nav from "./components/navbar/nav";
import Shop from "./components/pages/shop/shop";
import Footer from "./components/footer/footer";
import ShopCategory from "./components/shopcategory/shopcategory";
import men_banner from "./assets/images/menbanner3.png";
import women_banner from "./assets/images/womanbanner.png";
import Homeliving_banner from "./assets/images/homebanner.png";
import Beauty_banner from "./assets/images/beautybanner2.jpg";
import kids_banner from "./assets/images/kidsbanner.png";
import Menslider from "./components/slider/Men slider/mslider";
import Womanslider from "./components/slider/womanslider/womanslider";
import Kidslider from "./components/slider/kidsslider";
import men_img from "./assets/images/menimg.png";
import women_img from "./assets/images/womanimg.png";
import kids_img from "./assets/images/kidsbanner2.png";
import beauty_img from "./assets/images/beautyimg.png";
import Homeliving_img from "./assets/images/homelivingban.png";
import Page404 from "./components/pages/page404";
import Paymentslider from "./components/slider/paymenslider";
import ProductDetails from "./components/productdetails/productdetails";
import Cart from "./components/pages/shop/cart";
import { ToastContainer } from "react-toastify";
import Swiper2 from "./components/swiper/swiper2";
import Ordersuccess from './components/pages/shop/ordersuccess'
import Login from "./components/navbar/profile/ProfileMenus/Login/login";
import Giftcards from "./components/navbar/profile/ProfileMenus/GiftCards/Giftcards";
import Coupons from "./components/navbar/profile/ProfileMenus/Coupons/Coupons";
import Contact from "./components/navbar/profile/ProfileMenus/Contact/Contact";
import Wishlist from "./components/pages/shop/Wishlist";
import  SerachRender from "./components/navbar/search/SerachRender";
function App() {
  return (
    <div className="bg-white">
      <Router>
        <ScrollToTop /> 
        <ToastContainer />
        <Nav />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={
              <ShopCategory
                slider={<Menslider />}
                banner={men_banner}
                banner2={men_img}
                category="men"
              />
            }
          />
          <Route
            path="/women"
            element={
              <ShopCategory
                slider={<Womanslider />}
                banner={women_banner}
                banner2={women_img}
                category="women"
              />
            }
          />
          <Route
            path="/kids"
            element={
              <ShopCategory
                slider={<Kidslider />}
                banner={kids_banner}
                banner2={kids_img}
                category="kid"
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route
            path="/homeandliving"
            element={
              <ShopCategory
                banner={Homeliving_banner}
                banner2={Homeliving_img}
                category="homeandliving"
              />
            }
          />
          <Route
            path="/beauty"
            element={
              <ShopCategory
                banner={Beauty_banner}
                banner2={beauty_img}
                category="beauty"
              />
            }
          />
          <Route path = "/search-results" element={<SerachRender />} />
          <Route path="/ordersuccess" element={<Ordersuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/orders" element={<Cart />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/giftcards" element={<Giftcards />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>

        <Paymentslider />
        <Swiper2 />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
