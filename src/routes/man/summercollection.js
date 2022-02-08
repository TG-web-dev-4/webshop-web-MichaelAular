import Addbuttons from "../../components/Addtocartbuttons";
import React, { useEffect} from "react";

export default function Summercollection() {

  useEffect(() => {
    document.title = "Patro Afero | NEW Summer Collection";
  }, []);

  return (
    <div className="summercollection">

      <div className="summercollection_text">
        <h2>Brand New Summercollection</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget felis
        scelerisque, consectetur leo sed, tristique odio. Aenean libero purus,
        iaculis ut tortor vitae, congue consequat mi. Sed tempus scelerisque
        tortor vel scelerisque. Nullam ut condimentum nisl. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Sed tempus est quis convallis consequat.</h3>
      </div>

      <div className="summercollection_foto"></div>

      <div className="summercollection_order">
        <Addbuttons/>
      </div>

    </div>
  );
}
