import Logo from "../assets/Pravidhi-logo.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-[#f8fafc] h-screen w-full">
      {/* NAVIGATION START */}
      <nav className="sticky top-0 z-50 ">
        <div className="max-w-8xl  px-6">
          <div className="flex items-center h-16 justify-between">
            {/*  LEFT DIV LOGO  */}
            <Link
              to="/"
              className="flex items-center gap-2 text-3xl text-[#0F172A] font-bold"
            >
              <img src={Logo} alt="Pravidhi logo" className="h-8 rounded-lg" />
              <span>Pravidhi</span>
            </Link>

            {/* MIDDLE LINKS  */}
            <div className="hidden md:flex items-center gap-8 text-[#0F172A] text-sm md:text-xl font-medium">
              <Link to="/" className="hover:text-[#1D70B8] transition">
                Home
              </Link>
              <Link to="/" className="hover:text-[#1D70B8] transition">
                About Us
              </Link>
              <Link to="/" className="hover:text-[#1D70B8] transition">
                Blog
              </Link>
              <Link to="/" className="hover:text-[#1D70B8] transition">
                Contact
              </Link>
            </div>

            {/* RIGHT DIV CTA BUTTON  */}
            <div className="flex items-center">
              <button className="rounded-xl px-6">Get Started</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Hero;
