type Category = 'all' | 'bread' | 'dessert' | 'drink';

type SortOption = 'default' | 'price-low' | 'price-high';

type MenuFilterBarProps = {
  activeCategory: Category;
  searchKeyword: string;
  sortOption: SortOption;
  onCategoryChange: (category: Category) => void;
  onSearchChange: (value: string) => void;
  onSortChange: (sort: SortOption) => void;
};

function MenuFilterBar({
  activeCategory,
  searchKeyword,
  sortOption,
  onCategoryChange,
  onSearchChange,
  onSortChange,
}: MenuFilterBarProps) {
  const categories: { label: string; value: Category }[] = [
    { label: 'All', value: 'all' },
    { label: 'Bread', value: 'bread' },
    { label: 'Dessert', value: 'dessert' },
    { label: 'Drinks', value: 'drink' },
  ];

  return (
    <div className="space-y-5">
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.value}
            type="button"
            onClick={() => onCategoryChange(category.value)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeCategory === category.value
                ? 'bg-amber-700 text-white'
                : 'bg-stone-100 text-stone-700 hover:bg-amber-50 hover:text-amber-900'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Search + Sort */}
      <div className="grid gap-3 md:grid-cols-[1fr_auto]">
        <input
          type="text"
          value={searchKeyword}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search breads, desserts, or drinks..."
          className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
        />

        <select
          value={sortOption}
          onChange={(e) =>
            onSortChange(e.target.value as SortOption)
          }
          className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
        >
          <option value="default">Sort by</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default MenuFilterBar;