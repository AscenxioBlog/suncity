import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

function ContextApp({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : []});

  // Load cart from local storage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const addToCart = (product) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Calculate total number of items in the cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <AppContext.Provider
      value={{
        toggleCart,
        isCartOpen,
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        calculateTotal,
        totalItems, // Add this to context
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default ContextApp;



// import React, { createContext, useEffect, useState } from 'react';

// export const AppContext = createContext();

// function ContextApp({ children }) {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//  // Cart State
 

  

  

//   const toggleCart = () => setIsCartOpen((prev) => !prev);

//      setCartItems((prev) => prev.filter((item) => item.id !== id));

//   return (
//     <AppContext.Provider
//       value={{ toggleCart, isCartOpen, cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// }

// export default ContextApp;



// import React, { createContext, useEffect, useState } from "react";

// export const AppContext = createContext();

// function ContextApp({ children }) {
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   // Cart State
//   const [cart, setCart] = useState(() => {
//     const storedCart = localStorage.getItem("cart");
//     return storedCart ? JSON.parse(storedCart) : [];
//   });

//   // Save cart to localStorage on changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // Cart Handlers
//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item._id === product._id);
//       if (existingProduct) {
//         return prevCart.map((item) =>
//           item._id === product._id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (productToRemove) => {
//     setCart((prevCart) =>
//       prevCart.filter((product) => product._id !== productToRemove._id)
//     );
//   };

//   const increaseQuantity = (product) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item._id === product._id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     );
//   };

//   const decreaseQuantity = (product) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item._id === product._id
//           ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
//           : item
//       )
//     );
//   };

//   const toggleCart = () => setIsCartOpen((prev) => !prev);

//   return (
//     <AppContext.Provider
//       value={{
//         toggleCart,
//         isCartOpen,
//         cart,
//         addToCart,
//         increaseQuantity,
//         decreaseQuantity,
//         removeFromCart,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// }

// export default ContextApp;
