import cardsData from "../utils/cardsData";
import Image from "next/image";

export default function Special() {
  return (
    <>
      <section className="container mx-auto pl-20 pt-15 text-center w-full ">
        <span>
          <h1 className="sm:text-5xl md:text-8xl text-[#3A2E5C] py-4">
             💖 Why She's Special ??
          </h1>
        </span>

          {/* Make cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-20 mt-10">
            {/* Card 1 */}
            
            {cardsData.map((card, key)=>{
              return(
                <div key={key} className="bg-white shadow-lg rounded-lg p-6 w-65 hover:scale-105 transition-transform duration-300">
                  <Image src={card.flower} alt="card" width={800} height={200} className="rounded-md mb-4 cursor-pointer"/>
                  <h2 className="text-3xl sm:text-2xl font-bold mb-4 text-[#3A2E5C]">{card.title}</h2>
                  <p className="text-gray-700 text-lg">{card.description}</p>
                </div>
              )
            })}
            
          </div>
        </section>
    </>
  );
}


