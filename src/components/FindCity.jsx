const FindCity = ({ image, cityName, property, className }) => {
  return (
    <div
      className={`relative before:absolute before:inset-0 before:shadow-md before:bg-gray-900 before:opacity-30 before:rounded-2xl ${className}`}
      key={cityName}
    >
      <img
        src={image}
        alt="city image"
        className="rounded-2xl w-full h-auto "
      />
      <div className="absolute top-8 left-10 text-white">
        <h3 className="text-xl font-medium">{cityName}</h3>
        <p>{property}</p>
      </div>
    </div>
  );
};

export default FindCity;
