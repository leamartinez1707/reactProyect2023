import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { GiCancel } from 'react-icons/gi'
import { CartProvider } from '../../context/CartContext';

const CartItem = (item) => {

  const { deleteItem } = useContext(CartProvider)
  const navigate = useNavigate();

  return (

    <div className='body-item' style={{ cursor: 'pointer' }}>
      <div className='items_body' onClick={() => navigate(`/item/${item.id}`)}><img src={item.img} alt="Product img" /></div>
      <div className='items_body' onClick={() => navigate(`/item/${item.id}`)}><h3>{item.title}</h3></div>
      <div className='items_body' onClick={() => navigate(`/item/${item.id}`)}><h4>${item.count * item.price}</h4></div>
      <div className='items_body' onClick={() => navigate(`/item/${item.id}`)}><h4>Units: {item.count}</h4></div>
      <span className='items_body' onClick={() => deleteItem(item.id)}><GiCancel /></span>
    </div>

  );
};

export default CartItem