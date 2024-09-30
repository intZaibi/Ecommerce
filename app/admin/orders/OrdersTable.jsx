"use client";
import { Card, Typography } from '@material-tailwind/react';
import { useState } from 'react';

const TABLE_HEAD = ["OrderID", "CustomerID", "Date & Time", "Product(s)ID", "TotalCost", "Status", ""];

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

export default function DefaultTable() {
  const [filterValue, setFilterValue] = useState("");
  const [rows, setRows] = useState(TABLE_ROWS); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [editOrder, setEditOrder] = useState(null); 
  const [newStatus, setNewStatus] = useState(""); 

  const handleEditClick = (order) => {
    setEditOrder(order); 
    setNewStatus(order.Status); 
    setIsModalOpen(true); 
  };

  const handleSave = () => {
    const updatedRows = rows.map((row) =>
      row.OrderID === editOrder.OrderID ? { ...row, Status: newStatus } : row
    );
    setRows(updatedRows); 
    setIsModalOpen(false);
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
            {rows
              .filter((item) => {
                return filterValue.toLowerCase() === ""
                  ? true
                  : Object.values(item).toString().toLowerCase().includes(filterValue.toLowerCase());
              })
              .map(({ OrderID, CustomerID, "Date & Time": DateTime, "Product(s)ID": ProductIDs, TotalCost, Status }, index) => {
                const isLast = index === rows.length - 1;
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
                    <td className={classes}>
                      <Typography
                        as="button"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                        onClick={() => handleEditClick({ OrderID, Status })}
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
