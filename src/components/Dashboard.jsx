import { useState } from "react";
import { v4 as uuid } from "uuid";
import Navbar from "./Navbar";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const [userInfo, setUserInfo] = useState({
    id: uuid,
    name: "",
    age: "",
    email: "",
    phone: "",
    gender: "",
     dob: "",
      city: "",
      state: "",
      country: "",
      address: "",
  });

  const [buttonState, setButtonState] = useState("add");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo((currInfo) => {
      return {
        ...currInfo,
        [name]: value,
      };
    });
  };

  const addData = () => {
    setUsers((currUsers) => [...currUsers, userInfo]);
    setUserInfo({
      id: uuid(),
      name: "",
      age: "",
      email: "",
      phone: "",
      gender: "",
       dob: "",
      city: "",
      state: "",
      country: "",
      address: "",
    });
  };

  const deleteData = (id) => {
    console.log("Deleted an user")
    setUsers((currUsers) => {
      return currUsers.filter((user) => {
        return user.id !== id;
      });
    });
  };

  const startEditing = (user) => {
    console.log("Edit enabled")
    setUserInfo(user);
    setButtonState();
  };

  const CancelEditing = () => {
    console.log("No changes")
    setUserInfo({
      id: uuid(),
      name: "",
      age: "",
      email: "",
      phone: "",
      gender: "",
      dob: "",
      city: "",
      state: "",
      country: "",
      address: "",
    });
    setButtonState("add");
  };

  const updateData = () => {
    console.log("Update is performed ")
    setUsers((currUsers) => {
      return currUsers.map((user) => {
        if (user.id === userInfo.id) {
          return userInfo;
        }
        return user;
      });
    });
    CancelEditing();
  };

  return (
   <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-slate-100 p-4 sm:p-6">
  <Navbar />
  <div className="flex justify-center items-center mt-6 sm:mt-8">
    <div
      className="w-full max-w-3xl
                 bg-white/90 backdrop-blur-sm
                 rounded-2xl
                 shadow-xl
                 p-5 sm:p-8
                 transition-all duration-300
                 hover:shadow-2xl"
    >
      <h2
        className="text-2xl sm:text-3xl font-bold
                   text-center text-purple-800
                   mb-6 sm:mb-8"
      >
        Personal Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            value={userInfo.name}
            className="w-full px-4 py-3
                       border border-gray-300
                       rounded-lg
                       bg-gray-50
                       outline-none
                       transition-all duration-300
                       focus:bg-white
                       focus:border-purple-500
                       focus:ring-2 focus:ring-purple-200
                       hover:border-purple-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Age
          </label>

          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            onChange={handleChange}
            value={userInfo.age}
            className="w-full px-4 py-3
                       border border-gray-300
                       rounded-lg
                       bg-gray-50
                       outline-none
                       transition-all duration-300
                       focus:bg-white
                       focus:border-purple-500
                       focus:ring-2 focus:ring-purple-200
                       hover:border-purple-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            value={userInfo.email}
            className="w-full px-4 py-3
                       border border-gray-300
                       rounded-lg
                       bg-gray-50
                       outline-none
                       transition-all duration-300
                       focus:bg-white
                       focus:border-purple-500
                       focus:ring-2 focus:ring-purple-200
                       hover:border-purple-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone
          </label>

          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone"
            onChange={handleChange}
            value={userInfo.phone}
            className="w-full px-4 py-3
                       border border-gray-300
                       rounded-lg
                       bg-gray-50
                       outline-none
                       transition-all duration-300
                       focus:bg-white
                       focus:border-purple-500
                       focus:ring-2 focus:ring-purple-200
                       hover:border-purple-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Date of Birth
          </label>

          <input
            type="date"
            name="dob"
            value={userInfo.dob}
            onChange={handleChange}
            className="w-full px-4 py-3
                       border border-gray-300
                       rounded-lg
                       bg-gray-50
                       outline-none
                       transition-all duration-300
                       focus:bg-white
                       focus:border-purple-500
                       focus:ring-2 focus:ring-purple-200
                       hover:border-purple-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            City
          </label>

          <input
            type="text"
            name="city"
            placeholder="Enter your city"
            value={userInfo.city}
            onChange={handleChange}
            className="w-full px-4 py-3
                       border border-gray-300
                       rounded-lg
                       bg-gray-50
                       outline-none
                       transition-all duration-300
                       focus:bg-white
                       focus:border-purple-500
                       focus:ring-2 focus:ring-purple-200
                       hover:border-purple-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            State
          </label>

          <input
            type="text"
            name="state"
            placeholder="Enter your state"
            value={userInfo.state}
            onChange={handleChange}
            className="w-full px-4 py-3
                       border border-gray-300
                       rounded-lg
                       bg-gray-50
                       outline-none
                       transition-all duration-300
                       focus:bg-white
                       focus:border-purple-500
                       focus:ring-2 focus:ring-purple-200
                       hover:border-purple-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Country
          </label>

          <input
            type="text"
            name="country"
            placeholder="Enter your country"
            value={userInfo.country}
            onChange={handleChange}
            className="w-full px-4 py-3
                       border border-gray-300
                       rounded-lg
                       bg-gray-50
                       outline-none
                       transition-all duration-300
                       focus:bg-white
                       focus:border-purple-500
                       focus:ring-2 focus:ring-purple-200
                       hover:border-purple-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Gender
          </label>

          <div
            className="flex items-center gap-6
                       min-h-[48px]
                       px-4"
          >
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={userInfo.gender === "Male"}
                onChange={handleChange}
                className="accent-purple-600"
              />
              <span className="text-gray-700">Male</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={userInfo.gender === "Female"}
                onChange={handleChange}
                className="accent-purple-600"
              />
              <span className="text-gray-700">Female</span>
            </label>
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Address
          </label>

          <textarea
            name="address"
            value={userInfo.address}
            onChange={handleChange}
            placeholder="Enter your address"
            rows="3"
            className="w-full px-4 py-3
                       border border-gray-300
                       rounded-lg
                       bg-gray-50
                       outline-none
                       resize-none
                       transition-all duration-300
                       focus:bg-white
                       focus:border-purple-500
                       focus:ring-2 focus:ring-purple-200
                       hover:border-purple-400"
          />
        </div>
      </div>

      <div className="flex justify-center mt-7">

        {buttonState === "add" ? (

          <button
            onClick={addData}
            className="w-full sm:w-auto
                       px-8 py-3
                       rounded-lg
                       bg-purple-600
                       text-white
                       font-semibold
                       transition-all duration-300
                       hover:bg-purple-700
                       hover:shadow-lg
                       hover:-translate-y-0.5
                       active:scale-95"
          >
            Add
          </button>

        ) : (

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

            <button
              onClick={updateData}
              className="w-full sm:w-auto
                         px-8 py-3
                         rounded-lg
                         bg-purple-600
                         text-white
                         font-semibold
                         transition-all duration-300
                         hover:bg-purple-700
                         hover:shadow-lg
                         hover:-translate-y-0.5
                         active:scale-95"
            >
              Update
            </button>

            <button
              onClick={CancelEditing}
              className="w-full sm:w-auto
                         px-8 py-3
                         rounded-lg
                         bg-gray-200
                         text-gray-700
                         font-semibold
                         transition-all duration-300
                         hover:bg-gray-300
                         hover:shadow-md
                         active:scale-95"
            >
              Cancel
            </button>

          </div>
        )}
      </div>
    </div>
  </div>

  <div className="mt-8">

    <h2 className="text-xl sm:text-2xl font-bold text-center text-purple-800 mb-4">
      User Details
    </h2>

    <div
      className="w-full overflow-x-auto
                 rounded-xl shadow-lg bg-white"
    >
      <table className="w-full min-w-[1200px] border-collapse">

        <thead>
          <tr className="bg-purple-700 text-white">

            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Age</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Gender</th>
            <th className="p-3 text-left">D.O.B</th>
            <th className="p-3 text-left">City</th>
            <th className="p-3 text-left">State</th>
            <th className="p-3 text-left">Country</th>
            <th className="p-3 text-left">Address</th>
            <th className="p-3 text-center">Actions</th>

          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className="border-b border-gray-200
                         hover:bg-purple-50
                         transition-colors duration-200"
            >

              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.age}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.phone}</td>
              <td className="p-3">{user.gender}</td>
              <td className="p-3">{user.dob}</td>
              <td className="p-3">{user.city}</td>
              <td className="p-3">{user.state}</td>
              <td className="p-3">{user.country}</td>
              <td className="p-3 max-w-xs truncate">
                {user.address}
              </td>

              <td className="p-3">
                <div className="flex justify-center gap-2">

                  <button
                    onClick={() => startEditing(user)}
                    className="px-3 py-1.5
                               rounded-md
                               bg-blue-500
                               text-white
                               text-sm
                               transition-all duration-200
                               hover:bg-blue-600
                               hover:-translate-y-0.5
                               active:scale-95"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteData(user.id)}
                    className="px-3 py-1.5
                               rounded-md
                               bg-red-500
                               text-white
                               text-sm
                               transition-all duration-200
                               hover:bg-red-600
                               hover:-translate-y-0.5
                               active:scale-95"
                  >
                    Delete
                  </button>

                </div>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  </div>
</div>
  );
};


export default Dashboard