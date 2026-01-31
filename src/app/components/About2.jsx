import Image from "next/image";

export default function About2() {
  return (
    <section className="mt-20 px-4 sm:px-8 md:px-20">
      
      {/* Title */}
      <h1 className="text-3xl sm:text-5xl md:text-7xl text-center font-semibold mb-16">
        About my World 🌍
      </h1>

      {/* Content */}
      <div className="
        flex
        flex-col
        md:flex-row
        items-center
        gap-10
        max-w-6xl
        mx-auto
      ">
        
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/about/flower.jpg"
            alt="Lavender Image"
            width={420}
            height={420}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 space-y-8">
          <p className="text-base sm:text-xl md:text-2xl leading-relaxed text-center md:text-left">
            The best thing which I like the most about her is she is very caring
            and loving by nature. She always puts others before herself and makes
            sure that everyone around her is happy and comfortable. Her kindness
            and compassion are truly inspiring, and they make the world a better
            place.
          </p>

          <p className="text-base sm:text-xl md:text-2xl leading-relaxed text-center md:text-left">
            The best part about her is her ability to find beauty in the little
            things around her. Whether it's a blooming flower, a scenic view, or
            a simple act of kindness, she appreciates the world with a heart full
            of gratitude and wonder.
          </p>

          <p className="text-base sm:text-xl md:text-2xl leading-relaxed text-center md:text-left">
            For me, one of the best things about Darpan is that she is mature with
            everyone, but in front of me, she becomes cute and playful. Her
            childish nature makes me feel truly special and deeply loved.
          </p>
        </div>
      </div>
    </section>
  );
}
