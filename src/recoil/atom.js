import { atom, selector } from "recoil";

export const allData = atom({
  key: "store_data",
  default: [],
});

export const entries = selector({
  key: "entries",
  get: ({ get }) => {
    let arr = get(allData);
    let size = arr.length + 0;
    return size;
  },
});
