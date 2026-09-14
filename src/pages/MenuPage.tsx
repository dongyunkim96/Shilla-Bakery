import { useMemo, useState } from 'react';
import MenuFilterBar from '../components/menu/MenuFilterBar';
import MenuSection from '../components/menu/MenuSection';
import menuData from '../data/menuData.json';

type MenuItem = {
  id: number;
  slug: string;
  name: string;
  category: 'bread' | 'coffee' | 'dessert';
  description: string;
  details: string;
  price: number;
  image: string;
  recommended: boolean;
  bestSeller: boolean;
};

type Category = 'all' | 'bread' | 'coffee' | 'dessert';
type SortOption = 'default' | 'price-low' | 'price-high';

const menuItems = menuData as MenuItem[];

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('default');

  const filteredItems = useMemo(() => {
    let result = [...menuItems];

    if (activeCategory !== 'all') {
      result = result.filter((item) => item.category === activeCategory);
    }

    if (searchKeyword.trim()) {
      const keyword = searchKeyword.toLowerCase();

      result = result.filter((item) => {
        return (
          item.name.toLowerCase().includes(keyword) ||
          item.description.toLowerCase().includes(keyword)
        );
      });
    }

    if (sortOption === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortOption === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, searchKeyword, sortOption]);

  const breadItems = filteredItems.filter((item) => item.category === 'bread');
  const coffeeItems = filteredItems.filter(
    (item) => item.category === 'coffee',
  );
  const dessertItems = filteredItems.filter(
    (item) => item.category === 'dessert',
  );

  const noResults = filteredItems.length === 0;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mb-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 sm:text-sm">
          Menu
        </p>

        <h1 className="text-3xl font-bold text-amber-950 sm:text-4xl md:text-5xl">
          Fresh breads, coffee, and desserts
        </h1>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-600 sm:text-base md:text-lg">
          카테고리 필터, 검색, 가격 정렬, 상세 페이지 이동까지 포함된
          메뉴 페이지입니다.
        </p>
      </div>

      <MenuFilterBar
        activeCategory={activeCategory}
        searchKeyword={searchKeyword}
        sortOption={sortOption}
        onCategoryChange={setActiveCategory}
        onSearchChange={setSearchKeyword}
        onSortChange={setSortOption}
      />

      {noResults ? (
        <div className="rounded-[1.75rem] border border-amber-200 bg-white p-8 text-center">
          <h2 className="text-xl font-semibold text-amber-900">
            No menu items found
          </h2>
          <p className="mt-3 text-stone-600">
            검색어를 바꾸거나 다른 카테고리를 선택해보세요.
          </p>
        </div>
      ) : (
        <>
          <MenuSection title="Bread" items={breadItems} />
          <MenuSection title="Coffee" items={coffeeItems} />
          <MenuSection title="Dessert" items={dessertItems} />
        </>
      )}
    </section>
  );
}

export default MenuPage;