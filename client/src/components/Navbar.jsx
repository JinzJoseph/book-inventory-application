import React, { useContext, useEffect, useState } from "react";
import { FaBars, FaBlog, FaXing } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";
const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isSticky, SetisSticky] = useState(false);
  const {user}=useContext(AuthContext)
  console.log(user )
  //toogle menu
  const togglemenu = () => {
    setisMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        SetisSticky(true);
      } else {
        SetisSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  const navitems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300":""}`}>
        <div className="flex justify-between items-center text-base">
          {/* logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block" />
            Books
          </Link>
          {/* navitems */}
          <ul className="md:flex space-x-12 hidden">
            {navitems.map((item) => {
              return (
                <Link
                  className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
                  key={item.path}
                  to={item.path}
                >
                  {item.link}
                </Link>
              );
            })}
          </ul>
          {/* button */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button>
              <FaBars className="w-5 hover:text-blue-700" />
              {
                user? user.email:""

              }
            </button>
          </div>
          {/* menu items for mobile device */}
          <div className="md:hidden">
            <button
              onClick={togglemenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXing className="w-5 h-5 text-black" />
              ) : (
                <FaBars />
              )}
            </button>
          </div>
        </div>
        {/* nav items for mobile */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-blue-400 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navitems.map((item) => {
            return (
              <Link
                className="block text-base text-white uppercase cursor-pointer"
                key={item.path}
                to={item.path}
              >
                {item.link}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
