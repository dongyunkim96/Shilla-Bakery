import { useState } from 'react';

function IntroVideo() {
  const [isVisible, setIsVisible] = useState(() => {
    const hasSeenIntro = sessionStorage.getItem('shilla-intro-seen');
    return !hasSeenIntro;
  });

  const closeVideo = () => {
    sessionStorage.setItem('shilla-intro-seen', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 lg:px-12">
      <div className="flex w-full max-w-[420px] flex-col items-center sm:max-w-[560px] md:max-w-[760px] lg:max-w-[90vw] xl:max-w-[1200px]">
        
        {/* Welcome Text */}
        <h1
          className="
            mb-4
            text-center
            text-3xl
            font-normal
            italic
            tracking-wide
            text-white
            sm:mb-5
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
          "
          style={{
            fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
          }}
        >
          Welcome to Shilla Bakery
        </h1>

        {/* Video Container */}
        <div
          className="
            relative
            flex
            w-full
            items-center
            justify-center
            overflow-hidden
            rounded-2xl
            bg-black
            shadow-2xl
          "
        >
          <video
            src="/video/shilla-intro.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={closeVideo}
            className="
              max-h-[78vh]
              w-full
              object-contain
              sm:max-h-[80vh]
              md:max-h-[82vh]
              lg:max-h-[84vh]
            "
          />

          <div className="pointer-events-none absolute inset-0 bg-black/5" />

          {/* Close Button */}
          <button
            type="button"
            onClick={closeVideo}
            aria-label="Close intro video"
            className="
              absolute
              right-3
              top-3
              z-10
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-black/45
              text-xl
              text-white
              backdrop-blur-sm
              transition
              duration-300
              hover:scale-105
              hover:bg-black/75
              sm:right-5
              sm:top-5
              sm:h-11
              sm:w-11
              sm:text-2xl
            "
          >
            ×
          </button>

          {/* Skip Button */}
          <button
            type="button"
            onClick={closeVideo}
            className="
              absolute
              bottom-3
              right-3
              z-10
              rounded-full
              border
              border-white/50
              bg-black/45
              px-4
              py-2
              text-xs
              font-semibold
              tracking-[0.2em]
              text-white
              backdrop-blur-sm
              transition
              duration-300
              hover:bg-white
              hover:text-black
              sm:bottom-5
              sm:right-5
              sm:px-6
              sm:py-3
              sm:text-sm
            "
          >
            SKIP
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntroVideo;