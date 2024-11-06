import React, { useState } from 'react';
import { Scan, PackageSearch } from 'lucide-react';

type ProductFormProps = {
  onSubmit: () => void;
  inputMethod: 'name' | 'barcode';
};

function ProductForm({ onSubmit, inputMethod }: ProductFormProps) {
  const [formData, setFormData] = useState({
    identifier: '',
    name: '',
    quantity: '',
    price: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Submitted:', formData);
    onSubmit();
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          {inputMethod === 'name' ? (
            <>
              <PackageSearch className="w-6 h-6 text-indigo-600" />
              Add Product by Name
            </>
          ) : (
            <>
              <Scan className="w-6 h-6 text-indigo-600" />
              Add Product by Barcode
            </>
          )}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {inputMethod === 'barcode' && (
            <div>
              <label htmlFor="barcode" className="block text-sm font-medium text-gray-700 mb-1">
                Barcode
              </label>
              <input
                type="text"
                id="barcode"
                value={formData.identifier}
                onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
              min="1"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Price per Unit
            </label>
            <input
              type="number"
              id="price"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
              min="0"
              step="0.01"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Add to Inventory
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;