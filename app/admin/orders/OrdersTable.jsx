"use client";
import { Card, Typography } from '@material-tailwind/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const TABLE_HEAD = ["Order ID", "Customer Email", "Date & Time", "Product(s) Name", "Quantity", "amount_total", "Status", ""];

export default function DefaultTable() {
  const [filterValue, setFilterValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [editOrder, setEditOrder] = useState(null); 
  const [newStatus, setNewStatus] = useState("");
  
  const [orders, setOrders] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/adminOrders`, {cache: 'no-store'});
      setOrders(res.data.orders);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
      fetchData();
  }, []);
  
  const handleEditClick = (order) => {
    setEditOrder(order); 
    setNewStatus(order.Status); 
    setIsModalOpen(true); 
  };

  const handleSave = async () => {
    try {
      const response = await axios.post('/api/adminOrders', {
        id: editOrder.id,
        Status: newStatus,
      });
  
      if (response.status === 200) {
        const updatedOrders = orders.map((order) =>
          order.id === editOrder.id ? { ...order, Status: newStatus } : order
        );
        setOrders(updatedOrders);
        setIsModalOpen(false);
        toast.success("Order status updated successfully!"); 
      }
    } catch (error) {
      console.error("Failed to update order status:", error);
      toast.error("Failed to update order status.");
    }
  };
  

  return (
    <div className="mt-12 bg-white  h-4/5 p-4 pb-20 rounded-3xl shadow-[0_8px_20px_#080f342f]">
      <input
        name="filter"
        type="text"
        className="w-1/3 mb-5 text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-xl outline-[#00cc88]"
        placeholder="Filter..."
        onChange={(e) => setFilterValue(e.target.value.trim())}
      />

      <Card className="w-full h-full overflow-y-scroll scrollbar ">
        <table className="w-full min-w-max table-auto text-left">
          <thead className="sticky top-0 bg-white z-10">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 px-8 py-4"
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
            {orders
              ?.filter((item) => {
                return filterValue.toLowerCase() === ""
                  ? true
                  : Object.values(item).toString().toLowerCase().includes(filterValue.toLowerCase());
              })
              ?.map(({ id, customer_email, created_at, product_data, amount_total, Status }, index) => {
                const isLast = index === orders.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                const productsNames = product_data?.map((item) => {
                  return item.description
                });
                const dateTime = created_at?.toString().split("T")[1].split(".")[0].substr(0, created_at?.toString().split("T")[1].split(".")[0].length-3) + ", " + created_at?.toString().split("T")[0]
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
                      {productsNames.map((element, index) => (
                        <Typography
                          key={index}
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-center"
                        >
                          {element}
                        </Typography>
                      ))}
                    </td>
                    <td className={classes}>
                    {productQuantity.map((element, index) => (
                        <Typography
                          key={index}
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-center"
                        >
                          {element}
                        </Typography>
                      ))}
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
                    <td className={classes}>
                      <Typography
                        as="button"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                        onClick={() => handleEditClick({ id, Status })}
                      >
                        Edit
                      </Typography>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-lg font-bold mb-4">Edit Status</h2>
              <label className="block mb-2">
                New Status:
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="ml-2 p-1 border border-gray-300 rounded"
                >
                  <option value="Completed">Completed</option>
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Processing">Processing</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </label>
              <div className="flex justify-end">
                <button
                  className="mr-4 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
