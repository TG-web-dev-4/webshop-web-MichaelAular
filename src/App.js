import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Home from "./routes/home";
import Man from "./routes/man";
import Woman from "./routes/woman";
import Aboutus from "./routes/aboutus";
import Contact from "./routes/contact";
import Summercollection from "./routes/man/summercollection";
import "./css/main.css";

function App() {
  const counter = useSelector(state => state.counterReducer);
  console.log(counter)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="man" element={<Man />} />
        <Route path="woman" element={<Woman />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="contact" element={<Contact />} />
        <Route path="man/summercollection" element={<Summercollection />} />
        <Route path="*" element={<main><p>There's nothing here!</p></main>}/>
      </Routes>
      </>
  );
}

export default App;
