
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <p>HomePage</p>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/page1">Page One</Link> |{" "}
        <Link to="/page2">Page Two</Link>
      </nav>
    </div>
  );
}

export default App;
