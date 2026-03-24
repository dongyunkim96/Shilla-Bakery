function App() {
  return (
    <div className="min-h-screen bg-[#fffdf8] text-[#2d1f1a]">
      <header className="border-b border-[#e8dccd] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide">Shilla Bakery</h1>
          <nav className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-[#a0672f]">Home</a>
            <a href="#" className="hover:text-[#a0672f]">Menu</a>
            <a href="#" className="hover:text-[#a0672f]">About</a>
            <a href="#" className="hover:text-[#a0672f]">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="grid gap-8 rounded-3xl bg-[#f8efe5] p-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#a0672f]">
              Freshly Baked Daily
            </p>
            <h2 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
              Welcome to Shilla Bakery
            </h2>
            <p className="mb-6 text-base leading-7 text-[#5c4033]">
              Discover fresh breads, soft cakes, delicious pastries, and handcrafted
              drinks made with warmth every day.
            </p>
            <div className="flex gap-4">
              <button className="rounded-full bg-[#2d1f1a] px-6 py-3 text-white transition hover:opacity-90">
                Explore Menu
              </button>
              <button className="rounded-full border border-[#2d1f1a] px-6 py-3 transition hover:bg-[#2d1f1a] hover:text-white">
                Visit Store
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="space-y-4">
              <div className="rounded-2xl bg-[#fff7f0] p-4">
                <h3 className="text-lg font-semibold">Signature Cream Bread</h3>
                <p className="mt-2 text-sm text-[#6b4c3b]">
                  Soft, fluffy, and filled with smooth cream.
                </p>
              </div>

              <div className="rounded-2xl bg-[#fff7f0] p-4">
                <h3 className="text-lg font-semibold">Strawberry Shortcake</h3>
                <p className="mt-2 text-sm text-[#6b4c3b]">
                  Light whipped cream with fresh strawberries.
                </p>
              </div>

              <div className="rounded-2xl bg-[#fff7f0] p-4">
                <h3 className="text-lg font-semibold">Butter Croissant</h3>
                <p className="mt-2 text-sm text-[#6b4c3b]">
                  Golden layers with a rich buttery taste.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;