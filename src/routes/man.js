import Addbuttons from "../components/Addtocartbuttons";
import React, { useEffect} from "react";

export default function Man() {
  useEffect(() => {
    document.title = "Patro Afero | Man";
  }, []);

  return (
    <>
      <h2>Man</h2>
      <Addbuttons />
    </>
  );
}
