import React from "react";

export default function Products({ products, user, onDelete }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
        كل المنتجات
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">لا توجد منتجات حاليًا.</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-2xl p-6 relative group transition hover:scale-105 duration-300 flex flex-col"
            >
              <div className="h-40 bg-green-100 flex items-center justify-center rounded-md mb-4 text-5xl">🫒</div>

              <h3 className="text-xl font-bold text-green-900 mb-2">{product.name}</h3>
              <p className="text-lg text-gray-700 mb-4">{product.price} ج.م</p>

              <a
                href={`https://wa.me/966501234567?text=مرحباً، أريد شراء ${encodeURIComponent(product.name)}`}
                className="mt-auto inline-block bg-green-600 text-white text-center px-4 py-2 rounded-lg hover:bg-green-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                اطلب عبر واتساب
              </a>

              {user?.role === "admin" && (
                <button
                  onClick={() => onDelete(product.id)}
                  className="absolute top-3 left-3 bg-red-100 text-red-600 hover:bg-red-200 px-3 py-1 text-sm rounded-full transition"
                >
                  حذف
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
