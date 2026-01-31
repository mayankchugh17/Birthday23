export default function Home() {
  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        bg-[url('/bg2.jpg')]
        bg-cover
        bg-center
        bg-no-repeat
        flex
        items-center
      "
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div
        className="
          relative
          z-10
          w-full
          px-5
          sm:px-10
          md:px-20
          text-white
        "
      >
        <h1 className="text-3xl sm:text-5xl md:text-8xl font-semibold leading-tight">
          Happy Birthday <br />
          Darpan 🌸
        </h1>

        <p className="mt-8 text-lg sm:text-2xl md:text-4xl max-w-3xl">
          “Like lavender in the wind, your love calms my soul and colors my
          world.”
        </p>

        <p className="mt-6 text-lg sm:text-2xl md:text-4xl max-w-3xl">
          “If love had a color, it would be lavender—because it feels like you.”
          🪻✨
        </p>
      </div>
    </section>
  );
}
