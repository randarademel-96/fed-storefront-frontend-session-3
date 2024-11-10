import { Button } from "@/components/ui/button";
import "./Hero.css";

function Hero() {
  return (
    <section className="p-8 mx-16">
      <div className="grid grid-cols-2 gap-4 rounded-xl min-h-[60vh] bg-[#f4f8f9] ">
        <div className="flex flex-col justify-center p-16 gap-4 ">
          <span className=" inline-block rounded-full pt-1 pb-1 px-2 w-fit bg-[#febc26] ">WEEKLY DISCOUNT</span>
          <h1 className="text-6xl font-semibold leading-none">Premium Product Online Shop</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
            suscipit est autem quia? Voluptatem?
          </p>
          <Button className=" content-center text-white font-medium bg-black rounded-md inline-block w-fit" asChild>
            <a to="/shop">Shop Now</a>
          </Button>
        </div>
        <div className="position: relative">
          <img
            src="https://fee-storefront.vercel.app/assets/hero/hero.jpg"
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
