import { Link } from 'react-router-dom';
import type { MenuItem } from '../../types/menu';

type MenuCardProps = {
  item: MenuItem;
};

function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {item.recommended && (
            <span className="rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white">
              Recommended
            </span>
          )}

          {item.bestSeller && (
            <span className="rounded-full bg-stone-900 px-3 py-1 text-xs font-semibold text-white">
              Best Seller
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title + Price */}
        <div className="mb-3 flex min-h-[64px] items-start justify-between gap-4">
          <h3 className="line-clamp-2 text-xl font-bold leading-7 text-stone-900">
            {item.name}
          </h3>

          <span className="shrink-0 font-semibold text-amber-800">
            ${item.price.toFixed(2)}
          </span>
        </div>

        {/* Description */}
        <p className="line-clamp-3 min-h-[72px] text-sm leading-6 text-stone-600">
          {item.description}
        </p>

        {/* View Details */}
        <div className="mt-auto pt-5">
          <Link
            to={`/menu/${item.slug}`}
            className="inline-block text-sm font-semibold text-amber-800 transition hover:text-amber-950"
          >
            View Details →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default MenuCard;