import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-green-100 bg-white">

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">

        <div className="grid gap-10 md:grid-cols-4">

          {/* BRAND */}
          <div className="md:col-span-2">

            <NavLink
              to="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white shadow-md shadow-green-600/20">
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

              <span className="text-2xl font-bold text-gray-900">
                Edu<span className="text-green-600">nova</span>
              </span>
            </NavLink>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-500">
              A place to learn, explore ideas, discover knowledge,
              and grow every day.
            </p>

          </div>


          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <NavLink
                  to="/"
                  className="text-gray-500 transition hover:text-green-600"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/articles"
                  className="text-gray-500 transition hover:text-green-600"
                >
                  Articles
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/categories"
                  className="text-gray-500 transition hover:text-green-600"
                >
                  Categories
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="text-gray-500 transition hover:text-green-600"
                >
                  About
                </NavLink>
              </li>

            </ul>
          </div>


          {/* ACCOUNT */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900">
              Account
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <NavLink
                  to="/login"
                  className="text-gray-500 transition hover:text-green-600"
                >
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/register"
                  className="text-gray-500 transition hover:text-green-600"
                >
                  Register
                </NavLink>
              </li>

            </ul>
          </div>

        </div>


        {/* BOTTOM */}
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-100 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">

          <p className="text-gray-500">
            © {new Date().getFullYear()} Edunova. All rights reserved.
          </p>

          <p className="text-gray-400">
            Learn • Explore • Grow
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;