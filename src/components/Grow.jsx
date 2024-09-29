import { grow } from "../assets";

const Grow = () => {
  return (
    <section>
      <div className="container grid md:grid-cols-2 items-center">
        <header className="text-content flow-content--m text-center md:text-left">
          <h2 className="font-bold text-[2.5rem]">Grow Together</h2>
          <p className="max-w-[450px] mx-auto md:mx-0">
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.{" "}
          </p>
        </header>
        <div className="img-wrapper order-[-1] md:order-[0] mx-auto md:mx-0">
          <img src={grow} alt="Meaningful discussion" />
        </div>
      </div>
    </section>
  );
};

export default Grow;
