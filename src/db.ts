import Dexie, { type EntityTable } from "dexie";

export type CartItem = {
  id: number;
  productId: number;
  quantity: number;
};
type WishlistItem = {
  id: number;
  productId: number;
};

const db = new Dexie("EcoKartDB") as Dexie & {
  cart: EntityTable<CartItem, "id">;
  wishlist: EntityTable<WishlistItem, "id">;
};

db.version(1).stores({
  cart: "++id, productId, quantity",
  wishlist: "++id, productId",
});

export { db };
