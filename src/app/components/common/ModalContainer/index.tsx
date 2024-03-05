import React from 'react'

interface ModalContainerProps{
  children: React.ReactNode
}

const ModalContainer = ({children}: ModalContainerProps) => {
  return (
    <div className={`fixed bg-[#00000070] z-[9999999] w-full h-screen top-0 left-0 flex items-center justify-center`}>
        {children}
    </div>
  )
}

export default ModalContainer