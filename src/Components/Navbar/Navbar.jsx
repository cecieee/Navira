import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logos/logo.png";
import CTA from "../CTA";

const sectionIds = ["home", "about", "workshops", "Industrial visit", "contact"]; // Add your section ids here

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentItem, setCurrentItem] = useState(sectionIds[0]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scroll = window.scrollY;
      const scrollPercentage = (scroll / totalHeight) * 100;
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

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
      if (window.scrollY > 200) {
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
      className={`fixed w-screen z-30 transition duration-300 ease-in-out ${
        isScrolled ? "bg-primary backdrop-blur-xl shadow-lg" : ""
      }`}
    >
        <div className="flex items-center w-screen justify-between h-20 max-[767px]:h-16 max-[767px]:w-[90vw]">
          <div className="flex items-center justify-around grow">
            <div className="flex-shrink-0 ">
              <img
                className=" w-28   cursor-pointer"
                src={Logo}
                alt="Workflow"
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
              />
            </div>
            <div>
              <div className="hidden grow md:block">
                  <div className="flex gap-8">
                    {sectionIds.map((id) => (
                      <a
                        onClick={(event) => handleItemClick(id, event)}
                        className={`text-secondary  cursor-pointer  px-3 py-2 rounded-md text-sm font-semibold
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
            <div className="">
              {window.innerWidth > 768 && <CTA />}
            </div>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-secondary   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
      <div className={`h-1 bg-secondary`} style={{ width: `${scrollPercentage}%` }} ></div>
      {isOpen && (
        <div className="md:hidden bg-primary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {sectionIds.map((id) => (
              <a
                onClick={(event) => {
                  setIsOpen(false);
                  handleItemClick(id, event);
                }}
                className={`text-secondary block px-3 py-2 rounded-md text-base font-medium`}
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
