import { useState } from "react";

function Navbar({ businessName }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-yellow-400 font-bold text-xl">{businessName}</h1>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      <ul className="hidden md:flex gap-8">
        <li>
          <a href="/" className="hover:text-yellow-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="/services" className="hover:text-yellow-400 transition">
            Services
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </li>
      </ul>

      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-green-900 flex flex-col items-center gap-4 py-4 md:hidden">
          <li>
            <a href="/" className="hover:text-yellow-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-yellow-400 transition">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
