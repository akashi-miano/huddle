const Card = ({ icon, num, text }) => {
  return (
    <div className="card flex flex-col gap-2 w-full my-8 border border-black shadow-md  p-4 rounded-md">
      <img src={icon} alt="" className="icon w-[45px] h-[45px]" />
      <span className="text-4xl font-bold">{num}</span>
      <span className="text-[#808E9A]">{text}</span>
    </div>
  );
};

export default Card;
