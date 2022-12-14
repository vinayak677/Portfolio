import About from "./component/About";
import Footer from "./component/Footer";
import GoogleMap from "./component/GoogleMap";
import Home from "./component/Home";
import Swipers from "./component/Swipers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import { useState } from "react";
import Loader from "./component/Loader";

function App() {
  const [loading,setLoading]= useState(true)

  setTimeout(function(){
    setLoading(false)
 }, 2000);
 
  return (
   <>
    {loading ? <Loader/>: <div>
   
   <BrowserRouter>
   <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/about" element={<About />} ></Route>
            <Route path="/map" element={<GoogleMap />} ></Route>
            <Route path="/project" element={<Swipers />} ></Route>
            </Routes>
            <Footer/>
            </BrowserRouter>
   </div>}
   </>
  );
}

export default App;
