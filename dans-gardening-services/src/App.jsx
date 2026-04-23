import Navbar from "./Navbar";
import Hero from "./hero";
import Services from "./Services";

function App() {
  return (
    <div>
      <Navbar businessName="Dans Gardening Services" />
      <Hero
        headline="Transform Your Garden with Dans Gardening Services"
        subheading="Transforming your gardens across LS12."
      />
      <Services />
    </div>
  );
}

export default App;
