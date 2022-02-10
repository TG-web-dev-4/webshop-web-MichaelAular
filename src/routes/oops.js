import React, { useEffect} from "react";

export default function Oops() {
    useEffect(() => {
        document.title = "Patro Afero | OOPS!";
      }, []);

    return (
        <>
        <div className="oops"><h2>OOPS!</h2>
        <p>It seems like you took a wrong turn somewhere in life...</p>
        <p>Here have a sandal.</p>
        <img className="oops_icon" src={require(`../images/icons/sanicon.png`)} />
        </div>
        </>
    );
  }