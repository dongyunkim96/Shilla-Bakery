type Category = 'all' | 'bread' | 'coffee' | 'dessert';
type SortOption = 'default' | 'price-low' | 'price-high';

type MenuFilterBarProps = {
  activeCategory: Category;
  searchKeyword: string;
  sortOption: SortOption;
  onCategoryChange: (category: Category) => void;
  onSearchChange: (value: string) => void;
  onSortChange: (value: SortOption) => void;
};

function FilterButton({
  isActive,
  label,
  onClick,
}: {
  isActive: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
        isActive
          ? 'bg-amber-700 text-white'
          : 'bg-white text-amber-900 border border-amber-200 hover:bg-amber-50'
      }`}
    >
      {label}
    </button>
  );
}

function MenuFilterBar({
  activeCategory,
  searchKeyword,
  sortOption,
  onCategoryChange,
  onSearchChange,
  onSortChange,
}: MenuFilterBarProps) {
  return (
    <div className="mb-8 rounded-[1.5rem] border border-amber-200 bg-amber-50 p-4 sm:p-5">
      <div className="flex flex-wrap gap-3">
        <FilterButton
          label="All"
          isActive={activeCategory === 'all'}
          onClick={() => onCategoryChange('all')}
        />
        <FilterButton
          label="Bread"
          isActive={activeCategory === 'bread'}
          onClick={() => onCategoryChange('bread')}
        />
        <FilterButton
          label="Coffee"
          isActive={activeCategory === 'coffee'}
          onClick={() => onCategoryChange('coffee')}
        />
        <FilterButton
          label="Dessert"
          isActive={activeCategory === 'dessert'}
          onClick={() => onCategoryChange('dessert')}
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        <input
          type="text"
          value={searchKeyword}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search menu..."
          className="w-full rounded-2xl border border-amber-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-amber-500"
        />

        <select
          value={sortOption}
          onChange={(event) =>
            onSortChange(event.target.value as SortOption)
          }
          className="w-full rounded-2xl border border-amber-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-amber-500"
        >
          <option value="default">Sort: Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default MenuFilterBar;