import React, { useState } from 'react';
import { Scan, PackageSearch } from 'lucide-react';
import type { CartItem } from '../App';

type ProductOutProps = {
  onAddToCart: (item: CartItem) => void;
  inputMethod: 'name' | 'barcode';
};

function ProductOut({ onAddToCart, inputMethod }: ProductOutProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [quantity, setQuantity] = useState('');

  // Mock product data - in a real app, this would come from your backend
  const mockProduct = {
    id: '1',
    name: 'Sample Product',
    price: 9.99,
    inStock: 100,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddToCart({
      id: mockProduct.id,
      name: mockProduct.name,
      quantity: Number(quantity),
      price: mockProduct.price,
    });
    setSearchTerm('');
    setQuantity('');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        {inputMethod === 'name' ? (
          <>
            <PackageSearch className="w-6 h-6 text-indigo-600" />
            Search Product by Name
          </>
        ) : (
          <>
            <Scan className="w-6 h-6 text-indigo-600" />
            Scan Product Barcode
          </>
        )}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            {inputMethod === 'name' ? 'Product Name' : 'Barcode'}
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {searchTerm && (
          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h3 className="font-semibold text-lg text-gray-800">{mockProduct.name}</h3>
            <p className="text-gray-600">Price: ${mockProduct.price}</p>
            <p className="text-gray-600">In Stock: {mockProduct.inStock}</p>
          </div>
        )}

        {searchTerm && (
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
              min="1"
              max={mockProduct.inStock}
            />
          </div>
        )}

        {searchTerm && quantity && (
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Add to Cart
          </button>
        )}
      </form>
    </div>
  );
}

export default ProductOut;