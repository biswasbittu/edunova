import { useState } from "react";
import { NavLink } from "react-router";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Articles", path: "/articles" },
  { name: "Categories", path: "/categories" },
  { name: "About", path: "/about" },
];

const navLinkStyle = ({ isActive }) =>
  `relative px-3 py-2 text-sm font-medium transition-all duration-300
   ${
     isActive
       ? "text-green-600"
       : "text-gray-600 hover:text-green-600"
   }
   after:absolute after:left-3 after:right-3 after:-bottom-0.5
   after:h-0.5 after:rounded-full after:bg-green-500
   after:transition-transform after:duration-300
   ${
     isActive
       ? "after:scale-x-100"
       : "after:scale-x-0 hover:after:scale-x-100"
   }`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-100/80 bg-white/90 shadow-lg backdrop-blur-xl">
      <div className="navbar mx-auto min-h-[72px] max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* LEFT SIDE — Logo / Website Name */}
        <div className="navbar-start w-auto flex-1">

          <NavLink
            to="/"
            className="group flex items-center gap-2.5"
          >
            {/* Logo */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white shadow-lg shadow-green-600/20 transition-all duration-300 group-hover:rotate-3 group-hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>

            <div className="hidden text-left sm:block">
              <h1 className="text-xl font-bold tracking-tight text-gray-900">
                Edu<span className="text-green-600">nova</span>
              </h1>

              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                Learn • Explore • Grow
              </p>
            </div>
          </NavLink>

        </div>


        {/* CENTER — Navigation */}
        <nav className="navbar-center hidden md:flex">
          <div className="flex items-center gap-1 rounded-full border border-green-100 bg-green-50/50 px-2 py-1.5 shadow-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={navLinkStyle}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>


        {/* RIGHT SIDE — Login / Register */}
        <div className="navbar-end w-auto flex-1">

          <div className="hidden items-center justify-end gap-2 md:flex">

            <button className="btn btn-sm rounded-full border border-green-200 bg-white px-5 text-green-700 hover:border-green-600 hover:bg-green-50">
              Login
            </button>
            

            <button className="btn btn-sm rounded-full border-0 bg-green-600 px-5 text-white shadow-md shadow-green-600/20 hover:bg-green-700">
              Register
            </button>

          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost btn-circle text-green-700 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        </div>

      </div>


      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-green-100 bg-white transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-4">

          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-green-50 text-green-700"
                      : "text-gray-600 hover:bg-green-50 hover:text-green-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Login/Register */}
          <div className="mt-4 flex gap-2 border-t border-gray-100 pt-4">

            <button className="btn btn-sm flex-1 rounded-full border border-green-200 bg-white text-green-700 hover:bg-green-50">
              Login
            </button>

            <button className="btn btn-sm flex-1 rounded-full border-0 bg-green-600 text-white hover:bg-green-700">
              Register
            </button>

          </div>

        </div>
      </div>

    </header>
  );
}