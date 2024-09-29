import { users } from "../assets";

const Users = () => {
  return (
    <div className="container grid md:grid-cols-2 items-center">
      <header className="text-content flow-content--m text-center md:text-left">
        <h2 className="font-bold text-[2.5rem]">Your Users</h2>
        <p className="max-w-[450px] mx-auto md:mx-0">
          It takes no time at all to integrate Huddle with your app's
          authentication solution. This means, once signed in to your app, your
          users can start chatting immediately.
        </p>
      </header>
      <div className="img-wrapper order-[-1] md:order-[0] mx-auto md:mx-0">
        <img src={users} alt="Users background" />
      </div>
    </div>
  );
};

export default Users;
