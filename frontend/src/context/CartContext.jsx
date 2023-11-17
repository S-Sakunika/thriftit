import { createContext, useContext, useState } from "react";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      {
        id: item._id,
        name: item.name,
        price: item.price,
        image: item.image.filename,
      },
    ]);
  };

  const deleteFromCart = (id) =>
    setCartItems(cartItems.filter((item) => item.id !== id));

  const inCart = (id) => cartItems.some((item) => item.id === id);

  const cartTotal = () =>
    cartItems.reduce((total, item) => item.price + total, 0).toFixed(2);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        inCart,
        deleteFromCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within an CartProvider");
  }
  return context;
};

export { CartProvider, useCartContext };
