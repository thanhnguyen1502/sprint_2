import './App.css';
import {Route, Router, Routes} from "react-router";
import Login from "./component/login";
import Home from "./component/home";
import Shop from "./component/shop";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Cart from "./component/Cart";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/shop" element={<Shop/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
