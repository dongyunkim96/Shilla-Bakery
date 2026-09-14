import { Link } from 'react-router-dom';

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

type MenuCardProps = {
  item: MenuItem;
};

function formatCategory(category: MenuItem['category']) {
  if (category === 'bread') return 'Bread';
  if (category === 'coffee') return 'Coffee';
  return 'Dessert';
}

function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-amber-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-200/40">
      <Link to={`/menu/${item.slug}`} className="block">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-amber-100">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {item.recommended && (
              <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow">
                Recommended
              </span>
            )}

            {item.bestSeller && (
              <span className="rounded-full bg-rose-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow">
                Best Seller
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800">
            {formatCategory(item.category)}
          </span>

          <span className="text-base font-bold text-amber-900 sm:text-lg">
            ${item.price.toFixed(2)}
          </span>
        </div>

        <h2 className="text-xl font-semibold text-stone-900 transition group-hover:text-amber-800">
          {item.name}
        </h2>

        <p className="mt-3 text-sm leading-6 text-stone-600 sm:text-base">
          {item.description}
        </p>

        <Link
          to={`/menu/${item.slug}`}
          className="mt-5 inline-flex rounded-full bg-amber-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-800"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

export default MenuCard;