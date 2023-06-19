import { atom } from "recoil";

interface IUser {
  nicknameInputVal: string;
}

export const userState = atom<IUser>({
  key: "userState",
  default: {
    nicknameInputVal: "",
  }
});
