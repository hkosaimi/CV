import { useEffect, useRef, useState } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
import Grid from "./components/Grid";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Social from "./components/Social";
import { myStack, experience, projects, articles } from "./assets/data/data";
import Span from "./components/Span";

function App() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const parent = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const child = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className="mx-auto w-3/4  flex flex-col lg:flex-row  justify-around">
      <motion.div
        variants={parent}
        initial="initial"
        animate="animate"
        className="text-slate-200 pt-24 lg:pt-0  max-h-screen   lg:w-[700px] self-start  lg:sticky top-24  ">
        <motion.h1
          variants={child}
          className="text-5xl text-gradient font-bold text-slate-200 mb-4 font-[Inter]  overflow-hidden">
          Hussain Al-Osaimi
        </motion.h1>
        <motion.p variants={child} className="mb-4 font-medium text-2xl">
          Computer engineer
        </motion.p>
        <motion.p variants={child} className="text-slate-400 text-lg w-4/5">
          I specialize in building modern, responsive frontend websites primarily using React and
          Tailwind CSS.
        </motion.p>
        <div className="mt-16">
          <h1 className="text-2xl font-bold">My stack</h1>
          <div className="flex gap-x-2 w-4/5 flex-wrap">
            {myStack.map((x, i) => (
              <span key={i} className="py-1 px-3 bg-teal-400/10 text-teal-400  rounded-full mt-4">
                {x}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-16 hidden text-xl lg:flex flex-col gap-3 uppercase text-slate-400">
          <a href="#about" className={clsx(hash === "#about" && "text-white font-bold")}>
            About
          </a>
          <a href="#experince" className={clsx(hash === "#experince" && "text-white font-bold")}>
            Experience
          </a>
          <a href="#projects" className={clsx(hash === "#projects" && "text-white font-bold")}>
            Projects
          </a>
          <a href="#articles" className={clsx(hash === "#articles" && "text-white font-bold")}>
            Articles
          </a>
        </div>
        {/* <div>
          <Social />
        </div> */}
      </motion.div>
      <div id="about" className=" lg:w-[600px] text-slate-400 pt-24  text-lg">
        <p className=" mb-4">
          As a computer engineer, diving into the world of <Span>frontend</Span> and web development
          felt like a natural extension of my passion for problem-solving and creating{" "}
          <Span>innovative solutions</Span> . My journey began with a curiosity about how the sleek,
          interactive <Span>websites</Span> we use daily were built. While my background in
          engineering gave me a solid foundation in logic and programming, the visual and
          user-focused aspect of web development offered a new creative outlet.
        </p>
        <p className=" mb-4">
          As I delved deeper into <Span>frontend</Span> and web development, what began as curiosity
          quickly evolved into a full-fledged <Span>passion</Span> . Initially, I experimented with
          basic HTML, CSS, and JavaScript, crafting simple websites and learning how to make them
          responsive.
        </p>
        <p className="">
          When I’m not at the computer, I’m usually watching <Span>TV shows</Span> , reading,
          hanging out with my friends
        </p>
        <div id="experince" className=" pt-24 flex flex-col">
          {experience.map((item, i) => (
            <Experience
              key={i}
              year={item.year}
              title={item.title}
              paragraph={item.paragraph}
              tags={item.tags}
            />
          ))}
        </div>
        <div id="projects" className="pt-24 flex flex-col">
          {projects.map((item, i) => (
            <Projects
              img={item.img}
              title={item.title}
              paragraph={item.paragraph}
              tags={item.tags}
            />
          ))}
        </div>
        <div id="articles" className="pt-24 flex flex-col">
          {articles.map((item, i) => (
            <Articles img={item.img} title={item.title} date={item.date} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
