import { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      {/* Footer  */}
    </div>
  );
};
