import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-amber-900 sm:text-2xl"
          onClick={() => setIsOpen(false)}
        >
          Shilla Bakery
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-stone-700 md:flex">
          <Link to="/" className="transition hover:text-amber-700">
            Home
          </Link>
          <Link to="/menu" className="transition hover:text-amber-700">
            Menu
          </Link>
          <Link to="/about" className="transition hover:text-amber-700">
            About
          </Link>
          <Link to="/contact" className="transition hover:text-amber-700">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full bg-amber-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-800 sm:block">
            Order Now
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-200 text-amber-900 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-xl">{isOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-amber-100 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 text-sm font-medium text-stone-700 sm:px-6">
            <Link
              to="/"
              className="rounded-lg px-3 py-2 transition hover:bg-amber-50 hover:text-amber-700"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="rounded-lg px-3 py-2 transition hover:bg-amber-50 hover:text-amber-700"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="rounded-lg px-3 py-2 transition hover:bg-amber-50 hover:text-amber-700"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="rounded-lg px-3 py-2 transition hover:bg-amber-50 hover:text-amber-700"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <button className="mt-3 rounded-full bg-amber-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-800">
              Order Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;