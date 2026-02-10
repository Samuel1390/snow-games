import { ParamValue } from "next/dist/server/request/params";

export interface Game {
  name: string;
  type: string;
  price: string;
  image: string;
  uuid: string;
  platform: State["platform"];
  rating: null | string;
  quantity: number | undefined;
  href: string;
}
export interface State {
  games: Game[];
  platform: "ps4" | "ps5" | "xbox" | "nintendo" | "steam" | ParamValue;
  isLoading: boolean;
  letter: LowerCaseLetter | Uppercase<LowerCaseLetter>;
  pageRange: {
    from: number;
    to: number;
  };
}
export interface SetStates {
  setGames: (games: Game[]) => void;
  setIsLoading: (value: boolean) => void;
  setPageRange: (newState: { from: number; to: number }) => void;
  setPlatform: (newPlatform: State["platform"]) => void;
  setLetter: (newLetter: string) => void;
}
export interface Filters extends State, SetStates {
  filteredGames: Game[];
  filter: {
    text: string;
    minPrice: number;
    maxPrice: number;
  };
  setFilter: (prev: {
    text: string;
    minPrice: number;
    maxPrice: number;
  }) => void;
}

export interface CartItem extends Game {
  quantity: number;
  platform: State["platform"];
  uuid: string;
}
export const enum CART_METHODS {
  ADD,
  REMOVE,
  DELETE,
  CLEAR,
}
export interface Action {
  game: CartItem;
  type: CART_METHODS;
  cart: CartItem[];
  platform: Game["platform"];
}
export interface ReturnValue {
  cart: CartItem[];
  addToCart(game: CartItem | Game): void;
  removeFromCart(game: CartItem | Game): void;
  deleteToCart(game: CartItem | Game): void;
  isOnCart(gameId: string, cart: CartItem[]): number;
  clearCart(): void;
}
type LowerCaseLetter =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";
