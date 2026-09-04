const PropertyCard = ({ property }) => {
  return (
    <div className="relative" key={property.title}>
      <img
        className="rounded-xl w-full"
        src={property.image}
        alt={property.title}
      />

      <div className="absolute top-5 left-5 space-x-1">
        <div className="bg-dgreen inline-block px-4 py-2 rounded-full text-white font-medium uppercase">
          {property.status}
        </div>

        {property.featured && (
          <div className="bg-primary inline-block px-5 py-2 rounded-full text-black font-medium uppercase">
            featured
          </div>
        )}
      </div>

      <div className="absolute bottom-5 left-5 right-5 bg-white p-5 rounded-lg">
        <h3 className="text-xl font-medium">{property.title}</h3>

        <p className="text-base my-2">{property.location}</p>

        <div className="flex justify-between">
          <p className="text-redprice font-semibold text-xl">
            {property.price}
            {property.rentTime && <span className="text-base">/month</span>}
          </p>

          <span>{property.stats}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
