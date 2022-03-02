import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Patro Afero | Contact";
  }, []);

  return (
    <div className="contact">
      <div className="contact_txt">
        <h2>Padre Afero</h2>
        <p>420 N Rodeo Dr</p>
        <p>Beverly Hills, CA 90210</p>
        <p>U.S-of-freaking-A</p>
        <p><a href="tel:+555-2368">555-2368</a></p>
        <p><a href="email:info@padreafero.com">info@padreafero.com</a></p>
      </div>
    </div>
  );
}
