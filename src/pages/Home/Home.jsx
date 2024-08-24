import bag from "../../assets/bag.png";
import watch from "../../assets/watch.png";
import lamp from "../../assets/lamp.png";
import music from "../../assets/music.png";
import headphone from "../../assets/headphone.png";
import Product from "../../components/Product";
import hero3 from "../../assets/hero3.jpg";
import Layout from "../../Layout";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Layout>
        <div className=" h-[320px] px-0 lg:px-5  lg:h-[800px]  ">
          <div
            className="relative shadow-2xl  h-full object-cover inset-0 bg-top lg:rounded-2xl overflow-hidden"
            style={{ backgroundImage: `url(${hero3})`, backgroundSize: "cover" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute flex flex-col items-center gap-3 lg:gap-1 bg-gradient-to-r lg:bg-gradient-to-tr from-violet-900/10 shadow-xl to-violet-200/10 left-3 lg:left-[420px] lg:top-44 top-10 py-4  lg:p-24 rounded-3xl">
              <h1 className="text-xl text-violet-950/80 lg:text-5xl font-bold text-center font-[Poppins] w-[150px] lg:w-[350px]">
                The Best Electonics store for you
              </h1>
              <p className="lg:mt-5 w-1/2 text-center text-violet-950/80 lg:text-2xl">
                Everything you'll ever need
              </p>
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="lg:mt-5 flex items-center gap-2 bg-black text-white/90 px-3 py-2 lg:p-4 text-xs lg:text-lg rounded-2xl font-semibold hover:bg-gray-800 active:bg-black">
                Start Shopping <ShoppingBag />
              </motion.button>
            </motion.div>
          </div>
        </div>
        <div className="px-2 py-10 lg:p-40">
          <h1 className="text-4xl font-semibold mb-10">Latest products:</h1>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-16 ">
            <Product img={bag} />
            <Product img={watch} />
            <Product img={lamp} />
            <Product img={music} />
            <Product img={headphone} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
