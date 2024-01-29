import Hero from "@/components/Hero";
import Ingredients from "@/components/Ingredients";
import Instructions from "@/components/Instructions";
import Nutrition from "@/components/Nutrition";
import Preparation from "@/components/Preparation";

export default function Home() {
  return (
    <>
      <div className="bg-white w-[110svh] mx-auto my-20 rounded-xl flex flex-col">
        <div className="m-8">
          <Hero />
          <Preparation />
          <Ingredients />
          <Instructions />
          <Nutrition />
        </div>
      </div>
    </>
  );
}
