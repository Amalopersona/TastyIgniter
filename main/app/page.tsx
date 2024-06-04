// "use client"
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import 'tailwindcss/tailwind.css';

// // Categories and food items data
// const categories = [
//   { id: 1, name: 'Fruits' },
//   { id: 2, name: 'Vegetables' },
//   { id: 3, name: 'Dairy' },
// ];

// const foodItems = {
//   1: [
//     { name: 'Apple', image: 'https://images.unsplash.com/photo-1717201410616-205a82d7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//     { name: 'Banana', image: 'https://images.unsplash.com/photo-1717201410616-205a82d7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//     { name: 'Orange', image: 'https://images.unsplash.com/photo-1717201410616-205a82d7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
//   ],
//   2: [
//     { name: 'Carrot', image: 'https://images.unsplash.com/photo-1717201410616-205a82d7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//     { name: 'Broccoli', image: 'https://images.unsplash.com/photo-1717201410616-205a82d7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//     { name: 'Spinach', image: 'https://images.unsplash.com/photo-1717201410616-205a82d7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
//   ],
//   3: [
//     { name: 'Milk', image: 'https://images.unsplash.com/photo-1717201410616-205a82d7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//     { name: 'Cheese', image: 'https://images.unsplash.com/photo-1717201410616-205a82d7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//     { name: 'Yogurt', image: 'https://images.unsplash.com/photo-1717201410616-205a82d7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
//   ],
// };

// // FoodCategory component
// const FoodCategory = ({ category, cartItems, addToCart, removeFromCart }) => (
//   <div key={category.id} className="space-y-4">
//     <h2 className="text-3xl font-bold text-gray-800">{category.name}</h2>
//     <ul className="space-y-4">
//       {foodItems[category.id].map((item, index) => (
//         <li key={index} className="bg-white rounded-lg shadow-md flex items-center space-x-4 p-4">
//           <div className="relative w-1/3">
//             <img src={item.image} alt={item.name} className="rounded-lg w-full" />
//             {cartItems[item.name] ? (
//               <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 mb-2">
//                 <button
//                   className="bg-red-500 text-white p-2 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300"
//                   onClick={() => removeFromCart(item.name)}
//                 >
//                   -
//                 </button>
//                 <span className="text-lg text-gray-700">{cartItems[item.name]}</span>
//                 <button
//                   className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
//                   onClick={() => addToCart(item.name)}
//                 >
//                   +
//                 </button>
//               </div>
//             ) : (
//               <button
//                 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-1 px-4 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 mb-2"
//                 onClick={() => addToCart(item.name)}
//               >
//                 ADD
//               </button>
//             )}
//           </div>
//           <div className="w-2/3">
//             <span className="text-lg text-gray-700">{item.name}</span>
//             <div className="flex items-center mt-2">
//               <div className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Bestseller</div>
//             </div>
//           </div>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// // CheckoutButton component
// const CheckoutButton = ({ cartItems }) => (
//   <AnimatePresence>
//     {Object.values(cartItems).reduce((a, b) => a + b, 0) > 0 && (
//       <motion.div
//         key="checkout"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 50 }}
//         className="fixed bottom-0 left-0 w-full p-4 z-50"
//       >
//         <div className="container mx-auto">
//           <button
//             className="w-full p-4 rounded-lg shadow-lg text-lg sm:text-xl md:text-2xl font-bold bg-blue-500 text-white flex justify-between items-center transition-transform duration-300 transform hover:scale-105"
//           >
//             <span className="pl-4">
//               {Object.values(cartItems).reduce((a, b) => a + b, 0)} {Object.values(cartItems).reduce((a, b) => a + b, 0) === 1 ? 'item' : 'items'}
//             </span>
//             <span className="pr-4">Checkout</span>
//           </button>
//         </div>
//       </motion.div>
//     )}
//   </AnimatePresence>
// );

// // CheckoutComponent component
// const CheckoutComponent = () => {
//   const [cartItems, setCartItems] = useState({});

//   const addToCart = (item) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [item]: (prev[item] || 0) + 1
//     }));
//   };

//   const removeFromCart = (item) => {
//     setCartItems((prev) => {
//       const updatedItems = { ...prev };
//       if (updatedItems[item] > 1) {
//         updatedItems[item]--;
//       } else {
//         delete updatedItems[item];
//       }
//       return updatedItems;
//     });
//   };

//   return (
//     <div className="overflow-hidden h-full bg-gray-50">
//       <div className="container mx-auto p-4 space-y-8">
//         {categories.map((category) => (
//           <FoodCategory key={category.id} category={category} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
//         ))}
//       </div>
//       <CheckoutButton cartItems={cartItems} />
//     </div>
//   );
// };

// export default CheckoutComponent;

// "use client"
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const MenuPage = () => {
//   const [cartItems, setCartItems] = useState(2);

//   const handleAddToCart = () => {
//     setCartItems(cartItems + 1);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Header */}
//       <header className="flex items-center justify-between p-4 bg-white shadow">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Marriott_International_logo.svg/512px-Marriott_International_logo.svg.png"
//           alt="Marriott"
//           className="h-8"
//         />
//         <div className="flex space-x-4">
//           <button className="px-4 py-2 font-bold text-white bg-gray-800 rounded-full">Order</button>
//           <button className="px-4 py-2 font-bold text-gray-800 bg-white border border-gray-800 rounded-full">Takeaway</button>
//         </div>
//         <div className="flex items-center space-x-4">
//           <input type="text" placeholder="Search menu" className="px-4 py-2 bg-gray-200 rounded-full" />
//           <div className="flex space-x-2">
//             <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
//             <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
//           </div>
//           <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
//         </div>
//       </header>

//       {/* Tabs */}
//       <nav className="flex justify-center p-4 bg-white shadow">
//         <button className="px-4 py-2 font-bold text-white bg-gray-800 rounded-full">Bowls</button>
//         <button className="px-4 py-2 font-bold text-gray-800 bg-white border border-gray-800 rounded-full">Salads</button>
//         <button className="px-4 py-2 font-bold text-gray-800 bg-white border border-gray-800 rounded-full">Mains</button>
//         <button className="px-4 py-2 font-bold text-gray-800 bg-white border border-gray-800 rounded-full">Sides</button>
//         <button className="px-4 py-2 font-bold text-gray-800 bg-white border border-gray-800 rounded-full">Chef’s Special</button>
//       </nav>

//       {/* Food Items */}
//       <main className="p-4">
//         <h2 className="mb-4 text-2xl font-bold">Bowls</h2>
//         <div className="grid grid-cols-2 gap-4">
//           {/* Food Item */}
//           <div className="p-4 bg-white rounded-lg shadow">
//             <img
//               src="https://via.placeholder.com/150"
//               alt="Sweet Sauce & Spaghetti"
//               className="w-full h-40 rounded-lg"
//             />
//             <h3 className="mt-2 text-lg font-bold">Sweet Sauce & Spaghetti</h3>
//             <div className="flex items-center justify-between mt-2">
//               <span className="px-2 py-1 text-sm font-bold text-yellow-800 bg-yellow-300 rounded-full">Bestseller</span>
//               <span className="text-lg font-bold">₹600</span>
//             </div>
//             <motion.button
//               whileTap={{ scale: 0.95 }}
//               onClick={handleAddToCart}
//               className="w-full px-4 py-2 mt-4 font-bold text-white bg-green-500 rounded-full"
//             >
//               Add
//             </motion.button>
//           </div>

//           {/* Food Item with Quantity */}
//           <div className="p-4 bg-white rounded-lg shadow">
//             <img
//               src="https://via.placeholder.com/150"
//               alt="Sweet Sauce & Spaghetti"
//               className="w-full h-40 rounded-lg"
//             />
//             <h3 className="mt-2 text-lg font-bold">Sweet Sauce & Spaghetti</h3>
//             <div className="flex items-center justify-between mt-2">
//               <span className="px-2 py-1 text-sm font-bold text-yellow-800 bg-yellow-300 rounded-full">Award-Winning</span>
//               <span className="text-lg font-bold">₹600</span>
//             </div>
//             <div className="flex items-center justify-between w-full mt-4">
//               <button className="px-4 py-2 font-bold text-white bg-gray-800 rounded-full">-</button>
//               <span className="text-lg font-bold">2</span>
//               <button className="px-4 py-2 font-bold text-white bg-gray-800 rounded-full">+</button>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Cart Summary */}
//       <footer className="fixed bottom-0 left-0 right-0 p-4 bg-blue-600">
//         <div className="flex items-center justify-between text-white">
//           <span className="font-bold">{cartItems} Items added</span>
//           <button className="px-4 py-2 font-bold bg-white rounded-full text-blue-600">Checkout</button>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default MenuPage;





// "use client";
// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
// import "tailwindcss/tailwind.css";

// // Categories and food items data
// const categories = [
//   { id: 1, name: "Fruits" },
//   { id: 2, name: "Vegetables" },
//   { id: 3, name: "Dairy" },
// ];

// const foodItems = {
//   1: [
//     { name: "Apple", image: "https://images.unsplash.com/photo-1717201410616-205a82d7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$1.00", description: "Fresh apple" },
//     { name: "Banana", image: "https://images.unsplash.com/photo-1717201410616-205a82d7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$0.50", description: "Ripe banana" },
//     { name: "Orange", image: "https://images.unsplash.com/photo-1717201410616-205a82d7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$0.80", description: "Juicy orange" },
//   ],
//   2: [
//     { name: "Carrot", image: "https://images.unsplash.com/photo-1717201410616-205a82d7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$0.30", description: "Crunchy carrot" },
//     { name: "Broccoli", image: "https://images.unsplash.com/photo-1717201410616-205a82d7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$1.20", description: "Fresh broccoli" },
//     { name: "Spinach", image: "https://images.unsplash.com/photo-1717201410616-205a82d7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$0.60", description: "Green spinach" },
//   ],
//   3: [
//     { name: "Milk", image: "https://images.unsplash.com/photo-1717201410616-205a82d7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$1.50", description: "Fresh milk" },
//     { name: "Cheese", image: "https://images.unsplash.com/photo-1717201410616-205a82d7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$2.00", description: "Cheddar cheese" },
//     { name: "Yogurt", image: "https://images.unsplash.com/photo-1717201410616-205a82d7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$1.00", description: "Natural yogurt" },
//   ],
// };

// // FoodCategory component
// const FoodCategory = ({ category, cartItems, addToCart, removeFromCart }) => (
//   <div key={category.id} className="space-y-4" id={`category-${category.id}`}>
//     <h2 className="text-2xl font-bold text-gray-800">{category.name}</h2>
//     <ul className="space-y-4">
//       {foodItems[category.id].map((item, index) => (
//         <li key={index} className="bg-white rounded-lg shadow-md flex items-center space-x-4 p-4">
//           <div className="w-2/3 space-y-2">
//             <div className="flex justify-between items-center">
//               <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Bestseller</div>
//             </div>
//             <span className="text-base text-gray-700">{item.name}</span>
//             <span className="text-sm text-gray-500">{item.price}</span>
//             <p className="text-sm text-gray-600">{item.description}</p>
//           </div>
//           <div className="relative w-48 h-48">
//             <img src={item.image} alt={item.name} className="rounded-lg w-full h-full object-cover" />
//             {cartItems[item.name] ? (
//               <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 mb-2 bg-green-500">
//                 <button
//                   className="bg-red-500 text-white p-2 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300"
//                   onClick={() => removeFromCart(item.name)}
//                 >
//                   -
//                 </button>
//                 <span className="text-base text-white">{cartItems[item.name]}</span>
//                 <button
//                   className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
//                   onClick={() => addToCart(item.name)}
//                 >
//                   +
//                 </button>
//               </div>
//             ) : (
//               <button
//                 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-1 px-4 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 mb-2 text-xs"
//                 onClick={() => addToCart(item.name)}
//               >
//                 ADD
//               </button>
//             )}
//           </div>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// // CheckoutButton component
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
//             {Object.values(cartItems).reduce((a, b) => a + b, 0)} {Object.values(cartItems).reduce((a, b) => a + b, 0) === 1 ? "Item added" : "Items added"}
//           </span>
//           <button className="px-4 py-2 font-bold bg-white rounded-full text-blue-600">Checkout</button>
//         </div>
//       </motion.footer>
//     )}
//   </AnimatePresence>
// );

// // TabNavigation component
// const TabNavigation = ({ categories, cartItems, addToCart, removeFromCart }) => {
//   const refs = useRef(categories.reduce((acc, category) => {
//     acc[category.id] = React.createRef();
//     return acc;
//   }, {}));

//   const handleTabClick = (id) => {
//     refs.current[id].current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       <div className="flex gap-4 p-4 bg-gray-200 rounded-t-lg overflow-x-auto scrollbar-hide">
//         {categories.map((category) => (
//           <button
//             key={category.id}
//             onClick={() => handleTabClick(category.id)}
//             className="px-4 py-2 rounded-full text-sm font-semibold text-gray-600 hover:bg-gray-300 focus:outline-none"
//           >
//             {category.name}
//           </button>
//         ))}
//       </div>
//       <div className="container mx-auto p-4 space-y-8">
//         {categories.map((category) => (
//           <div ref={refs.current[category.id]} key={category.id}>
//             <FoodCategory category={category} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // CheckoutComponent component
// const CheckoutComponent = () => {
//   const [cartItems, setCartItems] = useState({});

//   const addToCart = (item) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [item]: (prev[item] || 0) + 1,
//     }));
//   };

//   const removeFromCart = (item) => {
//     setCartItems((prev) => {
//       const updatedItems = { ...prev };
//       if (updatedItems[item] > 1) {
//         updatedItems[item]--;
//       } else {
//         delete updatedItems[item];
//       }
//       return updatedItems;
//     });
//   };

//   return (
//     <div className="overflow-hidden h-full bg-gray-50">
//       <TabNavigation categories={categories} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
//       <CheckoutButton cartItems={cartItems} />
//     </div>
//   );
// };

// export default CheckoutComponent;


// "use client";
// import React, { useState, useRef, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "tailwindcss/tailwind.css";

// // Categories and food items data
// const categories = [
//   { id: 1, name: "Fruits" },
//   { id: 2, name: "Vegetables" },
//   { id: 3, name: "Dairy" },
// ];

// const foodItems = {
//   1: [
//     { name: "Apple", image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$1.00", description: "Fresh apple" },
//     { name: "Banana", image: "https://plus.unsplash.com/premium_photo-1670006163344-6d8b83d61d79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$0.50", description: "Ripe banana" },
//     { name: "Orange", image: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$0.80", description: "Juicy orange" },
//   ],
//   2: [
//     { name: "Carrot", image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$0.30", description: "Crunchy carrot" },
//     { name: "Broccoli", image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D", price: "$1.20", description: "Fresh broccoli" },
//     { name: "Spinach", image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D", price: "$0.60", description: "Green spinach" },
//   ],
//   3: [
//     { name: "Milk", image: "https://images.unsplash.com/photo-1615484476889-2830f980a5e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D", price: "$1.50", description: "Fresh milk" },
//     { name: "Cheese", image: "https://images.unsplash.com/photo-1554795808-3231c32711cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxmcnVpdHN8ZW58MHx8MHx8fDA%3D", price: "$2.00", description: "Cheddar cheese" },
//     { name: "Yogurt", image: "https://images.unsplash.com/photo-1614191697800-ff83bd175cee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxmcnVpdHN8ZW58MHx8MHx8fDA%3D", price: "$1.00", description: "Natural yogurt" },
//   ],
// };

// // FoodCategory component
// const FoodCategory = ({ category, cartItems, addToCart, removeFromCart }) => (
//   <div key={category.id} className="space-y-4" id={`category-${category.id}`}>
//     <h2 className="text-3xl font-bold text-gray-800">{category.name}</h2>
//     <ul className="space-y-4">
//       {foodItems[category.id].map((item, index) => (
//         <li key={index} className="bg-white rounded-lg shadow-md flex items-center space-x-4 p-4">
//           <div className="w-2/3 space-y-2">
//             <div className="flex justify-between items-center">
//               <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Bestseller</div>
//             </div>
//             <span className="text-lg text-gray-700">{item.name}</span>
//             <span className="text-base text-gray-500">{item.price}</span>
//             <p className="text-sm text-gray-600">{item.description}</p>
//           </div>
//           <div className="relative w-48 h-48">
//             <img src={item.image} alt={item.name} className="rounded-lg w-full h-full object-cover" />
//             {cartItems[item.name] ? (
//               <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 mb-2 rounded-xl bg-white">
//                 <button
//                   className="bg-red-500 text-white p-2 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-150"
//                   onClick={() => removeFromCart(item.name)}
//                 >
//                   -
//                 </button>
//                 <span className="text-base text-black">{cartItems[item.name]}</span>
//                 <button
//                   className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-150"
//                   onClick={() => addToCart(item.name)}
//                 >
//                   +
//                 </button>
//               </div>
//             ) : (
//               <button
//                 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-150 mb-2 text-sm"
//                 onClick={() => addToCart(item.name)}
//               >
//                 ADD
//               </button>
//             )}
//           </div>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// // CheckoutButton component
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
//             {Object.values(cartItems).reduce((a, b) => a + b, 0)} {Object.values(cartItems).reduce((a, b) => a + b, 0) === 1 ? "Item added" : "Items added"}
//           </span>
//           <button className="px-4 py-2 font-bold bg-white rounded-full text-blue-600">Checkout</button>
//         </div>
//       </motion.footer>
//     )}
//   </AnimatePresence>
// );

// // TabNavigation component
// const TabNavigation = ({ categories, cartItems, addToCart, removeFromCart }) => {
//   const refs = useRef(categories.reduce((acc, category) => {
//     acc[category.id] = React.createRef();
//     return acc;
//   }, {}));

//   const [activeCategory, setActiveCategory] = useState(categories[0].id);

//   const handleScroll = useCallback(() => {
//     const categoryPositions = categories.map((category) => {
//       const element = refs.current[category.id].current;
//       const rect = element.getBoundingClientRect();
//       return { id: category.id, top: rect.top, bottom: rect.bottom };
//     });

//     const middleOfScreen = window.innerHeight / 2;

//     for (const position of categoryPositions) {
//       if (position.top <= middleOfScreen && position.bottom > middleOfScreen) {
//         setActiveCategory(position.id);
//         break;
//       }
//     }
//   }, [categories]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [handleScroll]);

//   const handleTabClick = (categoryId) => {
//     setActiveCategory(categoryId);
//     refs.current[categoryId].current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="relative">
//       <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
//         <div className="flex gap-2 p-2 overflow-x-auto scrollbar-hide">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => handleTabClick(category.id)}
//               className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                 activeCategory === category.id ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-300"
//               } focus:outline-none`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div className="container mx-auto p-4 space-y-8 mt-16">
//         {categories.map((category) => (
//           <div ref={refs.current[category.id]} key={category.id}>
//             <FoodCategory category={category} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // CheckoutComponent component
// const CheckoutComponent = () => {
//   const [cartItems, setCartItems] = useState({});

//   const addToCart = (item) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [item]: (prev[item] || 0) + 1,
//     }));
//   };

//   const removeFromCart = (item) => {
//     setCartItems((prev) => {
//       const updatedItems = { ...prev };
//       if (updatedItems[item] > 1) {
//         updatedItems[item]--;
//       } else {
//         delete updatedItems[item];
//       }
//       return updatedItems;
//     });
//   };

//   return (
//     <div className="overflow-hidden h-full bg-gray-50">
//       <TabNavigation categories={categories} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
//       <CheckoutButton cartItems={cartItems} />
//     </div>
//   );
// };

// export default CheckoutComponent;



// 'use client';
// // AddToCartButton.jsx
// import React, { useState, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// const AddToCartButton = React.memo(() => {
//   const [quantity, setQuantity] = useState(0);
//   const handleAddClick = useCallback(() => setQuantity(quantity + 1), [quantity]);
//   const handleRemoveClick = useCallback(() => {
//     if (quantity > 0) {
//       setQuantity(quantity - 1);
//     } else {
//       setQuantity(0);
//     }
//   }, [quantity]);
//   return (

//     <motion.div
//       className="relative w-40 h-12 bg-blue-500 rounded-full flex items-center justify-center overflow-hidden cursor-pointer"
//       onClick={quantity === 0 ? handleAddClick : null}
//       initial={false}
//       animate={{ width: 160 }}
//       transition={{ duration: 0.2 }}
//     >

//       {quantity === 0 ? (
//         <motion.span
//           className="text-white font-bold"
//           initial={{ y: 0 }}
//           animate={{ y: 0 }}
//           exit={{ y: -50 }}
//           transition={{ duration: 0.2 }}
//         >
//           Add
//         </motion.span>
//       ) : (
//         <motion.div
//           className="flex items-center justify-between w-full px-4 absolute"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.2 }}
//         >
//           <motion.button
//             className="w-8 h-8 text-white font-bold bg-transparent"
//             onClick={(e) => {
//               e.stopPropagation();
//               handleRemoveClick();
//             }}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             transition={{ duration: 0.1 }}
//             initial={{ x: -50 }}
//             animate={{ x: 0 }}
//             exit={{ x: -50 }}
//           >
//             -
//           </motion.button>
//           <motion.span
//             className="text-white font-bold"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//           >
//             {quantity}
//           </motion.span>
//           <motion.button
//             className="w-8 h-8 text-white font-bold bg-transparent"
//             onClick={(e) => {
//               e.stopPropagation();
//               handleAddClick();
//             }}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             transition={{ duration: 0.1 }}
//             initial={{ x: 50 }}
//             animate={{ x: 0 }}
//             exit={{ x: 50 }}
//           >
//             +
//           </motion.button>
//         </motion.div>
//       )}

//     </motion.div>

//   );
// });

// export default AddToCartButton;










"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "tailwindcss/tailwind.css";

// Categories and food items data
const categories = [
  { id: 1, name: "Fruits" },
  { id: 2, name: "Vegetables" },
  { id: 3, name: "Dairy" },
];

const foodItems = {
  1: [
    { name: "Apple", image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$1.00", description: "Fresh apple" },
    { name: "Banana", image: "https://plus.unsplash.com/premium_photo-1670006163344-6d8b83d61d79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$0.50", description: "Ripe banana" },
    { name: "Orange", image: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$0.80", description: "Juicy orange" },
  ],
  2: [
    { name: "Carrot", image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "$0.30", description: "Crunchy carrot" },
    { name: "Broccoli", image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D", price: "$1.20", description: "Fresh broccoli" },
    { name: "Spinach", image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D", price: "$0.60", description: "Green spinach" },
  ],
  3: [
    { name: "Milk", image: "https://images.unsplash.com/photo-1615484476889-2830f980a5e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D", price: "$1.50", description: "Fresh milk" },
    { name: "Cheese", image: "https://images.unsplash.com/photo-1554795808-3231c32711cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxmcnVpdHN8ZW58MHx8MHx8fDA%3D", price: "$2.00", description: "Cheddar cheese" },
    { name: "Yogurt", image: "https://images.unsplash.com/photo-1614191697800-ff83bd175cee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxmcnVpdHN8ZW58MHx8MHx8fDA%3D", price: "$1.00", description: "Natural yogurt" },
  ],
};

// FoodCategory component
const FoodCategory = ({ category, cartItems, addToCart, removeFromCart }) => (
  <div key={category.id} className="space-y-4" id={`category-${category.id}`}>
    <h2 className="text-3xl font-bold text-gray-800">{category.name}</h2>
    <ul className="space-y-4">
      {foodItems[category.id].map((item, index) => (
        <li key={index} className="bg-white rounded-lg shadow-md flex items-center space-x-4 p-4">
          <div className="w-2/3 space-y-2">
            <div className="flex justify-between items-center">
              <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Bestseller</div>
            </div>
            <span className="text-lg text-gray-700">{item.name}</span>
            <span className="text-base text-gray-500">{item.price}</span>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
          <div className="relative w-48 h-48">
            <img src={item.image} alt={item.name} className="rounded-lg w-full h-full object-cover" />
            {cartItems[item.name] ? (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 mb-2 rounded-xl bg-white">
                <button
                  className="bg-red-500 text-white p-2 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-150"
                  onClick={() => removeFromCart(item.name)}
                >
                  -
                </button>
                <span className="text-base text-black">{cartItems[item.name]}</span>
                <button
                  className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-150"
                  onClick={() => addToCart(item.name)}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-150 mb-2 text-sm"
                onClick={() => addToCart(item.name)}
              >
                ADD
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

// CheckoutButton component
const CheckoutButton = ({ cartItems }) => (
  <AnimatePresence>
    {Object.values(cartItems).reduce((a, b) => a + b, 0) > 0 && (
      <motion.footer
        key="checkout"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-blue-600"
      >
        <div className="flex items-center justify-between text-white">
          <span className="font-bold">
            {Object.values(cartItems).reduce((a, b) => a + b, 0)} {Object.values(cartItems).reduce((a, b) => a + b, 0) === 1 ? "Item added" : "Items added"}
          </span>
          <button className="px-4 py-2 font-bold bg-white rounded-full text-blue-600">Checkout</button>
        </div>
      </motion.footer>
    )}
  </AnimatePresence>
);

// TabNavigation component
const TabNavigation = ({ categories, cartItems, addToCart, removeFromCart }) => {
  const refs = useRef(categories.reduce((acc, category) => {
    acc[category.id] = React.createRef();
    return acc;
  }, {}));

  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const handleScroll = useCallback(() => {
    const categoryPositions = categories.map((category) => {
      const element = refs.current[category.id].current;
      const rect = element.getBoundingClientRect();
      return { id: category.id, top: rect.top, bottom: rect.bottom };
    });

    const middleOfScreen = window.innerHeight / 2;

    for (const position of categoryPositions) {
      if (position.top <= middleOfScreen && position.bottom > middleOfScreen) {
        setActiveCategory(position.id);
        break;
      }
    }
  }, [categories]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleTabClick = (categoryId) => {
    setActiveCategory(categoryId);
    refs.current[categoryId].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
        <div className="flex gap-2 p-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleTabClick(category.id)}
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                activeCategory === category.id ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-300"
              } focus:outline-none`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <div className="container mx-auto p-4 space-y-8 mt-16">
        {categories.map((category) => (
          <div ref={refs.current[category.id]} key={category.id}>
            <FoodCategory category={category} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

// CheckoutComponent component
const CheckoutComponent = () => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (item) => {
    setCartItems((prev) => ({
      ...prev,
      [item]: (prev[item] || 0) + 1,
    }));
  };

  const removeFromCart = (item) => {
    setCartItems((prev) => {
      const updatedItems = { ...prev };
      if (updatedItems[item] > 1) {
        updatedItems[item]--;
      } else {
        delete updatedItems[item];
      }
      return updatedItems;
    });
  };

  return (
    <div className="overflow-hidden h-full bg-gray-50">
      <TabNavigation categories={categories} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
      <CheckoutButton cartItems={cartItems} />
    </div>
  );
};

export default CheckoutComponent;
