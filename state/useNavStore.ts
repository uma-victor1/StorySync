import { create } from "zustand";

interface NavState {
  isNavOpen: boolean;
}

interface NavStore {
  navState: NavState;
  setNav: (navState: NavState) => void;
}

const useNavStore = create<NavStore>((set) => ({
  navState: {
    isNavOpen: false,
  },
  setNav: (navState: NavState) => {
    set({
      navState,
    });
  },
}));

export default useNavStore;
