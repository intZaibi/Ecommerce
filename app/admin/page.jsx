"use client"
import { Card, Typography } from "@material-tailwind/react";
import Sidebar from '@/components/Sidebar'
import React from 'react'

const TABLE_HEAD = ["OrderID", "CustomerID", "Date & Time", "Product(s)ID", "TotalCost", "Status"];

const TABLE_ROWS = [
  {
    OrderID: "001",
    CustomerID: "John Michael",
    "Date & Time": "2023-09-15 14:30",
    "Product(s)ID": "P001, P002",
    TotalCost: "$120",
    Status: "Completed"
  },
  {
    OrderID: "002",
    CustomerID: "Alexa Liras",
    "Date & Time": "2023-09-15 15:00",
    "Product(s)ID": "P003",
    TotalCost: "$50",
    Status: "Pending"
  },
  {
    OrderID: "003",
    CustomerID: "Laurent Perrier",
    "Date & Time": "2023-09-15 15:15",
    "Product(s)ID": "P004, P005",
    TotalCost: "$200",
    Status: "Shipped"
  },
  {
    OrderID: "004",
    CustomerID: "Michael Levi",
    "Date & Time": "2023-09-15 15:30",
    "Product(s)ID": "P006",
    TotalCost: "$80",
    Status: "Processing"
  },
  {
    OrderID: "005",
    CustomerID: "Richard Gran",
    "Date & Time": "2023-09-15 16:00",
    "Product(s)ID": "P007",
    TotalCost: "$30",
    Status: "Cancelled"
  },
  {
    OrderID: "006",
    CustomerID: "Richard Gran",
    "Date & Time": "2023-09-15 16:30",
    "Product(s)ID": "P008",
    TotalCost: "$25",
    Status: "Completed"
  },
  {
    OrderID: "007",
    CustomerID: "Richard Gran",
    "Date & Time": "2023-09-15 17:00",
    "Product(s)ID": "P009",
    TotalCost: "$75",
    Status: "Pending"
  },
  {
    OrderID: "008",
    CustomerID: "Richard Gran",
    "Date & Time": "2023-09-15 17:30",
    "Product(s)ID": "P010",
    TotalCost: "$110",
    Status: "Shipped"
  },
  {
    OrderID: "009",
    CustomerID: "Richard Gran",
    "Date & Time": "2023-09-15 18:00",
    "Product(s)ID": "P011",
    TotalCost: "$55",
    Status: "Processing"
  },
  {
    OrderID: "010",
    CustomerID: "Richard Gran",
    "Date & Time": "2023-09-15 18:30",
    "Product(s)ID": "P012",
    TotalCost: "$90",
    Status: "Completed"
  },
  {
    OrderID: "011",
    CustomerID: "Richard Gran",
    "Date & Time": "2023-09-15 19:00",
    "Product(s)ID": "P013",
    TotalCost: "$40",
    Status: "Cancelled"
  },
  {
    OrderID: "012",
    CustomerID: "Richard Gran",
    "Date & Time": "2023-09-15 19:30",
    "Product(s)ID": "P014",
    TotalCost: "$60",
    Status: "Shipped"
  },
  {
    OrderID: "013",
    CustomerID: "Richard Gran",
    "Date & Time": "2023-09-15 20:00",
    "Product(s)ID": "P015",
    TotalCost: "$85",
    Status: "Pending"
  },
  {
    OrderID: "014",
    CustomerID: "Richard Gran",
    "Date & Time": "2023-09-15 20:30",
    "Product(s)ID": "P016",
    TotalCost: "$100",
    Status: "Completed"
  },
  {
    OrderID: "015",
    CustomerID: "Richard Gran",
    "Date & Time": "2023-09-15 21:00",
    "Product(s)ID": "P017",
    TotalCost: "$120",
    Status: "Processing"
  },
  {
    OrderID: "016",
    CustomerID: "Richard Gran",
    "Date & Time": "2023-09-15 21:30",
    "Product(s)ID": "P018",
    TotalCost: "$65",
    Status: "Shipped"
  },
  {
    OrderID: "017",
    CustomerID: "Richard Gran",
    "Date & Time": "2023-09-15 22:00",
    "Product(s)ID": "P019",
    TotalCost: "$150",
    Status: "Completed"
  }
];

export default function Admin() {
  return (
    <div className=''>
      <Sidebar />
      <div className='pl-[22vw] pr-8 pt-28 pb-8 grid grid-cols-3 grid-rows-3 gap-7 h-screen'>
        <div id="totalCustomers" className="flex flex-col bg-white shadow-[0_8px_20px_#080f342f] p-4 rounded-2xl min-h-10 min-w-10 col-span-1 row-span-1">
          <h1 className="text-xl font-bold">
            Total Customers
          </h1>
          <p className='mt-3 text-gray-600'>
            1 | registered users
          </p>
          
          <button className='py-2 px-4 self-start mt-4 bg-blue-300 shadow-[0_8px_20px_#080f342a] hover:bg-blue-400 duration-200 rounded-xl text-white'>
            view detail
          </button>
        </div>
        <div id="totalOrders" className="flex flex-col bg-white shadow-[0_8px_20px_#080f342f] p-4 rounded-2xl min-h-10 min-w-10 col-span-1 row-span-1">
          <h1 className="text-xl font-bold">
            Total Orders
          </h1>
          <p className='mt-3 text-gray-600'>
            1 | placed orders
          </p>
          
          <button className='py-2 px-4 self-start mt-4 bg-blue-300 shadow-[0_8px_20px_#080f342a] hover:bg-blue-400 duration-200 rounded-xl text-white'>
            view detail
          </button>
        </div>
        <div id="totalSales" className="flex flex-col bg-white shadow-[0_8px_20px_#080f342f] p-4 rounded-2xl min-h-10 min-w-10 col-span-1 row-span-3">
          <h1 className="text-xl font-bold">
            Total Sales
          </h1>
          <p className='mt-3 text-gray-600'>
            RS: 12000 | total revenue
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
            {TABLE_ROWS.map(({ OrderID, CustomerID, "Date & Time": DateTime, "Product(s)ID": ProductIDs, TotalCost, Status }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

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
                  <tr key={OrderID}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {OrderID}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {CustomerID}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {DateTime}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {ProductIDs}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {TotalCost}
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

      </div>
    </div>
  )
}
