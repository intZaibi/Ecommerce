import React from "react";
import Link from "next/link";
import { ClipboardDocumentCheckIcon, CubeIcon, HomeIcon, UsersIcon } from "@heroicons/react/24/outline";

function Sidebar() {
  return (
    <div className="sidebar-container inline">
      <div className="sidebar-wrapper h-screen w-[20vw] fixed left-0 shadow-[0_8px_20px_#080f342f] bg-white flex items-center flex-col z-10">
      <div id="logo" className="mt-5 px-4 flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <span id="arrow" className="sr-only">Your Company</span>
            <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="w-auto h-10" />
          </Link>
        </div>
        <div className="mt-12">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>
        <hr className="border mt-5 mb-16 w-full"/>
        <div className="p-1 ">
          <div className="flex h-5 mx-7 cursor-pointer">
          <HomeIcon className="mx-5"/>
            <Link className="font-bold" href='/admin'>Dashboard</Link>
          </div>
          <div className="flex h-5 m-7 cursor-pointer ">
          <UsersIcon className="mx-5"/>
            <Link className="font-bold" href='/admin/users'>Users</Link>
          </div>
          <div className="flex h-5 m-7 cursor-pointer ">
          <ClipboardDocumentCheckIcon className="mx-5"/>
            <Link className="font-bold" href='/admin/orders'>Orders</Link>
          </div>
          <div className="flex h-5 m-7 cursor-pointer ">
          <CubeIcon className="mx-5" />
            <Link className="font-bold" href='/admin/products'>Products</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
