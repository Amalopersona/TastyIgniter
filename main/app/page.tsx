"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { motion, AnimatePresence } from "framer-motion";
import AddToCartButton from "@/components/AddToCartButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup } from "@/components/ui/radio-group";
import { useMediaQuery } from "@/hooks/use-media-query";

const foodItems = [
  {
    name: "Apple",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$1.00",
    description: "Fresh apple",
    options: false,
  },
  {
    name: "Banana",
    image: "https://plus.unsplash.com/premium_photo-1670006163344-6d8b83d61d79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$0.50",
    description: "Ripe banana",
    options: false,
  },
  {
    name: "Orange",
    image: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$0.80",
    description: "Juicy orange",
    options: false,
  },
  {
    name: "Carrot",
    image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$0.30",
    description: "Crunchy carrot",
    options: false,
  },
  {
    name: "Broccoli",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$1.20",
    description: "Fresh broccoli",
    options: true,
  },
  {
    name: "Spinach",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$0.70",
    description: "Healthy spinach",
    options: true,
  },
  {
    name: "Milk",
    image: "",
    price: "$1.50",
    description: "Fresh milk",
    options: false,
  },
  {
    name: "Cheese",
    image: "",
    price: "$2.00",
    description: "Tasty cheese",
    options: false,
  },
  {
    name: "Yogurt",
    image: "",
    price: "$1.00",
    description: "Creamy yogurt",
    options: false,
  },
];

const CustomizationForm = ({ item, onSave }) => {
  const [extraCheese, setExtraCheese] = useState(false);
  const [extraVeggies, setExtraVeggies] = useState(false);
  const [breadType, setBreadType] = useState("whole-wheat");

  const handleSave = () => {
    onSave({
      extraCheese,
      extraVeggies,
      breadType,
    });
  };

  return (
    <form className="space-y-4">
      <div>
        <Checkbox
          label="Add cheese"
          checked={extraCheese}
          onChange={() => setExtraCheese(!extraCheese)}
        />
      </div>
      <div>
        <Checkbox
          label="Add extra veggies"
          checked={extraVeggies}
          onChange={() => setExtraVeggies(!extraVeggies)}
        />
      </div>
      <div>
        <RadioGroup value={breadType} onChange={setBreadType}>
          
        </RadioGroup>
      </div>
      <Button onClick={handleSave}>Add to Cart</Button>
    </form>
  );
};

const FoodItem = ({ item, cartItems, addToCart, removeFromCart }) => {
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [customization, setCustomization] = useState(null);

  const handleAddClick = () => {
    if (item.options) {
      setIsCustomizing(true);
    } else {
      addToCart(item.name, 1);
    }
  };
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const handleSaveCustomization = (customizations) => {
    setCustomization(customizations);
    addToCart(item.name, 1);
    setIsCustomizing(false);
    console.log(`Customizations for ${item.name}:`, customizations);
  };

  return (
    <li className="py-6 px-4 border-b border-gray-200 last:border-b-0">
      <div className="flex items-center space-x-4">
        <div className="flex flex-col space-y-3 flex-grow">
          <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded inline-block w-max">
            Bestseller
          </div>
          <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
          <p className="text-md font-semibold text-gray-600">{item.price}</p>
          <p className="text-sm text-gray-500">{item.description}</p>
        </div>
        <div className="w-1/2 aspect-square relative flex-shrink-0 flex items-center justify-center">
          {item.image ? (
            <>
              <img
                src={item.image}
                alt={item.name}
                className="rounded-lg w-full h-full object-cover shadow-md"
              />
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-5/6">
                <AddToCartButton
                  itemName={item.name}
                  initialQuantity={cartItems[item.name] || 0}
                  addToCart={handleAddClick}
                  removeFromCart={removeFromCart}
                />
              </div>
            </>
          ) : (
            <div className="w-5/6">
              <AddToCartButton
                itemName={item.name}
                initialQuantity={cartItems[item.name] || 0}
                addToCart={handleAddClick}
                removeFromCart={removeFromCart}
              />
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isCustomizing && (
          <>
            {isDesktop ? (
              <Dialog open={isCustomizing} onOpenChange={setIsCustomizing}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Customize {item.name}</DialogTitle>
                  </DialogHeader>
                  <CustomizationForm item={item} onSave={handleSaveCustomization} />
                </DialogContent>
              </Dialog>
            ) : (
              <Drawer open={isCustomizing} onOpenChange={setIsCustomizing}>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Customize {item.name}</DrawerTitle>
                  </DrawerHeader>
                  <CustomizationForm item={item} onSave={handleSaveCustomization} />
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            )}
          </>
        )}
      </AnimatePresence>
    </li>
  );
};

const CheckoutButton = ({ cartItems }) => (
  <AnimatePresence>
    {Object.values(cartItems).reduce((a, b) => a + b, 0) > 0 && (
      <motion.footer
        key="checkout"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-4 left-4 right-4 p-3 bg-green-500 rounded-lg shadow-lg"
      >
        <div className="flex items-center justify-between text-white">
          <span className="text-lg font-bold">
            {Object.values(cartItems).reduce((a, b) => a + b, 0)} items
          </span>
          <button className="px-4 py-2 text-lg font-bold bg-white rounded-lg text-green-600">
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
    <div className="bg-gray-50 min-h-screen pb-24">
      <ul className="divide-y divide-gray-200 bg-white shadow-sm">
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






























































































































































// "use client";
// import React, { useState } from "react";
// import "tailwindcss/tailwind.css";
// import { motion, AnimatePresence } from "framer-motion";
// import AddToCartButton from "@/components/AddToCartButton"; 

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
//     image: "",
//     price: "$1.50",
//     description: "Fresh milk",
//   },
//   {
//     name: "Cheese",
//     image: "",
//     price: "$2.00",
//     description: "Tasty cheese",
//   },
//   {
//     name: "Yogurt",
//     image: "",
//     price: "$1.00",
//     description: "Creamy yogurt",
//   },
// ];

// const FoodItem = ({ item, cartItems, addToCart, removeFromCart }) => (
//   <li className="py-6 px-4 border-b border-gray-200 last:border-b-0">
//     <div className="flex items-center space-x-4">
//       <div className="flex flex-col space-y-3 flex-grow">
//         <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded inline-block w-max">
//           Bestseller
//         </div>
//         <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
//         <p className="text-md font-semibold text-gray-600">{item.price}</p>
//         <p className="text-sm text-gray-500">{item.description}</p>
//       </div>
//       <div className="w-1/2 aspect-square relative flex-shrink-0 flex items-center justify-center">
//         {item.image ? (
//           <>
//             <img
//               src={item.image}
//               alt={item.name}
//               className="rounded-lg w-full h-full object-cover shadow-md"
//             />
//             <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-5/6">
//               <AddToCartButton
//                 itemName={item.name}
//                 initialQuantity={cartItems[item.name] || 0}
//                 addToCart={addToCart}
//                 removeFromCart={removeFromCart}
//               />
//             </div>
//           </>
//         ) : (
//           <div className="w-5/6">
//             <AddToCartButton
//               itemName={item.name}
//               initialQuantity={cartItems[item.name] || 0}
//               addToCart={addToCart}
//               removeFromCart={removeFromCart}
//             />
//           </div>
//         )}
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
//         className="fixed bottom-4 left-4 right-4 p-3 bg-green-500 rounded-lg shadow-lg"
//       >
//         <div className="flex items-center justify-between text-white">
//           <span className="text-lg font-bold">
//             {Object.values(cartItems).reduce((a, b) => a + b, 0)} items
//           </span>
//           <button className="px-4 py-2 text-lg font-bold bg-white rounded-lg text-green-600">
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
//     <div className="bg-gray-50 min-h-screen pb-24">
//       <ul className="divide-y divide-gray-200 bg-white shadow-sm">
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

































// const FoodItem = ({ item, cartItems, addToCart, removeFromCart }) => (
//   <li className="py-6 px-4 border-b border-gray-200 last:border-b-0">
//     <div className="flex items-center space-x-4">
//       <div className="flex flex-col space-y-3 flex-grow">
//         <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded inline-block w-max">
//           Bestseller
//         </div>
//         <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
//         <p className="text-md font-semibold text-gray-600">{item.price}</p>
//         <p className="text-sm text-gray-500">{item.description}</p>
//       </div>
//       <div className="w-1/2 aspect-square relative flex-shrink-0">
//         <img
//           src={item.image}
//           alt={item.name}
//           className="rounded-lg w-full h-full object-cover shadow-md"
//         />
//         <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-5/6">
//           <AddToCartButton
//             itemName={item.name}
//             initialQuantity={cartItems[item.name] || 0}
//             addToCart={addToCart}
//             removeFromCart={removeFromCart}
//           />
//         </div>
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
//         className="fixed bottom-4 left-4 right-4 p-3 bg-green-600 rounded-lg shadow-lg"
//       >
//         <div className="flex items-center justify-between text-white">
//           <span className="text-lg font-bold">
//             {Object.values(cartItems).reduce((a, b) => a + b, 0)} items
//           </span>
//           <button className="px-4 py-2 text-lg font-bold bg-white rounded-full text-green-600">
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
//     <div className="bg-gray-50 min-h-screen pb-24">
//       <ul className="divide-y divide-gray-200 bg-white shadow-sm">
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




// const FoodItem = ({ item, cartItems, addToCart, removeFromCart }) => (
//   <li className="py-6 first:pt-0 last:pb-0">
//     <div className="flex items-center space-x-4">
//       <div className="w-1/3 aspect-square relative flex-shrink-0">
//         <img
//           src={item.image}
//           alt={item.name}
//           className="rounded-lg w-full h-full object-cover shadow-md"
//         />
//         <div className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
//           Bestseller
//         </div>
//       </div>
//       <div className="flex flex-col space-y-2 flex-grow">
//         <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
//         <p className="text-md font-semibold text-gray-700">{item.price}</p>
//         <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
//         <div className="w-32 mt-2">
//           <AddToCartButton
//             itemName={item.name}
//             initialQuantity={cartItems[item.name] || 0}
//             addToCart={addToCart}
//             removeFromCart={removeFromCart}
//           />
//         </div>
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
//           <span className="text-lg font-bold">
//             {Object.values(cartItems).reduce((a, b) => a + b, 0)} items
//           </span>
//           <button className="px-6 py-2 text-lg font-bold bg-white rounded-full text-blue-600 transition-colors duration-300 hover:bg-blue-100">
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
//     <div className="bg-gray-50 min-h-screen pb-24">
//       <ul className="divide-y divide-gray-200 px-4 py-2">
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

