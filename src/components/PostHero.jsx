import Card from "./Card";
import { hero } from "../assets";
import { cardsData } from "../data/cardsData";

const PostHero = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="img-wrapper">
          <img
            src={hero}
            alt="Hero image"
            className="block mx-auto max-h-[600px]"
          />
        </div>
        <div className="cards-wrapper flex flex-col md:flex-row items-center justify-center gap-8 max-w-[850px] mx-auto">
          {cardsData.map(({ icon, num, text }, index) => (
            <Card key={index} icon={icon} num={num} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostHero;
