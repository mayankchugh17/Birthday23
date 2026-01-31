import Image from "next/image";

export default function About() {
  return (
    <section className="mt-16 px-4 sm:px-8 md:px-20">
      
      {/* Title */}
      <h1 className="text-3xl sm:text-5xl md:text-7xl text-center font-semibold mb-12">
        Things that I want to say to you 💞
      </h1>

      {/* Content Wrapper */}
      <div className="max-w-3xl mx-auto text-center space-y-10">
        
        <p className="text-base sm:text-xl md:text-2xl leading-relaxed">
          “I used to think love was just a feeling, but with you, I realized it’s
          the thread that holds my entire world together. You’ve sewn your
          laughter into my memories and your kindness into my soul. You walked
          into my life quietly, but you changed it completely. With you, love
          feels simple, warm, and real. You aren't just a part of my story; you
          are the hand that holds the needle, guiding us toward a beautiful
          forever.”
        </p>

        <p className="text-base sm:text-xl md:text-2xl leading-relaxed">
          In the vast expanse of my world, you are the most beautiful part. Your
          presence fills my life with colors I never knew existed. Just like the
          lavender fields that stretch endlessly under the sky, your love
          envelops me in a serene embrace, bringing peace and joy to my soul.
          Every moment with you is a cherished memory, painting my world with
          hues of happiness and warmth. You are my lavender, my calm in the
          storm, and the most beautiful part of my world.
        </p>

        <p className="text-base sm:text-xl md:text-2xl leading-relaxed">
          On this special day, I want to remind you of how much you mean to me.
          Just as lavender soothes the senses, your love soothes my heart. I am
          grateful for every moment we share and look forward to creating more
          beautiful memories together. Happy Birthday, my love. May your day be
          as wonderful and enchanting as you are.
        </p>

        <p className="text-base sm:text-xl md:text-2xl font-medium">
          With all my love, now and always.
        </p>
      </div>

      {/* Image + Signature */}
      <div className="mt-16 flex flex-col items-center gap-6">
        <Image
          src="/about/aboutBG.jpg"
          alt="Lavender Image"
          width={380}
          height={260}
          className="rounded-xl shadow-lg"
        />

        <h2 className="text-lg sm:text-xl md:text-2xl text-center">
          Forever Yours, <br />
          <span className="font-semibold">Mayank</span>
        </h2>
      </div>
    </section>
  );
}
