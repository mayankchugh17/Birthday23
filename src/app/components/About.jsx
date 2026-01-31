import Image from "next/image";
export default function About() {
  return (
    <>
      <section className="about mt-10 sm:mt-10">
        <h1 className="sm:text-5xl md:text-8xl p-10 text-center">
          Things that I want to say to you💞 <br />
          {/* About my World 🌍 */}
        </h1>
        <p className="sm:text-2xl md:text-3xl p-10 text-center">
          "I used to think love was just a feeling, but with you, I realized
          it’s the thread that holds my entire world together. You’ve sewn your
          laughter into my memories and your kindness into my soul. You walked into my life quietly, but you changed it completely.
With you, love feels simple, warm, and real. You aren't just a part of my story; you
          are the hand that holds the needle, guiding us toward a beautiful
          forever."
        </p>
        <p className="sm:text-2xl md:text-3xl p-10 text-center">
          In the vast expanse of my world, you are the most beautiful part. Your
          presence fills my life with colors I never knew existed. Just like the
          lavender fields that stretch endlessly under the sky, your love
          envelops me in a serene embrace, bringing peace and joy to my soul.
          Every moment with you is a cherished memory, painting my world with
          hues of happiness and warmth. You are my lavender, my calm in the
          storm, and the most beautiful part of my world.
        </p>
        <p className="sm:text-2xl md:text-3xl p-10 text-center">
          On this special day, I want to remind you of how much you mean to me.
          Just as lavender soothes the senses, your love soothes my heart. I am
          grateful for every moment we share and look forward to creating more
          beautiful memories together. Happy Birthday, my love. May your day be
          as wonderful and enchanting as you are.  
        </p>

        <p className="sm:text-2xl md:text-3xl p-10 text-center">
          With all my love, now and always.
        </p>

        <div className="flex sm:flex-col justify-center items-center mb-10">
          <Image
            src="/about/aboutBG.jpg"
            alt="Lavender Image"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <h1 className="sm:text-2xl md:text-3xl p-10 text-center">
            Forever Yours, <br /> Mayank 
          </h1>
        </div>
      </section>
    </>
  );
}
