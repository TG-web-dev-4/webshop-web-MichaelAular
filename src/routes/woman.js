import Addbuttons from "../components/Product";
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