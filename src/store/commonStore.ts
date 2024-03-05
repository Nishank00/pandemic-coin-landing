import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'



export const useCommonStore = create(
  persist(
    (set, get) => ({
      count: 0,
      setCount: (data) => set({count: data}),
      user: {},
      setUser: (data) => set({user: data}),
      accessToken: '',
      setAccessToken: (data) => set({accessToken: data}),
      isLoggedIn: false,
      setIsLoggedIn: (data) => set({isLoggedIn: data})
    }),
    {
      name: 'commonStore', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)