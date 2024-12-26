import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [dessertData, setDessertData] = useState([
    {
      id: 1,
      name: 'Kue Pernikahan',
      price: 250000,
      sold: 150,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Kue Ulang Tahun',
      price: 150000,
      sold: 200,
      rating: 4.0,
    },
    {
      id: 3,
      name: 'Kue Kasih Sayang',
      price: 180000,
      sold: 120,
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Kue Romantis',
      price: 220000,
      sold: 180,
      rating: 4.3,
    },
  ]);

  // Menghitung total penjualan dan kue terjual
  const totalSales = dessertData.reduce((total, dessert) => total + dessert.sold * dessert.price, 0);
  const totalDessertsSold = dessertData.reduce((total, dessert) => total + dessert.sold, 0);
  const averageRating = (dessertData.reduce((total, dessert) => total + dessert.rating, 0) / dessertData.length).toFixed(1);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">Info seputar Admin Toko Kue</h1>

        {/* Card Summary */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
          <div className="bg-white dark:bg-gray-900 dark:text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-center">Total Penjualan</h3>
            <p className="text-lg font-bold text-primary text-center mt-3">Rp {totalSales.toLocaleString()}</p>
          </div>

          <div className="bg-white dark:bg-gray-900 dark:text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-center">Total Kue Terjual</h3>
            <p className="text-lg font-bold text-primary text-center mt-3">{totalDessertsSold} kue</p>
          </div>

          <div className="bg-white dark:bg-gray-900 dark:text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-center">Rata-Rata Rating</h3>
            <p className="text-lg font-bold text-primary text-center mt-3">{averageRating} / 5</p>
          </div>
        </div>

        {/* Daftar Kue */}
        <div className="bg-white dark:bg-gray-900 dark:text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-6">Daftar Kue</h3>
          <table className="min-w-full table-auto">
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-3 px-4 text-left">Nama Kue</th>
                <th className="py-3 px-4 text-left">Harga</th>
                <th className="py-3 px-4 text-left">Terjual</th>
                <th className="py-3 px-4 text-left">Rating</th>
                <th className="py-3 px-4 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dessertData.map((dessert) => (
                <tr key={dessert.id} className="border-b">
                  <td className="py-3 px-4">{dessert.name}</td>
                  <td className="py-3 px-4">Rp {dessert.price.toLocaleString()}</td>
                  <td className="py-3 px-4">{dessert.sold} kue</td>
                  <td className="py-3 px-4">{dessert.rating} / 5</td>
                  <td className="py-3 px-4">
                    <Link to={`/edit/${dessert.id}`}>
                      <button
                        className="bg-yellow-500 text-white py-1 px-4 rounded-md hover:bg-yellow-400 focus:outline-none"
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
