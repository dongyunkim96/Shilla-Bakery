export type MenuCategory =
  | 'bread'
  | 'dessert'
  | 'drink';

export type MenuItem = {
  id: number;
  slug: string;
  name: string;
  category: MenuCategory;
  description: string;
  details: string;
  price: number;
  image: string;
  recommended: boolean;
  bestSeller: boolean;
};