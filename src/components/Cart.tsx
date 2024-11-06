import React from 'react';
import { ShoppingCart } from 'lucide-react';
import type { CartItem } from '../App';

interface CartProps {
  items: CartItem[];
}

function Cart({ items }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <ShoppingCart className="w-6 h-6 text-indigo-600" />
        <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
      </div>

      {items.length === 0 ? (
        <p className="text-gray-500 text-center py-4">Cart is empty</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div>
                <h3 className="font-medium text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  Quantity: {item.quantity} × ${item.price.toFixed(2)}
                </p>
              </div>
              <p className="font-medium text-gray-800">
                ${(item.quantity * item.price).toFixed(2)}
              </p>
            </div>
          ))}
          
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-800">Total:</span>
              <span className="font-bold text-gray-800">${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;