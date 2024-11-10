import {Button} from "@/components/ui/button";
import Hero from "./Hero";
import Navigation from "./Navigation";

function App() {
  const name = "Randara";
  const cartCount = 2;

  return (
    <div>
      <Navigation name={name} cartCount={cartCount} />
      <Hero />
      <div className="p-4">
        <Button className="bg-red-700" >Buy Now </Button>
      </div>
    </div>
  );
}

export default App;
