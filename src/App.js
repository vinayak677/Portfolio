import About from "./component/About";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Swipers from "./component/Swipers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import Loader from "./component/Loader";
import Tech from "./component/Tech";
import Experience from "./component/Experience";
import Gallery from "./component/Gallery";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
 
  return (
   <>
    {loading ? <Loader/>: <div>
   
   <BrowserRouter>
   <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/about" element={<About />} ></Route>
            <Route path="/technologies" element={<Tech />} ></Route>
            <Route path="/project" element={<Swipers />} ></Route>
            <Route path="/experience" element={<Experience />} ></Route>
            <Route path="/gallery" element={<Gallery />} ></Route>
            </Routes>
            <Footer/>
            </BrowserRouter>
   </div>}
   </>
  );
}

export default App;
