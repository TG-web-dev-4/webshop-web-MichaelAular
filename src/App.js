import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";

import Home from "./routes/home";
import Page1 from "./routes/page1";
import Page2 from "./routes/page2";
import "./App.css";


function App() {
  const counter = useSelector(state => state.counterReducer);

  return (
    <>
      <h3>products in cart: {counter}</h3>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      </>
  );
}

export default App;
