"use client";
import Link from "next/link";

import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { signOut } from "next-auth/react";
import Login from "../modals/Login";
import Signup from "../modals/Signup";
import Myhome from "../modals/Myhome";

const Navbar = (props) => {
  const { currentUser } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [logopen, setlogOpen] = useState(false);
  const [home, sethome] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white-300 border border-b-2 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div>
              <Link href="/">
                <img
                  src="https://github.com/AntonioErdeljac/next13-airbnb-clone/blob/master/public/images/logo.png?raw=true"
                  alt="no image"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
            <div className="flex justify-center items-center text-center  h-12">
              <div className="ml-10 flex justify-center  items-center space-x-4 cursor-pointer border rounded-full hover:shadow-md text-center h-12 w-full">
                <a
                  href="#"
                  className=" px-3 py-2 rounded-md text-sm font-medium"
                >
                  Anywhere
                </a>
                <a
                  href="#"
                  className=" px-3 py-2 rounded-md text-sm font-medium"
                >
                  |
                </a>
                <a
                  href="#"
                  className=" px-3 py-2 rounded-md text-sm font-medium"
                >
                  Any Week
                </a>
                <a
                  href="#"
                  className=" px-3 py-2 rounded-md text-sm font-medium"
                >
                  |
                </a>
                <a
                  href="#"
                  className=" px-3 py-2 rounded-md text-sm font-medium"
                >
                  Add Guests{" "}
                </a>
                <a
                  href="#"
                  className=" px-3 py-2 rounded-md text-sm font-medium"
                >
                  |
                </a>
                <a className="px-2 py-2">
                  {" "}
                  <span>
                    <FcSearch />
                  </span>
                </a>
              </div>
            </div>
            <div className="flex items-center border  ">
              <div className="relative ">
                <button
                  onClick={toggleDropdown}
                  className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center hover:shadow-md "
                >
                  <img
                    src={
                      currentUser?.image
                        ? currentUser.image
                        : "https://github.com/AntonioErdeljac/next13-airbnb-clone/blob/master/public/images/logo.png?raw=true"
                    }
                    className="rounded-full"
                    width={50}
                    height={50}
                  ></img>
                </button>
                {isOpen && !currentUser && (
                  <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                    <a
                      onClick={() => setOpen(true)}
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Signup
                    </a>
                    <a
                      onClick={() => setlogOpen(true)}
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Login
                    </a>
                  </div>
                )}

                {isOpen && currentUser && (
                  <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <Link
                      onClick={() => {}}
                      href="/"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Home
                    </Link>
                    <Link
                      onClick={() => {}}
                      href="/trips"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      My Trips
                    </Link>
                    <Link
                      onClick={() => {}}
                      href="/favourite"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      My Favourites
                    </Link>
                    
                    <Link
                      onClick={() => {}}
                      href="/myListing"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      My Properties
                    </Link>
                    <Link
                      onClick={() => {
                        sethome(true);
                      }}
                      href="/listing"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Airbnb My home
                    </Link>
                    <a
                      onClick={() => {
                        signOut();
                      }}
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Log Out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Signup Starts Here */}
      <Signup open={open} setOpen={setOpen} />
      {/* Login Starts Here */}
      <Login setlogOpen={setlogOpen} logopen={logopen} />

      <Myhome sethome={sethome} home={home} />
    </>
  );
};

export default Navbar;
