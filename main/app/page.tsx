// "use client"
// import React, { useState, useRef, useEffect, useCallback } from "react";
// import "tailwindcss/tailwind.css";
// import { motion, AnimatePresence } from "framer-motion";
// import AddToCartButton from "@/components/AddToCartButton"; // Adjust the import path as needed

// const categories = [
//   { id: 1, name: "Fruits" },
//   { id: 2, name: "Vegetables" },
//   { id: 3, name: "Dairy" },
// ];

// const foodItems = {
//   1: [
//     {
//       name: "Apple",
//       image:
//         "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$1.00",
//       description: "Fresh apple",
//     },
//     {
//       name: "Banana",
//       image:
//         "https://plus.unsplash.com/premium_photo-1670006163344-6d8b83d61d79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$0.50",
//       description: "Ripe banana",
//     },
//     {
//       name: "Orange",
//       image:
//         "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$0.80",
//       description: "Juicy orange",
//     },
//   ],
//   2: [
//     {
//       name: "Carrot",
//       image:
//         "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$0.30",
//       description: "Crunchy carrot",
//     },
//     {
//       name: "Broccoli",
//       image:
//         "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$1.20",
//       description: "Fresh broccoli",
//     },
//     {
//       name: "Spinach",
//       image:
//         "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$0.70",
//       description: "Healthy spinach",
//     },
//   ],
//   3: [
//     {
//       name: "Milk",
//       image:
//         "https://images.unsplash.com/photo-1598514983680-1bcd66e91fa1?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$1.50",
//       description: "Fresh milk",
//     },
//     {
//       name: "Cheese",
//       image:
//         "https://images.unsplash.com/photo-1588167098863-70e087c36d0b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$2.00",
//       description: "Tasty cheese",
//     },
//     {
//       name: "Yogurt",
//       image:
//         "https://images.unsplash.com/photo-1630844123670-15861a2d91fd?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$1.00",
//       description: "Creamy yogurt",
//     },
//   ],
// };

// const FoodCategory = ({ category, cartItems, addToCart, removeFromCart }) => (
//   <div key={category.id} className="space-y-4" id={`category-${category.id}`}>
//     <h2 className="text-3xl font-bold text-gray-800">{category.name}</h2>
//     <ul className="space-y-4">
//       {foodItems[category.id].map((item, index) => (
//         <li
//           key={index}
//           className="bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-4"
//         >
//           <div className="flex-1 space-y-2 text-center md:text-left">
//             <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded inline-block">
//               Bestseller
//             </div>
//             <span className="block text-xl font-bold text-gray-700">
//               {item.name}
//             </span>
//             <span className="block text-lg text-gray-500">{item.price}</span>
//             <p className="text-sm text-gray-600">{item.description}</p>
//           </div>
//           <div className="w-full md:w-48 h-48 relative">
//             <img
//               src={item.image}
//               alt={item.name}
//               className="rounded-lg w-full h-full object-cover"
//             />
//             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2">
//               <AddToCartButton
//                 itemName={item.name}
//                 initialQuantity={cartItems[item.name] || 0}
//                 addToCart={addToCart}
//                 removeFromCart={removeFromCart}
//               />
//             </div>
//           </div>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const CheckoutButton = ({ cartItems }) => (
//   <AnimatePresence>
//     {Object.values(cartItems).reduce((a, b) => a + b, 0) > 0 && (
//       <motion.footer
//         key="checkout"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 50 }}
//         className="fixed bottom-0 left-0 right-0 p-4 bg-blue-600"
//       >
//         <div className="flex items-center justify-between text-white">
//           <span className="font-bold">
//             {Object.values(cartItems).reduce((a, b) => a + b, 0)}{" "}
//             {Object.values(cartItems).reduce((a, b) => a + b, 0) === 1
//               ? "Item added"
//               : "Items added"}
//           </span>
//           <button className="px-4 py-2 font-bold bg-white rounded-full text-blue-600">
//             Checkout
//           </button>
//         </div>
//       </motion.footer>
//     )}
//   </AnimatePresence>
// );

// const TabNavigation = ({
//   categories,
//   cartItems,
//   addToCart,
//   removeFromCart,
// }) => {
//   const refs = useRef(
//     categories.reduce((acc, category) => {
//       acc[category.id] = React.createRef();
//       return acc;
//     }, {})
//   );

//   const [activeCategory, setActiveCategory] = useState(categories[0].id);

//   const handleScroll = useCallback(() => {
//     const categoryPositions = categories.map((category) => {
//       const element = refs.current[category.id].current;
//       return {
//         id: category.id,
//         offset: element ? element.offsetTop - 20 : 0,
//       };
//     });

//     const scrollPosition = window.scrollY;

//     const currentCategory = categoryPositions.reduce((acc, position) => {
//       if (scrollPosition >= position.offset) {
//         return position.id;
//       }
//       return acc;
//     }, activeCategory);

//     if (currentCategory !== activeCategory) {
//       setActiveCategory(currentCategory);
//     }
//   }, [categories, activeCategory]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [handleScroll]);

//   const scrollToCategory = (categoryId) => {
//     const element = refs.current[categoryId].current;
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <div>
//       <nav className="sticky top-0 bg-white shadow-md z-10">
//         <ul className="flex justify-around py-4">
//           {categories.map((category) => (
//             <li key={category.id}>
//               <button
//                 className={`text-lg font-bold ${
//                   activeCategory === category.id
//                     ? "text-blue-600 border-b-2 border-blue-600"
//                     : "text-gray-600"
//                 }`}
//                 onClick={() => scrollToCategory(category.id)}
//               >
//                 {category.name}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <div className="space-y-8 p-4">
//         {categories.map((category) => (
//           <div ref={refs.current[category.id]} key={category.id}>
//             <FoodCategory
//               category={category}
//               cartItems={cartItems}
//               addToCart={addToCart}
//               removeFromCart={removeFromCart}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const MainComponent = () => {
//   const [cartItems, setCartItems] = useState({});

//   const addToCart = (itemName) => {
//     setCartItems((prevItems) => ({
//       ...prevItems,
//       [itemName]: (prevItems[itemName] || 0) + 1,
//     }));
//   };

//   const removeFromCart = (itemName) => {
//     setCartItems((prevItems) => {
//       const newItems = { ...prevItems };
//       if (newItems[itemName] > 1) {
//         newItems[itemName] -= 1;
//       } else {
//         delete newItems[itemName];
//       }
//       return newItems;
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-blue-600 text-white p-4">
//         <h1 className="text-3xl font-bold">Food Category</h1>
//       </header>
//       <TabNavigation
//         categories={categories}
//         cartItems={cartItems}
//         addToCart={addToCart}
//         removeFromCart={removeFromCart}
//       />
//       <CheckoutButton cartItems={cartItems} />
//     </div>
//   );
// };

// export default MainComponent;



"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import "tailwindcss/tailwind.css";
import { motion, AnimatePresence } from "framer-motion";
import AddToCartButton from "@/components/AddToCartButton"; // Adjust the import path as needed

const categories = [
  { id: 1, name: "Fruits" },
  { id: 2, name: "Vegetables" },
  { id: 3, name: "Dairy" },
];

const foodItems = {
  1: [
    {
      name: "Apple",
      image:
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$1.00",
      description: "Fresh apple",
    },
    {
      name: "Banana",
      image:
        "https://plus.unsplash.com/premium_photo-1670006163344-6d8b83d61d79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$0.50",
      description: "Ripe banana",
    },
    {
      name: "Orange",
      image:
        "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$0.80",
      description: "Juicy orange",
    },
  ],
  2: [
    {
      name: "Carrot",
      image:
        "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$0.30",
      description: "Crunchy carrot",
    },
    {
      name: "Broccoli",
      image:
        "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$1.20",
      description: "Fresh broccoli",
    },
    {
      name: "Spinach",
      image:
        "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$0.70",
      description: "Healthy spinach",
    },
  ],
  3: [
    {
      name: "Milk",
      image:
        "https://images.unsplash.com/photo-1598514983680-1bcd66e91fa1?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$1.50",
      description: "Fresh milk",
    },
    {
      name: "Cheese",
      image:
        "https://images.unsplash.com/photo-1588167098863-70e087c36d0b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$2.00",
      description: "Tasty cheese",
    },
    {
      name: "Yogurt",
      image:
        "https://images.unsplash.com/photo-1630844123670-15861a2d91fd?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$1.00",
      description: "Creamy yogurt",
    },
  ],
};

const FoodCategory = ({ category, cartItems, addToCart, removeFromCart }) => (
  <div key={category.id} className="space-y-2" id={`category-${category.id}`}>
    <h2 className="text-3xl font-bold text-gray-800">{category.name}</h2>
    <ul className="space-y-1">
      {foodItems[category.id].map((item, index) => (
        <li
          key={index}
          className="bg-black rounded-lg shadow-md flex flex-row md:flex-row items-center space-x-4 md:space-y-0 md:space-x-4 p-2"
        >
          <div className="text-center bg-blue-500 md:text-left">
            <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded inline-block">
              Bestseller
            </div>
            <span className="block text-lg font-bold text-gray-700">
              {item.name}
            </span>
            <span className="block text-md text-gray-500">{item.price}</span>
            <p className="text-xs text-gray-600">{item.description}</p>
          </div>
          <div className="w-full md:w-[220px] h-[220px] relative">
            <img
              src={item.image}
              alt={item.name}
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2">
              <AddToCartButton
                itemName={item.name}
                initialQuantity={cartItems[item.name] || 0}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const CheckoutButton = ({ cartItems }) => (
  <AnimatePresence>
    {Object.values(cartItems).reduce((a, b) => a + b, 0) > 0 && (
      <motion.footer
        key="checkout"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-4 left-4 right-4 p-4 bg-blue-600 rounded-lg shadow-lg"
      >
        <div className="flex items-center justify-between text-white">
          <span className="font-bold">
            {Object.values(cartItems).reduce((a, b) => a + b, 0)}{" "}
            {Object.values(cartItems).reduce((a, b) => a + b, 0) === 1
              ? "Item added"
              : "Items added"}
          </span>
          <button className="px-4 py-2 font-bold bg-white rounded-full text-blue-600">
            Checkout
          </button>
        </div>
      </motion.footer>
    )}
  </AnimatePresence>
);

const TabNavigation = ({
  categories,
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  const refs = useRef(
    categories.reduce((acc, category) => {
      acc[category.id] = React.createRef();
      return acc;
    }, {})
  );

  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const handleScroll = useCallback(() => {
    const categoryPositions = categories.map((category) => {
      const element = refs.current[category.id].current;
      return {
        id: category.id,
        offset: element ? element.offsetTop - 20 : 0,
      };
    });

    const scrollPosition = window.scrollY;

    const currentCategory = categoryPositions.reduce((acc, position) => {
      if (scrollPosition >= position.offset) {
        return position.id;
      }
      return acc;
    }, activeCategory);

    if (currentCategory !== activeCategory) {
      setActiveCategory(currentCategory);
    }
  }, [categories, activeCategory]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollToCategory = (categoryId) => {
    const element = refs.current[categoryId].current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <nav className="sticky top-0 bg-white shadow-md z-10">
        <ul className="flex justify-around py-4">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                className={`text-lg font-bold ${
                  activeCategory === category.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => scrollToCategory(category.id)}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="space-y-8 p-4">
        {categories.map((category) => (
          <div ref={refs.current[category.id]} key={category.id}>
            <FoodCategory
              category={category}
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const MainComponent = () => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemName) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemName]: (prevItems[itemName] || 0) + 1,
    }));
  };

  const removeFromCart = (itemName) => {
    setCartItems((prevItems) => {
      const newItems = { ...prevItems };
      if (newItems[itemName] > 1) {
        newItems[itemName] -= 1;
      } else {
        delete newItems[itemName];
      }
      return newItems;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">Food Category</h1>
      </header>
      <TabNavigation
        categories={categories}
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <CheckoutButton cartItems={cartItems} />
    </div>
  );
};

export default MainComponent;

// "use client";
// import React, { useState, useRef, useEffect, useCallback } from "react";
// import "tailwindcss/tailwind.css";
// import { motion, AnimatePresence } from "framer-motion";
// import AddToCartButton from "@/components/AddToCartButton"; // Adjust the import path as needed

// const categories = [
//   { id: 1, name: "Fruits" },
//   { id: 2, name: "Vegetables" },
//   { id: 3, name: "Dairy" },
// ];

// const foodItems = {
//   1: [
//     {
//       name: "Apple",
//       image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$1.00",
//       description: "Fresh apple",
//     },
//     {
//       name: "Banana",
//       image: "https://plus.unsplash.com/premium_photo-1670006163344-6d8b83d61d79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$0.50",
//       description: "Ripe banana",
//     },
//     {
//       name: "Orange",
//       image: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$0.80",
//       description: "Juicy orange",
//     },
//   ],
//   2: [
//     {
//       name: "Carrot",
//       image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$0.30",
//       description: "Crunchy carrot",
//     },
//     {
//       name: "Broccoli",
//       image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$1.20",
//       description: "Fresh broccoli",
//     },
//     {
//       name: "Spinach",
//       image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$0.70",
//       description: "Healthy spinach",
//     },
//   ],
//   3: [
//     {
//       name: "Milk",
//       image: "https://images.unsplash.com/photo-1598514983680-1bcd66e91fa1?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$1.50",
//       description: "Fresh milk",
//     },
//     {
//       name: "Cheese",
//       image: "https://images.unsplash.com/photo-1588167098863-70e087c36d0b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$2.00",
//       description: "Tasty cheese",
//     },
//     {
//       name: "Yogurt",
//       image: "https://images.unsplash.com/photo-1630844123670-15861a2d91fd?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$1.00",
//       description: "Creamy yogurt",
//     },
//   ],
// };

// const FoodCategory = ({ category, cartItems, addToCart, removeFromCart }) => (
//   <div key={category.id} className="space-y-4" id={`category-${category.id}`}>
//     <h2 className="text-2xl font-bold text-gray-800 my-4">{category.name}</h2>
//     <ul className="space-y-4">
//       {foodItems[category.id].map((item, index) => (
//         <li
//           key={index}
//           className="bg-white rounded-lg shadow-md flex flex-row items-center p-4 space-x-4"
//         >
//           <div className="w-40 h-40 flex-shrink-0 relative">
//             <img
//               src={item.image}
//               alt={item.name}
//               className="rounded-lg w-full h-full object-cover"
//             />
//             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
//               <AddToCartButton
//                 itemName={item.name}
//                 initialQuantity={cartItems[item.name] || 0}
//                 addToCart={addToCart}
//                 removeFromCart={removeFromCart}
//               />
//             </div>
//           </div>
//           <div className="flex flex-col space-y-2">
//             <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded inline-block">
//               Bestseller
//             </div>
//             <h3 className="text-xl font-bold text-gray-700">{item.name}</h3>
//             <p className="text-md text-gray-500">{item.price}</p>
//             <p className="text-sm text-gray-600">{item.description}</p>
//           </div>
//         </li>
//       ))}
//     </ul>
//     <hr className="my-4 border-gray-200" />
//   </div>
// );

// const CheckoutButton = ({ cartItems }) => (
//   <AnimatePresence>
//     {Object.values(cartItems).reduce((a, b) => a + b, 0) > 0 && (
//       <motion.footer
//         key="checkout"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 50 }}
//         className="fixed bottom-4 left-4 right-4 p-4 bg-blue-600 rounded-lg shadow-lg"
//       >
//         <div className="flex items-center justify-between text-white">
//           <span className="font-bold">
//             {Object.values(cartItems).reduce((a, b) => a + b, 0)}{" "}
//             {Object.values(cartItems).reduce((a, b) => a + b, 0) === 1
//               ? "Item added"
//               : "Items added"}
//           </span>
//           <button className="px-4 py-2 font-bold bg-white rounded-full text-blue-600">
//             Checkout
//           </button>
//         </div>
//       </motion.footer>
//     )}
//   </AnimatePresence>
// );

// const TabNavigation = ({
//   categories,
//   cartItems,
//   addToCart,
//   removeFromCart,
// }) => {
//   const refs = useRef(
//     categories.reduce((acc, category) => {
//       acc[category.id] = React.createRef();
//       return acc;
//     }, {})
//   );

//   const [activeCategory, setActiveCategory] = useState(categories[0].id);

//   const handleScroll = useCallback(() => {
//     const categoryPositions = categories.map((category) => {
//       const element = refs.current[category.id].current;
//       return {
//         id: category.id,
//         offset: element ? element.offsetTop - 20 : 0,
//       };
//     });

//     const scrollPosition = window.scrollY;

//     const currentCategory = categoryPositions.reduce((acc, position) => {
//       if (scrollPosition >= position.offset) {
//         return position.id;
//       }
//       return acc;
//     }, activeCategory);

//     if (currentCategory !== activeCategory) {
//       setActiveCategory(currentCategory);
//     }
//   }, [categories, activeCategory]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [handleScroll]);

//   const scrollToCategory = (categoryId) => {
//     const element = refs.current[categoryId].current;
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <div>
//       <nav className="sticky top-0 bg-white shadow-md z-10">
//         <ul className="flex justify-around py-4">
//           {categories.map((category) => (
//             <li key={category.id}>
//               <button
//                 className={`text-lg font-bold ${
//                   activeCategory === category.id
//                     ? "text-blue-600 border-b-2 border-blue-600"
//                     : "text-gray-600"
//                 }`}
//                 onClick={() => scrollToCategory(category.id)}
//               >
//                 {category.name}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <div className="space-y-8 p-4">
//         {categories.map((category) => (
//           <div ref={refs.current[category.id]} key={category.id}>
//             <FoodCategory
//               category={category}
//               cartItems={cartItems}
//               addToCart={addToCart}
//               removeFromCart={removeFromCart}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const MainComponent = () => {
//   const [cartItems, setCartItems] = useState({});

//   const addToCart = (itemName) => {
//     setCartItems((prevItems) => ({
//       ...prevItems,
//       [itemName]: (prevItems[itemName] || 0) + 1,
//     }));
//   };

//   const removeFromCart = (itemName) => {
//     setCartItems((prevItems) => {
//       const newItems = { ...prevItems };
//       if (newItems[itemName] > 1) {
//         newItems[itemName] -= 1;
//       } else {
//         delete newItems[itemName];
//       }
//       return newItems;
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-blue-600 text-white p-4">
//         <h1 className="text-3xl font-bold">Food Category</h1>
//       </header>
//       <TabNavigation
//         categories={categories}
//         cartItems={cartItems}
//         addToCart={addToCart}
//         removeFromCart={removeFromCart}
//       />
//       <CheckoutButton cartItems={cartItems} />
//     </div>
//   );
// };

// export default MainComponent;




// "use client";
// import React, { useState, useRef, useEffect, useCallback } from "react";
// import "tailwindcss/tailwind.css";
// import { motion, AnimatePresence } from "framer-motion";
// import AddToCartButton from "@/components/AddToCartButton"; // Adjust the import path as needed

// const categories = [
//   { id: 1, name: "Fruits" },
//   { id: 2, name: "Vegetables" },
//   { id: 3, name: "Dairy" },
// ];

// const foodItems = {
//   1: [
//     {
//       name: "Apple",
//       image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$1.00",
//       description: "Fresh apple",
//     },
//     {
//       name: "Banana",
//       image: "https://plus.unsplash.com/premium_photo-1670006163344-6d8b83d61d79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$0.50",
//       description: "Ripe banana",
//     },
//     {
//       name: "Orange",
//       image: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$0.80",
//       description: "Juicy orange",
//     },
//   ],
//   2: [
//     {
//       name: "Carrot",
//       image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$0.30",
//       description: "Crunchy carrot",
//     },
//     {
//       name: "Broccoli",
//       image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$1.20",
//       description: "Fresh broccoli",
//     },
//     {
//       name: "Spinach",
//       image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$0.70",
//       description: "Healthy spinach",
//     },
//   ],
//   3: [
//     {
//       name: "Milk",
//       image: "https://images.unsplash.com/photo-1598514983680-1bcd66e91fa1?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$1.50",
//       description: "Fresh milk",
//     },
//     {
//       name: "Cheese",
//       image: "https://images.unsplash.com/photo-1588167098863-70e087c36d0b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$2.00",
//       description: "Tasty cheese",
//     },
//     {
//       name: "Yogurt",
//       image: "https://images.unsplash.com/photo-1630844123670-15861a2d91fd?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: "$1.00",
//       description: "Creamy yogurt",
//     },
//   ],
// };

// const FoodCategory = ({ category, cartItems, addToCart, removeFromCart }) => (
//   <div key={category.id} className="space-y-4" id={`category-${category.id}`}>
//     <h2 className="text-2xl font-bold text-gray-800 my-4">{category.name}</h2>
//     <ul className="space-y-4">
//       {foodItems[category.id].map((item, index) => (
//         <li
//           key={index}
//           className="bg-white rounded-lg shadow-md flex flex-row items-center p-4 space-x-4"
//         >
//           <div className="flex flex-col space-y-2">
//             <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded inline-block">
//               Bestseller
//             </div>
//             <h3 className="text-xl font-bold text-gray-700">{item.name}</h3>
//             <p className="text-md text-gray-500">{item.price}</p>
//             <p className="text-sm text-gray-600">{item.description}</p>
//           </div>
//           <div className="w-40 h-40 flex-shrink-0 relative">
//             <img
//               src={item.image}
//               alt={item.name}
//               className="rounded-lg w-full h-full object-cover"
//             />
//             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
//               <AddToCartButton
//                 itemName={item.name}
//                 initialQuantity={cartItems[item.name] || 0}
//                 addToCart={addToCart}
//                 removeFromCart={removeFromCart}
//               />
//             </div>
//           </div>
//         </li>
//       ))}
//     </ul>
//     <hr className="my-4 border-gray-200" />
//   </div>
// );

// const CheckoutButton = ({ cartItems }) => (
//   <AnimatePresence>
//     {Object.values(cartItems).reduce((a, b) => a + b, 0) > 0 && (
//       <motion.footer
//         key="checkout"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 50 }}
//         className="fixed bottom-4 left-4 right-4 p-4 bg-blue-600 rounded-lg shadow-lg"
//       >
//         <div className="flex items-center justify-between text-white">
//           <span className="font-bold">
//             {Object.values(cartItems).reduce((a, b) => a + b, 0)}{" "}
//             {Object.values(cartItems).reduce((a, b) => a + b, 0) === 1
//               ? "Item added"
//               : "Items added"}
//           </span>
//           <button className="px-4 py-2 font-bold bg-white rounded-full text-blue-600">
//             Checkout
//           </button>
//         </div>
//       </motion.footer>
//     )}
//   </AnimatePresence>
// );

// const TabNavigation = ({
//   categories,
//   cartItems,
//   addToCart,
//   removeFromCart,
// }) => {
//   const refs = useRef(
//     categories.reduce((acc, category) => {
//       acc[category.id] = React.createRef();
//       return acc;
//     }, {})
//   );

//   const [activeCategory, setActiveCategory] = useState(categories[0].id);

//   const handleScroll = useCallback(() => {
//     const categoryPositions = categories.map((category) => {
//       const element = refs.current[category.id].current;
//       const rect = element.getBoundingClientRect();
//       return { id: category.id, top: rect.top };
//     });

//     const currentCategory = categoryPositions.find(
//       (category) => category.top >= 0
//     )?.id;

//     if (currentCategory) {
//       setActiveCategory(currentCategory);
//     }
//   }, [categories]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   const scrollToCategory = (categoryId) => {
//     const element = refs.current[categoryId].current;
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="sticky top-0 bg-white shadow-md">
//         <nav className="flex space-x-4 px-4 py-2 overflow-x-auto whitespace-nowrap">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => scrollToCategory(category.id)}
//               className={`px-4 py-2 rounded-md ${
//                 activeCategory === category.id
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-200 text-gray-800"
//               }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </nav>
//       </div>
//       <div className="p-4">
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             ref={refs.current[category.id]}
//             className="mb-8"
//           >
//             <FoodCategory
//               category={category}
//               cartItems={cartItems}
//               addToCart={addToCart}
//               removeFromCart={removeFromCart}
//             />
//           </div>
//         ))}
//       </div>
//       <CheckoutButton cartItems={cartItems} />
//     </div>
//   );
// };

// const FoodCategoriesApp = () => {
//   const [cartItems, setCartItems] = useState({});

//   const addToCart = (itemName) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemName]: (prev[itemName] || 0) + 1,
//     }));
//   };

//   const removeFromCart = (itemName) => {
//     setCartItems((prev) => {
//       const updatedCart = { ...prev };
//       if (updatedCart[itemName] > 1) {
//         updatedCart[itemName] -= 1;
//       } else {
//         delete updatedCart[itemName];
//       }
//       return updatedCart;
//     });
//   };

//   return (
//     <TabNavigation
//       categories={categories}
//       cartItems={cartItems}
//       addToCart={addToCart}
//       removeFromCart={removeFromCart}
//     />
//   );
// };

// export default FoodCategoriesApp;


