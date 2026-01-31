import cardsData from "../utils/cardsData";
import Image from "next/image";

export default function Special() {
  return (
    <section className="mt-20 px-4 sm:px-8 md:px-20 text-center">
      
      {/* Title */}
      <h1 className="text-3xl sm:text-5xl md:text-7xl text-[#3A2E5C] font-semibold mb-14">
        💖 Why She's Special ?
      </h1>

      {/* Cards Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          max-w-6xl
          mx-auto
        "
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="
              bg-white
              shadow-lg
              rounded-xl
              p-6
              transition
              duration-300
              hover:scale-105
            "
          >
            <Image
              src={card.flower}
              alt={card.title}
              width={400}
              height={300}
              className="rounded-lg mb-4 object-cover w-full h-auto"
            />

            <h2 className="text-2xl font-bold mb-3 text-[#3A2E5C]">
              {card.title}
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
