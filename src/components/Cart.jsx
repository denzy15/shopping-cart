/*import { useState } from "react";
function useForceUpdate(){
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1); 
}

const Cart = (props) => {
 

  const [discount, setDiscount] = useState({})


 const forceUpdate = useForceUpdate();

  let items = props.cartItems;
  const itemsPrice = items.reduce((a, b) => a + b.price * b.num, 0);
  const discountItemsPrice = itemsPrice - itemsPrice * (discount.value / 100);
  return (
    <div className="cart">
      <h2>Корзина</h2>
      <div>
        {items.length === 0 && (
          <div style={{ textAlign: "center" }}>Список пуст</div>
        )}
      </div>

      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <span>ID товара: {item.id}</span>
          <div className="btns">
            <button className="add" onClick={() => props.onAdd(item)}>
              Добавить ещё
            </button>
            <button className="remove" onClick={() => props.onRemove(item)}>
              Удалить товар
            </button>
          </div>
          <div>
            {item.num} * {item.price.toFixed(2)}$
          </div>
        </div>
      ))}
      {items.length !== 0 && (
        <article className="summary">
          <hr></hr>
          <div className="discount">
            Скидка {discount.value}%
            <div className="discount-btns btns">
              <button onClick={() => {
				discount.isSet = true;
				forceUpdate()
				}
				}>
                Установить скидку
              </button>
              <button onClick={() => {
				discount.isSet = false;
				forceUpdate()
				}
				}>
                Убрать скидку
              </button>
            </div>
          </div>
          <hr></hr>
          {discount.isSet === false ? (
            <div className="total-price">Итого: {itemsPrice}$</div>
          ) : (
            <div className="total-price">
              Итого: {discountItemsPrice}${" "}
              <span style={{ textDecoration: "line-through" }}>
                {itemsPrice}$
              </span>
            </div>
          )}
        </article>
      )}
    </div>
  );
};

export default Cart;
*/