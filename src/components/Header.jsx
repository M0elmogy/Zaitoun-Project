import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header({ user, setUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // اغلاق القائمة لما تضغط خارجها
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header
      className="
        fixed top-0 left-0 w-full backdrop-blur-md 
        bg-gradient-to-r from-green-400 via-green-300 to-green-200 dark:from-black dark:via-gray-900 dark:to-black
        shadow-lg z-50 h-16 md:h-20 flex items-center
        border-b border-green-600 dark:border-green-500
      "
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* الشعار */}
        <div className="flex items-center gap-4 select-none cursor-default">
          <div className="w-5 h-5 bg-gradient-to-tr from-green-900 to-green-700 rounded-full shadow-lg animate-pulse" />
          <h1
            className="
              text-3xl md:text-4xl font-extrabold
              bg-gradient-to-r from-green-900 via-green-700 to-green-800
              bg-clip-text text-transparent tracking-tight select-text
              drop-shadow-lg
              transition-transform duration-300 ease-in-out
              hover:scale-105
              dark:from-green-400 dark:via-green-300 dark:to-green-400
            "
          >
            زيتونه
          </h1>
        </div>

        {/* زر القائمة (للشاشات الصغيرة) */}
        <button
          className="md:hidden text-green-900 dark:text-green-400 hover:text-green-700 dark:hover:text-green-200 focus:outline-none transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="قائمة التنقل"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* روابط التنقل */}
        <nav
          ref={navRef}
          className={`
            fixed top-16 left-0 w-full
            bg-gradient-to-r from-green-400 via-green-300 to-green-200
            dark:from-black dark:via-gray-900 dark:to-black
            md:static md:bg-transparent md:w-auto md:flex md:items-center md:gap-8
            text-base font-semibold
            overflow-auto max-h-[calc(100vh-4rem)]
            transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-96 py-4 px-6 block" : "max-h-0 overflow-hidden md:max-h-full md:block"}
          `}
        >
          <ul className="flex flex-col md:flex-row md:gap-8 items-center">
            {[{ path: "/", label: "الرئيسية" },
            { path: "/about", label: "من نحن" },
            { path: "/products", label: "منتجاتنا" },
            { path: "/testimonials", label: "آراء العملاء" },
            { path: "/contact", label: "تواصل معنا" },
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="
                    relative
                    text-green-900 dark:text-green-400
                    hover:text-green-700 dark:hover:text-green-200
                    transition
                    group whitespace-nowrap
                    px-3 py-2 rounded-md
                    hover:bg-green-200 dark:hover:bg-green-800
                    hover:scale-105
                    transform duration-300
                    block md:inline-block
                  "
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-700 dark:bg-green-300 transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}

            {user ? (
              <>
                {user.role === "admin" && (
                  <li>
                    <Link
                      to="/dashboard"
                      className="
                        text-green-900 dark:text-green-400
                        hover:text-green-700 dark:hover:text-green-200
                        transition whitespace-nowrap
                        px-3 py-2 rounded-md
                        hover:bg-green-200 dark:hover:bg-green-800
                        hover:scale-105
                        transform duration-300
                        block md:inline-block
                      "
                      onClick={() => setIsOpen(false)}
                    >
                      لوحة التحكم
                    </Link>
                  </li>
                )}
                <li>
                  <button
                    onClick={() => {
                      setUser(null);
                      localStorage.removeItem("user");
                      setIsOpen(false);
                    }}
                    className="
                      w-full md:w-auto px-5 py-2 border border-green-700 dark:border-green-400
                      text-green-900 dark:text-green-400
                      rounded-full
                      bg-gradient-to-r from-green-400 via-green-300 to-green-200
                      dark:bg-gradient-to-r dark:from-green-900 dark:via-green-800 dark:to-green-900
                      hover:from-green-500 hover:via-green-400 hover:to-green-500
                      dark:hover:from-green-700 dark:hover:via-green-600 dark:hover:to-green-700
                      hover:text-white
                      transition duration-500 font-semibold whitespace-nowrap shadow-md hover:shadow-xl transform hover:scale-105
                    "
                  >
                    تسجيل الخروج
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="
                    w-full md:w-auto px-5 py-2 border border-green-700 dark:border-green-400
                    text-green-900 dark:text-green-400
                    rounded-full
                    bg-gradient-to-r from-green-400 via-green-300 to-green-200
                    dark:bg-gradient-to-r dark:from-green-900 dark:via-green-800 dark:to-green-900
                    hover:from-green-500 hover:via-green-400 hover:to-green-500
                    dark:hover:from-green-700 dark:hover:via-green-600 dark:hover:to-green-700
                    hover:text-white
                    transition duration-500 font-semibold whitespace-nowrap shadow-md hover:shadow-xl transform hover:scale-105
                    block text-center
                  "
                  onClick={() => setIsOpen(false)}
                >
                  تسجيل الدخول
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
