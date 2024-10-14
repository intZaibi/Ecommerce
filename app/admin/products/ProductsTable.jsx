"use client";
import { Card } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

const TABLE_HEAD = [
  "ProductName",
  "Price",
  "Images",
  "ProductID",
  "Category",
  "Storage",
  "RAM",
  "Color",
  "Actions",
];

export default function ProductTable() {
  const [updating, setUpdating] = useState(false);
  const [products, setProducts] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [image, setImage] = useState();
  const [newProduct, setNewProduct] = useState({
    ProductName: "",
    Price: "",
    ImageURLs: [],
    ProductID: "",
    CategoryID: "",
    Storage: [],
    RAM: [],
    Color: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/Allproducts/admin`,
          { method: 'GET', cache: 'no-store'}
        );
        setProducts(res.data.result);
        console.log(res.data.result);
        toast("Please zoom-out for better table view")
      } catch (err) {
        console.log("Error:", err.response);
      }
    };

    fetchProducts();

    return undefined;
  }, []);

  const handleImageUpload = (e) => {
    const files = e.target.files;
    if (files.length > 1) {
      setImage(files);
    } else {
      setImage(files[0]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(value.split(',').map(item => item.trim()))
    const arrValue = [value];
    if (name === "Storage" || name === "RAM" || name === "Color") {
      setNewProduct({ ...newProduct, [name]: arrValue });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  const handleDeleteProduct = async (productId) => {
    console.log("delete func triggered");
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Allproducts/admin`, {
        data: productId,
        headers: {
          'Cache-Control': 'no-store'
        }
      });

      const fetchProducts = async () => {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/Allproducts/admin`, {cache: 'no-store'}
          );
          setProducts(res.data.result);
        } catch (err) {
          console.log("Error:", err.response);
        }
      };

      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleAddProduct = () => {
    setIsModalOpen(true);
    setNewProduct({
      ProductName: "",
      Price: "",
      ImageURLs: [],
      ProductID: "",
      CategoryID: "",
      Storage: [],
      RAM: [],
      Color: [],
    });
    setEditingProduct(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { ProductName, Price, CategoryID, Storage, RAM, Color } = newProduct;
    let imageURLs = [];

    const uploadImageToCloudinary = async (imageFile) => {
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "EcommerceProducts");

      try {
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/dw7f5p4lf/image/upload`,
          formData
        );
        return res.data.secure_url;
      } catch (error) {
        console.error("Cloudinary upload error:", error);
        throw error;
      }
    };

    try {
      if (image instanceof FileList) {
        for (let i = 0; i < image.length; i++) {
          const imageURL = await uploadImageToCloudinary(image[i]);
          imageURLs.push(imageURL);
        }
      } else if (image instanceof File) {
        const imageURL = await uploadImageToCloudinary(image);
        imageURLs.push(imageURL);
      }

      const formData = {
        ProductName,
        Price,
        ImageURLs: imageURLs,
        CategoryID,
        Storage,
        RAM,
        Color,
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/Allproducts/admin`,
        formData
      );
      if (updating) {
        const fetchProducts = async () => {
          try {
            const res = await axios.get(
              `${process.env.NEXT_PUBLIC_BASE_URL}/api/Allproducts/admin`, {cache: 'no-store'}
            );
            console.log("res.data.result: ", res.data.result)
            setProducts(res.data.result);
          } catch (err) {
            console.log("Error:", err.response);
          }
        };

        fetchProducts();
      } else {
        setProducts((prevProducts) => [...prevProducts, formData]);
      }
    } catch (error) {
      console.error("Error submitting product:", error);
    }

    setIsModalOpen(false);
    setUpdating(false);
    resetForm();
  };

  const resetForm = () => {
    setIsModalOpen(false);
    setNewProduct({
      ProductName: "",
      Price: "",
      ImageURLs: [],
      ProductID: "",
      CategoryID: "",
      Storage: [],
      RAM: [],
      Color: [],
    });
  };

  return (
    <div className="mt-12 bg-white h-4/5 p-4 pb-20 rounded-3xl shadow-[0_8px_20px_#080f342f] relative z-0">
      <input
        type="text"
        className="w-1/3 mb-5 text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-xl outline-[#00cc88]"
        placeholder="Filter by ProductName or Category..."
        onChange={(e) => setFilterValue(e.target.value.trim())}
      />
      <button
        className="mb-5 ml-4 px-4 py-2 bg-green-500 text-white rounded"
        onClick={handleAddProduct}
      >
        Add New Product
      </button>

      <Card className="w-full h-full overflow-y-scroll scrollbar ">
        <table className="w-full min-w-max table-auto text-left">
          <thead className="sticky top-0 bg-white z-10">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 px-8 py-4"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products
              .filter((item) => {
                const CategoryName = (CategoryID) => {
                  switch (CategoryID) {
                    case "m":
                      return 1;
                    case "a":
                      return 2;
                    case "c":
                      return 3;
                    case "s":
                      return 4;
                    case "t":
                      return 5;
                    case "s":
                      return 6;
                    default:
                      return "Unknown CategoryID";
                  }
                };
                return filterValue.toLowerCase() === ""
                  ? true
                  : item.ProductName.toLowerCase().includes(
                      filterValue.toLowerCase()
                    ) ||
                      item.CategoryID.toString()
                        .toLowerCase()
                        .includes(
                          CategoryName(filterValue.toLowerCase().at(0))
                        );
              })
              .map(
                (
                  {
                    ProductName,
                    Price,
                    ImageURLs,
                    ProductID,
                    CategoryID,
                    Storage,
                    RAM,
                    Color,
                  },
                  index
                ) => {
                  const CategoryName = (CategoryID) => {
                    switch (CategoryID) {
                      case 1:
                        return "Main";
                      case 2:
                        return "Accessories";
                      case 3:
                        return "Computers";
                      case 4:
                        return "Smartphones";
                      case 5:
                        return "Tablets";
                      case 6:
                        return "Screens";
                      default:
                        return "Unknown CategoryID";
                    }
                  };
                  return (
                    <tr key={ProductID}>
                      <td className="p-4 lg:w-3">{ProductName}</td>
                      <td className="p-4 text-center">${Price}</td>
                      <td className="p-4 flex gap-1">
                        {ImageURLs?.length > 0 ? (
                          ImageURLs.map((img, i) => (
                            <img
                              key={`${ProductID}-${i}`}
                              src={
                                typeof img === "string"
                                  ? img
                                  : URL.createObjectURL(img)
                              }
                              alt={`Product image ${i}`}
                              className="w-16 cursor-pointer h-16 object-cover"
                            />
                          ))
                        ) : (
                          <span>No ImageURL</span>
                        )}
                      </td>
                      <td className="p-4 text-center lg:w-3">{ProductID}</td>
                      <td className="p-4 text-center">
                        {CategoryName(CategoryID)}
                      </td>
                      <td className="p-4 text-center">{Storage.toString()}</td>
                      <td className="p-4 text-center">{RAM.toString()}</td>
                      <td className="p-4 text-center">{Color.toString()}</td>
                      <td className="space-x-2">
                        <button
                          onClick={() => {
                            setNewProduct({
                              ProductName,
                              Price,
                              ImageURLs,
                              ProductID,
                              CategoryID,
                              Storage,
                              RAM,
                              Color,
                            });
                            setEditingProduct({ ProductID });
                            setIsModalOpen(true);
                            setUpdating(true);
                          }}
                          className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(ProductID)}
                          className="px-4 py-2 bg-red-500 text-white rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </table>

        {/* Modal for adding/updating products */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-10">
            <form
              className="bg-white p-6 rounded shadow-lg z-10"
              onSubmit={handleSubmit}
            >
              <h2 className="text-lg font-bold mb-4">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </h2>
              <label className="block mb-2">
                ProductName:
                <input
                  type="text"
                  name="ProductName"
                  value={newProduct.ProductName}
                  onChange={handleInputChange}
                  className="ml-2 p-1 border border-gray-300 rounded w-full"
                />
              </label>
              <label className="block mb-2">
                Price:
                <input
                  type="number"
                  name="Price"
                  value={newProduct.Price}
                  onChange={handleInputChange}
                  className="ml-2 p-1 border border-gray-300 rounded w-full"
                />
              </label>
              <label className="block mb-2">
                ImageURLs:
                <input
                  type="file"
                  name="ImageURL"
                  onChange={handleImageUpload}
                  multiple
                  className="ml-2 p-1 border border-gray-300 rounded w-full"
                />
              </label>
              <label className="block mb-2">
                Storage (comma-separated):
                <input
                  type="text"
                  name="Storage"
                  value={newProduct.Storage.join(", ")}
                  onChange={handleInputChange}
                  className="ml-2 p-1 border border-gray-300 rounded w-full"
                />
              </label>
              <label className="block mb-2">
                RAM (comma-separated):
                <input
                  type="text"
                  name="RAM"
                  value={newProduct.RAM.join(", ")}
                  onChange={handleInputChange}
                  className="ml-2 p-1 border border-gray-300 rounded w-full"
                />
              </label>
              <label className="block mb-2">
                Color (comma-separated):
                <input
                  type="text"
                  name="Color"
                  value={newProduct.Color.join(", ")}
                  onChange={handleInputChange}
                  className="ml-2 p-1 border border-gray-300 rounded w-full"
                />
              </label>
              <label className="block">
                CategoryID:
                <select
                  name="CategoryID"
                  value={newProduct.CategoryID}
                  onChange={handleInputChange}
                  className="ml-2 p-1 border border-gray-300 rounded w-full"
                >
                  <option value="">Select a CategoryID</option>
                  <option value={1}>Main</option>
                  <option value={2}>Accessories</option>
                  <option value={3}>Computers</option>
                  <option value={4}>Smartphones</option>
                  <option value={5}>Tablets</option>
                  <option value={6}>Screens</option>
                </select>
              </label>

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="mr-4 px-4 py-2 bg-green-500 text-white rounded"
                >
                  {editingProduct ? "Save Changes" : "Save"}
                </button>
                <button
                  onClick={resetForm}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </Card>
    </div>
  );
}
