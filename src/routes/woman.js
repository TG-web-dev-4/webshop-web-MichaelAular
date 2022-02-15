import React, { useEffect } from "react";
import {ProductOverviewImg} from "../components/ProductOverviewImg"

import product from "../data";

export default function Man() {
  useEffect(() => {
    document.title = "Patro Afero | Man";
  }, []);

  const mappedProductCards = product.map((product) => {
    if (product.gender === 'woman' || product.gender === 'unisex')  {
      return  <ProductOverviewImg key={product.id} imgName={product.imgName} pageNumber={product.id} productName={product.name}/>;
    }
  });

  return (
    <div className="overview">
     {mappedProductCards}
    </div>
  );
}
