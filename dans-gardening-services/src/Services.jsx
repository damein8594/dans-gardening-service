import ServiceCard from "./ServiceCard";
import mow from "./assets/lawnmower.jpg";
import weeds from "./assets/weeds.jpg";
import mow_weeds from "./assets/mow_weeding.jpg";

function Services() {
  const services = [
    {
      title: "Lawn Mowing",
      description: "Regular cutting to keep your lawn neat and tidy",
      price: "From £15",
      image: mow,
    },
    {
      title: "Weed Removal",
      description: "Full weed clearance for gardens of all sizes",
      price: "From £15",
      image: weeds,
    },
    {
      title: "Weed Removal + Mow",
      description: "Combined weed removal and lawn mowing service",
      price: "From £20",
      image: mow_weeds,
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            title={service.title}
            description={service.description}
            price={service.price}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
