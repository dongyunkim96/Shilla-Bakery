import { Link, useParams } from 'react-router-dom';
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

const menuItems = menuData as MenuItem[];

function formatCategory(category: MenuItem['category']) {
  if (category === 'bread') return 'Bread';
  if (category === 'coffee') return 'Coffee';
  return 'Dessert';
}

function MenuDetailPage() {
  const { slug } = useParams();

  const item = menuItems.find((menu) => menu.slug === slug);

  if (!item) {
    return (
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="rounded-[1.75rem] border border-amber-200 bg-white p-8">
          <h1 className="text-2xl font-bold text-amber-950">
            Menu item not found
          </h1>
          <p className="mt-3 text-stone-600">
            요청한 메뉴를 찾을 수 없습니다.
          </p>
          <Link
            to="/menu"
            className="mt-5 inline-flex rounded-full bg-amber-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
          >
            Back to Menu
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <Link
        to="/menu"
        className="inline-flex rounded-full border border-amber-300 px-4 py-2 text-sm font-semibold text-amber-900 transition hover:bg-amber-100"
      >
        ← Back to Menu
      </Link>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <div className="overflow-hidden rounded-[2rem] border border-amber-100 bg-white shadow-sm">
          <div className="aspect-[4/3] w-full overflow-hidden bg-amber-100">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800">
            {formatCategory(item.category)}
          </span>

          <h1 className="mt-4 text-3xl font-bold text-amber-950 sm:text-4xl">
            {item.name}
          </h1>

          <p className="mt-4 text-lg font-semibold text-amber-800">
            ${item.price.toFixed(2)}
          </p>

          <p className="mt-6 text-base leading-7 text-stone-600">
            {item.description}
          </p>

          <p className="mt-4 text-base leading-7 text-stone-700">
            {item.details}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MenuDetailPage;