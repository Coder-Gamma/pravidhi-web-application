import adidasLogo from "@/assets/logos/adidas-8.svg";
import ytLogo from "@/assets/logos/new-youtube-logo.svg";
import netflixLogo from "@/assets/logos/netflix-3.svg";
import yamahaLogo from "@/assets/logos/yamaha-purple.svg";
import cocacolaLogo from "@/assets/logos/coca-cola-2021.svg";

// import { cn } from "@/lib/utils";

const LOGOS = [
  {
    id: 1,
    name: "Adidas",
    src: adidasLogo,
  },
  {
    id: 2,
    name: "Youtube",
    src: ytLogo,
  },
  {
    id: 3,
    name: "Netflix",
    src: netflixLogo,
  },
  {
    id: 4,
    name: "Coca-Cola",
    src: cocacolaLogo,
  },
  {
    id: 5,
    name: "Yamaha",
    src: yamahaLogo,
  },
];

const LogoCloud = () => {
  return (
    <div className="w-full mt-12">
      <p className=" text-center font-heading ">Trusted By:</p>

      <div className="relative mt-8 pause-on-hover overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        {/* SCROLLING CONTAINER */}
        <div className="flex w-[200%] animate-logo-scroll gap-14 items-center py-4">
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex items-center justify-center min-w-38"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-10 w-auto object-contain opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100 hover:scale-105  "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
