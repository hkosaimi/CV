import logo from "../assets/logo.svg";
import { ShoppingBasket, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const containerVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each child's animation
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex justify-around py-5  ">
      <div className="w-[60%] ">
        <img src={logo} alt="" />
      </div>
      <div className="flex gap-5 items-center  justify-end ">
        <p>
          <ShoppingBasket strokeWidth={1} size={40} />
        </p>
        <p className="cursor-pointer z-20">
          {!clicked ? (
            <Menu size={40} onClick={handleClick} />
          ) : (
            <X size={40} onClick={handleClick} />
          )}
        </p>
        <AnimatePresence>
          {clicked && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, x: -50 }}
              variants={containerVariants}
              className=" bg-gray-200 shadow-2xl text-gray-700 font-semibold  p-10 text-2xl items-center rounded-xl w-[300px] absolute top-[100px] z-10 gap-10 right-20 flex flex-col">
              <motion.div variants={itemVariants}>Home</motion.div>
              <motion.div variants={itemVariants}>About</motion.div>
              <motion.div variants={itemVariants}>Contact</motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-black text-white px-5 py-3 rounded-xl">
                <Link to="/">Login</Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Header;
