import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-40 w-full border-t border-green-100 bg-white/95 shadow-lg backdrop-blur-md">
      <div className="mx-auto flex min-h-[60px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* LEFT — Logo + Website Name */}
        <NavLink
          to="/"
          className="group flex items-center gap-2"
        >
          {/* Logo */}
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-white transition-all duration-300 group-hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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

          <span className="text-lg font-bold text-gray-900">
            Edu<span className="text-green-600">nova</span>
          </span>
        </NavLink>

        {/* RIGHT — Copyright */}
        <p className="text-xs text-gray-500 sm:text-sm">
          © {new Date().getFullYear()} Edunova. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;