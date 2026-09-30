import { useLoaderData } from "react-router";


const Articles = () => {
    const articles = useLoaderData();
    console.log(articles)
  
    return (
         <section className="bg-white text-gray-900">
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-10 sm:space-y-12 sm:px-8 lg:px-10">

        {/* ================= FEATURED ARTICLE ================= */}
        <article className="group overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

          <div className="grid lg:grid-cols-12">

            {/* Image */}
            <div className="lg:col-span-7">
              <img
                src={articles[0].cover_image}
                alt="Featured article"
                className="h-64 w-full object-cover sm:h-80 lg:h-full lg:min-h-[360px]"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-5 lg:p-10">

              <span className="mb-3 w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                Featured Article
              </span>

              <h2 className="text-2xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-green-600 sm:text-3xl">
                {articles[0].titl}
              </h2>

              <span className="mt-3 text-xs text-gray-400">
                {articles[0].readable_publish_date}, 2026
              </span>

              <p className="mt-4 leading-7 text-gray-600">
               {articles[0].description}
              </p>

              <button className="cursor-pointer mt-6 w-fit text-sm font-semibold text-green-600 transition hover:text-green-700">
                Read Article →
              </button>

            </div>
          </div>
        </article>


        {/* ================= ARTICLE GRID ================= */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Article 1 */}
          <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-lg">

            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
              alt="Study and learning"
              className="h-48 w-full object-cover"
            />

            <div className="p-6">

              <span className="text-xs font-medium text-green-600">
                Education
              </span>

              <h3 className="mt-2 text-xl font-semibold leading-snug text-gray-900 transition-colors group-hover:text-green-600">
                Simple Ways to Study More Effectively
              </h3>

              <span className="mt-3 block text-xs text-gray-400">
                September 24, 2026
              </span>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                Learn how small changes in your study routine can
                make your learning more effective.
              </p>

              <button className="mt-5 text-sm font-semibold text-green-600 hover:text-green-700">
                Read More →
              </button>

            </div>
          </article>


          {/* Article 2 */}
          <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-lg">

            <img
              src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=800&q=80"
              alt="Books and knowledge"
              className="h-48 w-full object-cover"
            />

            <div className="p-6">

              <span className="text-xs font-medium text-green-600">
                Knowledge
              </span>

              <h3 className="mt-2 text-xl font-semibold leading-snug text-gray-900 transition-colors group-hover:text-green-600">
                Why Reading Every Day Matters
              </h3>

              <span className="mt-3 block text-xs text-gray-400">
                September 22, 2026
              </span>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                Reading regularly can help you discover new ideas,
                improve your understanding, and expand your knowledge.
              </p>

              <button className="mt-5 text-sm font-semibold text-green-600 hover:text-green-700">
                Read More →
              </button>

            </div>
          </article>


          {/* Article 3 */}
          <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-lg">

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
              alt="Technology and learning"
              className="h-48 w-full object-cover"
            />

            <div className="p-6">

              <span className="text-xs font-medium text-green-600">
                Technology
              </span>

              <h3 className="mt-2 text-xl font-semibold leading-snug text-gray-900 transition-colors group-hover:text-green-600">
                Technology and the Future of Learning
              </h3>

              <span className="mt-3 block text-xs text-gray-400">
                September 20, 2026
              </span>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                Explore how modern technology is changing the way
                people learn, work, and share knowledge.
              </p>

              <button className="mt-5 text-sm font-semibold text-green-600 hover:text-green-700">
                Read More →
              </button>

            </div>
          </article>


          {/* Article 4 */}
          <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-lg sm:hidden lg:block">

            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
              alt="Students learning"
              className="h-48 w-full object-cover"
            />

            <div className="p-6">

              <span className="text-xs font-medium text-green-600">
                Student Life
              </span>

              <h3 className="mt-2 text-xl font-semibold leading-snug text-gray-900 transition-colors group-hover:text-green-600">
                Staying Motivated While Learning
              </h3>

              <span className="mt-3 block text-xs text-gray-400">
                September 18, 2026
              </span>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                Practical ideas to stay focused and motivated during
                your learning journey.
              </p>

              <button className="mt-5 text-sm font-semibold text-green-600 hover:text-green-700">
                Read More →
              </button>

            </div>
          </article>


          {/* Article 5 */}
          <article className="group hidden overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-lg sm:block">

            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
              alt="Books"
              className="h-48 w-full object-cover"
            />

            <div className="p-6">

              <span className="text-xs font-medium text-green-600">
                Books
              </span>

              <h3 className="mt-2 text-xl font-semibold leading-snug text-gray-900 transition-colors group-hover:text-green-600">
                Books That Can Change Your Perspective
              </h3>

              <span className="mt-3 block text-xs text-gray-400">
                September 16, 2026
              </span>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                A collection of ideas about why books continue to
                influence the way we think and learn.
              </p>

              <button className="mt-5 text-sm font-semibold text-green-600 hover:text-green-700">
                Read More →
              </button>

            </div>
          </article>


          {/* Article 6 */}
          <article className="group hidden overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-lg sm:block">

            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
              alt="Learning"
              className="h-48 w-full object-cover"
            />

            <div className="p-6">

              <span className="text-xs font-medium text-green-600">
                Learning
              </span>

              <h3 className="mt-2 text-xl font-semibold leading-snug text-gray-900 transition-colors group-hover:text-green-600">
                Learning Something New Every Day
              </h3>

              <span className="mt-3 block text-xs text-gray-400">
                September 14, 2026
              </span>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                Small daily learning habits can create meaningful
                progress over time.
              </p>

              <button className="mt-5 text-sm font-semibold text-green-600 hover:text-green-700">
                Read More →
              </button>

            </div>
          </article>

        </div>


        {/* ================= LOAD MORE ================= */}
        <div className="flex justify-center pt-2">

          <button
            type="button"
            className="rounded-full border border-green-200 bg-white px-6 py-3 text-sm font-medium text-green-600 shadow-sm transition-all duration-300 hover:border-green-600 hover:bg-green-600 hover:text-white hover:shadow-md"
          >
            Load More Articles
          </button>

        </div>

      </div>
    </section>
    );
};

export default Articles;