import React, { useState } from 'react';
import { PackageSearch, Scan, PackagePlus, PackageMinus } from 'lucide-react';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import ProductOut from './components/ProductOut';
import Cart from './components/Cart';

export type CartItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

function App() {
  const [mode, setMode] = useState<'none' | 'in' | 'out'>('none');
  const [inputMethod, setInputMethod] = useState<'name' | 'barcode' | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const resetStates = () => {
    setMode('none');
    setInputMethod(null);
  };

  const addToCart = (item: CartItem) => {
    setCart([...cart, item]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {mode === 'none' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <button
              onClick={() => setMode('in')}
              className="flex items-center justify-center gap-3 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-indigo-50 hover:border-indigo-100 group"
            >
              <PackagePlus className="w-8 h-8 text-indigo-600 group-hover:scale-110 transition-transform" />
              <span className="text-xl font-semibold text-gray-800">Stock In</span>
            </button>
            
            <button
              onClick={() => setMode('out')}
              className="flex items-center justify-center gap-3 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-indigo-50 hover:border-indigo-100 group"
            >
              <PackageMinus className="w-8 h-8 text-indigo-600 group-hover:scale-110 transition-transform" />
              <span className="text-xl font-semibold text-gray-800">Stock Out</span>
            </button>
          </div>
        )}

        {mode !== 'none' && !inputMethod && (
          <div className="max-w-md mx-auto space-y-4">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Select Input Method
            </h2>
            <button
              onClick={() => setInputMethod('name')}
              className="w-full flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <PackageSearch className="w-6 h-6 text-indigo-600" />
              <span className="text-lg font-medium">Search by Name</span>
            </button>
            
            <button
              onClick={() => setInputMethod('barcode')}
              className="w-full flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <Scan className="w-6 h-6 text-indigo-600" />
              <span className="text-lg font-medium">Scan Barcode</span>
            </button>
          </div>
        )}

        {mode === 'in' && inputMethod && (
          <ProductForm onSubmit={resetStates} inputMethod={inputMethod} />
        )}

        {mode === 'out' && inputMethod && (
          <div className="max-w-4xl mx-auto">
            <ProductOut onAddToCart={addToCart} inputMethod={inputMethod} />
            <Cart items={cart} />
          </div>
        )}

        {(mode !== 'none' || inputMethod) && (
          <button
            onClick={resetStates}
            className="fixed bottom-8 right-8 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Main Menu
          </button>
        )}
      </main>
    </div>
  );
}

export default App;