import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(`شكراً لتواصلك معنا، ${formData.name}!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 dark:bg-black p-6">
      <section
        id="contact"
        className="max-w-6xl w-full py-20 px-6 rounded-3xl shadow-lg bg-white dark:bg-gray-900"
      >
        <h2 className="text-4xl font-extrabold text-green-900 dark:text-green-400 mb-12 text-center">
          تواصل معنا
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* بيانات الاتصال */}
          <div className="md:w-1/2 space-y-6 text-green-800 dark:text-green-300 text-lg font-medium">
            <div className="flex items-center gap-4 bg-green-100 dark:bg-green-900 p-4 rounded-xl shadow-sm">
              <FaPhone className="text-green-600 dark:text-green-400 text-2xl" />
              <p>0123456789</p>
            </div>
            <div className="flex items-center gap-4 bg-green-100 dark:bg-green-900 p-4 rounded-xl shadow-sm">
              <FaEnvelope className="text-green-600 dark:text-green-400 text-2xl" />
              <p>info@zaitoun.com</p>
            </div>
            <div className="flex items-center gap-4 bg-green-100 dark:bg-green-900 p-4 rounded-xl shadow-sm">
              <FaMapMarkerAlt className="text-green-600 dark:text-green-400 text-2xl" />
              <p>شمال سيناء، مصر</p>
            </div>
          </div>

          {/* نموذج التواصل */}
          <form
            onSubmit={handleSubmit}
            className="md:w-1/2 bg-green-50 dark:bg-green-950 p-8 rounded-2xl shadow-md border border-green-300 dark:border-green-700"
            dir="rtl"
          >
            <label className="block mb-6 text-green-800 dark:text-green-300 font-semibold text-right">
              الاسم:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className="mt-2 w-full p-3 rounded-lg border border-green-300 dark:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-green-600 bg-white dark:bg-gray-800 text-green-900 dark:text-green-200"
                placeholder="اكتب اسمك"
              />
            </label>

            <label className="block mb-6 text-green-800 dark:text-green-300 font-semibold text-right">
              البريد الإلكتروني:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="mt-2 w-full p-3 rounded-lg border border-green-300 dark:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-green-600 bg-white dark:bg-gray-800 text-green-900 dark:text-green-200"
                placeholder="example@mail.com"
              />
            </label>

            <label className="block mb-6 text-green-800 dark:text-green-300 font-semibold text-right">
              الرسالة:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="mt-2 w-full p-3 rounded-lg border border-green-300 dark:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-green-600 bg-white dark:bg-gray-800 text-green-900 dark:text-green-200"
                placeholder="اكتب رسالتك هنا"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-green-600 dark:bg-green-700 text-white py-3 rounded-lg hover:bg-yellow-500 dark:hover:bg-yellow-400 transition font-bold tracking-wide"
            >
              إرسال
            </button>

            {successMessage && (
              <p className="mt-4 text-green-700 dark:text-green-400 font-semibold text-center">
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
