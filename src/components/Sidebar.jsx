import React from "react";
import { sidebar_det } from "../navi";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";
const linkclasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral rounded-sm text-base'
function Sidebar() {
  return (
    <div className='bg-neutral-900 w-60 p-3 flex flex-col text-white'>
        <div className='flex gap-2 px-1 py-3'>
            <img className="w-[15%] ml-2" src="/static/images/favicon-32x32.png" alt="" />
            <span className='px-2 text-xl text-neutral-100'>PEARL CREST</span>
        </div>
        <div className='flex-1 py-8 flex flex-col gap-0.5'>
            {sidebar_det.map(ele => (
                <Sidebarlink key={ele.key} ele={ele}/>
            ))}
        </div>
        <div className="flex flex-col gap-0.5 border-t border-neutral-700">       
            <div className={classNames('text-red-500 cursor-pointer', linkclasses)}>
                <span className="text-xl">
                    <HiOutlineLogout />
                </span>
                Logout
            </div>
        </div>
    </div>
  );
}

function Sidebarlink({ele}){
    const {pathname} = useLocation();
    return(
        <Link to={ele.path} className={classNames(pathname === ele.path ? 'text-white' : 'text-neutral-400', linkclasses)}>
            <ele.icon />
            {ele.label}
        </Link>
    )
}
export default Sidebar;
