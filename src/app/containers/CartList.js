import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCart } from '../../store/cartSlice';
import { increment, decremet, remove } from '../../store/cartSlice';
import { selectGoods } from '../../store/goodsSlice';

import objByKey from '../components/objByKey';

import ShowCart from '../components/ShowCart';


export default function CartList() {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);
    const goods = useSelector(selectGoods);

    const goodsObj = objByKey(goods, 'articul');

    function clickHandler(event) {
        event.preventDefault();

        const t = event.target;

        if (t.classList.contains('increase-in-cart')) {
            dispatch(increment(t.getAttribute('data-articul')));
        } else if (t.classList.contains('decrease-in-cart')) {
            dispatch(decremet(t.getAttribute('data-articul')));
        } else if (t.classList.contains('remove-from-cart')) {
            dispatch(remove(t.getAttribute('data-articul')));
        }
    }

    const showCart = Object.keys(cart) == 0
        ? <p>Nothing in cart yet</p>
        : <ShowCart goods={goodsObj} cart={cart} />;

    return(
        <div className='cart-list' onClick={clickHandler}>
            <h2>CartList</h2>
            {showCart}
        </div>
    );
}
