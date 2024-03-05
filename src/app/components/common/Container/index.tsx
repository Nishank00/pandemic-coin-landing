import React, { ReactNode } from 'react'

interface ContainerProps{
    children: ReactNode
}

const Container = ({children}:ContainerProps) => {
  return (
    <div className=' py-[10px] md:py-[100px] px-[10px] max-w-[1400px] mx-auto w-full'>
        {children}
    </div>
  )
}

export default Container