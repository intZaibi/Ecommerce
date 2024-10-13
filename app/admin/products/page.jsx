"use client"
import React, { useEffect } from 'react';
import ProductsTable from "@/app/admin/products/ProductsTable"
import Sidebar from "@/components/Sidebar"
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function Products() {

  const router = useRouter();
  const token = Cookies.get('admin');
  const authenticate = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/adminLogin`, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // Send token in Authorization header
      }
    });
    if (!res.ok) router.push("./auth/signIn");
  };
  

  useEffect(() => {
    authenticate();
  }, []);


  return (
    <div className='pl-[22vw] pr-8 overflow-hidden h-screen'>
      <Sidebar/>
      <h1 className='text-2xl font-bold text-center pr-10 pt-10'>Products</h1>
      <div className="h-screen">
        <ProductsTable />
      </div>
    </div>
  )
}
