import create from "zustand";
import { combine, devtools, persist } from "zustand/middleware";

interface UserStateI {
  user: null;
}

interface UserMethodsI {
  // eslint-disable-next-line no-unused-vars
  setValues: <T extends keyof UserStateI>(key: T, value: UserStateI[T]) => void;
}

const initalStateUser: UserStateI = {
  user: null,
};

export const useAuth = create(
  devtools(
    persist(
      combine<UserStateI, UserMethodsI>(initalStateUser, (set) => ({
        setValues: (key, value) => set((state) => ({ ...state, [key]: value })),
      })),
      {
        name: "key",
        whitelist: ["user"],
        getStorage: () => sessionStorage,
      }
    )
  )
);
