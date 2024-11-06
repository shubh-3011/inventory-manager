import React from 'react';
import { PackageSearch } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-3">
          <PackageSearch className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-800">Inventory Management System</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;