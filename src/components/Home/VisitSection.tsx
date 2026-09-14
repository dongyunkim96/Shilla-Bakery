import { Link } from 'react-router-dom';

function VisitSection() {
  return (
    <section id="visit" className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="rounded-[1.75rem] border border-amber-200 bg-amber-50 p-6 sm:p-8 md:p-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 sm:text-sm">
            Visit & Order
          </p>

          <h2 className="mb-4 text-2xl font-bold text-amber-950 sm:text-3xl md:text-4xl">
            Order for pickup, delivery, or visit a nearby location
          </h2>

          <p className="mb-6 max-w-3xl text-sm leading-7 text-stone-700 sm:text-base md:text-lg">
            Shilla Bakery offers online ordering for pickup and delivery, and
            also provides catering support through its locations and support
            email. Use this section to guide customers toward ordering or
            finding the nearest store.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="w-full rounded-full bg-amber-700 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-amber-800 sm:w-auto sm:text-base"
            >
              View Locations
            </Link>

            <Link
              to="/menu"
              className="w-full rounded-full border border-amber-300 px-6 py-3 text-center text-sm font-semibold text-amber-900 transition hover:bg-amber-100 sm:w-auto sm:text-base"
            >
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisitSection;