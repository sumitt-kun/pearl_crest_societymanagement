import React from 'react'
import { Outlet } from 'react-router-dom'
import Addevents from './Addevents'
import Sidebar from './Sidebar'
export default function Layout(){
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen">
            <Sidebar />
            <div className='p-4'>
                <div>header</div>
                <div>{<Outlet />}</div>
            </div>
        </div>
    )
}