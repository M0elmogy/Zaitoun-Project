import React from "react";
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 dark:bg-black dark:text-green-400 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* قسم تواصل معنا */}
        <div className="footer-section">
          <h3 className="text-xl font-semibold mb-4">تواصل معنا</h3>
          <p className="flex items-center gap-2 mb-2">
            <FaPhone />
            <span className="dark:text-green-300">0123456789</span>
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope />
            <span className="dark:text-green-300">info@zaitoun.com</span>
          </p>
        </div>

        {/* قسم وسائل التواصل */}
        <div className="footer-section">
          <h3 className="text-xl font-semibold mb-4">وسائل التواصل</h3>
          <div className="flex gap-6 text-2xl">
            <a href="#" className="hover:text-yellow-400 dark:hover:text-yellow-300 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-400 dark:hover:text-yellow-300 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-400 dark:hover:text-yellow-300 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-green-300 dark:text-green-500 text-sm">
        <p>Copyright © mohamed-elmogy</p>
      </div>
    </footer>
  );
}
