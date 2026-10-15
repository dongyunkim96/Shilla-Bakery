import { Link } from 'react-router-dom';

const signatureItems = [
  {
    title: 'Fresh Cream Cakes',
    category: 'Celebration Favorite',
    description:
      'Light, soft, and beautifully finished with fresh cream and fruit. A Shilla favorite for birthdays, celebrations, and everyday treats.',
    image: '/assets/shillabakery05.jpg',
    link: '/menu',
  },
  {
    title: 'Korean Bakery Breads',
    category: 'Freshly Baked',
    description:
      'From red bean buns and cream buns to soft Japanese-style breads, discover comforting bakery classics made for sharing.',
    image: '/assets/shillabakery06.jpg',
    link: '/menu',
  },
  {
    title: 'Coffee & Café Drinks',
    category: 'Café Favorites',
    description:
      'Pair your favorite pastry with espresso drinks, Korean iced coffee, lattes, tea, boba, and refreshing café selections.',
    image: '/assets/shillabakery07.jpg',
    link: '/menu',
  },
];

function SignatureSection() {
  return (
    <section
      id="signature"
      className="border-t border-stone-200 bg-white"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 sm:text-sm">
            Signature Selections
          </p>

          <h2 className="text-3xl font-bold leading-tight text-stone-900 sm:text-4xl md:text-5xl">
            A few of the favorites
            <span className="block text-amber-800">
              that keep guests coming back
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base md:text-lg md:leading-8">
            From light fresh-cream cakes and soft Korean breads to café drinks,
            these are some of the flavors that define the Shilla Bakery
            experience.
          </p>
        </div>

        {/* Signature Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {signatureItems.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-amber-900 shadow-sm backdrop-blur">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-stone-900 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-stone-600 sm:text-base">
                  {item.description}
                </p>

                <Link
                  to={item.link}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-amber-800 transition group-hover:text-amber-950"
                >
                  Explore Menu
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            to="/menu"
            className="rounded-full bg-amber-700 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800 sm:text-base"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SignatureSection;