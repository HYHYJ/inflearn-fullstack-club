import { atom } from "recoil";

// 기본적인 상태태
export const userState = atom<{
  email: string;
  name: string;
}>({
  key: "userState",
  default: {
    email: "",
    name: "",
  },
});
