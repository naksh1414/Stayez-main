const InfoCard = ({ icon, title }) => {
  return (
    <div className="flex mt-10">
      <div className="text-white flex flex-row justify-center items-center space-x-2">
        {icon}
        <h1 className="text-white">{title}</h1>
      </div>
    </div>
  );
};

export default InfoCard;
