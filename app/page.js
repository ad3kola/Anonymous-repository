import Discounts from "@/components/Discounts";
import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import Locations from "@/components/Locations";
import Newsletter from "@/components/Newsletter";
import Recipes from "@/components/Recipes";
import Services from "@/components/Services";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="w-[95%] mx-auto">
        <Services />
        <Locations />
        <Recipes />
        <Highlight />
        <Discounts />
        <Sponsors />
        <Newsletter />
      </main>
    </>
  );
}
