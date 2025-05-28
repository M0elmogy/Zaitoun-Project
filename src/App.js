import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

import NotFound from "./pages/NotFound";

export default function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts
      ? JSON.parse(savedProducts)
      : [
          { id: 1, name: "زيت زيتون بكر ممتاز", price: 150 },
          { id: 2, name: "زيت زيتون عضوي", price: 200 },
        ];
  });

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleDeleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Router>
      <div className="relative flex flex-col min-h-screen overflow-hidden">
        {/* الخلفية المتحركة مع التدرج والشفافية */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#f0f3d8] via-[#d9e2b6] to-[#a8b86f] animate-gradientBackground"
          style={{ filter: "brightness(0.95)" }}
        />
        <div className="absolute inset-0 bg-black opacity-10" />

        {/* المحتوى فوق الخلفية */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header user={user} setUser={setUser} />
          <main className="flex-grow container mx-auto px-4 py-8 text-gray-900 drop-shadow-md">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    products={products}
                    user={user}
                    onDelete={handleDeleteProduct}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products products={products} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="/logout" element={<Logout setUser={setUser} />} />

              <Route
                path="/dashboard"
                element={
                  user?.role === "admin" ? (
                    <Dashboard products={products} setProducts={setProducts} />
                  ) : (
                    <NotFound />
                  )
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
