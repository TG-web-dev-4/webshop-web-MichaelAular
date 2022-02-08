import Addbuttons from "../components/Addtocartbuttons";
import React, { useEffect} from "react";

export default function Woman() {
    useEffect(() => {
        document.title = "Patro Afero | Woman";
      }, []);

    return (
        <>
        <h2>Woman</h2>
        <Addbuttons />
        </>
    );
  }