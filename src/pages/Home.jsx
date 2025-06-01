import React, { useState } from "react";
import {
  FaCheck,
  FaStar,
  FaStarHalfAlt,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import img1 from "../components/img/img1.jpg";

const testimonialsData = [
  { rating: 5, text: "أفضل زيت زيتون جربته في حياتي، الطعم مختلف تماماً عن أي زيت آخر", customer: "أحمد السيد" },
  { rating: 5, text: "حلو اوي و طعمه جميل", customer: "نورا عصام" },
  { rating: 5, text: "بصراحه رهيب وبيور فعلا", customer: "سما امين" },
  { rating: 5, text: "أفضل زيت زيتون جربته في حياتي و الجوده ماشاء الله مفيش بعد كدا", customer: "اسراء همام" },
  { rating: 5, text: "الجودة تستحق السعر، استخدمته لأطفالي ولم يسبب أي حساسية", customer: "سارة محمد" },
  { rating: 4.5, text: "التغليف ممتاز والزيت وصل بحالة ممتازة، شكراً لكم", customer: "خالد عبدالله" },
];

function Stars({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <div className="pt-16 md:pt-20 flex text-green-700 dark:text-green-400 mb-2 justify-center space-x-1">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
        <FaStar key={"empty-" + i} className="text-gray-300 dark:text-gray-600" />
      ))}
    </div>
  );
}

export default function Home({ products, user, onDelete }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`شكراً لتواصلك معنا، ${formData.name}!`);
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <div
      className="animate-fade-in px-8 py-12 relative overflow-hidden min-h-screen
        bg-white text-black dark:bg-[#1A1A1A] dark:text-green-400 font-serif"
      style={{ lineHeight: 1.65 }}
    >
      {/* Overlay خفيف */}
      <div className="absolute inset-0 bg-green-50 opacity-20 dark:bg-black dark:opacity-60 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-24">

        {/* العنوان الرئيسي */}
        <header className="mb-20 animate-fade-in">
          <h1
            className="
              mt-24
              text-7xl font-extrabold tracking-widest
              cursor-default
              border-b-4 border-black dark:border-green-400
              max-w-md mx-auto
              pb-5
              drop-shadow-md
              select-none
            "
          >
            زيتونه
          </h1>
          <p
            className="
              text-3xl
              max-w-lg mx-auto mt-8
              font-semibold tracking-wide
              leading-relaxed text-center
              italic
              text-black dark:text-green-400
            "
          >
            زيت زيتون بكر ممتاز من أشجار مئوية
          </p>
        </header>

        {/* فاصل */}
        <hr className="border-black dark:border-green-400 opacity-70 w-3/4 mx-auto" />

        {/* من نحن */}
        <section
          id="about"
          className="max-w-5xl mx-auto bg-green-100 rounded-3xl shadow-xl py-20 px-16 sm:px-24 dark:bg-[#052007] animate-fade-in-up"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-semibold text-green-900 dark:text-green-300 mb-8 tracking-tight">
              100% زيت زيتون طبيعي
            </h2>
            <p className="text-xl text-green-800 dark:text-green-200 mb-14 leading-relaxed tracking-wide italic">
              من أشجار زيتون معمرة في شمال سيناء، معصور على البارد للحفاظ على جميع العناصر الغذائية.
            </p>
            <a
              href="/products"
              className="
                inline-block
                bg-black dark:bg-green-600
                text-green-400 dark:text-black font-semibold text-xl px-14 py-4 rounded-xl shadow-lg
                transition-transform duration-300 ease-in-out
                hover:scale-105 hover:shadow-2xl
                active:scale-95
                select-none
                tracking-wide
              "
              aria-label="تصفح المنتجات"
            >
              تصفح المنتجات
            </a>
          </div>
        </section>

        {/* فاصل */}
        <hr className="border-black dark:border-green-400 opacity-70 w-3/4 mx-auto" />

        {/* المنتجات */}
        <section
          aria-label="منتجات زيتونه"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 px-8 max-w-7xl mx-auto animate-fade-in"
        >
          {products.length === 0 ? (
            <p
              className="text-center col-span-full font-semibold text-lg tracking-wide"
              style={{ color: "#014421" }}
            >
              لا توجد منتجات حالياً.
            </p>
          ) : (
            products.map((product) => (
              <article
                key={product.id}
                className="rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden relative transform hover:scale-[1.03] bg-green-50 dark:bg-[#0B2E07] border border-green-200 dark:border-green-700"
                aria-labelledby={`product-title-${product.id}`}
              >
                <div
                  className="flex items-center justify-center h-52 text-9xl select-none"
                  style={{
                    background: "linear-gradient(to top right, #e9f5e9, #d6e9d6)",
                    filter: "drop-shadow(0 4px 5px rgba(47, 79, 47, 0.12))",
                  }}
                >
                  🫒
                </div>

                <div className="p-8 flex flex-col flex-grow text-green-900 dark:text-green-300">
                  <h3
                    id={`product-title-${product.id}`}
                    className="text-3xl font-bold mb-3 tracking-tight"
                  >
                    {product.name}
                  </h3>
                  <p className="text-2xl font-semibold mb-6">
                    {product.price} ج.م
                  </p>

                  <a
                    href={`https://wa.me/966501234567?text=مرحباً، أريد شراء ${encodeURIComponent(
                      product.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-auto text-center
                      font-semibold
                      py-4 rounded-xl shadow-md
                      transition-colors duration-300
                      select-none
                      bg-black dark:bg-green-800
                      text-green-400 dark:text-black
                      hover:bg-gray-800 dark:hover:bg-green-700
                    "
                    aria-label={`اطلب ${product.name} عبر واتساب`}
                  >
                    اطلب الآن
                  </a>
                </div>

                {user?.role === "admin" && (
                  <button
                    onClick={() => onDelete(product.id)}
                    className="absolute top-4 left-4 rounded-full px-4 py-1 shadow-lg transition select-none font-semibold text-white bg-red-700 hover:bg-red-900"
                    title="حذف المنتج"
                  >
                    حذف
                  </button>
                )}
              </article>
            ))
          )}
        </section>

        {/* فاصل */}
        <hr className="border-black dark:border-green-400 opacity-70 w-3/4 mx-auto" />

        {/* قسم الصور والنص */}
        <section
          className="flex flex-col md:flex-row max-w-7xl mx-auto items-center gap-12 px-6 animate-fade-in-up"
          aria-label="صور وشجرة الزيتون"
        >
          <div className="flex-1">
            <img
              src={img1}
              alt="شجرة زيتون قديمة"
              className="rounded-3xl shadow-2xl w-full max-w-xl object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex-1 text-green-900 dark:text-green-300 text-xl leading-relaxed tracking-wide">
            <p>
              شجرة الزيتون في هذه الصورة عمرها يزيد عن مئة سنة، وتعتبر من أجود أشجار الزيتون في شمال سيناء.
            </p>
            <p className="mt-4">
              الزيت المعصور على البارد يحافظ على جميع العناصر الغذائية والطعم الفريد.
            </p>
          </div>
        </section>

        {/* فاصل */}
        <hr className="border-black dark:border-green-400 opacity-70 w-3/4 mx-auto" />

        {/* قسم آراء العملاء */}
        <section
          aria-label="آراء العملاء"
          className="max-w-5xl mx-auto bg-green-100 dark:bg-[#052007] rounded-3xl p-16 animate-fade-in"
        >
          <h2 className="text-4xl font-semibold text-green-900 dark:text-green-300 mb-10 text-center">
            آراء العملاء
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonialsData.map(({ rating, text, customer }, i) => (
              <blockquote
                key={i}
                className="bg-green-50 dark:bg-[#0B2E07] rounded-3xl p-8 shadow-lg text-green-900 dark:text-green-300"
              >
                <Stars rating={rating} />
                <p className="mt-4 text-lg leading-relaxed tracking-wide italic">{text}</p>
                <footer className="mt-6 text-right font-semibold">{customer}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* فاصل */}
        <hr className="border-black dark:border-green-400 opacity-70 w-3/4 mx-auto" />

        {/* قسم تواصل معنا */}
        <section
          aria-label="تواصل معنا"
          className="max-w-4xl mx-auto bg-green-100 dark:bg-[#052007] rounded-3xl p-16 animate-fade-in-up"
        >
          <h2 className="text-4xl font-semibold text-green-900 dark:text-green-300 mb-10 text-center">
            تواصل معنا
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 text-green-900 dark:text-green-300">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">
                الاسم
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border border-green-400 dark:border-green-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                البريد الإلكتروني
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border border-green-400 dark:border-green-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold">
                الرسالة
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-md border border-green-400 dark:border-green-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black dark:bg-green-700 text-green-400 dark:text-black py-4 rounded-xl font-semibold text-xl shadow-md hover:bg-gray-800 dark:hover:bg-green-600 transition-colors duration-300 select-none"
            >
              إرسال
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
