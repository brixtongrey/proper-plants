import "./Cart.css";
import CartItem from "./CartItem";

function Cart({ cart, addToCart, removeFromCart }) {
    return (
        <section className="cart">
            <h2>Cart</h2>
            {cart.length === 0 ? ( 
            <p>Your cart is empty.</p>
            ) : (
            <ul>
               {cart.map((item) => {
                return <CartItem key={item.id} item={item} 
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                />;
               })}
                <h1>Cart Item</h1>
            </ul>
            )}
        </section>
    );
}

export default Cart;