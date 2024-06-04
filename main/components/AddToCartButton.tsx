'use client';
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AddToCartButton = React.memo(({ item, cartItems, addToCart, removeFromCart }) => {
  const quantity = cartItems[item.name] || 0;

  const handleAddClick = useCallback(() => addToCart(item.name), [addToCart, item.name]);
  const handleRemoveClick = useCallback(() => removeFromCart(item.name), [removeFromCart, item.name]);

  return (
    <motion.div
      className="relative w-40 h-12 bg-blue-500 rounded-full flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={quantity === 0 ? handleAddClick : null}
      initial={false}
      animate={{ width: 160 }}
      transition={{ duration: 0.2 }}
    >
      {quantity === 0 ? (
        <motion.span
          className="text-white font-bold"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: -50 }}
          transition={{ duration: 0.2 }}
        >
          Add
        </motion.span>
      ) : (
        <motion.div
          className="flex items-center justify-between w-full px-4 absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button
            className="w-8 h-8 text-white font-bold bg-transparent"
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveClick();
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            exit={{ x: -50 }}
          >
            -
          </motion.button>
          <motion.span
            className="text-white font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {quantity}
          </motion.span>
          <motion.button
            className="w-8 h-8 text-white font-bold bg-transparent"
            onClick={(e) => {
              e.stopPropagation();
              handleAddClick();
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            exit={{ x: 50 }}
          >
            +
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
});

export default AddToCartButton;