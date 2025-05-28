import React from "react";
import { FaCheck } from "react-icons/fa";

import img1 from "../components/img/img1.jpg";
import img2 from "../components/img/img2.jpg";
import img3 from "../components/img/img3.jpg";

export default function About() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-green-50"
      style={{ padding: "2rem" }}
    >
      <section
        id="about-images"
        className="about-section max-w-6xl w-full border border-green-300 rounded-3xl shadow-lg p-10 bg-gradient-to-b from-green-50 to-green-150"
      >
        <div className="about-content flex flex-col md:flex-row gap-10">
          {/* الصور */}
          <div className="about-image flex-[1.5] grid grid-cols-2 gap-6">
            {/* الصورتان الصغيرتان فوق */}
            <div className="image-container overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src={img1}
                alt="أشجار زيتون"
                className="w-full h-full object-cover aspect-[4/3] rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="image-container overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src={img2}
                alt="حصاد الزيتون"
                className="w-full h-full object-cover aspect-[4/3] rounded-xl"
                loading="lazy"
              />
            </div>

            {/* الصورة الكبيرة تمتد بعرض العمودين */}
            <div className="image-container overflow-hidden rounded-3xl shadow-xl col-span-2 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src={img3}
                alt="زيت زيتون"
                className="w-full h-72 object-cover rounded-3xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* النص */}
          <div className="about-text flex-1 text-green-900 space-y-6 text-lg leading-relaxed">
            <p className="font-semibold text-green-800">
              نحن عائلة <span className="text-green-700">"زيتون"</span> نعمل في زراعة أشجار الزيتون وإنتاج زيت الزيتون منذ أكثر من 50 عاماً. نحرص على تقديم زيت زيتون بجودة عالية من أشجارنا المعمرة في شمال سيناء.
            </p>
            <p className="text-green-700">
              نتبع الطرق التقليدية في العصر على البارد للحفاظ على القيمة الغذائية والطعم المميز لزيت الزيتون.
            </p>
            <ul className="features-list list-disc list-inside space-y-3 text-green-800 font-medium">
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-600" /> زيت طبيعي 100%
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-600" /> معصور على البارد
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-600" /> خالي من أي إضافات
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-600" /> تغليف خاص لحماية الجودة
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
