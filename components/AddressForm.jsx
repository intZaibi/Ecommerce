import React, { useState } from "react";

export default function AddressForm({ handleCancel, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    telephone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!formData.name || !formData.address || !formData.city) {
      alert("Please fill in the required fields.");
      return;
    }

    onSubmit(Object.values(formData));
  };

  return (
    <div className="w-full h-full lg:px-48 z-10 absolute top-0 py-10 left-0 bg-[#0000008a]">
      <div className="w-full h-full overflow-y-scroll scrollbar border border-gray-300 rounded-xl lg:w-full md:max-w-full mx-auto shadow-[0_8px_20px_#080f340f] bg-white">
        <div className="p-6">
          <form onSubmit={handleSubmit} className="flex px-6 flex-col w-full">
            <h1 className="mb-10 font-bold text-lg">Add Address</h1>
            <label className="block mb-6">
              <span className="text-gray-700">Your name</span>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm py-2 focus:outline-[#00cc88]"
                placeholder="Joe Bloggs"
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Address line</span>
              <input
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm py-2 focus:outline-[#00cc88]"
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">City</span>
              <input
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm py-2 focus:outline-[#00cc88]"
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">State/Province</span>
              <input
                name="state"
                type="text"
                value={formData.state}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm py-2 focus:outline-[#00cc88]"
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Country</span>
              <input
                name="country"
                type="text"
                value={formData.country}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm py-2 focus:outline-[#00cc88]"
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Zip/Postal code</span>
              <input
                name="zip"
                type="text"
                value={formData.zip}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm py-2 focus:outline-[#00cc88]"
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Phone</span>
              <input
                name="telephone"
                type="text"
                value={formData.telephone}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm py-2 focus:outline-[#00cc88]"
              />
            </label>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={handleCancel}
                className=" h-10 px-5 bg-red-500 rounded-lg transition-colors duration-150 text-white focus:shadow-outline hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className=" h-10 px-5 bg-[#00cc88] rounded-lg transition-colors duration-150 text-white focus:shadow-outline hover:bg-[#00cc88ca]"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
