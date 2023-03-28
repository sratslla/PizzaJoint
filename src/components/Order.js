import { motion, AnimatePresence } from 'framer-motion';
import React, {useState, useEffect} from 'react';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
    y: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: -45,
    transition: {
      type: 'spring',
      // delay: 0.5,
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 1,
    }
  },
  exit: {
    x: '-100vw',
    transition: {ease: 'easeInOut'},
  }
}
const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  }
}

const Order = ({ pizza, setshowModal }) => {
  useEffect(() => {
    setTimeout (() => {
      setshowModal(true)
    }, 5000)
  }, [setshowModal])
  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial = "hidden"
      animate = "visible"
      exit = "exit"
    >
      <h2>Thank you for your order :)</h2>

      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;