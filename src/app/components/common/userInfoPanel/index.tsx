import React from 'react'
import { useCommonStore } from '../../../../store/commonStore'
import { BiLogOut } from "react-icons/bi";
import { cookies } from 'next/headers';

const UserInfoPanel = () => {
    const {user, isLoggedIn, setIsLoggedIn, setAccessToken, setUser}:any = useCommonStore();

    const logout = async () => {
        setIsLoggedIn(false)
        setAccessToken(null)
        setUser(null)
        const data = await fetch("/api/logout")
    }
  return (
    <>
        <div className="flex items-center gap-[10px]">
            <p>{user.firstName} {user.lastName}</p>
            <button type='button' onClick={logout} className='cursor-pointer text-[30px]'><BiLogOut /></button>
        </div>
    </>
  )
}

export default UserInfoPanel