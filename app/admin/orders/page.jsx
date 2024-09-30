import React from 'react'
import OrdersTable from "@/app/admin/orders/OrdersTable"
import Sidebar from "@/components/Sidebar"

export default function Orders() {
  return (
    <div className='pl-[22vw] pr-8 overflow-hidden h-screen'>
      <Sidebar/>
      <h1 className='text-2xl font-bold text-center pr-10 pt-10'>Orders</h1>
      <div className="h-screen">
        <OrdersTable />
      </div>
    </div>
  )
}
