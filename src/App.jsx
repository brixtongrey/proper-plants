import { useState } from "react";
import { PLANTS } from "./data/data";
import PlantsGrid from "./plants/PlantsGrid";
import Cart from "./cart/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const itemExist = cart.find((item) => item.id === plant.id);
    if (itemExist) {
      setCart (
        cart.map((item) => 
        item.id === plant.id ? {...item, quantity: item.quantity + 1} : item
        )
      );
    } else {
      const item = {...plant, quantity: 1};
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    setCart(
      cart.map((item) => {
        if (item.id === itemToRemove.id) {
          return {...item,quantity: item.quantity - 1};
        } else {
          return item;
        }
      })
      .filter((item) => item.quantity > 0)
    );
  }

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <PlantsGrid plants={PLANTS} addToCart={addToCart}/>
        <Cart
        cart = {cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        />
      </main>
    </>
  );
}

export default App;
