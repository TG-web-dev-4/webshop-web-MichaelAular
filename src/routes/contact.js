import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Patro Afero | Contact";
  }, []);

  return (
    <div className="contact">
      <div className="contact_txt">
        <h2>Contact</h2>
        <p>Padre Afero</p>
        <p>420 N Rodeo Dr</p>
        <p>Beverly Hills, CA 90210</p>
        <p>555-2368</p>
        <p>info@padreafero.com</p>
      </div>
    </div>
  );
}
