import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./routes/home";
import Man from "./routes/man";
import Woman from "./routes/woman";
import Aboutus from "./routes/aboutus";
import Contact from "./routes/contact";
import Oops from "./routes/oops";
import Productpage from "./routes/productpage";
import "./css/main.css";
import ScrollToTop from "./actions/scrolltotop";

function App() {

  return (
    <>
      <Navbar/>
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="man" element={<Man />} />
        <Route path="woman" element={<Woman />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="contact" element={<Contact />} />
        <Route path="productpage/:id" element={<Productpage />} />
        <Route path="*" element={<Oops />}/>
      </Routes>
      </ScrollToTop>
      <Footer/>

      </>
  );
}

export default App;
