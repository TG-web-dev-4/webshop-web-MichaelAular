import Addbuttons from "../components/Addtocartbuttons";
import React, { useEffect} from "react";

export default function Contact() {
    useEffect(() => {
        document.title = "Patro Afero | Contact";
      }, []);

    return (
        <>
        <h2>Contact</h2>
        <Addbuttons />
        </>
    );
  }