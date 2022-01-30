import create from 'zustand';

type HamburgerTypes = {
    openMenu: boolean,
    setOpenMenu: () => void
}
const useHamburger = create<HamburgerTypes>((set, get) => ({
    openMenu: false,
    setOpenMenu: () => set({ openMenu: !get().openMenu })
}))
export default useHamburger;