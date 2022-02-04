import { Link } from "react-router-dom";

export default function navBar() {
return (
    <div className="navbar">
      <Link to="/page1">Page One</Link> | <Link to="/page2">Page Two</Link>
    </div>
  )
}