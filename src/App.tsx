import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Blogs } from "./pages/Blogs";
import { RootLayout } from "./layouts/RootLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="*"
              element={<h1 className="text-8xl">404 Page Not Found</h1>}
            />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
