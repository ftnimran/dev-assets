
const Card = ({cardItems}) => {
  return (
    <div className="bg-[#020617] rounded-[10px] p-3.75 transition duration-300 hover:-translate-y-1.25">
      <img className="w-full rounded-lg" src={cardItems.image} alt={cardItems.title}/>
      <h3>{cardItems.title}</h3>
    </div>
  );
};

export default Card;
