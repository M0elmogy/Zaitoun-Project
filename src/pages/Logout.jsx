import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Logout({ setUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  }, [setUser, navigate]);

  return <p className="mt-20 text-center">جاري تسجيل الخروج...</p>;
}
