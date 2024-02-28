import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
export default function Layout(){
    return (
        <div className="flex flex-row bg-neutral-100 h-full w-full">
            <Sidebar />
            <div className="flex-1">
                <Header className=""/>
                <div>{<Outlet />}</div>
            </div>
        </div>
    )
}