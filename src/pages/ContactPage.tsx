const locations = [
  {
    name: 'Annandale',
    state: 'Virginia',
    address: '7039 Little River Tpke, Annandale, VA 22003',
    phone: '+1 (703) 333 - 2001',
    phoneLink: '+17033332001',
    hours: ['Daily', '7:00 AM – 9:00 PM'],
  },
  {
    name: 'Tysons',
    state: 'Virginia',
    address: '1961 Chain Bridge Rd, McLean, VA 22102',
    phone: '+1 (703) 388 - 2880',
    phoneLink: '+17033882880',
    hours: [
      'Sunday: 11:00 AM – 7:00 PM',
      'Monday – Friday: 10:30 AM – 9:00 PM',
      'Saturday: 10:00 AM – 9:00 PM',
    ],
  },
  {
    name: 'Chantilly',
    state: 'Virginia',
    address: '13938 Metrotech Dr, Chantilly, VA 20151',
    phone: '+1 (571) 752 - 6397',
    phoneLink: '+15717526397',
    hours: ['Daily', '7:00 AM – 9:15 PM'],
  },
  {
    name: 'Vienna',
    state: 'Virginia',
    address: '340 Maple Ave W, Vienna, VA 22180',
    phone: '+1 (571) 407 - 7063',
    phoneLink: '+15714077063',
    hours: [
      'Sunday: 7:00 AM – 9:00 PM',
      'Monday – Saturday: 7:00 AM – 10:00 PM',
    ],
  },
  {
    name: 'Shilla Patisserie',
    state: 'Virginia',
    address: '6015 Centreville Crest Ln, Centreville, VA 20121',
    phone: '+1 (703) 266 - 6001',
    phoneLink: '+17032666001',
    hours: [
      'Sunday – Thursday: 8:00 AM – 9:00 PM',
      'Friday – Saturday: 8:00 AM – 10:00 PM',
    ],
  },
  {
    name: 'Ellicott City',
    state: 'Maryland',
    address: '9339 Baltimore National Pike, Ellicott City, MD 21042',
    phone: '+1 (410) 418 - 8811',
    phoneLink: '+14104188811',
    hours: [
      'Sunday – Monday: 8:00 AM – 8:00 PM',
      'Tuesday: Closed',
      'Wednesday – Saturday: 8:00 AM – 8:00 PM',
    ],
  },
];

function ContactPage() {
  return (
    <main className="bg-stone-50">
      {/* Hero */}
      <section className="border-b border-amber-100 bg-amber-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 sm:text-sm">
            Contact & Locations
          </p>

          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-amber-950 sm:text-4xl md:text-5xl">
            Find a Shilla Bakery near you
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
            Visit one of our locations for freshly baked breads, cakes,
            pastries, drinks, pickup, and more.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mb-8 flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
              Our Locations
            </h2>

            <p className="text-sm text-stone-600 sm:text-base">
              Choose a location below to call or get directions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {locations.map((location) => {
              const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                location.address
              )}`;

              return (
                <article
                  key={location.name}
                  className="
                    group
                    flex
                    h-full
                    flex-col
                    rounded-3xl
                    border
                    border-stone-200
                    bg-white
                    p-6
                    shadow-sm
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-amber-200
                    hover:shadow-lg
                    sm:p-7
                  "
                >
                  {/* Top */}
                  <div className="mb-6">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h3 className="text-2xl font-bold text-amber-950">
                        {location.name}
                      </h3>

                      <span className="shrink-0 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                        {location.state}
                      </span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mb-5 border-b border-stone-100 pb-5">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                      Address
                    </p>

                    <p className="leading-7 text-stone-700">
                      {location.address}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="mb-5 border-b border-stone-100 pb-5">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                      Phone
                    </p>

                    <a
                      href={`tel:${location.phoneLink}`}
                      className="font-medium text-amber-800 transition hover:text-amber-950"
                    >
                      {location.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="mb-7">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                      Hours
                    </p>

                    <div className="space-y-1">
                      {location.hours.map((hour) => (
                        <p
                          key={hour}
                          className="text-sm leading-6 text-stone-700 sm:text-base"
                        >
                          {hour}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`tel:${location.phoneLink}`}
                      className="
                        flex-1
                        rounded-full
                        bg-amber-700
                        px-5
                        py-3
                        text-center
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:bg-amber-800
                      "
                    >
                      Call Store
                    </a>

                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex-1
                        rounded-full
                        border
                        border-amber-300
                        bg-white
                        px-5
                        py-3
                        text-center
                        text-sm
                        font-semibold
                        text-amber-900
                        transition
                        hover:bg-amber-50
                      "
                    >
                      Get Directions
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Catering */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="
              overflow-hidden
              rounded-[2rem]
              bg-amber-950
              px-6
              py-10
              text-white
              sm:px-10
              md:px-12
              md:py-12
            "
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
                  Catering & Support
                </p>

                <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                  Planning something special?
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-stone-200">
                  Contact Shilla Bakery for catering inquiries, large orders,
                  celebrations, and additional store support.
                </p>
              </div>

              <a
                href="mailto:support@shillabakeryusa.com"
                className="
                  shrink-0
                  rounded-full
                  bg-white
                  px-7
                  py-3.5
                  text-center
                  text-sm
                  font-semibold
                  text-amber-950
                  transition
                  hover:bg-amber-100
                  sm:text-base
                "
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;