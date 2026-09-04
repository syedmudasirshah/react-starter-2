const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="flex w-95 items-start gap-5" key={title}>
      <div className="relative pr-4">
        <div className="h-8 w-8 rounded-full bg-primary mt-3"></div>
        <img src={icon} alt="" className="w-9 h-auto absolute top-0 right-0" />
      </div>

      <div className="flex-1">
        <h3 className="mb-2 text-xl font-medium">{title}</h3>

        <p className="text-sm/[28px]">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
