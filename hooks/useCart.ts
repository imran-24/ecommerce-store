import { Product } from "@/types";
import toast from "react-hot-toast/headless";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore{
    items: Product[],
    addItem: (data: Product) => void,
    removeItem: (id: string) => void,
    removeAll: ()=> void
}

export const useCartStore = create(
    persist<CartStore>((set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id == data.id )
        if(existingItem) return toast.error("Item is already added")
        set({items: [...get().items, data]})
        toast.success("Item is added to the cart")
      },
      removeItem: (id: string) => set({items: [...get().items.filter(item => item.id !== id)]}),
      removeAll: ()=> set({items: []})
    }),
    {
      name: 'cart-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
));