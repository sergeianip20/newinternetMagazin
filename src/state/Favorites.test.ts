import { favoritesCreate, favoritesDelete } from "./FavoritesToolkit";
import FavoritesToolkit from "./FavoritesToolkit";
import { initialTypeFavorites, favoritesType } from "../type/Favotites";
test("correct test favoritesCreate", () => {
  const initialState: initialTypeFavorites = {
    favorites: []
  };
  let favori = {
    id: "1",
    name: "name",
    filter: "action.payload.filter",
    price: "action.payload.price",
    descrition: "",
    live: true
  };
  let action = favoritesCreate(favori);
  let endState = FavoritesToolkit(initialState, action);
  console.log(endState.favorites);
  expect(endState.favorites[0].id).toBe("1");
});
test("correct test favoritesDelete", () => {
  const initialState: initialTypeFavorites = {
    favorites: [
      {
        id: "1",
        name: "name",
        filter: "action.payload.filter",
        price: "action.payload.price",
        descrition: "",
        live: true
      },
      {
        id: "2",
        name: "name",
        filter: "action.payload.filter",
        price: "action.payload.price",
        descrition: "",
        live: true
      }
    ]
  };

  let action = favoritesDelete("1");
  let endState = FavoritesToolkit(initialState, action);
  console.log(endState.favorites);
  expect(endState.favorites[0].id).toBe("2");
});
