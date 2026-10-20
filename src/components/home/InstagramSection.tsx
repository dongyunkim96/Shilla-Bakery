const instagramUrl =
  'https://www.instagram.com/shillabakeryvienna/';

const highlights = [
  {
    label: 'NEW',
    title: 'Fresh Bakery Drops',
    description:
      'See what just came out of the oven — new breads, pastries, and seasonal bakery favorites.',
    video: '/video/instagram-bread.mp4',
  },
  {
    label: 'TRENDING',
    title: 'Cakes & Desserts',
    description:
      'Discover fresh cream cakes, mousse cakes, fruit cakes, and special celebration designs.',
    video: '/video/instagram-cake.mp4',
  },
  {
    label: 'SEASONAL',
    title: 'Drinks & Café Specials',
    description:
      'Keep up with seasonal lattes, matcha drinks, boba, and limited-time café favorites.',
    video: '/video/instagram-drink.mp4',
  },
];

function InstagramSection() {
  return (
    <section className="bg-stone-950 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300 sm:text-sm">
              Follow What’s Fresh
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              See what’s happening
              <span className="block text-amber-300">
                at Shilla Bakery
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-300 sm:text-base md:text-lg md:leading-8">
              Follow Shilla Bakery Vienna on Instagram to discover newly
              released breads, cakes, café drinks, seasonal specials, and
              upcoming events.
            </p>
          </div>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              w-fit
              items-center
              justify-center
              rounded-full
              bg-white
              px-6
              py-3.5
              text-sm
              font-semibold
              text-stone-950
              transition
              duration-300
              hover:-translate-y-0.5
              hover:bg-amber-100
              sm:text-base
            "
          >
            Follow @shillabakeryvienna
            <span className="ml-2">↗</span>
          </a>
        </div>

        {/* Video Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <a
              key={item.title}
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-stone-900
              "
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute left-5 top-5">
                  <span
                    className="
                      rounded-full
                      border
                      border-white/20
                      bg-black/35
                      px-3
                      py-1.5
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-white
                      backdrop-blur-md
                    "
                  >
                    {item.label}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-stone-300">
                    {item.description}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-amber-300">
                    See on Instagram →
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Event Strip */}
        <div
          className="
            mt-8
            flex
            flex-col
            gap-5
            rounded-[2rem]
            border
            border-white/10
            bg-white/5
            p-6
            backdrop-blur-sm
            sm:p-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
              Events & Limited-Time Specials
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Don’t miss the next Shilla update
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-300 sm:text-base">
              Instagram is the easiest way to catch seasonal releases,
              special cakes, new drinks, holiday offerings, and upcoming
              store events as they are announced.
            </p>
          </div>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="
              shrink-0
              rounded-full
              border
              border-white/25
              bg-white/10
              px-6
              py-3
              text-center
              text-sm
              font-semibold
              text-white
              transition
              duration-300
              hover:bg-white
              hover:text-stone-950
            "
          >
            View Latest Updates
          </a>
        </div>
      </div>
    </section>
  );
}

export default InstagramSection;