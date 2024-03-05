"use client";
import React, { useContext, useState } from 'react'
import { AppContext } from './appContext'

export const AppContextProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [isResetPassword, setIsResetPassword] = useState(false);
  return (
    <AppContext.Provider value={{
        isResetPassword,
        count,
        setCount,
        setIsResetPassword
    }}>
        {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
    return useContext(AppContext);
};