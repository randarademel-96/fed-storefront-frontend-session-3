import { Button } from "@/components/ui/button";
import Hero from "./Hero";
import Navigation from "./Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ProductCard from "./ProductCard";
import ShadSheet from "./ShadSheet";




function App() {
  const name = "Randara";
  const cartCount = 2;

  const title = "Airpods";
  const description = "HeadPhones";
  const footerText = "Footer Text";
  const content = "lorem ipsum dolor sit amet, consectetur adip"

  const trigger = "Click";
  const stitle = "This is Demo";
  const sdesc = "This is demo description"

  return (
    <div>
      <Navigation name={name} cartCount={cartCount} />
      <Hero />
      <ProductCard title={title} description={description}  content={content} footer={footerText}/>
      <ShadSheet strigger={trigger}  stitle={stitle} sdescrption={sdesc} />
    </div>
  );
}

export default App;
