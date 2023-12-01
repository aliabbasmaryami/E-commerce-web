// import React, { useContext } from 'react'
// import { ShopContext } from '../Context/ShopContext'
// import { useParams } from 'react-router-dom'
// import Breadcrum from '../components/Breadcrum/Breadcrum'

// const Product = (props) => {
//   const {all_product} = useContext(ShopContext)
//   const {productId} = useParams;
//   const product = all_product.find((e)=> e.id === Number(productId));
//   return (
//     <div className='Product'>
//       <Breadcrum name={name} id={id} category={category}/>
//     </div>
//   )
// }

// export default Product


import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Descriptionbox from '../components/Descriptionbox/Descriptionbox';
import Relatedproduct from '../components/Relstedproduct/Relatedproduct';

const Product = (props) => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className='Product'>
      {product && (
        <Breadcrum name={product.name} id={product.id} category={product.category} />
      )}
      <ProductDisplay product={product}/>
      <Descriptionbox/>
      <Relatedproduct/>

  
    </div>
  );
};

export default Product;
