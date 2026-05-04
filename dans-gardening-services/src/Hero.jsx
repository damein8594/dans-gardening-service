import gardenImage from "./assets/background.jpg";

function Hero({ headline, subheading }) {
  return (
    <div
      className="relative h-185 flex items-start justify-center text-center"
      style={{
        backgroundImage: `url(${gardenImage})`,
        backgroundPosition: "center",
        padding: "10rem 1rem",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-green-900/90 via-green-900/80 to-green-900/50" />
      {/* <div className="absolute inset-0 bg-linear-to-b from-green-900/80 via-green-900/50 to-green-900/80" /> */}

      {/* Content */}
      <div className="relative z-10 text-white px-6">
        <h1 className="text-5xl font-bold text-yellow-400 mb-4 drop-shadow-lg">
          {headline}
        </h1>
        <p className="text-xl mb-8 drop-shadow-md">{subheading}</p>
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
