"use client"
import { Card, Typography } from '@material-tailwind/react';
import { useRef, useEffect, useState } from 'react';
 
const TABLE_HEAD = ["Name", "Email", "Image", "Role"];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    email: "xyz@gmail.com",
    img: "/person-1.jpg",
  },
  {
    name: "Alexa Liras",
    email: "abc@gmail.com",
    img: "/person-1.jpg",
  },
  {
    name: "Laurent Perrier",
    email: "xyz@gmail.com",
    img: "/person-1.jpg",
  },
  {
    name: "Michael Levi",
    email: "xyz@gmail.com",
    img: "/person-1.jpg",
  },
  {
    name: "Richard Gran",
    email: "abc@gmail.com",
    img: "/person-1.jpg",
  },
  {
    name: "Richard Gran",
    email: "abc@gmail.com",
    img: "/person-1.jpg",
  },
  {
    name: "Richard Gran",
    email: "abc@gmail.com",
    img: "/person-1.jpg",
  },
  {
    name: "Richard Gran",
    email: "abc@gmail.com",
    img: "/person-1.jpg",
  },
  {
    name: "Richard Gran",
    email: "abc@gmail.com",
    img: "/person-1.jpg",
  },
  {
    name: "Richard Gran",
    email: "abc@gmail.com",
    img: "/person-1.jpg",
  },
  {
    name: "Richard Gran",
    email: "abc@gmail.com",
    img: "/person-1.jpg",
  },
  {
    name: "Richard Gran",
    email: "abc@gmail.com",
    img: "/person-1.jpg",
  },
  {
    name: "Richard Gran",
    email: "abc@gmail.com",
    img: "/person-1.jpg",
  },
  {
    name: "Richard Gran",
    email: "abc@gmail.com",
    img: "/person-1.jpg",
  },
  {
    name: "Richard Gran",
    email: "abc@gmail.com",
    img: "/person-1.jpg",
  },
  {
    name: "Richard Gran",
    email: "abc@gmail.com",
    img: "/person-1.jpg",
  },
  {
    name: "Richard Gran",
    email: "abc@gmail.com",
    img: "/person-1.jpg",
  },
];



export default function DefaultTable() {
  const [filtervalue, setFiltervalue] = useState("")
  
  return (
    <div className="mt-12 bg-white  h-4/5 p-4 pb-20 rounded-3xl shadow-[0_8px_20px_#080f342f]">
      <input 
      name="username" 
      type="text" 
      className="w-1/3 mb-5 text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-xl outline-[#00cc88]" 
      placeholder="Filter by email..." 
      onChange={(e) => {setFiltervalue(e.target.value.trim())}}
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
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.filter((item) => {
                return filtervalue.toLowerCase() === ""
                  ? true
                  : Object.values(item).toString().toLowerCase().includes(filtervalue.toLowerCase());
              }).map(({ name, email, img }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
  
              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <img src={img} alt="" width={100} height={100} className='w-12 h-12 ml-4' />
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium pl-4"
                    >
                      User
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}