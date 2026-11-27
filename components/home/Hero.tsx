
export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen min-h-[100svh] items-center overflow-hidden bg-[#17251F]"
    >
      {/* Café interior background */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/alpas-hero.png')",
        }}
      />

      {/* Atmospheric overlays */}
      <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/10" />
      <div className="absolute inset-0 bg-black/10" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-28 pt-36 sm:px-6 sm:pb-24 sm:pt-32 lg:px-10">
        <div className="max-w-2xl text-[#F0EAD2]">
          <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.25em] text-[#DDE5B6] sm:mb-6 sm:text-xs sm:tracking-[0.35em] md:text-sm">
            A Little Escape from the Everyday
          </p>

          <h1 className="font-serif text-5xl font-medium leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
            Find your
            <br />
            little escape.
          </h1>

          <p className="mt-6 max-w-xl font-sans text-sm leading-7 text-[#F0EAD2]/90 sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
            A place where stories unfold, coffee warms the soul,
            and every corner invites you to stay a little longer.
          </p>

          {/* Hero buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#spaces"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#ADC178] px-8 py-3.5 text-center font-sans text-sm font-bold tracking-wide text-[#17251F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#DDE5B6] sm:w-auto"
            >
              Explore Alpas
            </a>

            <a
              href="#menu"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#F0EAD2]/70 px-8 py-3.5 text-center font-sans text-sm tracking-wide text-[#F0EAD2] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F0EAD2] hover:text-[#17251F] sm:w-auto"
            >
              Discover Our Menu
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#spaces"
        aria-label="Scroll to explore our spaces"
        className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[#F0EAD2]/80 transition-colors hover:text-[#DDE5B6] sm:bottom-8 sm:gap-3"
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.3em] sm:text-[10px]">
          Scroll to wander
        </span>

        <span className="h-8 w-px animate-pulse bg-[#F0EAD2]/70 motion-reduce:animate-none sm:h-10" />
      </a>
    </section>
  );
}
