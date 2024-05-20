// store.ts
import { create } from "zustand";
import { ChildrenType } from "@/types/childrenTypes";

type StoreState = {
  name: string;
  gender: string;
  children: ChildrenType;
  email: string;
  password: string;
}

type StoreAction = {
  setStoreState: (key:string, value: string | ChildrenType) => void;
}

const useStore = create<StoreState & StoreAction>((set) => ({
  name: "",
  gender: "",
  children: [],
  email: "",
  password: "",
  setStoreState: (key, value) => set(() => ({ [key]: value })),
}));

export default useStore;
