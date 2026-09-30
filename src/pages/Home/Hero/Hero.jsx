import { NavLink } from "react-router";

const Hero = () => {
  return (
    <section className="hero min-h-[calc(100vh-72px)] bg-green-50">
      <div className="hero-content flex-col px-5 text-center lg:flex-row-reverse lg:text-left">

        {/* Right Side */}
        <div className="max-w-md">
          <div className="rounded-3xl bg-green-600 p-8 text-white shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-32 w-32 lg:h-40 lg:w-40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
        </div>

        {/* Left Side */}
        <div className="max-w-2xl">

          <div className="badge mb-5 border-green-200 bg-white px-4 py-3 text-green-600">
            Learn • Explore • Grow
          </div>

          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Learn something new.
            <span className="block text-green-600">
              Every single day.
            </span>
          </h1>

          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg">
            Discover useful knowledge, insightful articles, and
            new ideas to help you learn, explore, and grow.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <NavLink
              to="/articles"
              className="btn border-0 bg-green-600 px-7 text-white hover:bg-green-700"
            >
              Explore Articles
            </NavLink>

            <NavLink
              to="/categories"
              className="btn border-green-200 bg-white px-7 text-green-700 hover:bg-green-50"
            >
              Browse Categories
            </NavLink>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;