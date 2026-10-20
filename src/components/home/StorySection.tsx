import { Link } from 'react-router-dom';

function StorySection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative min-h-[560px] bg-cover bg-center md:min-h-[650px]"
        style={{
          backgroundImage: "url('/assets/shillabakery01.jpeg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />

        <div className="relative z-10 mx-auto flex min-h-[560px] w-full max-w-7xl items-center px-4 py-16 sm:px-6 md:min-h-[650px] md:py-20 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300 sm:text-sm">
              Since 1999
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Baking meaningful moments for more than 25 years
            </h2>

            <p className="mb-5 text-base leading-8 text-stone-100 sm:text-lg">
              Shilla Bakery began in a small basement bakery in 1999 with one
              simple goal — to bake delicious breads, cakes, and pastries that
              bring people together.
            </p>

            <p className="mb-8 text-base leading-8 text-stone-200 sm:text-lg">
              Today, that same passion continues through freshly baked breads,
              beautifully crafted cakes, pastries, and café favorites made for
              everyday moments and special celebrations.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/about"
                className="rounded-full bg-amber-600 px-7 py-3.5 text-center text-sm font-semibold text-white transition duration-300 hover:bg-amber-700 sm:text-base"
              >
                Our Story
              </Link>

              <Link
                to="/menu"
                className="rounded-full border border-white/60 bg-white/10 px-7 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-stone-900 sm:text-base"
              >
                Explore Our Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;