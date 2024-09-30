import React from 'react'
import ProductsTable from "@/app/admin/products/ProductsTable"
import Sidebar from "@/components/Sidebar"

export default function Products() {
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
