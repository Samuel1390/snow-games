import { CartItem, Game, Action } from "./types";
const isOnCart = (gameId: string, cart: CartItem[]) => {
  return cart.findIndex((game) => game.uuid === gameId);
};

const reducer = (state: CartItem[], action: Action): CartItem[] => {
  const { game, type, cart, platform } = action;
  const onCart = isOnCart(game.uuid, cart);
  switch (type) {
    case "ADD": {
      if (onCart === -1) {
        const newCart = structuredClone(cart);
        newCart.push({ ...game, quantity: 1, platform: platform });
        return newCart;
      }
      const newCart = structuredClone(cart);
      newCart[onCart].quantity += 1;
      return newCart;
    }
    case "REMOVE": {
      if (!game.quantity) {
        throw new Error("Game quantity is undefined");
      }
      if (onCart >= 0 && game.quantity > 1) {
        const newCart = structuredClone(cart);
        newCart[onCart].quantity -= 1;
        return newCart;
      }
      const filteredGames = cart.filter(
        (gameOnCart) => gameOnCart.uuid !== game.uuid,
      );
      return filteredGames;
    }
    case "DELETE": {
      if (onCart >= 0) {
        const filteredGames = cart.filter(
          (gameOnCart) => gameOnCart.uuid !== game.uuid,
        );
        return filteredGames;
      }
    }
  }
  return state;
};
export default reducer;
