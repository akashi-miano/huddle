import { logo } from "../assets";

const Nav = () => {
  return (
    <nav className="py-16 px-8">
      <div className="container">
        <div className="wrapper flex justify-between">
          <img src={logo} alt="Chat icon" className="w-[240px] h-[38px] logo" />
          <a href="" className="btn btn--secondary">
            Try It Free
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
