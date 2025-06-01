import React, { useState } from "react";

export default function Dashboard({ products, setProducts }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function addProduct(e) {
    e.preventDefault();
    if (!name.trim() || !price) return;

    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
  }

  function deleteProduct(id) {
    setProducts(products.filter((p) => p.id !== id));
  }

  function updateProduct(id, newName, newPrice) {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, name: newName, price: Number(newPrice) } : p
      )
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl mt-20">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-green-900">
        لوحة تحكم المنتجات
      </h2>

      <form
        onSubmit={addProduct}
        className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <input
          type="text"
          placeholder="اسم المنتج"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="number"
          placeholder="السعر (ج.م)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition"
        >
          إضافة منتج
        </button>
      </form>

      <ul className="divide-y divide-gray-200">
        {products.length === 0 && (
          <p className="text-center text-gray-500 py-10">لا توجد منتجات حتى الآن</p>
        )}

        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct}
          />
        ))}
      </ul>
    </div>
  );
}

function ProductItem({ product, deleteProduct, updateProduct }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(product.name);
  const [editPrice, setEditPrice] = useState(product.price);

  function saveEdit() {
    if (!editName.trim() || !editPrice) return;
    updateProduct(product.id, editName, editPrice);
    setIsEditing(false);
  }

  return (
    <li className="flex justify-between items-center py-4">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="border border-green-300 rounded-lg p-2 w-2/5 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="number"
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
            className="border border-green-300 rounded-lg p-2 w-1/5 focus:outline-none focus:ring-2 focus:ring-green-500 mx-4"
          />
          <button
            onClick={saveEdit}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition mx-2"
          >
            حفظ
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            إلغاء
          </button>
        </>
      ) : (
        <>
          <span className="text-green-900 font-medium">
            {product.name} - {product.price.toLocaleString()} ج.م
          </span>
          <div>
            <button
              onClick={() => setIsEditing(true)}
              className="border border-green-700 text-green-700 px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white transition mx-1"
            >
              تعديل
            </button>
            <button
              onClick={() => deleteProduct(product.id)}
              className="border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition mx-1"
            >
              حذف
            </button>
          </div>
        </>
      )}
    </li>
  );
}
