// import React from 'react'
// import '../Breadcrum/Breadcrum.css'
// import arrow_img from '../../Assets/breadcrum_arrow.png'

// const Breadcrum = ({id,name,category}) => {
   
  

//   return (
//     <div className='Breadcrum'>
//       HOME <img src={arrow_img} alt="" /> SHOP <img src={arrow_img} alt="" /> 
//      {product.category} <img src={arrow_img} alt="" /> {product.name}
//     </div>
//   )
// }

// export default Breadcrum;

import React from 'react';
import '../Breadcrum/Breadcrum.css';
import arrow_img from '../../Assets/breadcrum_arrow.png';

const Breadcrum = ({ id, name, category }) => {
  return (
    <div className='Breadcrum'>
      HOME <img src={arrow_img} alt="" /> SHOP <img src={arrow_img} alt="" /> 
      {category} <img src={arrow_img} alt="" /> {name}
    </div>
  );
};

export default Breadcrum;
