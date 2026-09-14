function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 sm:text-sm">
        Contact & Locations
      </p>

      <h1 className="text-3xl font-bold text-amber-950 sm:text-4xl">
        Visit a Shilla Bakery location
      </h1>

      <p className="mt-6 max-w-3xl text-base leading-7 text-stone-600">
        This page is best used for store locations, contact details, hours, and
        quick links for customers who want pickup, delivery, or catering
        information.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        <article className="rounded-3xl border border-amber-100 bg-white p-6">
          <h2 className="text-xl font-semibold text-amber-900">Annandale</h2>
          <p className="mt-2 text-stone-600">
            7039 Little River Tpke, Annandale, VA 22003
          </p>
          <p className="mt-1 text-stone-600">+1 703 333 2001</p>
          <p className="mt-1 text-stone-600">Daily: 7:00 am - 9:00 pm</p>
        </article>

        <article className="rounded-3xl border border-amber-100 bg-white p-6">
          <h2 className="text-xl font-semibold text-amber-900">Tysons</h2>
          <p className="mt-2 text-stone-600">
            1961 Chain Bridge Rd, McLean, VA 22102
          </p>
          <p className="mt-1 text-stone-600">+1 703 388 2880</p>
          <p className="mt-1 text-stone-600">
            Sun 11:00 am - 7:00 pm · Mon-Fri 10:30 am - 9:00 pm · Sat 10:00 am
            - 9:00 pm
          </p>
        </article>

        <article className="rounded-3xl border border-amber-100 bg-white p-6">
          <h2 className="text-xl font-semibold text-amber-900">Chantilly</h2>
          <p className="mt-2 text-stone-600">
            13938 Metrotech Dr, Chantilly, VA 20151
          </p>
          <p className="mt-1 text-stone-600">+1 571 752 6397</p>
          <p className="mt-1 text-stone-600">Daily: 7:00 am - 9:15 pm</p>
        </article>

        <article className="rounded-3xl border border-amber-100 bg-white p-6">
          <h2 className="text-xl font-semibold text-amber-900">Vienna</h2>
          <p className="mt-2 text-stone-600">
            340 Maple Ave W, Vienna, VA 22180
          </p>
          <p className="mt-1 text-stone-600">+1 571 407 7063</p>
          <p className="mt-1 text-stone-600">
            Sun 7:00 am - 9:00 pm · Mon-Sat 7:00 am - 10:00 pm
          </p>
        </article>

        <article className="rounded-3xl border border-amber-100 bg-white p-6">
          <h2 className="text-xl font-semibold text-amber-900">
            Shilla Patisserie
          </h2>
          <p className="mt-2 text-stone-600">
            6015 Centreville Crest Ln, Centreville, VA 20121
          </p>
          <p className="mt-1 text-stone-600">+1 703 266 6001</p>
          <p className="mt-1 text-stone-600">
            Sun-Thu 8:00 am - 9:00 pm · Fri-Sat 8:00 am - 10:00 pm
          </p>
        </article>

        <article className="rounded-3xl border border-amber-100 bg-white p-6">
          <h2 className="text-xl font-semibold text-amber-900">
            Ellicott City
          </h2>
          <p className="mt-2 text-stone-600">
            9339 Baltimore National Pike, Ellicott City, MD 21042
          </p>
          <p className="mt-1 text-stone-600">+1 410 418 8811</p>
          <p className="mt-1 text-stone-600">
            Sun-Mon & Wed-Sat 8:00 am - 8:00 pm · Tue Closed
          </p>
        </article>
      </div>

      <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-xl font-semibold text-amber-900">
          Catering & Support
        </h2>
        <p className="mt-2 text-stone-600">
          For catering inquiries, the official site directs customers to contact
          support@shillabakeryusa.com or reach out to a specific location.
        </p>
      </div>
    </section>
  );
}

export default ContactPage;