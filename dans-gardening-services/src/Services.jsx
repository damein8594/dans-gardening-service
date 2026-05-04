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
      pricing: [
        { size: "Small", price: "£15" },
        { size: "Medium", price: "£24" },
        { size: "Large", price: "£35" },
      ],
    },
    {
      title: "Weed Removal",
      description: "Full weed clearance for gardens of all sizes",
      price: "From £15",
      image: weeds,
      pricing: [
        { size: "Small", price: "£15" },
        { size: "Medium", price: "£15–£20" },
        { size: "Large", price: "£20–£30" },
      ],
      note: "* Final price depends on garden condition",
    },
    {
      title: "Weed Removal + Mow",
      description: "Combined weed removal and lawn mowing service",
      price: "From £20",
      image: mow_weeds,
      pricing: [
        { size: "Small", price: "£20–£30" },
        { size: "Medium", price: "£35–£40" },
        { size: "Large", price: "£50–£60" },
      ],
      note: "* Final price depends on garden condition",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">
        Our Services
      </h2>
      <p className="text-center text-white text-sm mb-8">
        * For jobs outside walking distance, customers will need to provide
        their own tools.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {" "}
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            price={service.price}
            image={service.image}
            pricing={service.pricing}
            note={service.note}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
