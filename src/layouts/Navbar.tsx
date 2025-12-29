import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import Logo from "../assets/Pravidhi-logo.webp";
import { Button } from "../components/UI/Button";
import { Container } from "../components/UI/Container";
import { cn } from "../lib/utils";

// IMPORT the links we already defined!
import { navLinks } from "../config/site";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full  bg-[f8fafc] backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 transition-transform hover:scale-105"
          >
            <img
              src={Logo}
              alt="Pravidhi logo"
              className="h-10 w-auto rounded-lg"
            />
            <span className="font-heading text-2xl font-bold tracking-tight text-primary)">
              Pravidhi
            </span>
          </Link>

          {/* DESKTOP LINKS  */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-text transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <Button size="sm" className="ml-4">
              Get Started
            </Button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="p-2 md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={cn(
            "absolute inset-x-0 top-20 bg-white border-b border-slate-200 p-6 transition-all duration-300 md:hidden",
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="flex items-center justify-between text-lg font-semibold text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <ChevronRight size={18} className="text-text" />
              </Link>
            ))}
            {/* <Button className="w-full mt-2">Get Started</Button> */}
          </div>
        </div>
      </Container>
    </nav>
  );
};
