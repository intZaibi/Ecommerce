import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Orders({ data }) {
  const [productDetails, setProductDetails] = useState([]);

  const getProductDetails = async (descriptions) => {
    try {
      const response = await axios.post("http://localhost:3000/api/Allproducts/client", {
        descriptions
      });
      setProductDetails((prevDetails) => [...prevDetails, response.data.rows]);
    } catch (error) {
      console.error("Error fetching product details", error);
    }
  };

  useEffect(() => {
    if (data && data.length > 0) {
      data.forEach((order) => {
        const descriptions = order[1].map((item) => item.description);
        getProductDetails(descriptions);
      });
    }
  }, [data]);

  return (
    <div className="md:px-10 lg:px-10 max-w-full">
      <div className="mx-auto px-8 md:px-0 lg:py-0 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <h1 className="font-semibold my-10 text-xl">Orders</h1>
        {data.length > 0 ? (
          <div className="flex flex-col px-6">
            {data.map((order, index) => {
              const totalAmount = order[0] / 100;
              const products = order[1];
              const quantity = products.map((item) => item.quantity);
              const currentProductDetails = productDetails[index];

              return (
                <div key={index} className="mb-8">
                  <h2 className="text-lg text-center font-bold mb-4">Order {index + 1}</h2>
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                      <thead className="bg-gray-800 text-white">
                        <tr>
                          <th className="py-3 px-6 text-left">Product Name</th>
                          <th className="py-3 px-6 text-left">Quantity</th>
                          <th className="py-3 px-6 text-left">Price</th>
                          <th className="py-3 px-6 text-left">Specification</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        {currentProductDetails && currentProductDetails.map((item, i) => {
                          let statusColor = "";
                          switch (order[2]) {
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
                            <tr key={i} className="border-b border-gray-200">
                              <td className="py-3 px-6">
                                <span className="flex items-center">
                                  <img className="w-16 cursor-pointer mr-2 h-16 object-cover" src={`${item.ImageURLs[0]}`} alt="Product image" />
                                  {item.ProductName}
                                </span>
                              </td>
                              <td className="py-3 px-6">
                                {quantity[i]}
                              </td>
                              <td className="py-3 px-6">
                                RS: {item.Price}
                              </td>
                              <td className={`${statusColor} py-3 px-6`}>
                                {order[2] || "N/A"}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="text-end mr-4 mt-4">
                    <span className="text-lg font-semibold">Total Price: RS: {totalAmount}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex py-4 bg-[#FFFFFF] shadow-[0_0_10px_#080f340f] flex-col items-center rounded-lg">
            <h1 className="mb-4 font-semibold">No Orders yet</h1>
            <p>Go to the store to place an order.</p>
          </div>
        )}
      </div>
    </div>
  );
}
