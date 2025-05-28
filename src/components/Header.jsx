import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ user, setUser }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-gradient-to-r from-[#a3b04c] via-[#c5d35f] to-[#dbe77e] shadow-lg z-50 h-16 md:h-20 flex items-center border-b border-[#a0b140]/50">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* الشعار */}
        <div className="flex items-center gap-4 select-none cursor-default">
          <div className="w-5 h-5 bg-gradient-to-tr from-[#1a3d1a] to-[#2f4f2f] rounded-full shadow-lg animate-pulse" />
          <h1
            className="
              text-3xl md:text-4xl font-extrabold
              bg-gradient-to-r from-[#2f4f2f] via-[#226622] to-[#1a3d1a]
              bg-clip-text text-transparent tracking-tight select-text
              drop-shadow-lg
              transition-transform duration-300 ease-in-out
              hover:scale-105
            "
          >
            زيتونه
          </h1>
        </div>

        {/* زر القائمة (للشاشات الصغيرة) */}
        <button
          className="md:hidden text-[#264d00] hover:text-[#7abf3c] focus:outline-none transition-colors duration-300"
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
          className={`fixed top-16 left-0 w-full bg-gradient-to-r from-[#a3b04c] via-[#c5d35f] to-[#dbe77e] md:static md:bg-transparent md:w-auto md:flex md:items-center md:gap-8 text-base font-semibold transition-all duration-300 ease-in-out overflow-auto max-h-[calc(100vh-4rem)] ${
            isOpen ? "block py-4 px-6 md:p-0" : "hidden md:block"
          }`}
          onClick={() => setIsOpen(false)}
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
                  className="relative text-[#264d00] hover:text-[#7abf3c] transition group whitespace-nowrap px-3 py-2 rounded-md hover:bg-[#e1f0b0] hover:scale-105 transform duration-300 block md:inline-block"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4a7c0c] transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}

            {user ? (
              <>
                {user.role === "admin" && (
                  <li>
                    <Link
                      to="/dashboard"
                      className="text-[#264d00] hover:text-[#7abf3c] transition whitespace-nowrap px-3 py-2 rounded-md hover:bg-[#e1f0b0] hover:scale-105 transform duration-300 block md:inline-block"
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
                    className="w-full md:w-auto px-5 py-2 border border-[#4a7c0c] text-[#264d00] rounded-full bg-gradient-to-r from-[#a3b04c] via-[#7abf3c] to-[#9fc540] hover:from-[#7abf3c] hover:via-[#9fc540] hover:to-[#a3b04c] hover:text-white transition duration-500 font-semibold whitespace-nowrap shadow-md hover:shadow-xl transform hover:scale-105"
                  >
                    تسجيل الخروج
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="w-full md:w-auto px-5 py-2 border border-[#4a7c0c] text-[#264d00] rounded-full bg-gradient-to-r from-[#a3b04c] via-[#7abf3c] to-[#9fc540] hover:from-[#7abf3c] hover:via-[#9fc540] hover:to-[#a3b04c] hover:text-white transition duration-500 font-semibold whitespace-nowrap shadow-md hover:shadow-xl transform hover:scale-105 block text-center"
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
