import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:gap-12 md:py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
      <div className="order-2 lg:order-1">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 sm:text-sm">
          Since 1999
        </p>

        <h1 className="text-3xl font-bold leading-tight text-amber-950 sm:text-4xl md:text-5xl lg:text-6xl">
          Fresh breads, cakes, and pastries made to brighten everyday moments.
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base md:text-lg">
          Shilla Bakery began in a small basement bakery in 1999 and continues
          to focus on creating breads, cakes, and pastries worth sharing with
          family, friends, and special occasions.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            to="/menu"
            className="rounded-full bg-amber-700 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-amber-800 sm:text-base"
          >
            View Menu
          </Link>

          <Link
            to="/contact"
            className="rounded-full border border-amber-300 px-6 py-3 text-center text-sm font-semibold text-amber-900 transition hover:bg-amber-100 sm:text-base"
          >
            Find a Location
          </Link>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <div className="rounded-[1.75rem] bg-gradient-to-br from-amber-200 via-orange-100 to-rose-100 p-4 shadow-lg sm:p-5 md:p-6">
          <div className="flex min-h-[260px] items-center justify-center rounded-[1.5rem] border border-white/60 bg-white/60 p-6 text-center backdrop-blur sm:min-h-[320px] md:min-h-[380px]">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-amber-700 sm:text-sm">
                Shilla Bakery
              </p>
              <h2 className="text-2xl font-bold text-amber-950 sm:text-3xl">
                Freshly baked, thoughtfully shared
              </h2>
              <p className="mt-3 text-sm text-stone-600 sm:text-base">
                대표 베이커리 이미지나 시그니처 제품 사진이 들어갈 자리
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;