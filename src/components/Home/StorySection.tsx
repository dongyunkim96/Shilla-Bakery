function StorySection() {
  return (
    <section id="story" className="bg-amber-100/60">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 sm:text-sm">
          Our Story
        </p>

        <h2 className="mb-4 text-2xl font-bold text-amber-950 sm:text-3xl md:text-4xl">
          A bakery that started small and kept its original purpose
        </h2>

        <p className="max-w-3xl text-sm leading-7 text-stone-700 sm:text-base md:text-lg">
          Shilla Bakery started in 1999 in a small basement bakery with a simple
          goal: to make breads, cakes, and pastries that people genuinely enjoy.
          That same spirit continues today through fresh baking, comforting
          flavors, and meaningful everyday moments.
        </p>
      </div>
    </section>
  );
}

export default StorySection;