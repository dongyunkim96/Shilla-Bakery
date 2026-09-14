import MenuCard from './MenuCard';

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

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
};

function MenuSection({ title, items }: MenuSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="mt-10">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-amber-950 sm:text-3xl">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default MenuSection;