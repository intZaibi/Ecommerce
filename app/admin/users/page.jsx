import Sidebar from '@/components/Sidebar'
import UserTable from './UserTable'
import React from 'react'

export default function Users() {
  return (
    <div className='pl-[22vw] pr-8 overflow-hidden h-screen'>
      <Sidebar/>
      <h1 className='text-2xl font-bold text-center pr-10 pt-10'>Users</h1>
      <div className="h-screen">
        <UserTable />
      </div>
    </div>
  )
}
