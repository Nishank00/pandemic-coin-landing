'use client'
import { AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import AOS from "aos";

const ClientLayoutWrapper = ({children}:any) => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: false,
          offset: -100,
          // startEvent: "load",
        });
      }, []);
  return (
    <>
    <AnimatePresence mode="wait" initial={false}>

        {children}
    </AnimatePresence>
        <ToastContainer hideProgressBar={true} draggable stacked autoClose={5000}  />
    </>
  )
}

export default ClientLayoutWrapper