import Addbuttons from '../components/Addtocartbuttons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CustomSelector from '../components/CustomSelector';

const Productpage = () => {
  const params = useParams();
  const { id } = params;
  const products = useSelector((state) => state.productReducer);

  let array = ['1', '2', '3'];

  //  DIT ZORGT VOOR EEN ERROR omdat je nummer: 1 met string: '1' vergelijkt!
  //  GEEN APPELS MET PEREN VERGELIJKEN DUS
  // console.log(
  //   'ARRAY.find WRONG',
  //   array.find((x) => x === 1)
  // );
  // DIT IS CORRECT omdat je een string '1' vergelijkt met een arrat met string nummers.
  // console.log(
  //   'ARRAY.find CORRECT',
  //   array.find((x) => x === '1')
  // );

  // Het is niet altijd erg als een id een string is maar wees er bewust van en console.log
  // je data zodat je geen foute vergelijkingen doet ander krijg je dus die errors!

  const item = products.find((product) => Number(product.id) === Number(id));

  // Dit is de originele state van het item wat we willen toevoegen!
  // het is een object: {id: id, size: undefined, color: undefined}
  // het enige wat we invullen is de ID want die hebben we straks nodig
  // in de ADD_TO_CART reducer
  // size & color laten wel als undefined omdat er nog niks is geselecteerd.
  const [itemToAdd, setItemToAdd] = useState({
    id: id,
    size: undefined,
    color: undefined,
  });

  // {id: 1, size: 48, color: 'beige'}

  useEffect(() => {
    document.title = item.pagetitle;
  }, []);

  console.log('ITEM TO ADD TO CART', itemToAdd);

  return (
    <div className='productpage'>
      <div className='productpage_infoblock'>
        <div className='productpage_text'>
          <h2>{item.title}</h2>
          <h3>{item.info}</h3>
          <div className='productpage_button_container'>
            <div className='productpage_price'>€{item.price}</div>

            {/* Custom Selector component 
              // we geven de classname mee
              // Het huidige object met de state het item wat de user will kopen
              // We geven setItemToAdd mee zodat we de state kunnen aanpassen
              // Selection array het array waar de options mee worden gegenereerd
              // we geven als prop de property mee die we willen beinvloeden
            */}
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
