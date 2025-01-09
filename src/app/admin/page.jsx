"use client";
import React from 'react';

const Page = () => {
  async function handleSubmit(e){
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const res= await fetch("http://localhost:5000/products", {
        method: "POST",
        body: data,
    })
    const newProduct = await res.json().data || {}
    console.log(newProduct);
    
  }

  return (
    <>
      <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">
          Product Details Form
        </h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter product name"
              className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-4 focus:ring-blue-300 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="category">
              Category
            </label>
            <input
              id="category"
              name="category"
              type="text"
              placeholder="Enter product category"
              className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-4 focus:ring-blue-300 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="price">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              placeholder="Enter product price"
              className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-4 focus:ring-blue-300 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter product description"
              className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-4 focus:ring-blue-300 focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="image">
              Image URL
            </label>
            <input
              id="image"
              name="image"
              type="file"
              className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-4 focus:ring-blue-300 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="stock">
              Stock
            </label>
            <input
              id="stock"
              name="stock"
              type="number"
              placeholder="Enter stock quantity"
              className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-4 focus:ring-blue-300 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="rating">
              Rating
            </label>
            <input
              id="rating"
              name="rating"
              type="number"
              step="0.1"
              placeholder="Enter product rating"
              className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-4 focus:ring-blue-300 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Page;
