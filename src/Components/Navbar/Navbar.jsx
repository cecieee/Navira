import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/ABC_green.png";

const sectionIds = ["home", "about", "products", "gallery", "contact"]; // Add your section ids here

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentItem, setCurrentItem] = useState(sectionIds[0]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (id, event) => {
    if (id === "gallery") {
      window.location.href = "/gallery";
      return;
    }
    event.preventDefault();
    setCurrentItem(id.toUpperCase());
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-screen z-30 ${
        isScrolled ? "bg-white shadow-lg" : "hidden"
      }`}
    >
      <div className={`max-w-7xl sm:px-6 `}>
        <div className="flex items-center w-screen justify-between h-20 max-[767px]:h-16 max-[767px]:w-[90vw]">
          <div className="flex items-center w-screen">
            <div className="flex-shrink-0 w-[20%]">
              <img
                className="h-16 w-16 ml-20 max-[767px]:h-12 max-[767px]:w-12 max-[767px]:ml-12 cursor-pointer"
                src={Logo}
                alt="Workflow"
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
              />
            </div>
            <div className="hidden w-screen md:block">
              <div className="w-[90%] flex justify-end space-x-7">
                {sectionIds.map((id) => (
                  <a
                    onClick={(event) => handleItemClick(id, event)}
                    className={`text-secondary hover:bg-secondary cursor-pointer hover:text-white px-3 py-2 rounded-md text-sm font-semibold 
                        ? "bg-secondary text-white"
                        : ""
                    }`}
                  >
                    {id.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-secondary hover:text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {sectionIds.map((id) => (
              <a
                onClick={(event) => {
                  setIsOpen(false);
                  handleItemClick(id, event);
                }}
                className={`text-secondary hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
              >
                {" "}
                {id.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
