import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Navbar businessName="Dans Gardening Services" />
      <Hero
        headline="Transform Your Garden with Dans Gardening Services"
        subheading="Transforming your gardens across LS12."
      />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
