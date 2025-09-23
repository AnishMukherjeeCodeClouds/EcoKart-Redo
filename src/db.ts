import Dexie, { type EntityTable } from "dexie";

export type CartItem = {
  id: number;
  productId: number;
  quantity: number;
};
type WishlistItem = {};

const db = new Dexie("EcoKartDB") as Dexie & {
  cart: EntityTable<CartItem, "id">;
  wishlist: EntityTable<WishlistItem>;
};

db.version(1).stores({
  cart: "++id, productId, quantity",
});

export { db };
