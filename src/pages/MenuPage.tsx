import { useMemo, useState } from 'react';

import MenuFilterBar from '../components/menu/MenuFilterBar';
import MenuSection from '../components/menu/MenuSection';

import menuData from '../data/menuData.json';

import type { MenuItem } from '../types/menu';

type Category =
  | 'all'
  | 'bread'
  | 'dessert'
  | 'drink';

type SortOption =
  | 'default'
  | 'price-low'
  | 'price-high';

const menuItems = menuData as MenuItem[];

function MenuPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>('all');

  const [searchKeyword, setSearchKeyword] =
    useState('');

  const [sortOption, setSortOption] =
    useState<SortOption>('default');

  const filteredItems = useMemo(() => {
    let result = [...menuItems];

    // Category Filter
    if (activeCategory !== 'all') {
      result = result.filter(
        (item) =>
          item.category === activeCategory
      );
    }

    // Search
    if (searchKeyword.trim()) {
      const keyword = searchKeyword
        .trim()
        .toLowerCase();

      result = result.filter((item) => {
        return (
          item.name
            .toLowerCase()
            .includes(keyword) ||
          item.description
            .toLowerCase()
            .includes(keyword) ||
          item.details
            .toLowerCase()
            .includes(keyword)
        );
      });
    }

    // Price Sorting
    if (sortOption === 'price-low') {
      result.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sortOption === 'price-high') {
      result.sort(
        (a, b) => b.price - a.price
      );
    }

    return result;
  }, [
    activeCategory,
    searchKeyword,
    sortOption,
  ]);

  const breadItems = filteredItems.filter(
    (item) => item.category === 'bread'
  );

  const dessertItems = filteredItems.filter(
    (item) => item.category === 'dessert'
  );

  const drinkItems = filteredItems.filter(
    (item) => item.category === 'drink'
  );

  const noResults =
    filteredItems.length === 0;

  const clearFilters = () => {
    setActiveCategory('all');
    setSearchKeyword('');
    setSortOption('default');
  };

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Menu Header */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <img
          src="/assets/shillabakery02.jpg"
          alt="Shilla Bakery interior"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Left Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/80
            via-black/50
            to-black/10
          "
        />

        {/* Header Content */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[360px]
            w-full
            max-w-7xl
            items-center
            px-4
            py-14
            sm:min-h-[420px]
            sm:px-6
            md:min-h-[480px]
            md:py-20
            lg:px-8
          "
        >
          <div className="max-w-3xl text-white">
            <p
              className="
                mb-3
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-amber-300
                sm:text-sm
              "
            >
              Shilla Bakery Menu
            </p>

            <h1
              className="
                text-4xl
                font-bold
                leading-tight
                sm:text-5xl
                md:text-6xl
              "
            >
              Something fresh

              <span className="block text-amber-300">
                for every moment.
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-stone-100
                md:text-lg
              "
            >
              Explore freshly baked breads,
              handcrafted desserts, and café
              drinks. Search for a favorite,
              browse by category, or sort by
              price to find exactly what
              you’re looking for.
            </p>

            {/* Category Preview */}
            <div className="mt-8 flex flex-wrap gap-2">
              <span
                className="
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-white
                  backdrop-blur-sm
                "
              >
                Fresh Breads
              </span>

              <span
                className="
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-white
                  backdrop-blur-sm
                "
              >
                Cakes & Desserts
              </span>

              <span
                className="
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-white
                  backdrop-blur-sm
                "
              >
                Coffee & Drinks
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Controls + Products */}
      <section>
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-4
            py-10
            sm:px-6
            md:py-14
            lg:px-8
          "
        >
          {/* Filter Container */}
          <div
            className="
              mb-8
              rounded-3xl
              border
              border-stone-200
              bg-white
              p-4
              shadow-sm
              sm:p-5
            "
          >
            <MenuFilterBar
              activeCategory={
                activeCategory
              }
              searchKeyword={
                searchKeyword
              }
              sortOption={
                sortOption
              }
              onCategoryChange={
                setActiveCategory
              }
              onSearchChange={
                setSearchKeyword
              }
              onSortChange={
                setSortOption
              }
            />
          </div>

          {/* Result Summary */}
          <div
            className="
              mb-10
              flex
              flex-col
              gap-3
              border-b
              border-stone-200
              pb-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <p className="text-sm font-medium text-stone-800">
                {filteredItems.length}{' '}
                {filteredItems.length === 1
                  ? 'item'
                  : 'items'}
              </p>

              {(activeCategory !== 'all' ||
                searchKeyword) && (
                <p className="mt-1 text-sm text-stone-500">
                  Showing results
                  {activeCategory !== 'all'
                    ? ` in ${activeCategory}`
                    : ''}
                  {searchKeyword
                    ? ` for "${searchKeyword}"`
                    : ''}
                </p>
              )}
            </div>

            {(activeCategory !== 'all' ||
              searchKeyword ||
              sortOption !== 'default') && (
              <button
                type="button"
                onClick={clearFilters}
                className="
                  w-fit
                  text-sm
                  font-semibold
                  text-amber-800
                  transition
                  hover:text-amber-950
                "
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Menu Result */}
          {noResults ? (
            <div
              className="
                rounded-3xl
                border
                border-stone-200
                bg-white
                px-6
                py-16
                text-center
                shadow-sm
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-amber-50
                  text-2xl
                "
              >
                ♡
              </div>

              <h2 className="mt-5 text-2xl font-bold text-stone-900">
                We couldn’t find that item
              </h2>

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-md
                  text-sm
                  leading-7
                  text-stone-600
                  sm:text-base
                "
              >
                Try a different search term
                or browse all of our breads,
                desserts, and drinks.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="
                  mt-6
                  rounded-full
                  bg-amber-700
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-amber-800
                "
              >
                View Full Menu
              </button>
            </div>
          ) : (
            <div className="space-y-14 md:space-y-20">
              {breadItems.length > 0 && (
                <MenuSection
                  title="Fresh Breads"
                  items={breadItems}
                />
              )}

              {dessertItems.length > 0 && (
                <MenuSection
                  title="Cakes & Desserts"
                  items={dessertItems}
                />
              )}

              {drinkItems.length > 0 && (
                <MenuSection
                  title="Coffee & Drinks"
                  items={drinkItems}
                />
              )}
            </div>
          )}
        </div>
      </section>

      {/* Bottom Message */}
      <section
        className="
          border-t
          border-stone-200
          bg-white
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-4
            py-12
            text-center
            sm:px-6
            md:py-16
            lg:px-8
          "
        >
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-amber-700
            "
          >
            Made for every occasion
          </p>

          <h2
            className="
              mx-auto
              mt-3
              max-w-2xl
              text-2xl
              font-bold
              text-stone-900
              sm:text-3xl
            "
          >
            From everyday favorites to
            something worth celebrating
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-7
              text-stone-600
              sm:text-base
            "
          >
            Visit a Shilla Bakery location
            to discover even more freshly
            made favorites and seasonal
            selections.
          </p>
        </div>
      </section>
    </main>
  );
}

export default MenuPage;