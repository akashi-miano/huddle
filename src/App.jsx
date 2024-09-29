import Build from "./components/Build";
import Conversation from "./components/Conversation";
import Footer from "./components/Footer";
import Grow from "./components/Grow";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import PostHero from "./components/PostHero";
import Users from "./components/Users";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <PostHero />
      <Grow />
      <Conversation />
      <Users />
      <Build />
      <Footer />
    </>
  );
}

export default App;
