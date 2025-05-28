import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

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
      {[...Array(fullStars)].map((_, i) => <FaStar key={i} />)}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
        <FaStar key={"empty-" + i} className="text-gray-300" />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      {/* قسم آراء العملاء */}
      <section
        id="testimonials"
        className="py-16 max-w-5xl mx-auto rounded-3xl border-4 border-yellow-300 shadow-lg px-8 bg-white"
      >
        <h2 className="text-4xl font-extrabold text-green-900 mb-12 text-center">
          آراء العملاء
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-yellow-50 rounded-xl p-6 shadow-md hover:shadow-xl transition cursor-default flex flex-col justify-between border border-green-200"
            >
              <Stars rating={testimonial.rating} />
              <p className="text-green-700 text-base mb-6 text-center italic">
                “{testimonial.text}”
              </p>
              <p className="text-green-900 font-semibold text-lg text-center">
                - {testimonial.customer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
