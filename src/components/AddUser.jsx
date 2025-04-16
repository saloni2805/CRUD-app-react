import axios from "axios";
import React, { useState } from "react";

const AddUser = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    profileUrl: "",
    gender: "",
  });

  const changeEventHandler = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    //API calling
    try {
      await axios.post("http://localhost:3000/users", userData);
      alert("User added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-[40px] font-extrabold text-center  bg-slate-800 text-white py-3">
        Add User
      </h1>

      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-5 items-center justify-center min-h-[110vh]"
      >
        <div className="w-[50%] flex items-center gap-3 py-2">
          <label className="font-bold text-3xl whitespace-nowrap">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={userData.firstName}
            onChange={changeEventHandler}
            className="w-full rounded-lg p-3 border border-black"
          />
        </div>

        <div className="w-[50%] flex items-center gap-3 py-2">
          <label className="font-bold text-3xl whitespace-nowrap">
            Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={userData.lastName}
            onChange={changeEventHandler}
            className="w-full rounded-lg p-3 border border-black"
          />
        </div>

        <div className="w-[50%] flex items-center gap-3 py-2">
          <label className="font-bold text-3xl whitespace-nowrap">
            Email ID:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={userData.email}
            onChange={changeEventHandler}
            className="w-full rounded-lg p-3 border border-black"
          />
        </div>

        <div className="w-[50%] flex items-center gap-3 py-2">
          <label className="font-bold text-3xl whitespace-nowrap">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={changeEventHandler}
            className="w-full rounded-lg p-3 border border-black"
          />
        </div>

        <div className="w-[50%] flex items-center gap-3 py-2">
          <label className="font-bold text-3xl whitespace-nowrap">
            Mobile Number:
          </label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            value={userData.mobile}
            onChange={changeEventHandler}
            className="w-full rounded-lg p-3 border border-black"
          />
        </div>

        <div className="w-[50%] flex items-center gap-3 py-2">
          <label className="font-bold text-3xl whitespace-nowrap">
            Profile Url:
          </label>
          <input
            type="text"
            name="profileUrl"
            id="profileUrl"
            value={userData.profileUrl}
            onChange={changeEventHandler}
            className="w-full rounded-lg p-3 border border-black cursor-pointer"
          />
        </div>

        <div className="w-[50%] flex items-center gap-3 py-2">
          <label className="font-bold text-3xl whitespace-nowrap">
            Gender:
          </label>

          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="gender"
              id="male"
              checked={userData.gender === "male"}
              onChange={changeEventHandler}
              value="male"
              className="cursor-pointer"
            />
            <label htmlFor="male" className="text-2xl cursor-pointer">
              Male
            </label>

            <input
              type="radio"
              name="gender"
              id="female"
              checked={userData.gender === "female"}
              onChange={changeEventHandler}
              value="female"
              className="cursor-pointer"
            />
            <label htmlFor="female" className="text-2xl cursor-pointer">
              Female
            </label>
          </div>
        </div>

        <div className="w-[50%] flex items-center gap-3 py-2">
          <button className="cursor-pointer px-2 py-3 w-full rounded-lg text-white bg-red-600 font-bold">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
