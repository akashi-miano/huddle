import { hero } from "../assets";

const Hero = () => {
  return (
    <section className="hero py-24 mb-4">
      <div className="container">
        <header className="text-center flow-content--m">
          <h1 className="title font-black text-4xl text-[#00252E]">
            Build The Community Your Fans Will Love
          </h1>
          <p className="brief max-w-[450px] mx-auto text-[#00252E]">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.{" "}
          </p>
          <a href="" className="btn btn--primary">
            Get Started For Free
          </a>
        </header>
      </div>
    </section>
  );
};

export default Hero;
