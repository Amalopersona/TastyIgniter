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
//           className="bg-black rounded-lg shadow-md flex flex-row items-center p-4 space-x-4"
//         >

//           <div className="flex flex-col space-y-2">
//             <div className="bg-green-100 text-green-800 text-xs md:text-sm lg:text-base font-semibold px-2.5 py-0.5 rounded inline-block">
//               Bestseller
//             </div>
//             <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700">{item.name}</h3>
//             <p className="text-md md:text-lg lg:text-xl text-gray-500">{item.price}</p>
//             <p className="text-sm md:text-base lg:text-lg text-gray-600">{item.description}</p>
//           </div>
//           <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex-shrink-0 relative">
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
//               className={`px-4 py-2 rounded-md ${activeCategory === category.id
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-200 text-gray-800"
//                 }`}
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
//           <div className="flex flex-col space-y-2 flex-1">
//             <div className="bg-green-100 text-green-800 text-xs md:text-sm lg:text-base font-semibold px-2.5 py-0.5 rounded inline-block">
//               Bestseller
//             </div>
//             <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700">{item.name}</h3>
//             <p className="text-md md:text-lg lg:text-xl text-gray-500">{item.price}</p>
//             <p className="text-sm md:text-base lg:text-lg text-gray-600">{item.description}</p>
//           </div>
//           <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex-shrink-0 relative">
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
//     categories.reduce((acc, value) => {
//       acc[value.id] = React.createRef();
//       return acc;
//     }, {})
//   );

//   const scrollToCategory = useCallback((id) => {
//     refs.current[id].current.scrollIntoView({ behavior: "smooth" });
//   }, []);

//   return (
//     <div className="flex flex-col md:flex-row md:space-x-4">
//       <nav className="sticky top-0 z-10 p-4 bg-white shadow-md">
//         <ul className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
//           {categories.map((category) => (
//             <li key={category.id}>
//               <button
//                 onClick={() => scrollToCategory(category.id)}
//                 className="px-4 py-2 text-sm md:text-base lg:text-lg font-semibold text-blue-600 hover:bg-blue-600 hover:text-white rounded"
//               >
//                 {category.name}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <div className="flex-1 space-y-8 p-4">
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

// const App = () => {
//   const [cartItems, setCartItems] = useState({});

//   const addToCart = (itemName, quantity) => {
//     setCartItems((prevCartItems) => ({
//       ...prevCartItems,
//       [itemName]: (prevCartItems[itemName] || 0) + quantity,
//     }));
//   };

//   const removeFromCart = (itemName, quantity) => {
//     setCartItems((prevCartItems) => {
//       const newCartItems = { ...prevCartItems };
//       if (newCartItems[itemName]) {
//         newCartItems[itemName] -= quantity;
//         if (newCartItems[itemName] <= 0) {
//           delete newCartItems[itemName];
//         }
//       }
//       return newCartItems;
//     });
//   };

//   return (
//     <div>
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

// export default App;


// "use client"
// import React, { useState } from "react";
// import "tailwindcss/tailwind.css";
// import { motion, AnimatePresence } from "framer-motion";
// import AddToCartButton from "@/components/AddToCartButton"; // Adjust the import path as needed

// const foodItems = [
//   {
//     name: "Apple",
//     image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: "$1.00",
//     description: "Fresh apple",
//   },
//   {
//     name: "Banana",
//     image: "https://plus.unsplash.com/premium_photo-1670006163344-6d8b83d61d79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: "$0.50",
//     description: "Ripe banana",
//   },
//   {
//     name: "Orange",
//     image: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: "$0.80",
//     description: "Juicy orange",
//   },
//   {
//     name: "Carrot",
//     image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: "$0.30",
//     description: "Crunchy carrot",
//   },
//   {
//     name: "Broccoli",
//     image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: "$1.20",
//     description: "Fresh broccoli",
//   },
//   {
//     name: "Spinach",
//     image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: "$0.70",
//     description: "Healthy spinach",
//   },
//   {
//     name: "Milk",
//     image: "https://images.unsplash.com/photo-1598514983680-1bcd66e91fa1?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: "$1.50",
//     description: "Fresh milk",
//   },
//   {
//     name: "Cheese",
//     image: "https://images.unsplash.com/photo-1588167098863-70e087c36d0b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: "$2.00",
//     description: "Tasty cheese",
//   },
//   {
//     name: "Yogurt",
//     image: "https://images.unsplash.com/photo-1630844123670-15861a2d91fd?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: "$1.00",
//     description: "Creamy yogurt",
//   },
// ];

// const FoodItem = ({ item, cartItems, addToCart, removeFromCart }) => (
//   <li className="bg-white rounded-lg shadow-md flex flex-row items-center p-4 space-x-4">
//     <div className="flex flex-row space-y-1">
//       <div className="flex flex-col space-x-2">
//       <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700">
//         {item.name}
//       </h3>
//       <p className="text-md md:text-lg lg:text-xl text-gray-500">
//         {item.price}
//       </p>
//       <p className="text-sm md:text-base lg:text-lg text-gray-600">
//         {item.description}
//       </p>
//     </div>
//     <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex-shrink-0 relative">
//       <img
//         src={item.image}
//         alt={item.name}
//         className="rounded-lg w-full h-full object-cover"
//       />
//       <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
//         <AddToCartButton
//           itemName={item.name}
//           initialQuantity={cartItems[item.name] || 0}
//           addToCart={addToCart}
//           removeFromCart={removeFromCart}
//         />
//       </div>
//     </div>
//   </div>
//   </li >
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

// const App = () => {
//   const [cartItems, setCartItems] = useState({});

//   const addToCart = (itemName, quantity) => {
//     setCartItems((prevCartItems) => ({
//       ...prevCartItems,
//       [itemName]: (prevCartItems[itemName] || 0) + quantity,
//     }));
//   };

//   const removeFromCart = (itemName, quantity) => {
//     setCartItems((prevCartItems) => {
//       const newCartItems = { ...prevCartItems };
//       if (newCartItems[itemName]) {
//         newCartItems[itemName] -= quantity;
//         if (newCartItems[itemName] <= 0) {
//           delete newCartItems[itemName];
//         }
//       }
//       return newCartItems;
//     });
//   };

//   return (
//     <div className="p-4 space-y-8">
//       <ul className="space-y-4">
//         {foodItems.map((item, index) => (
//           <FoodItem
//             key={index}
//             item={item}
//             cartItems={cartItems}
//             addToCart={addToCart}
//             removeFromCart={removeFromCart}
//           />
//         ))}
//       </ul>
//       <CheckoutButton cartItems={cartItems} />
//     </div>
//   );
// };

// export default App;


// "use client";
// import React, { useState } from "react";
// import "tailwindcss/tailwind.css";
// import { motion, AnimatePresence } from "framer-motion";
// import AddToCartButton from "@/components/AddToCartButton"; // Adjust the import path as needed

// const foodItems = [
//   {
//     name: "Apple",
//     image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: "$1.00",
//     description: "Fresh apple",
//   },
//   {
//     name: "Banana",
//     image: "https://plus.unsplash.com/premium_photo-1670006163344-6d8b83d61d79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: "$0.50",
//     description: "Ripe banana",
//   },
//   {
//     name: "Orange",
//     image: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: "$0.80",
//     description: "Juicy orange",
//   },
//   {
//     name: "Carrot",
//     image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: "$0.30",
//     description: "Crunchy carrot",
//   },
//   {
//     name: "Broccoli",
//     image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: "$1.20",
//     description: "Fresh broccoli",
//   },
//   {
//     name: "Spinach",
//     image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: "$0.70",
//     description: "Healthy spinach",
//   },
//   {
//     name: "Milk",
//     image: "https://images.unsplash.com/photo-1598514983680-1bcd66e91fa1?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: "$1.50",
//     description: "Fresh milk",
//   },
//   {
//     name: "Cheese",
//     image: "https://images.unsplash.com/photo-1588167098863-70e087c36d0b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: "$2.00",
//     description: "Tasty cheese",
//   },
//   {
//     name: "Yogurt",
//     image: "https://images.unsplash.com/photo-1630844123670-15861a2d91fd?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: "$1.00",
//     description: "Creamy yogurt",
//   },
// ];

// const FoodItem = ({ item, cartItems, addToCart, removeFromCart }) => (
//   <li className="bg-white rounded-lg shadow-md flex flex-row items-center p-2 ">
//     <div className="flex flex-row items-center space-x-4">
//       <div className="flex-shrink-0 w-24 h-24 relative">
//         <img
//           src={item.image}
//           alt={item.name}
//           className="rounded-lg w-full h-full object-cover"
//         />
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
//           <AddToCartButton
//             itemName={item.name}
//             initialQuantity={cartItems[item.name] || 0}
//             addToCart={addToCart}
//             removeFromCart={removeFromCart}
//           />
//         </div>
//       </div>
//       <div className="flex flex-col space-y-1 flex-1">
//         <h3 className="text-lg font-bold text-gray-700">{item.name}</h3>
//         <p className="text-sm text-gray-500">{item.price}</p>
//         <p className="text-xs text-gray-600">{item.description}</p>
//       </div>
//     </div>
//   </li>
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

// const App = () => {
//   const [cartItems, setCartItems] = useState({});

//   const addToCart = (itemName, quantity) => {
//     setCartItems((prevCartItems) => ({
//       ...prevCartItems,
//       [itemName]: (prevCartItems[itemName] || 0) + quantity,
//     }));
//   };

//   const removeFromCart = (itemName, quantity) => {
//     setCartItems((prevCartItems) => {
//       const newCartItems = { ...prevCartItems };
//       if (newCartItems[itemName]) {
//         newCartItems[itemName] -= quantity;
//         if (newCartItems[itemName] <= 0) {
//           delete newCartItems[itemName];
//         }
//       }
//       return newCartItems;
//     });
//   };

//   return (
//     <div className="p-4 space-y-4">
//       <ul className="space-y-4">
//         {foodItems.map((item, index) => (
//           <FoodItem
//             key={index}
//             item={item}
//             cartItems={cartItems}
//             addToCart={addToCart}
//             removeFromCart={removeFromCart}
//           />
//         ))}
//       </ul>
//       <CheckoutButton cartItems={cartItems} />
//     </div>
//   );
// };

// export default App;


"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { motion, AnimatePresence } from "framer-motion";
import AddToCartButton from "@/components/AddToCartButton"; // Adjust the import path as needed

const foodItems = [
  {
    name: "Apple",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$1.00",
    description: "Fresh apple",
  },
  {
    name: "Banana",
    image: "https://plus.unsplash.com/premium_photo-1670006163344-6d8b83d61d79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$0.50",
    description: "Ripe banana",
  },
  {
    name: "Orange",
    image: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$0.80",
    description: "Juicy orange",
  },
  {
    name: "Carrot",
    image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$0.30",
    description: "Crunchy carrot",
  },
  {
    name: "Broccoli",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$1.20",
    description: "Fresh broccoli",
  },
  {
    name: "Spinach",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$0.70",
    description: "Healthy spinach",
  },
  {
    name: "Milk",
    image: "https://images.unsplash.com/photo-1598514983680-1bcd66e91fa1?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$1.50",
    description: "Fresh milk",
  },
  {
    name: "Cheese",
    image: "https://images.unsplash.com/photo-1588167098863-70e087c36d0b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$2.00",
    description: "Tasty cheese",
  },
  {
    name: "Yogurt",
    image: "https://images.unsplash.com/photo-1630844123670-15861a2d91fd?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$1.00",
    description: "Creamy yogurt",
  },
];








const FoodItem = ({ item, cartItems, addToCart, removeFromCart }) => (
  <li className="py-4 px-4 border-b border-gray-200 last:border-b-0">
    <div className="flex items-center space-x-4">
      <div className="flex flex-col space-y-2 flex-grow">
        <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded inline-block w-max">
          Bestseller
        </div>
        <h3 className="text-lg font-bold text-gray-700">{item.name}</h3>
        <p className="text-md text-gray-500">{item.price}</p>
        <p className="text-sm text-gray-600">{item.description}</p>
      </div>
      <div className="w-1/2 aspect-square relative flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="rounded-lg w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 w-2/3">
          <AddToCartButton
            itemName={item.name}
            initialQuantity={cartItems[item.name] || 0}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>
    </div>
  </li>
);

const CheckoutButton = ({ cartItems }) => (
  <AnimatePresence>
    {Object.values(cartItems).reduce((a, b) => a + b, 0) > 0 && (
      <motion.footer
        key="checkout"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-4 left-4 right-4 p-3 bg-green-600 rounded-lg shadow-lg"
      >
        <div className="flex items-center justify-between text-white">
          <span className="text-lg font-bold">
            {Object.values(cartItems).reduce((a, b) => a + b, 0)} items
          </span>
          <button className="px-4 py-2 text-lg font-bold bg-white rounded-full text-green-600">
            Checkout
          </button>
        </div>
      </motion.footer>
    )}
  </AnimatePresence>
);

const App = () => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemName, quantity) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [itemName]: (prevCartItems[itemName] || 0) + quantity,
    }));
  };

  const removeFromCart = (itemName, quantity) => {
    setCartItems((prevCartItems) => {
      const newCartItems = { ...prevCartItems };
      if (newCartItems[itemName]) {
        newCartItems[itemName] -= quantity;
        if (newCartItems[itemName] <= 0) {
          delete newCartItems[itemName];
        }
      }
      return newCartItems;
    });
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <ul className="divide-y divide-gray-200">
        {foodItems.map((item, index) => (
          <FoodItem
            key={index}
            item={item}
            cartItems={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
      <CheckoutButton cartItems={cartItems} />
    </div>
  );
};

export default App;