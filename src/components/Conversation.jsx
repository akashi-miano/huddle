import { conversation } from "../assets";

const Conversation = () => {
  return (
    <section className="py-16">
      <div className="container grid md:grid-cols-2 items-center">
        <header className="text-content flow-content--m text-center md:text-left">
          <h2 className="font-bold text-[2.5rem]">Flowing Conversations</h2>
          <p className="max-w-[450px] mx-auto md:mx-0">
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.{" "}
          </p>
        </header>
        <div className="img-wrapper order-[-1] mx-auto md:mx-0">
          <img src={conversation} alt="Real-life conversation" />
        </div>
      </div>
    </section>
  );
};

export default Conversation;
