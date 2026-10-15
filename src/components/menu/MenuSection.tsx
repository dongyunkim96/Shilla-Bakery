import MenuCard from './MenuCard';
import type { MenuItem } from '../../types/menu';

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
};

function MenuSection({
  title,
  items,
}: MenuSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
            Shilla Bakery
          </p>

          <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
            {title}
          </h2>
        </div>

        <p className="hidden text-sm text-stone-500 sm:block">
          {items.length} {items.length === 1 ? 'item' : 'items'}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}

export default MenuSection;