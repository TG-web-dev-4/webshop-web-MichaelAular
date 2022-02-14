import React, { useEffect } from "react";
import {ProductOverviewImg} from "../components/ProductOverviewImg"

import product from "../data";

export default function Man() {
  useEffect(() => {
    document.title = "Patro Afero | Man";
  }, []);

  const mappedProductCards = product.map((product) => {
    if (product.gender === 'man' || product.gender === 'unisex')  {
      return  <ProductOverviewImg key={product.id} imgName={product.imgName} pageNumber={product.id} />;
    }
  });

  return (
    <div className="overview">
     {mappedProductCards}
    </div>
  );
}
