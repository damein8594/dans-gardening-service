import { useState } from "react";

function ServiceCard({ title, description, price, image, pricing, note }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative rounded-lg shadow-md p-6 text-center overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-green-900 opacity-50" />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-yellow-400 font-bold text-xl mb-2">{title}</h2>
        <p className="text-white mb-4">{description}</p>
        <p className="text-yellow-400 font-bold">{price}</p>

        {pricing && (
          <>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mt-4 text-sm text-yellow-400 border border-yellow-400 rounded px-3 py-1 hover:bg-yellow-400 hover:text-green-900 transition-colors"
            >
              {isOpen ? "Hide Pricing" : "View Pricing"}
            </button>

            {isOpen && (
              <div className="mt-3 bg-green-900 bg-opacity-80 rounded p-3 text-left">
                {pricing.map((item) => (
                  <div
                    key={item.size}
                    className="flex justify-between text-white py-1 border-b border-green-700 last:border-0"
                  >
                    <span>{item.size}</span>
                    <span className="text-yellow-400 font-bold">
                      {item.price}
                    </span>
                  </div>
                ))}
                {note && (
                  <p className="text-white text-xs mt-2 italic">{note}</p>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ServiceCard;
