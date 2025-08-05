import "./App.css";
import Navigation from "./Customer/Components/Navigation/Navigation";
import HomePage from "./Customer/Pages/HomePage/HomePage";
import Footer from "./Customer/Components/Footer/Footer";
import Product from "./Customer/Components/Product/Product";
import ProductDetails from "./Customer/Components/ProductDetails/ProductDetails";
import Cart from "./Customer/Components/Cart/Cart";
import Checkout from "./Customer/Components/Checkout/Checkout";
import Order from "./Customer/Components/Order/Order";
import OrderDetail from "./Customer/Components/Order/OrderDetail";
function App() {
  return (
    <>
      <Navigation />
      <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Order/> */}
        <OrderDetail/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
