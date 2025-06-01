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

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const handleDeleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Router>
      <div className="relative flex flex-col min-h-screen overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-500">
        {/* زر تغيير الوضع (تم نقله لليسار) */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label="تبديل الوضع"
          className={`absolute top-4 left-4 p-3 rounded-full bg-green-700 text-white shadow-md hover:scale-110 transition-transform duration-500 z-50 ${
            theme === "light" ? "animate-spin-slow" : ""
          }`}
          style={{ transformOrigin: "50% 50%" }}
        >
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                className="text-white"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h1M2 12H1m16.95 7.95l-.71-.71M4.05 4.05l-.71-.71M12 5a7 7 0 100 14 7 7 0 000-14z"
              />
            </svg>
          )}
        </button>

        <div className="relative z-10 flex flex-col min-h-screen text-gray-900 dark:text-green-200 transition-colors duration-500">
          <Header user={user} setUser={setUser} theme={theme} />
          <main className="flex-grow container mx-auto px-6 md:px-12 py-12 transition-all duration-300">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    products={products}
                    user={user}
                    onDelete={handleDeleteProduct}
                    theme={theme}
                  />
                }
              />
              <Route path="/about" element={<About theme={theme} />} />
              <Route path="/products" element={<Products products={products} theme={theme} />} />
              <Route path="/contact" element={<Contact theme={theme} />} />
              <Route path="/testimonials" element={<Testimonials theme={theme} />} />
              <Route path="/login" element={<Login setUser={setUser} theme={theme} />} />
              <Route path="/logout" element={<Logout setUser={setUser} theme={theme} />} />
              <Route
                path="/dashboard"
                element={
                  user?.role === "admin" ? (
                    <Dashboard products={products} setProducts={setProducts} theme={theme} />
                  ) : (
                    <NotFound theme={theme} />
                  )
                }
              />
              <Route path="*" element={<NotFound theme={theme} />} />
            </Routes>
          </main>
          <Footer theme={theme} />
        </div>
      </div>
    </Router>
  );
}
