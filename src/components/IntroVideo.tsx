import { useEffect, useState } from 'react';

function IntroVideo() {
  const [isVisible, setIsVisible] = useState(() => {
    const hasSeenIntro = sessionStorage.getItem('shilla-intro-seen');

    return !hasSeenIntro;
  });

  const closeVideo = () => {
    sessionStorage.setItem('shilla-intro-seen', 'true');
    setIsVisible(false);
  };

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeVideo();
      }
    };

    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';

      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <section
      className="fixed inset-0 z-[9999] overflow-hidden bg-black"
      aria-label="Shilla Bakery introduction"
    >
      {/* Video */}
      <div className="absolute inset-0 flex items-center justify-center px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-16">
        <video
          src="/video/shilla-intro.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={closeVideo}
          className="
            h-auto
            max-h-[88vh]
            w-auto
            max-w-[94vw]
            rounded-2xl
            object-contain
            shadow-2xl
            sm:max-h-[86vh]
            sm:max-w-[92vw]
            lg:max-h-[88vh]
            lg:max-w-[90vw]
          "
        />
      </div>

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/10" />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-transparent
          to-black/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-black/35
          via-transparent
          to-transparent
        "
      />

      {/* Top Bar */}
      <div
        className="
          absolute
          left-0
          right-0
          top-0
          z-20
          flex
          items-center
          justify-between
          px-5
          py-5
          sm:px-8
          sm:py-7
          lg:px-12
        "
      >
        {/* Brand */}
        <div className="text-white">
          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-white/70
              sm:text-xs
            "
          >
            Since 1999
          </p>

          <p
            className="
              mt-1
              text-lg
              font-semibold
              tracking-wide
              sm:text-xl
            "
          >
            SHILLA BAKERY
          </p>
        </div>

        {/* Close */}
        <button
          type="button"
          onClick={closeVideo}
          aria-label="Close introduction"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/25
            bg-black/20
            text-xl
            text-white
            backdrop-blur-md
            transition
            duration-300
            hover:scale-105
            hover:bg-white
            hover:text-black
          "
        >
          ×
        </button>
      </div>

      {/* Main Content */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          w-full
          items-end
        "
      >
        <div
          className="
            w-full
            px-5
            pb-10
            sm:px-8
            sm:pb-14
            md:pb-16
            lg:px-12
            lg:pb-20
          "
        >
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p
              className="
                mb-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.32em]
                text-amber-300
                sm:text-sm
              "
            >
              Korean Bakery & Café
            </p>

            {/* Main Heading */}
            <h1
              className="
                max-w-3xl
                text-4xl
                font-semibold
                leading-[1.05]
                tracking-[-0.03em]
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Freshly baked.
              <span className="block">
                Made to be shared.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-white/80
                sm:text-base
                md:text-lg
              "
            >
              Breads, cakes, pastries, and café favorites crafted for everyday
              moments and special celebrations.
            </p>

            {/* Actions */}
            <div
              className="
                mt-7
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
              "
            >
              <button
                type="button"
                onClick={closeVideo}
                className="
                  rounded-full
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-stone-900
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-amber-100
                  sm:px-7
                  sm:text-base
                "
              >
                Enter Shilla Bakery
              </button>

              <button
                type="button"
                onClick={closeVideo}
                className="
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition
                  duration-300
                  hover:bg-white
                  hover:text-stone-900
                  sm:px-7
                  sm:text-base
                "
              >
                Skip Intro
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-20
          h-[2px]
          bg-white/10
        "
      >
        <div className="intro-progress h-full bg-white/70" />
      </div>
    </section>
  );
}

export default IntroVideo;