import gardenImage from "./assets/temp_background.jpg";

function Hero({ headline, subheading }) {
  return (
    <div
      className="relative h-200 flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${gardenImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-green-900 opacity-75" />

      {/* Content */}
      <div className="relative z-10 text-white px-6">
        <h1 className="text-5xl font-bold text-yellow-400 mb-4">{headline}</h1>
        <p className="text-xl mb-8">{subheading}</p>
        <div className="flex gap-4 justify-center">
          <a
            href="/services"
            className="bg-yellow-400 text-green-900 font-bold px-6 py-3 rounded hover:bg-yellow-300 transition"
          >
            Our Services
          </a>
          <a
            href="/contact"
            className="border-2 border-yellow-400 text-yellow-400 font-bold px-6 py-3 rounded hover:bg-yellow-400 hover:text-green-900 transition"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
