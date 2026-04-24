import { useState } from "react";

function Navbar({ businessName }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-3xl flex justify-between items-center px-6 py-3 rounded-full bg-green-900/90 backdrop-blur-md border border-green-700 shadow-lg">
      <h1 className="text-yellow-400 font-bold text-lg">{businessName}</h1>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-yellow-400 font-bold"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      <ul className="hidden md:flex gap-8">
        <li>
          <a
            href="/"
            className="text-white hover:text-yellow-400 transition font-medium"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/services"
            className="text-white hover:text-yellow-400 transition font-medium"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-white hover:text-yellow-400 transition font-medium"
          >
            Contact
          </a>
        </li>
      </ul>

      <a
        href="/contact"
        className="hidden md:block bg-yellow-400 text-green-900 font-bold px-4 py-2 rounded-full hover:bg-yellow-300 transition"
      >
        Get a Quote
      </a>
    </nav>
  );
}

export default Navbar;
