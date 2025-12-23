import Logo from "../assets/Pravidhi-logo.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-[#070818] h-screen w-full">
      {/* NAVIGATION START */}
      <nav className="sticky top-0 z-50  bg-gray-400 ">
        <div className="max-w-7xl  px-3">
          <div className="flex items-center h-16 justify-between">
            {/* LOGO DIV */}
            <Link to="/" className="flex gap-2 text-xl font-bold">
              <img src={Logo} alt="Pravidhi logo" className="h-8" />
              <span>Pravidhi</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Hero;
