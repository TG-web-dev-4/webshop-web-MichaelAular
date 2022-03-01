
import React, { useEffect} from "react";

export default function Aboutus() {
    useEffect(() => {
        document.title = "Patro Afero | About Us";
      }, []);

    return (
        <>
        <div className="aboutus_container1">

        <div className="aboutus_text">
        <p><h2>How did all this happened?</h2>
        Lets be honest. We're all having a little dad inside of us. A dad that needs to get out fom time to time. So that's what we intentionally decided to do at Padre Afero.
        It's already in our name: Padadre Afero, it literaly means <i>Dad Stuff</i> so that's what we try to bring. Genuine father like material! Our forst step was to start with
        the basics: You remember your dad during the hollydays? Rocking those big brown sandals, white socks and that @#$%^short?
        What's more dad than that? We at Padadre decided that for those who want to be called a daddy a papi or even just a plain old pops... this is the way to go.
        <div className="aboutus_backgroundBanner"></div></p>
        
        </div>
        <div className='aboutus_img'></div>
        </div>

        </>
    );
  }