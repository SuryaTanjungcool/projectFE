import React, { useState } from 'react';
import Coklat from "../../assets/png/Coklat.png";
import Kiwi from "../../assets/png/Kiwi.png";
import Oreo from "../../assets/png/Oreo.png";
import Raspberry from "../../assets/png/Raspberry.png";
import PrimaryButton from '../Shared/PrimaryButton';
import Leaf from "../../assets/png/Leaf.png";
import Dessert1 from "../../assets/png/pudding.png";
import Dessert2 from "../../assets/png/DessertRedvelvet.png";
import Dessert3 from "../../assets/png/DessertOreo.png";
import Dessert4 from "../../assets/png/cwe.png";

const Banner = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: null,
  });
  const [products, setProducts] = useState([
    { id: 1, name: 'Chocolate Lava Cake', price: '$5.99', image: Dessert1 },
    { id: 2, name: 'Strawberry Cheesecake', price: '$6.49', image: Dessert2 },
    { id: 3, name: 'Kiwi Panna Cotta', price: '$5.49', image: Dessert3 },
    { id: 4, name: 'Raspberry Tart', price: '$6.99', image: Dessert4 }
  ]);

  // Function to handle product click
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Function to handle add product modal toggle
  const toggleAddProductModal = () => {
    setShowAddProductModal(!showAddProductModal);
  };

  // Handle input changes for the new product
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle file upload and set image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProduct({
        ...newProduct,
        image: URL.createObjectURL(file),
      });
    }
  };

  // Handle adding the new product
  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.image) {
      const newProductItem = {
        id: products.length + 1,
        name: newProduct.name,
        price: newProduct.price,
        image: newProduct.image,
      };
      setProducts([...products, newProductItem]);
      setShowAddProductModal(false);
      setNewProduct({ name: '', price: '', image: null }); // Reset input fields
    } else {
      alert("Please fill all fields");
    }
  };

  // Function to handle product deletion
  const handleDeleteProduct = (productId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      setProducts(products.filter((product) => product.id !== productId));
    }
  };

  return (
    <>
      <div className="container py-14 relative bg-gray-900 text-white">
        <div className='relative z-10'>
          {/* Title Section */}
          <h1 data-aos="fade-up" data-aos-delay="300" className="py-8 tracking-wider text-2xl font-semibold text-center">
            Shop Our Delicious Desserts
          </h1>

          {/* Introduction Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
            <div data-aos="fade-up" data-aos-delay="300">
              <p className="text-base leading-relaxed">
                Indulge in our mouth-watering desserts, carefully crafted to satisfy your sweet cravings. Our online shop offers a variety of treats made with the finest ingredients.
              </p>
            </div>

            <div>
              <p className="text-base leading-relaxed">
                From creamy chocolate lava cakes to refreshing fruit tarts, each of our desserts is designed to offer a perfect balance of flavor and texture. Explore the full menu below!
              </p>
            </div>
          </div>

          {/* Button to Add Product */}
          <div className="flex justify-center mt-4">
            <button
              onClick={toggleAddProductModal}
              className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600"
            >
              Tambah Produk
            </button>
          </div>

          {/* Dessert Products Section */}
          <h2 data-aos="fade-up" className="text-xl font-semibold text-center my-8">
            Bestselling Desserts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className={`p-4 bg-white shadow-lg rounded-lg text-center ${selectedProduct?.id === product.id ? 'border-4 border-primary' : ''}`}
                data-aos="fade-up"
                data-aos-delay={`${100 * product.id}`}
              >
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
                <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
                <p className="text-primary font-bold">{product.price}</p>
                <button
                  onClick={() => handleProductClick(product)}
                  className="bg-primary text-white p-2 rounded-lg mt-2 hover:bg-blue-600"
                >
                  View Product
                </button>
                {/* Delete Button */}
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="bg-red-500 text-white p-2 rounded-lg mt-2 hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* Button Section */}
          <div className="flex justify-center mt-10 sm:mt-14">
            <PrimaryButton />
          </div>

          {/* Decorative Images */}
          <div className="absolute top-5 left-16" style={{ zIndex: -1 }}>
            <img src={Leaf} alt="Leaf decoration" className="max-w-[160px]" />
          </div>
          <div className="absolute bottom-16 left-4 sm:bottom-4 sm:left-8" style={{ zIndex: -1 }}>
            <img src={Coklat} alt="Coklat" className="max-w-[180px]" />
          </div>
          <div className="absolute top-4 right-16 sm:top-10 sm:right-20" style={{ zIndex: -1 }}>
            <img src={Raspberry} alt="Raspberry" className="max-w-[150px]" />
          </div>
          <div className="absolute bottom-4 right-8 sm:bottom-8 sm:right-12" style={{ zIndex: -1 }}>
            <img src={Kiwi} alt="Kiwi" className="max-w-[150px]" />
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-1/3 -translate-x-1/2" style={{ zIndex: -1 }}>
            <img src={Oreo} alt="Oreo" className="max-w-[120px]" />
          </div>
        </div>
      </div>

      {/* Modal for Adding Product */}
      {showAddProductModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white p-6 rounded-lg w-80 text-center">
            <h3 className="text-2xl font-semibold mb-4">Tambah Produk Baru</h3>
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              placeholder="Nama Produk"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              placeholder="Harga Produk"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <button
              onClick={handleAddProduct}
              className="mt-4 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
            >
              Save Product
            </button>
            <button
              onClick={toggleAddProductModal}
              className="mt-2 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal or Product Details (optional, can be expanded as a modal) */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white p-6 rounded-lg w-80 text-center">
            <h3 className="text-2xl font-semibold">{selectedProduct.name}</h3>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-40 object-cover rounded-md my-4" />
            <p className="text-primary font-bold">{selectedProduct.price}</p>
            <button
              onClick={() => setSelectedProduct(null)}
              className="mt-4 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
