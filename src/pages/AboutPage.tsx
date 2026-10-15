import { Link } from 'react-router-dom';

const googleReviews = [
  {
    name: 'C F',
    location: 'Annandale',
    rating: 5,
    text: 'The fresh cream fruit cake was beautiful, light, and not overly sweet. Our whole family loved it!',
  },
  {
    name: 'Anne Neuman',
    location: 'Vienna',
    rating: 5,
    text: 'Great customer service, delicious red bean pastries, and excellent lattes. I cannot wait to go back.',
  },
  {
    name: 'M. N.',
    location: 'Tysons Corner',
    rating: 5,
    text: 'The mango roll cake was fluffy and delicious, and the service was friendly and efficient.',
  },
];

const locations = [
  {
    name: 'Annandale',
    address: '7039 Little River Tpke, Annandale, VA 22003',
  },
  {
    name: 'Tysons Corner',
    address: '1961 Chain Bridge Rd, McLean, VA 22102',
  },
  {
    name: 'Chantilly',
    address: '13938 Metrotech Dr, Chantilly, VA 20151',
  },
  {
    name: 'Vienna',
    address: '340 Maple Ave W, Vienna, VA 22180',
  },
  {
    name: 'Centreville',
    address: '6015 Centreville Crest Ln, Centreville, VA 20121',
  },
  {
    name: 'Ellicott City',
    address: '9339 Baltimore National Pike, Ellicott City, MD 21042',
  },
];

const bakeryHighlights = [
  {
    number: '01',
    title: 'Fresh Breads',
    description:
      'From soft cream breads and red bean favorites to croissants and savory bakery selections, our cases are filled with something for every kind of craving.',
  },
  {
    number: '02',
    title: 'Cakes & Desserts',
    description:
      'Celebration cakes, fresh cream cakes, mousse cakes, cheesecakes, roll cakes, and delicate desserts bring something special to birthdays and everyday moments alike.',
  },
  {
    number: '03',
    title: 'Café Favorites',
    description:
      'Pair your bakery favorites with coffee, lattes, tea, boba, refreshing drinks, or Korean-inspired desserts such as bingsu.',
  },
];

function AboutPage() {
  return (
    <main className="overflow-hidden bg-stone-50">
      {/* Hero */}
      <section className="relative min-h-[520px] overflow-hidden sm:min-h-[620px]">
        <img
          src="/assets/shillabakery04.jpg"
          alt="Inside Shilla Bakery"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/15" />

        <div className="relative z-10 mx-auto flex min-h-[520px] w-full max-w-7xl items-center px-4 py-20 sm:min-h-[620px] sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300 sm:text-sm">
              Our Story
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              More than a bakery.
              <span className="mt-2 block text-amber-300">
                A place for everyday moments.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-stone-100 sm:text-lg md:text-xl">
              Since 1999, Shilla Bakery has brought together breads, cakes,
              pastries, desserts, and café favorites with one simple idea:
              make something delicious and enjoy the moment that comes with it.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src="/assets/shillabakery03.jpg"
              alt="Shilla Bakery cakes and bakery interior"
              className="h-[420px] w-full object-cover object-center sm:h-[520px]"
            />

            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-6 py-4 shadow-lg backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                Baking Since
              </p>

              <p className="mt-1 text-3xl font-bold text-amber-950">
                1999
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 sm:text-sm">
              Where it began
            </p>

            <h2 className="text-3xl font-bold leading-tight text-stone-900 sm:text-4xl md:text-5xl">
              From a small basement bakery to a community favorite
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-stone-600 md:text-lg">
              <p>
                Shilla Bakery began in 1999 in a small basement bakery with a
                straightforward goal: to make breads, cakes, and pastries that
                people genuinely enjoy eating.
              </p>

              <p>
                Over the years, that idea grew into a bakery and café experience
                where traditional Korean bakery favorites can sit alongside
                croissants, fresh cream cakes, mousse desserts, coffee, boba,
                bingsu, and everyday café favorites.
              </p>

              <p>
                Whether someone stops by for a morning coffee, chooses pastries
                to share with family, or picks up a cake for an important
                celebration, the bakery experience is built around small
                moments worth enjoying.
              </p>
            </div>

            <Link
              to="/menu"
              className="mt-8 inline-flex rounded-full bg-amber-700 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-amber-800 sm:text-base"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-stone-100">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              The Shilla Experience
            </p>

            <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl md:text-5xl">
              Something for every kind of moment
            </h2>

            <p className="mt-5 text-base leading-8 text-stone-600 md:text-lg">
              A quick breakfast, an afternoon treat, a birthday cake, or a box
              of pastries to share — Shilla Bakery is designed around the many
              different ways people enjoy bakery food.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {bakeryHighlights.map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-semibold text-amber-700">
                  {item.number}
                </p>

                <h3 className="mt-4 text-2xl font-bold text-stone-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cakes / Celebration */}
      <section className="bg-amber-950 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
              Celebrations
            </p>

            <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Cakes made for the moments people remember
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-200 md:text-lg">
              Shilla Bakery is especially known by customers for its cake
              selection. Fresh cream cakes, mousse cakes, cheesecakes, fruit
              cakes, and playful decorated cakes make the bakery a familiar
              stop for birthdays, family gatherings, and celebrations.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300">
              Many customer reviews specifically praise the visual presentation
              of the cakes as well as lighter fresh-cream styles that balance
              sweetness with fruit, soft cake, and smooth cream.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white/10 p-7 backdrop-blur-sm sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
              Popular for
            </p>

            <div className="mt-6 space-y-5">
              <div className="border-b border-white/10 pb-5">
                <h3 className="text-xl font-semibold">
                  Birthdays
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-300">
                  Fresh cream cakes, fruit cakes, mousse cakes, and character
                  designs for memorable celebrations.
                </p>
              </div>

              <div className="border-b border-white/10 pb-5">
                <h3 className="text-xl font-semibold">
                  Family Gatherings
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-300">
                  Cakes, pastries, breads, and desserts that are easy to bring
                  to the table and share.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Everyday Treats
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-300">
                  Because not every cake needs an occasion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              Google Reviews
            </p>

            <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl md:text-5xl">
              Loved by customers across our locations
            </h2>

            <p className="mt-5 text-base leading-8 text-stone-600 md:text-lg">
              Guests regularly praise Shilla Bakery for light fresh-cream
              cakes, Korean-style pastries, café drinks, friendly service, and
              a wide variety of baked goods.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {googleReviews.map((review) => (
              <article
                key={`${review.name}-${review.location}`}
                className="flex h-full flex-col rounded-3xl border border-stone-200 bg-stone-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-stone-900">
                      {review.name}
                    </p>

                    <p className="mt-1 text-xs text-stone-500">
                      {review.location}
                    </p>
                  </div>

                  <span className="text-sm font-semibold text-stone-500">
                    Google
                  </span>
                </div>

                <div
                  className="mt-5 flex gap-1 text-lg text-amber-500"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>

                <p className="mt-5 flex-1 text-base leading-7 text-stone-700">
                  “{review.text}”
                </p>

                <div className="mt-6 border-t border-stone-200 pt-4">
                  <p className="text-xs text-stone-400">
                    Public Google review excerpt
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-stone-400">
            Reviews are short excerpts from publicly available Google customer
            feedback. Experiences may vary by location and visit.
          </p>
        </div>
      </section>

      {/* Korean Bakery Identity */}
      <section className="bg-stone-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
                Bakery & Café
              </p>

              <h2 className="text-3xl font-bold leading-tight text-stone-900 sm:text-4xl md:text-5xl">
                Korean bakery favorites meet a modern café
              </h2>

              <p className="mt-6 text-base leading-8 text-stone-600 md:text-lg">
                Shilla Bakery’s selection reflects the experience of a Korean
                bakery café: soft breads, sweet bean and cream-filled pastries,
                cakes, roll cakes, croissants, desserts, coffee, specialty
                drinks, and Korean favorites like bingsu.
              </p>

              <p className="mt-5 text-base leading-8 text-stone-600 md:text-lg">
                That variety is one of the things customers mention most often.
                A single visit can be a coffee stop, a dessert outing, a quick
                breakfast, or a trip to choose a cake for someone special.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-amber-100 p-6 sm:p-8">
                <p className="text-3xl font-bold text-amber-950">
                  1999
                </p>
                <p className="mt-2 text-sm leading-6 text-amber-900">
                  The year Shilla Bakery says its baking story began.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
                <p className="text-3xl font-bold text-stone-900">
                  6
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Unique locations currently listed on the official website.
                </p>
              </div>

              <div className="col-span-2 rounded-3xl bg-stone-900 p-6 text-white sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
                  One bakery, many reasons to visit
                </p>

                <p className="mt-4 text-lg leading-8 text-stone-200">
                  Breakfast, coffee, breads, cakes, desserts, celebrations,
                  pickup, delivery, and catering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
                Our Community
              </p>

              <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl md:text-5xl">
                Find your nearby Shilla Bakery
              </h2>

              <p className="mt-5 text-base leading-8 text-stone-600 md:text-lg">
                Choose a location below to open it directly in Google Maps and
                get directions.
              </p>
            </div>

            <Link
              to="/contact"
              className="w-fit rounded-full bg-amber-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-800 sm:text-base"
            >
              View All Locations
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => {
              const mapUrl =
                `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  location.address,
                )}`;

              return (
                <a
                  key={location.name}
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-3xl border border-stone-200 bg-stone-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 transition group-hover:text-amber-800">
                        {location.name}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-stone-600">
                        {location.address}
                      </p>
                    </div>

                    <span className="shrink-0 text-xl text-amber-700">
                      ↗
                    </span>
                  </div>

                  <p className="mt-5 text-sm font-semibold text-amber-800">
                    Open in Google Maps
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Catering */}
      <section className="bg-stone-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-amber-950 px-7 py-12 text-white sm:px-10 md:px-14 md:py-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
                  Catering & Large Orders
                </p>

                <h2 className="text-3xl font-bold sm:text-4xl">
                  Bring Shilla Bakery to your next gathering
                </h2>

                <p className="mt-5 text-base leading-8 text-stone-200">
                  Planning an office event, party, family gathering, or
                  celebration? Contact Shilla Bakery to discuss catering and
                  large-order options.
                </p>
              </div>

              <a
                href="mailto:support@shillabakeryusa.com"
                className="shrink-0 rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-amber-950 transition hover:bg-amber-100 sm:text-base"
              >
                Contact Catering
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;