import React from "react";
import Navbar from "../../components/Navbar";
import { Link, NavLink } from "react-router-dom";
import { BiLock } from "react-icons/bi";

const Account = () => {
  return (
  
      <div className="flex justify-center w-full my-1 sticky top-2">
        <div className="w-full mx-2 ">
        <ul className="p-2 bg-black rounded-xl flex max-w-screen w-full  items-center text-white text-md text-center justify-around flex-wrap gap-2 ">
            <NavLink to={"/setup/account/organisation"}
            
            className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-black bg-white p-2 font-medium rounded-md  items-center text-sm "
                    : "  items-center text-sm  font-medium p-2 hover:bg-white hover:text-black rounded-md "
                }`
              }
             >
              Organization
            </NavLink>
          <NavLink to={"/setup/account/company"} className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-black bg-white p-2 font-medium rounded-md  items-center text-sm "
                    : "  items-center text-sm  font-medium p-2 hover:bg-white hover:text-black rounded-md "
                }`
              }>Company</NavLink>
          <NavLink to={"/setup/account/country"} className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-black bg-white p-2 font-medium rounded-md  items-center text-sm "
                    : "  items-center text-sm  font-medium p-2 hover:bg-white hover:text-black rounded-md "
                }`
              }>Country</NavLink>
          <NavLink to={"/setup/account/region"} className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-black bg-white p-2 font-medium rounded-md  items-center text-sm "
                    : "  items-center text-sm  font-medium p-2 hover:bg-white hover:text-black rounded-md "
                }`
              }>Region</NavLink>
          <NavLink to={"/"} className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-black bg-white p-2 font-medium rounded-md  items-center text-sm "
                    : "  items-center text-sm  font-medium p-2 hover:bg-white hover:text-black rounded-md "
                }`
              }>Zone</NavLink>
          <NavLink to={"/"} className={({ isActive }) =>
                `flex gap-1 ${
                  isActive
                    ? "text-black bg-white p-2 font-medium rounded-md  items-center text-sm "
                    : "  items-center text-sm  font-medium p-2 hover:bg-white hover:text-black rounded-md "
                }`
              }>Site <BiLock/></NavLink>
          <NavLink to={"/"} className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-black bg-white p-2 font-medium rounded-md  items-center text-sm "
                    : "  items-center text-sm  font-medium p-2 hover:bg-white hover:text-black rounded-md "
                }`
              }>Entity</NavLink>
          <NavLink to={"/"} className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-black bg-white p-2 font-medium rounded-md  items-center text-sm "
                    : "  items-center text-sm  font-medium p-2 hover:bg-white hover:text-black rounded-md "
                }`
              }>Building</NavLink>
          <NavLink to={"/"} className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-black bg-white p-2 font-medium rounded-md  items-center text-sm "
                    : "  items-center text-sm  font-medium p-2 hover:bg-white hover:text-black rounded-md "
                }`
              }>Wing</NavLink>
          <NavLink to={"/"} className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-black bg-white p-2 font-medium rounded-md  items-center text-sm "
                    : "  items-center text-sm  font-medium p-2 hover:bg-white hover:text-black rounded-md "
                }`
              }>Area</NavLink>
          <NavLink to={"/"} className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-black bg-white p-2 font-medium rounded-md  items-center text-sm "
                    : "  items-center text-sm  font-medium p-2 hover:bg-white hover:text-black rounded-md "
                }`
              }>Floor</NavLink>
          <NavLink to={"/"} className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-black bg-white p-2 font-medium rounded-md  items-center text-sm "
                    : "  items-center text-sm  font-medium p-2 hover:bg-white hover:text-black rounded-md "
                }`
              }>Unit</NavLink>
          <NavLink to={"/"} className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-black bg-white p-2 font-medium rounded-md  items-center text-sm "
                    : "  items-center text-sm  font-medium p-2 hover:bg-white hover:text-black rounded-md "
                }`
              }>Room</NavLink>
          </ul>
        </div>
      </div>
   
  );
};

export default Account;
