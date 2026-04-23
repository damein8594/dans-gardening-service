function ServiceCard({ title, description, price, image }) {
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
      </div>
    </div>
  );
}

export default ServiceCard;
