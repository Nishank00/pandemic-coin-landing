import React from 'react'
import { useCommonStore } from '../../../../store/commonStore'
import { BiLogOut } from "react-icons/bi";

const UserInfoPanel = () => {
    const {user, isLoggedIn, setIsLoggedIn, setAccessToken, setUser}:any = useCommonStore();

    const logout = () => {
        setIsLoggedIn(false)
        setAccessToken(null)
        setUser(null)

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