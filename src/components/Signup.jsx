import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [newUserData, setNewUserData] = useState({
    mail: "",
    password: "",
    confirmpassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({
    mail: "",
    password: "",
    confirmpassword: "",
  });
  useEffect(() => {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    navigate("/dashboard", { replace: true });
  }
}, [navigate]);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const hasLowercase = /[a-z]/;
  const hasUppercase = /[A-Z]/;
  const hasNumber = /\d/;
  const hasSpecialChar = /[@$!%*?&]/;


  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewUserData((currInfo) => ({
      ...currInfo,
      [name]: value,
    }));

    setErrors((currErrors) => ({
      ...currErrors,
      [name]: "",
    }));
  };

  const Signedup = () => {
  let newErrors = {
    mail: "",
    password: "",
    confirmpassword: "",
  };

  let isValid = true;

  if (!newUserData.mail) {
    newErrors.mail = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(newUserData.mail)) {
    newErrors.mail = "Please enter a valid email address";
    isValid = false;
  }

  if (!newUserData.password) {
    newErrors.password = "Password is required";
    isValid = false;
  } else if (newUserData.password.length < 8) {
    newErrors.password = "Password must contain at least 8 characters";
    isValid = false;
  } else if (!hasLowercase.test(newUserData.password)) {
    newErrors.password = "Password must include at least one lowercase letter";
    isValid = false;
  } else if (!hasUppercase.test(newUserData.password)) {
    newErrors.password = "Password must include at least one uppercase letter";
    isValid = false;
  } else if (!hasNumber.test(newUserData.password)) {
    newErrors.password = "Password must include at least one numeric digit";
    isValid = false;
  } else if (!hasSpecialChar.test(newUserData.password)) {
    newErrors.password = "Password must include at least one special character (@$!%*?&)";
    isValid = false;
  }
  
  if (!newUserData.confirmpassword) {
    newErrors.confirmpassword = "Please confirm your password";
    isValid = false;
  } else if (newUserData.password !== newUserData.confirmpassword) {
    newErrors.confirmpassword = "Passwords do not match";
    isValid = false;
  }

  setErrors(newErrors);

  if (!isValid) {
    return; 
  }

  localStorage.setItem("user", JSON.stringify(newUserData));
  alert("Signup successful! Please login.");
  navigate("/login");
};

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center
                 bg-cover bg-center bg-no-repeat
                 px-4 py-8"
      style={{
        backgroundImage: "url('/signupbg.png')",
      }}
    >
      <div
        className="w-full max-w-md
                   px-6 py-7 sm:px-10 sm:py-8
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
                     text-gray-800 mb-7"
        >
          SIGN UP
        </h2>

        <div className="mb-4">
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
              value={newUserData.mail}
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

          {errors.mail && (
            <p className="text-red-700 text-sm font-semibold mt-1">
              {errors.mail}
            </p>
          )}
        </div>

        <div className="mb-4">
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
                value={newUserData.password}
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

          {errors.password && (
            <p className="text-red-700 text-sm font-semibold mt-1">
              {errors.password}
            </p>
          )}
        </div>

        <div className="mb-5">
          <div className="flex bg-slate-800/80">

            <div
              className="w-12 min-w-12 flex items-center justify-center
                         bg-slate-900/70 text-white text-lg"
            >
              <i className="fi fi-rr-lock"></i>
            </div>

            <div className="relative w-full">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmpassword"
                value={newUserData.confirmpassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
                className="w-full bg-transparent
                           text-white placeholder-gray-400
                           px-4 py-3 pr-12 outline-none
                           transition-all duration-300
                           focus:bg-slate-700/50"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-3 top-1/2
                           -translate-y-1/2
                           text-gray-300
                           hover:text-white
                           transition-all duration-300
                           hover:scale-110"
              >
                <i
                  className={
                    showConfirmPassword
                      ? "fi fi-rr-eye"
                      : "fi fi-rr-eye-crossed"
                  }
                ></i>
              </button>
            </div>
          </div>

          {errors.confirmpassword && (
            <p className="text-red-700 text-sm font-semibold mt-1">
              {errors.confirmpassword}
            </p>
          )}
        </div>

        <button
          onClick={Signedup}
          className="w-full py-3
                     bg-emerald-400
                     text-gray-900
                     tracking-[2px]
                     font-medium
                     transition-all duration-300
                     hover:bg-emerald-300
                     hover:tracking-[4px]
                     hover:shadow-lg
                     active:scale-95"
        >
          Sign In
        </button>

        <div className="text-center mt-5">
          <p className="text-white/90 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="underline font-medium
                         hover:text-cyan-200
                         transition-colors duration-300"
            >
              Login
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;