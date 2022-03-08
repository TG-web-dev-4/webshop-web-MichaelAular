import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.title = "Patro Afero | Home";
  }, []);

  return (
    <div className="home">
      <div className="home_img_container">
        <div className="home_img_text">
          <span className="colored_txt">Small Steps.</span> <br></br>
          <span className="shadow_txt">Big Changes.</span>
          <div className="home_summeradd_text">
            The new Summercollection is here! Remember when you were young? You
            shone like the sun. Shine on you crazy diamond.
            <Link to="./productpage/1">
              <button className="bigblackbutton home_summercollection_button">
                Shop New Arivals
              </button>
            </Link>
          </div>
        </div>

        <div className="home_summeradd_container"></div>
      </div>

      <div className="home_text">
      </div>
    </div>
  );
}
