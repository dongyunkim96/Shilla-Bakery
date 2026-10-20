import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="relative min-h-[620px] overflow-hidden sm:min-h-[700px] lg:min-h-[760px]">
      {/* Background Image */}
      <img
        src="/assets/shillabakery.jpg"
        alt="Shilla Bakery interior with cakes and bakery displays"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[60%_center]
          sm:object-[58%_center]
          lg:object-[55%_center]
        "
      />

      {/* Overall Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Left Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />

      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[620px]
          w-full
          max-w-7xl
          items-center
          px-4
          py-20
          sm:min-h-[700px]
          sm:px-6
          lg:min-h-[760px]
          lg:px-8
        "
      >
        <div className="max-w-xl text-white md:max-w-2xl">
          <p
            className="
              mb-4
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-amber-300
              sm:text-sm
            "
          >
            Shilla Bakery
          </p>

          <h1
            className="
              mb-6
              text-4xl
              font-bold
              leading-[1.1]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Freshly baked.
            <br />
            Made to be shared.
          </h1>

          <p
            className="
              mb-8
              max-w-xl
              text-base
              leading-8
              text-stone-100
              sm:text-lg
              md:text-xl
            "
          >
            Discover freshly baked breads, handcrafted cakes, pastries, and
            café favorites made for everyday moments and special celebrations.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/menu"
              className="
                rounded-full
                bg-amber-600
                px-7
                py-3.5
                text-center
                text-sm
                font-semibold
                text-white
                shadow-lg
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-amber-700
                sm:text-base
              "
            >
              Explore Menu
            </Link>

            <Link
              to="/contact"
              className="
                rounded-full
                border
                border-white/60
                bg-black/20
                px-7
                py-3.5
                text-center
                text-sm
                font-semibold
                text-white
                backdrop-blur-sm
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-white
                hover:text-stone-900
                sm:text-base
              "
            >
              Find a Location
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
            Discover
          </span>

          <div className="h-8 w-px bg-white/50" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;