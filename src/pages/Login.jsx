import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">تسجيل الدخول</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">اسم المستخدم:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">كلمة المرور:</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
          >
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
}
