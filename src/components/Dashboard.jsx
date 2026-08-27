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
    <div className="p-5">
      <Navbar />
      <div className="flex justify-center items-center">
       <div className="flex justify-center items-start  bg-gray-100 p-6">

  <div className="w-full max-w-2xl bg-white border border-black rounded-xl shadow-lg p-6">

    <h2 className="text-2xl font-bold mb-6 text-center">
      Personal Details
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block font-semibold mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          value={userInfo.name}
          className="border border-gray-500 rounded-md px-3 py-2 w-full"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">
          Age
        </label>
        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          onChange={handleChange}
          value={userInfo.age}
          className="border border-gray-500 rounded-md px-3 py-2 w-full"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your e-mail"
          onChange={handleChange}
          value={userInfo.email}
          className="border border-gray-500 rounded-md px-3 py-2 w-full"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone"
          onChange={handleChange}
          value={userInfo.phone}
          className="border border-gray-500 rounded-md px-3 py-2 w-full"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">
          Date of Birth
        </label>
        <input
          type="date"
          name="dob"
          value={userInfo.dob}
          onChange={handleChange}
          className="border border-gray-500 rounded-md px-3 py-2 w-full"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">
          City
        </label>
        <input
          type="text"
          name="city"
          placeholder="Enter your city"
          value={userInfo.city}
          onChange={handleChange}
          className="border border-gray-500 rounded-md px-3 py-2 w-full"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">
          State
        </label>
        <input
          type="text"
          name="state"
          placeholder="Enter your state"
          value={userInfo.state}
          onChange={handleChange}
          className="border border-gray-500 rounded-md px-3 py-2 w-full"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">
          Country
        </label>
        <input
          type="text"
          name="country"
          placeholder="Enter your country"
          value={userInfo.country}
          onChange={handleChange}
          className="border border-gray-500 rounded-md px-3 py-2 w-full"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2">
          Gender
        </label>

        <div className="flex items-center gap-4 h-10">

          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={userInfo.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={userInfo.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>

        </div>
      </div>

      <div className="md:col-span-2">
        <label className="block font-semibold mb-1">
          Address
        </label>

        <textarea
          name="address"
          value={userInfo.address}
          onChange={handleChange}
          placeholder="Enter your address"
          rows="3"
          className="border border-gray-500 rounded-md px-3 py-2 w-full resize-none"
        />
      </div>

    </div>

    <div className="flex justify-center mt-6">

      {buttonState === "add" ? (

        <button
          onClick={addData}
          className="border border-green-300 bg-green-400 hover:bg-green-500 px-6 py-2 rounded-lg font-semibold"
        >
          Add
        </button>

      ) : (

        <div className="flex gap-2">

          <button
            onClick={updateData}
            className="border border-green-300 bg-green-400 hover:bg-green-500 px-6 py-2 rounded-lg font-semibold"
          >
            Update
          </button>

          <button
            onClick={CancelEditing}
            className="border border-red-300 bg-red-400 hover:bg-red-500 px-6 py-2 rounded-lg font-semibold"
          >
            Cancel
          </button>

        </div>

      )}

    </div>

  </div>

</div>
      </div>
      <table className="m-auto border-collapse border border-black">
        <thead>
          <tr>
            <th className="p-2 border border-black">Name</th>
            <th className="p-2 border border-black">Age</th>
            <th className="p-2 border border-black">Email</th>
            <th className="p-2 border border-black">Phone</th>
            <th className="p-2 border border-black">Gender</th>
            <th className="p-2 border border-black">D.O.B</th>
            <th className="p-2 border border-black">City</th>
            <th className="p-2 border border-black">State</th>
            <th className="p-2 border border-black">Country</th>
            <th className="p-2 border border-black">Address</th>
            <th className="p-2 border border-black">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td className="p-2 border border-black">{user.name}</td>
                <td className="p-2 border border-black">{user.age}</td>
                <td className="p-2 border border-black">{user.email}</td>
                <td className="p-2 border border-black">{user.phone}</td>
                <td className="p-2 border border-black">{user.gender}</td>
                <td className="p-2 border border-black">{user.dob}</td>
                <td className="p-2 border border-black">{user.city}</td>
                <td className="p-2 border border-black">{user.state}</td>
                <td className="p-2 border border-black">{user.country}</td>
                <td className="p-2 border border-black">{user.address}</td>
                <td className="p-2 border border-black"> 
                  <button
                    onClick={() => startEditing(user)}
                    className="bg-blue-400 px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteData(user.id)}
                    className="bg-red-400 px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};


export default Dashboard