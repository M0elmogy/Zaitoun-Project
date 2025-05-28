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
import img2 from "../components/img/img2.jpg";
import img3 from "../components/img/img3.jpg";

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
    <div className="pt-16 md:pt-20 flex text-yellow-400 mb-2 justify-center">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
        <FaStar key={"empty-" + i} className="text-gray-300" />
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
      className="px-8 py-12 text-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, var(--color-bg-light), var(--color-bg-lighter), var(--color-accent-yellow-light))",
        color: "var(--color-text-dark)",
        "--color-primary-dark": "#226f54",
        "--color-primary-light": "#a7f3d0",
        "--color-primary-medium": "#4ade80",
        "--color-accent-yellow": "#fbbf24",
        "--color-accent-yellow-dark": "#b45309",
        "--color-accent-yellow-light": "#fff7db",
        "--color-text-dark": "#14532d",
        "--color-text-light": "#15803d",
        "--color-bg-light": "#ecfdf5",
        "--color-bg-lighter": "#f9faf7",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-20">

        {/* العنوان الرئيسي */}
       <header className="mb-20">
  <h1
    className="
      mt-20
      text-5xl md:text-6xl font-extrabold tracking-tight
      bg-gradient-to-r from-[#3a5a40] via-[#5a7d48] to-[#9dbf9e]
      text-transparent bg-clip-text
      drop-shadow-lg
      cursor-default
      text-center
      tilt-animation
      transition-transform duration-700 ease-in-out
      hover:scale-105
      pb-4
      border-b-2 border-[#5a7d48]
      max-w-md mx-auto
    "
  >
    زيتونه
  </h1>
  <p
    className="
      text-xl md:text-2xl 
      max-w-lg mx-auto mt-6 
      font-semibold tracking-wide drop-shadow-md 
      leading-relaxed text-center
      text-[#3a5a40]
    "
  >
    زيت زيتون بكر ممتاز من أشجار مئوية
  </p>

  <style jsx>{`
    @keyframes tilt {
      0%, 100% {
        transform: rotate(-2deg);
        filter: drop-shadow(2px 4px 6px rgba(58, 90, 64, 0.4));
      }
      50% {
        transform: rotate(2deg);
        filter: drop-shadow(4px 8px 8px rgba(93, 125, 72, 0.6));
      }
    }

    .tilt-animation {
      animation: tilt 4s ease-in-out infinite;
      will-change: transform, filter;
    }
  `}</style>
</header>



        {/* فاصل */}
        <hr className="border-[var(--color-primary-medium)] opacity-30" />

        {/* قسم من نحن */}
<section
  id="about"
  className="max-w-5xl mx-auto bg-gradient-to-r from-green-50 via-green-100 to-green-50 rounded-3xl shadow-xl py-20 px-12 sm:px-20"
>
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-5xl font-extrabold text-green-900 mb-6 drop-shadow-md">
      100% زيت زيتون طبيعي
    </h2>
    <p className="text-xl text-green-700 mb-12 leading-relaxed tracking-wide">
      من أشجار زيتون معمرة في شمال سيناء، معصور على البارد للحفاظ على جميع العناصر الغذائية.
    </p>
    <a
      href="/products"
      className="
        inline-block
        bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
        text-green-900 font-bold text-lg px-10 py-4 rounded-full shadow-lg
        transition-transform duration-300 ease-in-out
        hover:scale-110 hover:shadow-2xl
        active:scale-95
        select-none
      "
      aria-label="تصفح المنتجات"
    >
      تصفح المنتجات
    </a>
  </div>
</section>



        {/* فاصل */}
        <hr className="border-[var(--color-primary-medium)] opacity-30" />

        {/* قسم المنتجات */}
       <section
  aria-label="منتجات زيتونه"
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6 max-w-7xl mx-auto"
>
  {products.length === 0 ? (
    <p
      className="text-center col-span-full font-semibold text-lg"
      style={{ color: "var(--color-primary-medium)" }}
    >
      لا توجد منتجات حاليًا.
    </p>
  ) : (
    products.map((product) => (
      <article
        key={product.id}
        className="bg-[var(--color-primary-light)] rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden"
        aria-labelledby={`product-title-${product.id}`}
      >
        <div
          className="flex items-center justify-center h-48 bg-gradient-to-tr from-[var(--color-accent-yellow-light)] to-[var(--color-primary-medium)] text-8xl select-none"
          style={{ filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.15))" }}
        >
          🫒
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3
            id={`product-title-${product.id}`}
            className="text-2xl font-extrabold mb-2"
            style={{ color: "var(--color-primary-dark)" }}
          >
            {product.name}
          </h3>
          <p
            className="text-xl font-semibold mb-4"
            style={{ color: "var(--color-primary-medium)" }}
          >
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
              bg-[var(--color-primary-dark)] text-[var(--color-accent-yellow)] font-semibold
              py-3 rounded-lg shadow-md
              hover:bg-[var(--color-accent-yellow)] hover:text-[var(--color-primary-dark)]
              transition-colors duration-300
              select-none
            "
            aria-label={`اطلب ${product.name} عبر واتساب`}
          >
            اطلب الآن
          </a>
        </div>

        {user?.role === "admin" && (
          <button
            onClick={() => onDelete(product.id)}
            className="absolute top-3 left-3 bg-red-600 text-white hover:bg-red-700 rounded-full px-3 py-1 shadow-md transition select-none"
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
        <hr className="border-[var(--color-primary-medium)] opacity-30" />

        {/* قسم من نحن مع الصور والنص */}
<section
  id="about-images"
  className="py-16 px-8 max-w-6xl mx-auto border border-[var(--color-primary-medium)] rounded-3xl shadow-lg bg-gradient-to-b from-[var(--color-bg-light)] to-[var(--color-bg-lighter)]"
>
  <div className="flex flex-col md:flex-row gap-12">
    <div className="flex-1 flex flex-col gap-8">
      {[img1, img2, img3].map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={
            idx === 0
              ? "شجرة زيتون قديمة"
              : idx === 1
              ? "عبوات زيت زيتون"
              : "زيت زيتون في زجاجة"
          }
          className="rounded-3xl shadow-xl object-cover h-64 w-full hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      ))}
    </div>

    <div
      className="flex-1 flex flex-col justify-center text-right"
      style={{ color: "var(--color-primary-darkest)" }} // هنا غيرت اللون
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
        من نحن؟
      </h2>
    <p
  className="mb-6 text-lg md:text-xl leading-relaxed font-semibold"
  style={{ color: "var(--color-primary-dark)" }}
>
  نحن شركة عائلية ننتج زيت زيتون بكر ممتاز من أشجار معمرة في شمال سيناء، معصور على البارد للحفاظ على الفيتامينات والنكهات الطبيعية.
</p>

      <p className="text-lg md:text-xl font-semibold leading-relaxed">
        نحرص على جودة المنتج ونبذل قصارى جهدنا لإرضاء زبائننا الكرام.
      </p>
    </div>
  </div>
</section>



        {/* فاصل */}
        <hr className="border-[var(--color-primary-medium)] opacity-30" />

        {/* قسم آراء العملاء */}
<section
  aria-label="آراء العملاء"
  className="max-w-6xl mx-auto px-6 py-20 bg-gradient-to-b from-green-50 to-yellow-50 rounded-3xl shadow-xl"
>
  <h2
    className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-green-900"
  >
    آراء العملاء
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
    {testimonialsData.map(({ rating, text, customer }, index) => (
      <article
        key={index}
        className="
          relative
          p-8
          bg-green-100
          rounded-3xl
          shadow-lg
          flex flex-col
          transform
          opacity-0
          scale-95
          animate-fadeInScale
        "
        style={{ color: "#365314" }}
        style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
      >
        <Stars rating={rating} className="mb-6 justify-center text-yellow-700" />
        <p className="text-center text-lg md:text-xl leading-relaxed font-semibold mb-8 text-green-800">
          &quot;{text}&quot;
        </p>
        <p className="mt-auto font-bold text-center text-green-900">{`— ${customer}`}</p>
      </article>
    ))}
  </div>

  <style jsx>{`
    @keyframes fadeInScale {
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    .animate-fadeInScale {
      animation-name: fadeInScale;
      animation-duration: 0.5s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
    }
  `}</style>
</section>




        {/* فاصل */}
        <hr className="border-[var(--color-primary-medium)] opacity-30" />

        {/* لماذا تختار زيتونه؟ */}
        <section
  aria-label="لماذا تختار زيتونه؟"
  className="max-w-6xl mx-auto px-6 py-20 text-right bg-gradient-to-r from-green-50 via-green-100 to-yellow-50 rounded-3xl shadow-lg"
  style={{ color: "#2F4F2F" }} // أخضر ترابي غامق
>
  <h2 className="text-5xl font-extrabold mb-12 text-green-800 drop-shadow-sm">
    لماذا تختار زيتونه؟
  </h2>

  <ul className="space-y-8 max-w-4xl mx-auto">
    {[
      "زيت طبيعي 100% بكر ممتاز من أشجار معمرة.",
      "معصور على البارد للحفاظ على الفيتامينات والنكهات.",
      "غني بمضادات الأكسدة والفيتامينات.",
      "يدعم الصحة العامة والقلب ويقوي المناعة.",
      "مناسب للطهي والسلطات ولأصحاب الحميات الغذائية.",
      "توصيل سريع وموثوق وخدمة عملاء مميزة.",
    ].map((item, i) => (
      <li
        key={i}
        className="
          flex items-center space-x-4 text-lg md:text-xl font-semibold max-w-4xl mx-auto
          opacity-0 translate-x-10 animate-fadeInRight
        "
        style={{
          color: "#4F744F", // أخضر متوسط
          animationDelay: `${i * 200}ms`,
          animationFillMode: "forwards",
        }}
      >
        <FaCheck className="text-green-700 w-8 h-8 flex-shrink-0" />
        <span className="text-right">{item}</span>
      </li>
    ))}
  </ul>

  <style jsx>{`
    @keyframes fadeInRight {
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .animate-fadeInRight {
      animation-name: fadeInRight;
      animation-duration: 0.6s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
    }
  `}</style>
</section>


        {/* فاصل */}
        <hr className="border-[var(--color-primary-medium)] opacity-30" />

        {/* قسم التواصل مع نموذج */}
<section
  id="contact"
  className="max-w-3xl mx-auto bg-gradient-to-tr from-[var(--color-accent-yellow-light)] to-[var(--color-primary-light)] rounded-3xl p-12 shadow-2xl"
  style={{ color: "var(--color-primary-dark)" }}
>
  <h2 className="text-4xl font-extrabold mb-10 text-center drop-shadow-md">
    تواصل معنا
  </h2>

  <form onSubmit={handleSubmit} className="space-y-8 text-right">
    <div className="flex flex-col space-y-4">
      <input
        type="text"
        name="name"
        placeholder="الاسم"
        className="
          w-full
          rounded-xl
          border-2 border-transparent
          bg-white bg-opacity-80
          px-5 py-4
          placeholder-gray-500
          text-lg font-semibold
          focus:outline-none focus:border-[var(--color-primary-dark)] focus:shadow-lg
          transition-all duration-300
          animate-fadeInUp
        "
        required
        value={formData.name}
        onChange={handleChange}
        aria-label="الاسم"
      />
      <input
        type="email"
        name="email"
        placeholder="البريد الإلكتروني"
        className="
          w-full
          rounded-xl
          border-2 border-transparent
          bg-white bg-opacity-80
          px-5 py-4
          placeholder-gray-500
          text-lg font-semibold
          focus:outline-none focus:border-[var(--color-primary-dark)] focus:shadow-lg
          transition-all duration-300
          animate-fadeInUp
          delay-150
        "
        required
        value={formData.email}
        onChange={handleChange}
        aria-label="البريد الإلكتروني"
      />
      <textarea
        name="message"
        placeholder="رسالتك"
        rows={5}
        className="
          w-full
          rounded-xl
          border-2 border-transparent
          bg-white bg-opacity-80
          px-5 py-4
          placeholder-gray-500
          text-lg font-semibold
          resize-none
          focus:outline-none focus:border-[var(--color-primary-dark)] focus:shadow-lg
          transition-all duration-300
          animate-fadeInUp
          delay-300
        "
        required
        value={formData.message}
        onChange={handleChange}
        aria-label="رسالتك"
      />
    </div>

    <button
      type="submit"
      className="
        w-full
        bg-[var(--color-primary-dark)]
        text-[var(--color-accent-yellow)]
        font-extrabold
        py-5 rounded-3xl shadow-xl
        hover:bg-[var(--color-accent-yellow)] hover:text-[var(--color-primary-dark)]
        transition-colors duration-400 ease-in-out
        transform hover:scale-105
        animate-fadeInUp delay-450
      "
    >
      إرسال
    </button>
  </form>
</section>



        {/* فاصل */}
        <hr className="border-[var(--color-primary-medium)] opacity-30" />

        {/* بيانات الاتصال أسفل الصفحة */}

      </div>

      {/* أنيميشن الـ tilt */}
      <style>
        {`
          @keyframes tilt {
            0%, 100% { transform: rotate(-2deg); }
            50% { transform: rotate(2deg); }
          }
          .tilt-animation {
            animation: tilt 4s ease-in-out infinite;
            transform-origin: center center;
            display: inline-block;
          }
        `}
      </style>
    </div>
  );
}
