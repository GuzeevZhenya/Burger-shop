import React from 'react';
import './Modal.css';
import Button from '../Button/Button';
import { CountItem } from './CountItem/CountItem';
import { useCount } from '../../Hooks/useCount';
import { Toppings } from './Toppings/Toppings';
import { useTopping } from '../../Hooks/useTopping';

export const totalPriceItems = (order) => order.price * order.count;

export default function Modal({ openItem, setOpenItem, orders, setOrders }) {
  const counter = useCount();
  const toppings = useTopping(openItem);

  const closeModal = (e) => {
    if (e.target.classList.contains('modal')) {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
  };

  const addToOrder = () => {
    setOrders([ ...orders, order ]);
    setOpenItem(null);
  };

  return (
    <div id="overlay" onClick={(e) => closeModal(e)}>
      <div className="modal">
        <div className="modal-section">
          <img className="modal-section__img" src={openItem.img} alt={openItem.name} />
          <div className="modal-section__info">
            <h3>{openItem.name}</h3>
            <p>{openItem.price.toLocaleString('ru-Ru', { style: 'currency', currency: 'RUB' })}</p>
          </div>
          <CountItem {...counter} />
          <div>
            {openItem.toppings && <Toppings {...toppings} />}
          </div>
          <div className="modal-section__price">
            <span>Цена:</span>
            <span>
              {totalPriceItems(order).toLocaleString('ru-Ru', {
                style: 'currency',
                currency: 'RUB',
              })}
            </span>
          </div>

          <Button buttonFuntion={addToOrder} buttonName={'Добавить'} />
        </div>
      </div>
    </div>
  );
}
