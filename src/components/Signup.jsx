import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="m-0 p-0 bg-purple-900 min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-112.5 max-w-[90%] border px-8 py-8 bg-purple-600 rounded-xl shadow-xl shadow-indigo-400">
        <h2 className="text-3xl font-bold mb-5">Signup</h2>
        <div className="w-full">
          <label className="block m-2 font-bold">
            Email
          </label>

          <input
            type="email"
            name="mail"
            value={newUserData.mail}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border rounded-md px-3 py-2 bg-white w-full"
          />

          {errors.mail && (
            <p className="text-red-700 text-sm font-semibold mt-1">
              {errors.mail}
            </p>
          )}
        </div>

        <div className="w-full">
          <label className="block m-2 font-bold">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={newUserData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="border rounded-md px-3 py-2 bg-white w-full pr-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-xl"
            >
              <i className={showPassword ? "fi fi-rr-eye" : "fi fi-rr-eye-crossed"}></i>
            </button>
          </div>

          {errors.password && (
            <p className="text-red-700 text-sm font-semibold mt-1">
              {errors.password}
            </p>
          )}

          <p className="text-sm mt-1 text-gray-900">
            Password must contain at least 8 characters
          </p>
        </div>

        <div className="w-full">
          <label className="block m-2 font-bold">
            Confirm Password
          </label>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmpassword"
              value={newUserData.confirmpassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="border rounded-md px-3 py-2 bg-white w-full pr-12"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-3 top-2 text-xl"
            >
               <i className={showConfirmPassword ? "fi fi-rr-eye" : "fi fi-rr-eye-crossed"}></i>
            </button>
          </div>

          {errors.confirmpassword && (
            <p className="text-red-700 text-sm font-semibold mt-1">
              {errors.confirmpassword}
            </p>
          )}
        </div>

        <button
          onClick={Signedup}
          className="border p-2 m-5 rounded-full w-28 bg-blue-400 font-bold hover:bg-sky-500"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;