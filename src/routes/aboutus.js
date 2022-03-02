
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
        Two brothers once decided that, once they were honest, we're all having a little bit of a dad inside of us. A fatherfigure that needs to get out fom time to time. So that's what they intentionally decided to do at Padre Afero.
        As you can see in the name: Padadre Afero, or iteraly <i>Dad Stuff</i>, is what they try to bring. And they do this with panache! Genuine father like material as sythetic cotton or wool combined with style only a true dad has!
        The first step was to start with the basics: You remember your dad during the hollydays? Rocking those big brown sandals, white socks and that @#$%^ short?
        What's more dad than that? The guys at Padre decided that for those who want to be called a daddy, a papi or even just a plain old pops... this is the way to go!
        <div className="aboutus_backgroundBanner"></div>
        <p>The only question was how did they start? Like everything here, we at Padre like to start with the basics. A good Sandal-Sock-Combo (or SSC in short for the true fanboys
          and girls) starts with picking the rigth sock. You don't put your sandals on before your socs now do you? So that's where we started. All socks from Pare Afero are picked with the highest care and combined with only the truest brown
          sandal money can buy. After that they are priced to a level that matches your bragging rights and physically displayed in our shop. There SSC lovers can find the best experience trying different styles untill they find that little dad inside.</p>
          <p>Now we hear you think: and what about the folks who can't go to that shop? Well you made it this far didn't you?
          </p></p>
        
        </div>
        <div className='aboutus_img'></div>
        </div>

        </>
    );
  }