import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Blogs } from "./pages/Blogs";
import { RootLayout } from "./layouts/RootLayout";
import About from "./components/features/about/components/About";
import Contact from "./components/features/contact/components/Contact";
import ServicesPage from "./pages/ServicesPage";
import ScrollToTop from "./components/common/ScrollToTop";
import InternshipPage from "./pages/InternshipPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <RootLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="*"
              element={<h1 className="text-8xl">404 Page Not Found</h1>}
            />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/internship" element={<InternshipPage />} />
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
