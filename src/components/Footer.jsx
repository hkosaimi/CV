import Social from "./Social";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="my-20">
      Built by{" "}
      <Link to="https://github.com/hkosaimi/CV" className="text-slate-200 underline">
        hkosaimi
      </Link>{" "}
      using <span className="text-slate-200">React JS</span>,
      <span className="text-slate-200">TailwindCSS</span> , and{" "}
      <span className="text-slate-200">Framer Motion</span> . Deployed on{" "}
      <Link to="https://vercel.com" className="text-slate-200 underline">
        Vercel
      </Link>
      . The font used is Inter. &copy; {new Date().getFullYear()} all rights reserved. Made with
      &hearts;
      <Social />
    </div>
  );
}

export default Footer;
