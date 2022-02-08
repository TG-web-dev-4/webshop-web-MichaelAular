import Addbuttons from "../components/Product";
import React, { useEffect} from "react";

export default function Aboutus() {
    useEffect(() => {
        document.title = "Patro Afero | About Us";
      }, []);

    return (
        <>
        <h2>Aboutus</h2>
        <Addbuttons />
        </>
    );
  }