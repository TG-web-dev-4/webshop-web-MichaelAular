import Addbuttons from '../components/Addtocartbutton';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CustomSelector from '../components/CustomSelector';

const Productpage = () => {
  const params = useParams();
  const { id } = params;
  const products = useSelector((state) => state.productReducer);
  const item = products.find((product) => Number(product.id) === Number(id));
  const [itemToAdd, setItemToAdd] = useState({
    id: id,
    size: 'size',
    color: 'color',
  });

  useEffect(() => {
    document.title = item.pagetitle;
  }, []);

  return (
    <div className='productpage'>
      <div className='productpage_infoblock'>
        <div className='productpage_text'>
          <h2>{item.title}</h2>
          <h3>{item.info}</h3>
          <div className='productpage_button_container'>
            <div className='productpage_price'>€{item.price}</div>
            <CustomSelector
              className='colorselector'
              itemToAdd={itemToAdd}
              setItemToAdd={setItemToAdd}
              selectionArray={item.colors}
              property='color'
            />
            <CustomSelector
              className='sizeselector'
              itemToAdd={itemToAdd}
              setItemToAdd={setItemToAdd}
              selectionArray={item.size}
              property='size'
            />
            <Addbuttons item={itemToAdd} />
          </div>
        </div>
      </div>

      <img
        className='productpage_pic'
        src={require(`../images/photo/${item.imgName}`)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default Productpage;
