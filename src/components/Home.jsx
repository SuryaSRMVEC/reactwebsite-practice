import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-purple-950 text-white flex justify-center items-center">
      <div className="text-center">

        <h1 className="text-5xl font-bold mb-4">
          Welcome
        </h1>

        <p className="text-purple-200 text-lg mb-8">
          Welcome to our website
        </p>

        <div className="flex justify-center gap-4">

          <button
            onClick={() => navigate("/login")}
            className="px-6 py-3 bg-purple-500 rounded-lg font-bold hover:bg-purple-400"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="px-6 py-3 bg-white text-purple-900 rounded-lg font-bold hover:bg-gray-200"
          >
            Sign Up
          </button>

        </div>

      </div>

    </div>
  );
};

export default Home;