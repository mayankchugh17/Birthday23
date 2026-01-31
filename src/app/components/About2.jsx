import Image from "next/image";

export default function About2() {
  return (
    <>
      <section className=" container mx-auto about mt-10">
        <h1 className="sm:text-5xl md:text-8xl p-10 text-center">
          About my World 🌍
        </h1>

        <div className="flex justify-center items-center mb-10">
          <Image
            src="/about/flower.jpg"
            alt="Lavender Image"
            width={400}
            height={400}
            className="rounded-lg shadow-lg mx-auto "
          />{" "}
          <div className="flex flex-col justify-center items-center">
            <p className="sm:text-2xl md:text-3xl p-10 text-start">
              The best thing which I like the most about her is She is very
              caring and loving by nature. She always puts others before herself
              and makes sure that everyone around her is happy and comfortable.
              Her kindness and compassion are truly inspiring, and they make the
              world a better place.
            </p>

            <p className="sm:text-2xl md:text-3xl p-10 text-start">
              The best part about her is her ability to find beauty in the
              little things around her. Whether it's a blooming flower, a scenic
              view, or a simple act of kindness, she appreciates the world with
              a heart full of gratitude and wonder.
            </p>
            <p className="sm:text-2xl md:text-3xl p-10 text-start">
              For me, one of the best things about Darpan is that she is mature
              with everyone, but in front of me, she becomes cute and playful.
              Her childish nature makes me feel truly special and deeply loved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
