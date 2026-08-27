import { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom"
const Login = () => {

    const navigate = useNavigate()

    const [userdata, setUserdata] = useState({
        mail: "",
        password: "",
    })

     const handleChange = (e) => {
            const { name, value } = e.target;
            setUserdata((currInfo) => {
             return {
                ...currInfo,
                [name]: value,
        };
    });
  };
  useEffect(() => {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    navigate("/dashboard", { replace: true });
  }
}, [navigate]);
 const Loggedin = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No account found. Please Sign Up.");
    navigate("/signup");
    return;
  }

  if (!userdata.mail) {
    alert("Enter your email");
    return;
  }

  if (!userdata.password) {
    alert("Enter your password");
    return;
  }

  if (userdata.mail !== storedUser.mail) {
    alert("Account unavailable. Please Sign Up!");
    return;
  }

  if (userdata.password !== storedUser.password) {
    alert("Password Incorrect");
    return;
  }

  localStorage.setItem("isLoggedIn", "true");
  alert("Login successful!");
  navigate("/dashboard");
};

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center
                 bg-cover bg-center bg-no-repeat
                 px-4 py-8"
      style={{
        backgroundImage: "url('/loginbg.png')",
      }}
    >
      <div
        className="w-full max-w-md
                   px-6 py-8 sm:px-10 sm:py-9
                   bg-cyan-300/35 backdrop-blur-md
                   border border-white/20
                   shadow-2xl
                   rounded-none
                   transition-all duration-500
                   hover:bg-cyan-300/40"
      >
        <h2
          className="text-center text-2xl sm:text-3xl
                     tracking-[4px] font-light
                     text-gray-800 mb-8"
        >
          MEMBER LOGIN
        </h2>

        <div className="mb-5">
          <div className="flex bg-slate-800/80">

            <div
              className="w-12 min-w-12 flex items-center justify-center
                         bg-slate-900/70 text-white text-lg"
            >
              <i className="fi fi-rr-user"></i>
            </div>

            <input
              type="email"
              name="mail"
              value={userdata.mail}
              onChange={handleChange}
              placeholder="Username"
              required
              className="w-full bg-transparent
                         text-white placeholder-gray-400
                         px-4 py-3 outline-none
                         transition-all duration-300
                         focus:bg-slate-700/50"
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex bg-slate-800/80">

            <div
              className="w-12 min-w-12 flex items-center justify-center
                         bg-slate-900/70 text-white text-lg"
            >
              <i className="fi fi-rr-lock"></i>
            </div>

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={userdata.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full bg-transparent
                           text-white placeholder-gray-400
                           px-4 py-3 pr-12 outline-none
                           transition-all duration-300
                           focus:bg-slate-700/50"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2
                           -translate-y-1/2
                           text-gray-300
                           hover:text-white
                           transition-all duration-300
                           hover:scale-110"
              >
                <i
                  className={
                    showPassword
                      ? "fi fi-rr-eye"
                      : "fi fi-rr-eye-crossed"
                  }
                ></i>
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={Loggedin}
          className="w-full py-3
                     bg-white/90
                     text-gray-900
                     tracking-[2px]
                     font-medium
                     transition-all duration-300
                     hover:bg-white
                     hover:tracking-[4px]
                     hover:shadow-lg
                     active:scale-95"
        >
          LOGIN
        </button>

        <div className="text-center mt-5">
          <p className="text-white/90 text-sm">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="underline font-medium
                         hover:text-cyan-200
                         transition-colors duration-300"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login