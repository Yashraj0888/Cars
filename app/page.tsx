import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
// import Hero from "@/components/Hero";
import Image from "next/image";



export default async function Home() {
  const allCars=await fetchCars();
  const isDataEmpty=!Array.isArray(allCars) ||
    allCars.length<1 || !allCars;
  
  
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
              <div className="home__filters">
                <SearchBar/>
                <div className="home__filter-container">
                  
                  <CustomFilter title="Fuel"/>
                  <CustomFilter tilte="Year"/>
                </div>
              </div>
                  {!isDataEmpty ?(
                      <section>
                        <div className="home__cars-wrapper">
                          {allCars?.map((car)=>
                          (<CarCard key={car.id} car={car}/>))}
                        </div>
                      </section>
                    ):(
                      <div className="home__error-container">
                        <h2 className="text-black text-xl font-bold">No Cars to show</h2>
                        <p>{allCars?.message }</p>
                      </div>
                    )
                  }
            </div>
          </div>


      </main>
    </div>
     

  );
}
