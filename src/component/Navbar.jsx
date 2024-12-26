import React, { useState, useEffect } from "react";
import { FaCaretDown, FaUser, FaSun, FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Data Links
const NavLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/banner" },
  { id: 3, name: "Contact", link: "/#" },
];

const DropdownLinks = [
  { id: 1, name: "Vegetables", link: "/#" },
  { id: 2, name: "Fruits", link: "/#" },
  { id: 3, name: "Grains", link: "/#" },
];

// Navbar Component
const Navbar = () => {
  const [theme, setTheme] = useState("light"); // Default theme

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme to localStorage

    // Apply the theme to the document body
    if (newTheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <div data-aos="fade" className="bg-white shadow-md dark:bg-gray-900">
      <div className="container flex justify-between py-4 sm:py-3">
        {/* Logo Section */}
        <div className="font-bold text-xl text-black dark:text-white">Logo</div>

        {/* Navigation Section */}
        <ul className="flex items-center gap-10">
          {NavLinks.map(({ id, name, link }) => (
            <li key={id}>
              <a
                href={link}
                className="inline-block hover:text-primary text-xl font-semibold text-black dark:text-white"
              >
                {name}
              </a>
            </li>
          ))}

          {/* Dropdown Section */}
          <li className="hidden sm:block cursor-pointer group relative">
            <div className="inline-block text-xl font-semibold text-black dark:text-white">
              <div className="flex items-center gap-2 py-2 hover:text-primary">
                Dropdown
                <FaCaretDown className="group-hover:rotate-180 duration-300" />
              </div>
            </div>
            {/* Dropdown Menu */}
            <div className="absolute z-50 hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2 dark:bg-gray-800 dark:text-white">
              <ul>
                {DropdownLinks.map(({ id, name, link }) => (
                  <li key={id}>
                    <a
                      href={link}
                      className="block w-full rounded-md p-2 hover:bg-primary/20 font-semibold"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* Admin Account Button Section */}
          <li>
            <AccountAdminButton />
          </li>

          {/* Theme Toggle Button */}
          <li>
            <button
              onClick={toggleTheme}
              className="text-xl text-black dark:text-white"
            >
              {theme === "light" ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Account Admin Button
const AccountAdminButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Adminakun"); // Navigate to the AdminAccount page
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 bg-secondary text-xl h-[40px] text-white px-2 lg:px-5 mdpy-2 hover:scale-105 duration-300"
    >
      <FaUser />
      Account Admin
    </button>
  );
};

export default Navbar;
