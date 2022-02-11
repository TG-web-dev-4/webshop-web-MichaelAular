import React, { useEffect} from "react";
import { Link, Outlet } from "react-router-dom";

export default function Man() {
  useEffect(() => {
    document.title = "Patro Afero | Man";
  }, []);

  return (
    <>
      <h2>Man</h2>
      <div className="overview">
        <Link to="../productpage/1"> <img className="overview_img" scr="../images/photo/001.jpg" /> </Link>
        <Link to="../productpage/2"> <img className="overview_img" scr="../images/photo/002.jpg" /> </Link>
        <Link to="../productpage/3"> <img className="overview_img" scr="../images/photo/003.jpg" /> </Link>
        <Link to="../productpage/4"> <img className="overview_img" scr="../images/photo/004.jpg" /> </Link>
        <Link to="../productpage/5"> <img className="overview_img" scr="../images/photo/005.jpg" /> </Link>
        <Link to="../productpage/6"> <img className="overview_img" scr="../images/photo/006.jpg" /> </Link>
        <Link to="../productpage/7"> <img className="overview_img" scr="../images/photo/007.jpg" /> </Link>
        <Link to="../productpage/8"> <img className="overview_img" scr="../images/photo/008.jpg" /> </Link>
        <Link to="../productpage/9"> <img className="overview_img" scr="../images/photo/009.jpg" /> </Link>
      </div>
    </>
  );
}
