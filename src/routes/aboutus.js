import Addbuttons from "../components/Addtocartbuttons";
import React, { useEffect} from "react";

export default function Aboutus() {
    useEffect(() => {
        document.title = "Patro Afero | About Us";
      }, []);

    return (
        <>
        <h2>About Us</h2>
        <Addbuttons />
        </>
    );
  }