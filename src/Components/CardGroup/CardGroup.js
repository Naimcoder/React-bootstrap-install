import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
     const products = [
          {id:1,name:'laptop',price:2000},
          {id:2,name:'mobile',price:3000},
          {id:3,name:'watch',price:1000},
          {id:4,name:'tv',price:6000},
     ]
     return (
<div className="card-group">
 {
  products.map(pd=><Card key={pd.id}product={pd}></Card>)
 }

</div>
     );
};

export default CardGroup;