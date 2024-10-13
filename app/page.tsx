import { Hero } from "@/components";
// import Hero from "@/components/Hero";
import Image from "next/image";


export default function Home() {
  return (
    <div>
       <main 
        className="overflow-hidden">
          <Hero/>
          <div className="mt-12 padding-x padding-y
          max-width" id="discover">
            <div className="home__text-container">
              <h1 className="text-4xl 
              font-extrabold">Our Collection</h1>
              <p className=" mt-4">
                Discover the latest and greatest car models from around the world.
              </p>
              <div className="home__filters"></div>
            </div>
          </div>


      </main>
    </div>
     

  );
}
