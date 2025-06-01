import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      setUser({ username: "admin", role: "admin" });
      navigate("/dashboard");
    } else if (username === "user" && password === "1234") {
      setUser({ username: "user", role: "user" });
      navigate("/");
    } else {
      setError("بيانات الدخول غير صحيحة");
    }
  }

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div
        className={`max-w-md w-full p-6 rounded shadow transition-colors duration-300 ${
          darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-center flex-grow">
            تسجيل الدخول
          </h2>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`ml-4 px-3 py-1 rounded ${
              darkMode
                ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                : "bg-gray-700 text-yellow-300 hover:bg-gray-600"
            } transition`}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {error && (
          <p className="text-red-500 mb-4 text-center font-semibold">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">اسم المستخدم:</label>
            <input
              type="text"
              className={`w-full rounded p-2 border focus:outline-none focus:ring-2 transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-gray-200 focus:ring-yellow-400"
                  : "bg-white border-gray-300 text-gray-900 focus:ring-green-500"
              }`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">كلمة المرور:</label>
            <input
              type="password"
              className={`w-full rounded p-2 border focus:outline-none focus:ring-2 transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-gray-200 focus:ring-yellow-400"
                  : "bg-white border-gray-300 text-gray-900 focus:ring-green-500"
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 rounded font-semibold transition-colors duration-300 ${
              darkMode
                ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                : "bg-green-700 text-white hover:bg-green-800"
            }`}
          >
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
}
