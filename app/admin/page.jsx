"use client"
import { Card, Typography } from "@material-tailwind/react";
import Sidebar from '@/components/Sidebar'
import React, { useState, useEffect } from 'react'
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";

const TABLE_HEAD = ["OrderID", "CustomerID", "Date & Time", "Product(s)ID", "TotalCost", "Status"];

export default function Dashboard() {

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
    if (!res.ok) router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/admin/auth/signIn`);
  };
  
  useEffect(() => {
    authenticate();
  }, []);



  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/adminOrders`, { method: 'GET', cache: 'no-store' });
      let data = await res.json()
      console.log(data.orders);
      setOrders(data.orders);
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Allproducts/client`, { method: 'GET', cache: 'no-store' });
      data = await response.json()
      setProducts(data.result);
      const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/allUsers`, {method: 'GET', cache: 'no-store'});
      data = await resp.json()
      setUsers(data.users.length);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
      fetchData();
  }, []);

  return (
    <div className=''>
      <Sidebar />
      <div className='pl-[22vw] pr-8 pt-28 pb-8 grid grid-cols-3 grid-rows-3 gap-7 h-screen'>
      {loading ? (
        <div className="col-span-3 flex justify-center items-center h-full">
          <div className="animate-spin h-10 w-10 border-4 border-t-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      ) : (
        <>
        <div id="totalCustomers" className="flex flex-col bg-white shadow-[0_8px_20px_#080f342f] p-4 rounded-2xl min-h-10 min-w-10 col-span-1 row-span-1">
          <h1 className="text-xl font-bold">
            Total Customers
          </h1>
          <p className='mt-3 text-gray-600'>
            {users} | registered users
          </p>
          
          <Link href="/admin/users" className='py-2 px-4 self-start mt-4 bg-blue-300 shadow-[0_8px_20px_#080f342a] hover:bg-blue-400 duration-200 rounded-xl text-white'>
            view detail
          </Link>
        </div>
        <div id="totalOrders" className="flex flex-col bg-white shadow-[0_8px_20px_#080f342f] p-4 rounded-2xl min-h-10 min-w-10 col-span-1 row-span-1">
          <h1 className="text-xl font-bold">
            Total Orders
          </h1>
          <p className='mt-3 text-gray-600'>
            {orders.length} | placed orders
          </p>
          
          <Link href="/admin/orders" className='py-2 px-4 self-start mt-4 bg-blue-300 shadow-[0_8px_20px_#080f342a] hover:bg-blue-400 duration-200 rounded-xl text-white'>
            view detail
          </Link>
        </div>
        <div id="totalSales" className="flex flex-col bg-white shadow-[0_8px_20px_#080f342f] p-4 rounded-2xl min-h-10 min-w-10 col-span-1 row-span-3">
          <h1 className="text-xl font-bold">
            Total Sales
          </h1>
          <p className='mt-3 text-gray-600'>
            {((orders.reduce((acc, order) => acc + parseFloat(order.amount_total), 0))/100).toFixed(2)} | total revenue
          </p>
          
        </div>
        <div id="Sales" className="flex flex-col bg-white shadow-[0_8px_20px_#080f342f] p-4 rounded-2xl min-h-10 min-w-10 col-span-2 row-span-2">
          <h1 className="text-xl font-bold">
            Sales
          </h1>
          <Card className="w-full h-full overflow-x-hidden overflow-y-scroll scrollbar ">
        <table className="w-full min-w-max table-auto text-left">
          <thead className="sticky top-0 bg-white z-10">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 px-4 py-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map(({ id, customer_email, created_at, product_data, amount_total, Status }, index) => {
                const isLast = index === orders.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                const productsNames = product_data?.map((item) => {
                  return item.description
                });
                const dateTime = created_at.toString().split("T")[1].split(".")[0].substr(0, created_at.toString().split("T")[1].split(".")[0].length-3) + ", " + created_at.toString().split("T")[0]
                const productQuantity = product_data?.map((item) => {
                  return item.quantity
                });

                let statusColor = "";
                switch (Status) {
                  case "Completed":
                    statusColor = "text-[#00cc88]";
                    break;
                  case "Pending":
                    statusColor = "text-yellow-700";
                    break;
                  case "Shipped":
                    statusColor = "text-blue-700";
                    break;
                  case "Processing":
                    statusColor = "text-orange-700";
                    break;
                  case "Cancelled":
                    statusColor = "text-red-700";
                    break;
                  default:
                    statusColor = "text-gray-700";
                }

                return (
                  <tr key={id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {id}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {customer_email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {dateTime}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {productsNames.map((element) => {
                          const id = products.find((item) => item.ProductName === element)?.ProductID;
                          return id;
                        })
                        .filter(id => id !== undefined)
                        .join(", ")
                        }
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {amount_total/100}
                      </Typography>
                    </td>
                    <td className={`${classes} ${statusColor}`}>
                      <Typography
                        variant="small"
                        color="inherit"
                        className="font-normal text-center"
                      >
                        {Status}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        </Card>
          
        </div>
        </>
      )}
      </div>
    </div>
  )
}
