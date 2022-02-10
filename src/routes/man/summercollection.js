import Addbuttons from "../../components/Addtocartbuttons";
import React, { useEffect} from "react";
import { useSelector } from "react-redux";
import Sizeselector from "../../components/Sizeselector";
import Colorselector from "../../components/Colorselector";

export default function Summercollection() {
  useEffect(() => {
    document.title = "Patro Afero | NEW Summer Collection";
  }, []);

  const id=0
  const products = useSelector(state => state.productReducer);

  const item = products.find((product) => product.id === id)
  console.log(item.imgName)


  return (
    <div className="productpage">

      <div className="productpage_text">
        <h2>{item.title}</h2>
        <h3>{item.info}</h3>
        <div className="productpage_button_container">
        <Colorselector/>
        <Sizeselector/>
        <Addbuttons/>
        </div>
      </div>

        <img className="productpage_pic" src={require(`../../images/photo/${item.imgName}`)} />
        {/* <div className="productpage_lyric">{item.lyric}</div> */}

    </div>
  );
}
