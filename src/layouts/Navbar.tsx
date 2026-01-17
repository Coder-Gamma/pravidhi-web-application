import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import Logo from "../assets/Pravidhi-logo.webp";
import { Container } from "../components/UI/Container";
import { cn } from "../lib/utils";
import { navLinks } from "../config/site";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 bg-slate-50",
        scrolled
          ? "border-b border-accent/10 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.35)] "
          : "border-transparent border-b shadow-none",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
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
            <span className="font-heading text-2xl font-bold tracking-tight text-primary">
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
            {/* <Button onClick={} size="sm" className="ml-4">
              Get in Touch
            </Button> */}
            <Link
              to="/contact"
              className="h-9 px-3 text-xs bg-primary text-white hover:bg-primary-700 shadow-sm
              inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-95 
   disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
            >
              Get in Touch
            </Link>
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
              : "opacity-0 -translate-y-4 pointer-events-none",
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
