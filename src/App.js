import { useState } from "react";
import "./App.css";

function App() {
  const [product, setProduct] = useState({ name: "", id: "", price: "" });
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState({ value: 0, isSet: false });
  const onAdd = () => {
    setCartItems([...cartItems, product]);
    setProduct({ name: "", id: "", price: "" });
  };
  const onRemove = (prod) => {
    setCartItems(cartItems.filter((x) => x.id !== prod.id));
  };

  const itemsPrice = cartItems.reduce((a, b) => a + parseFloat(b.price), 0);
  const discountItemsPrice = itemsPrice - itemsPrice * (discount.value / 100);

  return (
    <div className="block">
      <article className="products">
        <section className="products-form">
        <h1>Ваш товар</h1>
          <label>
            <input
              type="text"
              value={product.name}
              onChange={(e) => {
                setProduct({ ...product, name: e.target.value });
              }}
            />
            Название
          </label>
          <label>
            <input
              type="number"
              value={product.id}
              onChange={(e) => {
                setProduct({ ...product, id: e.target.value });
              }}
            />
            ID товара
          </label>
          <label>
            <input
              type="number"
              value={product.price}
              onChange={(e) => {
                setProduct({ ...product, price: e.target.value });
              }}
            />
            Цена
          </label>
          <button onClick={onAdd}>Добавить товар</button>
        </section>
      </article>
      <div className="cart">
        <h2>Корзина</h2>
        <div>
          {cartItems.length === 0 && (
            <div style={{ textAlign: "center" }}>Список пуст</div>
          )}
        </div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <span>ID товара: {item.id}</span>
            <div className="btns">
              <button className="remove" onClick={() => onRemove(item)}>
                Удалить товар
              </button>
            </div>
            <div>{item.price}$</div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <article className="summary">
            <hr></hr>
            <div className="discount">
              Скидка(0-100)%{" "}
              <input
                value={discount.value}
                style={{ width: "30px" }}
                placeholder="haha"
                onChange={(e) =>
                  setDiscount({ ...discount, value: e.target.value })
                }
              ></input>
              <div className="discount-btns btns">
                <button
                  onClick={() => {
                    if (discount.value < 0 || discount.value > 100) {
                      alert("Скидка должна быть от 0 до 100");
                      return;
                    }
                    setDiscount({ ...discount, isSet: true });
                  }}
                >
                  Установить скидку
                </button>
                <button
                  onClick={() => {
                    setDiscount({ ...discount, isSet: false });
                  }}
                >
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
    </div>
  );
}

export default App;
