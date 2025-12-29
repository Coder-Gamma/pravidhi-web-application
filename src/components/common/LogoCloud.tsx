import adidasLogo from "@/assets/logos/adidas-8.svg";
import linkedinLogo from "@/assets/logos/linkedin-icon-2.svg";
import netflixLogo from "@/assets/logos/netflix-3.svg";
import notionLogo from "@/assets/logos/notion-2.svg";
import yamahaLogo from "@/assets/logos/yamaha-purple.svg";

// import { cn } from "@/lib/utils";

const LOGOS = [
  {
    id: 1,
    name: "Adidas",
    src: adidasLogo,
  },
  {
    id: 2,
    name: "Linkedin",
    src: linkedinLogo,
  },
  {
    id: 3,
    name: "Netflix",
    src: netflixLogo,
  },
  {
    id: 4,
    name: "Notion",
    src: notionLogo,
  },
  {
    id: 5,
    name: "Yamaha",
    src: yamahaLogo,
  },
];

const LogoCloud = () => {
  return (
    <div className="w-full mt-8">
      <p className="">Trusted By:</p>

      <div className="relative mt-8 overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
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
                className="h-8 w-auto object-contain opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100  "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
