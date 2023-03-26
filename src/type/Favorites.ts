export type initialTypeFavorites = {
  favorites: Array<favoritesType>;
};

export type favoritesType = {
  id: string;
  name: string;
  filter: string;
  price: string;
  descrition: string;
  live: boolean;
};
