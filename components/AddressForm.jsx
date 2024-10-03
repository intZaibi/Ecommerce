import React from "react";

export default function AddressForm() {
  return (
    <div className="w-full h-full lg:px-48 z-10 absolute top-0 py-10 left-0 bg-[#0000008a]">
    <div className="w-full h-full overflow-y-scroll scrollbar border border-gray-300 rounded-xl lg:w-full md:max-w-full mx-auto shadow-[0_8px_20px_#080f340f] bg-white ">
      <div className="p-6">
        <form method="" action="" encType="" className="flex px-6 flex-col w-full">
        <h1 className="mb-10 font-bold text-lg">Add Address</h1>
          <label className="block mb-6">
            <span className="text-gray-700">Your name</span>
            <input
              name="name"
              type="text"
              className="
                block
                w-full
                mt-1
                border-gray-300
                rounded-md
                shadow-sm
                py-2
                focus:outline-[#00cc88]
              "
              placeholder="Joe Bloggs"
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Address line </span>
            <input
              name="address"
              type="text"
              className="
                block
                w-full
                mt-1
                border-gray-300
                rounded-md
                shadow-sm
                py-2
                focus:outline-[#00cc88]
              "
              placeholder=""
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">City</span>
            <input
              name="city"
              type="text"
              className="
                block
                w-full
                mt-1
                border-gray-300
                rounded-md
                shadow-sm
                py-2
                focus:outline-[#00cc88]
              "
              placeholder=""
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">State/Province</span>
            <input
              name="state"
              type="text"
              className="
                block
                w-full
                mt-1
                border-gray-300
                rounded-md
                shadow-sm
                py-2
                focus:outline-[#00cc88]
              "
              placeholder=""
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Country</span>
            <input
              name="country"
              type="text"
              className="
                block
                w-full
                mt-1
                border-gray-300
                rounded-md
                shadow-sm
                py-2
                focus:outline-[#00cc88]
              "
              placeholder=""
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Zip/Postal code</span>
            <input
              name="zip"
              type="text"
              className="
                block
                w-full
                mt-1
                border-gray-300
                rounded-md
                shadow-sm
                py-2
                focus:outline-[#00cc88]
              "
              placeholder=""
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Phone</span>
            <input
              name="telephone"
              type="text"
              className="
                block
                w-full
                mt-1
                border-gray-300
                rounded-md
                shadow-sm
                py-2
                focus:outline-[#00cc88]
              "
              placeholder=""
            />
          </label>
          <div className="mb-6 ml-auto mr-0">
            <button
              type="submit"
              className="
                h-10
                px-5
                bg-[#00cc88]
                rounded-lg
                transition-colors
                duration-150
                text-white
                focus:shadow-outline
                hover:bg-[#00cc88ca]
              "
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
