import React from 'react';
import './Modal.css';
import Button from '../Button/Button';
import { CountItem } from './CountItem/CountItem';
import { useCount } from '../../Hooks/useCount';
import { Toppings } from './Toppings/Toppings';
import { useTopping } from '../../Hooks/useTopping';
import { useChoices } from '../../Hooks/useChoices';
import { Choices } from './Choices/Choices';

export const totalPriceItems = (order) => {
  const countTopping = order.topping && order.topping.filter((item) => item.checked).length;
  const priceTopping = order.price * 0.1 * countTopping;

  return (order.price + priceTopping) * order.count;
};

export default function Modal({ openItem, setOpenItem, orders, setOrders }) {
  const counter = useCount();
  const toppings = useTopping(openItem);
  const choices = useChoices(openItem);

  const closeModal = (e) => {
    if (e.target.classList.contains('modal')) {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };

  // console.log(order.choices,order.choice);
  console.log(order.choices && !order.choice)

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
            {openItem.choices && <Choices {...choices} openItem={openItem} />}
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

          <Button
            buttonFuntion={addToOrder}
            disabled={order.choices && !order.choice}
            buttonName={'Добавить'}
          />
          <button >ktrg</button>
        </div>
      </div>
    </div>
  );
}
