import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Product({ img }) {
  const productVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <>
      <motion.div
        variants={productVariants}
        initial="hidden"
        whileInView="visible"
        className="w-[210px] lg:flex-1 rounded-lg  overflow-hidden">
        <Link to="/">
          <div className="bg-gray-50 rounded-lg border  hover:shadow-[0_0_10px_rgba(0,0,0,0.2)]">
            <img className="w-full h-[300px] object-cover drop-shadow-2xl" src={img} />
          </div>
        </Link>
        <div className="flex py-3 justify-between items-center">
          <div className="flex flex-col  justify-start ">
            <h2 className="text-xl font-semibold text-gray-800">watch</h2>
            <p className="text-lg text-gray-500 font-semibold mt-2">12.500 KD</p>
          </div>
          <button className="bg-black rounded-lg text-white py-2 px-3">Add to cart</button>
        </div>
      </motion.div>
    </>
  );
}

export default Product;
