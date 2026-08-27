import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="bg-purple-800 text-white px-8 py-4 flex justify-between items-center">
      <button
        onClick={() => navigate("/")}
        className="text-2xl font-bold"
      >
        MyApp
      </button>
      <div className="flex items-center gap-4">

        <button
          onClick={() => navigate("/")}
          className="hover:text-purple-200"
        >
          Home
        </button>


        {isLoggedIn ? (
          <>
            <button
              onClick={() => navigate("/dashboard")}
              className="hover:text-purple-200"
            >
              Dashboard
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="hover:text-purple-200"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="bg-white text-purple-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
            >
              Sign Up
            </button>
          </>
        )}

      </div>

    </nav>
  );
};

export default Navbar;