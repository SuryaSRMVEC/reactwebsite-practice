import { useState } from "react";
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

  const Loggedin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No account found. Please Sign Up.");
      navigate("/signup");
      return;
    }

    if(userdata.mail === storedUser.mail && userdata.password === storedUser.password){
        alert("Login successfull")
        navigate("/dashboard")
    }
    else{
        alert("Account unavailable Sign-Up!")
    }

  }   

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="m-0 p-0 bg-rose-600 min-h-screen flex justify-center items-center">
     <div className="flex flex-col justify-center items-center py-6 px-10 border m-10 w-[450px] max-w-[90%] bg-pink-600 rounded-xl shadow-xl shadow-pink-300">
        <h2 className="text-3xl font-bold ">Login</h2>
        <div className="w-full">
          <label className="block m-2 font-bold">Email</label>
          <input type="mail" required="true" name="mail" value={userdata.mail} onChange={handleChange} className="border rounded-md px-3 py-2 w-full bg-white" placeholder="Enter your e-mail" />
        </div>
       <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={userdata.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="border rounded-md px-3 py-2 bg-white w-full pr-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-xl"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        <div>
          <p className="p-2 text-xs indent-35 font-bold"> If you dont have Account? <Link to="/signup" className="underline active:text-white hover:text-sky-400 ">Sign Up</Link></p>
        </div>
        <button onClick={Loggedin} className="border rounded-full px-2 py-2 bg-fuchsia-400 w-20 hover:bg-fuchsia-600">Log In</button>
      </div>
     </div>
  )
}

export default Login