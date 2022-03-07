import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectGoods } from '../../../store/goodsSlice';
import { increment } from '../../../store/cartSlice'

import ShowGoods from '../../components/ShowGoods';

import './GoodsList.css';


export default function GoodsList() {
    const goods = useSelector(selectGoods);
    const dispatch = useDispatch();

    function clickHandler(event) {
        event.preventDefault();

        const t = event.target;

        if (!t.classList.contains('add-to-cart')) return false;

        dispatch(increment(t.getAttribute('data-articul')));
    }

    return(
        <div className="goods-list" onClick={clickHandler}>
            <h1>GoodsList</h1>
            <div className="goods-grid">
                <ShowGoods data={goods} />
            </div> 
        </div>
    );
}
