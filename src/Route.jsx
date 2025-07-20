
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

// Placeholder components for other pages
const About = () => <div>About Page</div>;
const Products = () => <div>Products Page</div>;
const Blog = () => <div>Blog Page</div>;
const AiSolutions = () => <div>AI Solutions Page</div>;

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/ai" element={<AiSolutions />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
