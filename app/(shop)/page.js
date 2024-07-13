import HeroCarousel from "../../src/components/home/hero/hero";

import CategoriesList from "../../src/components/home/categoriesList/categoriesList";


export default function Home() {

  return (
    <>
    <HeroCarousel/>

    <main className="">
      <CategoriesList/>
    </main>
    </>

  );
}
