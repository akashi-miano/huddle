import { footerLogo } from "../assets";
import { FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#00252E] py-16 text-white relative">
      <div className="container grid md:grid-cols-2">
        <div className="contact">
          <div className="wrapper mb-6"></div>
          <header className="mb-3">
            <img
              src={footerLogo}
              alt="footer logo"
              className="translate-x-[-7%] logo"
            />
            <p className="max-w-[400px] text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </p>
          </header>
          <div className="wrapper mb-12 mt-6">
            <div className="">
              <div className="phone flex items-center gap-2">
                <FaPhone />
                Phone:
                <a href="tel:+1-543-123-4567">+1-543-123-4567</a>
              </div>
            </div>
            <div className="">
              <div className="gmail flex items-center gap-2">
                <SiGmail />
                <a href="mailto:example@huddle.com">example@huddle.com</a>
              </div>
            </div>
          </div>
          <ul className="social flex items-center gap-2">
            <li>
              <a href="">
                <FaFacebookSquare
                  size={32}
                  className="hover:text-cyan-500 duration-300 hover:cursor-pointer"
                />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram
                  size={32}
                  className="hover:text-cyan-500 duration-300 hover:cursor-pointer"
                />
              </a>
            </li>
            <li>
              <a href="">
                <FaTwitter
                  size={32}
                  className="hover:text-cyan-500 duration-300 hover:cursor-pointer"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="news-letter order-[-1] md:order-[0]">
          <header className="flow-content--m mb-4">
            <h2 className="text-3xl">NEWSLETTER</h2>
            <p className="max-w-[400px]">
              To recieve tips on how to grow your community, sign up to our
              weekly newsletter. We’ll never send you spam or pass on your email
              address.
            </p>
          </header>
          <form action="" className="flex items-center gap-4">
            <input
              type="email"
              placeholder="example@org.com"
              className="py-2 px-2 rounded-md text-[#222]"
            />
            <button className="btn btn--primary !rounded-md !text-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
