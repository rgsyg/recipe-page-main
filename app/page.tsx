import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Ingredients from "@/components/Ingredients";
import Instructions from "@/components/Instructions";
import Nutrition from "@/components/Nutrition";
import Preparation from "@/components/Preparation";

import { Young_Serif, Outfit } from "next/font/google";

const youngSerif = Young_Serif({
  weight: '400',
  subsets: ['latin']
})

const outfit = Outfit({
  weight: ['400', '600', '700'],
  subsets: ['latin']
})

export default function Home() {
  return (
    <>
      <div className="bg-white w-[110svh] mx-auto my-20 rounded-xl flex flex-col">
        <div className={`${outfit.className} m-8 text-dark-charcoal`}>
          <Hero font={`${youngSerif.className}`} />
          <Preparation />
          <Ingredients font={`${youngSerif.className}`} />
          <Instructions font={`${youngSerif.className}`} />
          <Nutrition font={`${youngSerif.className}`} />
          <Footer />
        </div>
      </div>
    </>
  );
}
