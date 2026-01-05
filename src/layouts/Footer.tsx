import { Container } from "@/components/UI/Container";
import { navLinks, footerLinks } from "../config/site";
import { Button } from "@/components/UI/Button";
import { Mail, Send, ChevronRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <div className="text-xl font-bold tracking-tight text-primary">
              PRAVIDHI<span className="text-accent">.</span>
            </div>
            <p className="text-sm text-muted max-w-62.5">
              Empowering businesses with cutting-edge digital solutions and
              modern web architecture.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted hover:text-accent transition-all duration-200 transform hover:-translate-y-1"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
              Platform
            </h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
              Resources
            </h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter/Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
              Stay Updated
            </h4>
            <p className="mt-4 text-sm text-muted">
              Subscribe to our newsletter for the latest tech insights.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-accent focus:outline-none"
              />
              {/* <button className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors">
                Subscribe
              </button> */}
              <Button
                variant="primary"
                className=" w-full gap-2"
                onClick={() => console.log("Subscribed! aru kam shyam hero ko")}
              >
                <Send size={16} />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-200 pt-8 text-center">
          <p className="text-xs text-muted">
            &copy; {currentYear} Pravidhi Digital Nepal . All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
