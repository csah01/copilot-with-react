import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 bg-white shadow-md">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-800">Logo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center ml-10 space-x-4">
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900">
                Home
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900">
                About
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}