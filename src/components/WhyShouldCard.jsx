const WhyShouldCard = ({ icon, title, description }) => {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="">
        <img src={icon} alt={title} className="mb-3" />
      </div>

      <h3 className="text-xl font-medium my-4">{title}</h3>

      <p className="text-sm/[28px]">{description}</p>
    </div>
  );
};

export default WhyShouldCard;
