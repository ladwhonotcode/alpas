
import {
  BookOpen,
  Coffee,
  Feather,
  Heart,
  Leaf,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Coffee,
    title: "A Moment to Pause",
    description:
      "We believe that even the busiest days deserve a little breathing room. Sometimes, all you need is a good cup of coffee and somewhere comfortable to sit.",
  },
  {
    icon: BookOpen,
    title: "Stories to Get Lost In",
    description:
      "Books open doors to different worlds, different perspectives, and different versions of ourselves. We want every reader to find a story that stays with them.",
  },
  {
    icon: Heart,
    title: "A Place to Belong",
    description:
      "Whether you come to read, create, work, or simply be yourself, we hope Alpas feels like a place where you are always welcome.",
  },
];

export default function OurStory() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[#F0EAD2] px-5 py-20 text-[#17251F] sm:px-6 sm:py-24 md:px-10 lg:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full border border-[#7B8F4B]/15" />
      <div className="pointer-events-none absolute -left-40 bottom-10 h-96 w-96 rounded-full border border-[#7B8F4B]/15" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-5 flex items-center justify-center gap-3 text-[#7B8F4B]">
            <span className="h-px w-7 bg-[#7B8F4B]/50 sm:w-10" />
            <Feather size={16} />
            <span className="text-[10px] tracking-[0.25em] sm:text-xs sm:tracking-[0.3em]">
              A NOTE FROM ALPAS
            </span>
            <Feather size={16} />
            <span className="h-px w-7 bg-[#7B8F4B]/50 sm:w-10" />
          </div>

          <h2 className="font-serif text-4xl font-medium leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            A Little Place,
            <br />
            <span className="italic text-[#7B8F4B]">
              A Little Story.
            </span>
          </h2>

          <p className="mt-5 text-sm text-[#6C584C] sm:text-base">
            Every place begins with a feeling.
          </p>
        </div>

        {/* Personal letter */}
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-sm shadow-xl lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left decorative panel */}
          <div className="relative flex min-h-[26rem] flex-col items-center justify-center overflow-hidden bg-[#17251F] p-8 text-center text-[#F0EAD2] sm:min-h-[30rem] sm:p-10 md:min-h-[34rem]">
            <div className="pointer-events-none absolute inset-4 border border-[#DDE5B6]/20 sm:inset-5" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#DDE5B6]/15" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full border border-[#DDE5B6]/15" />

            <div className="relative z-10">
              <Leaf
                size={34}
                strokeWidth={1}
                className="mx-auto mb-7 text-[#DDE5B6] sm:mb-8"
              />

              <p className="mb-5 text-[10px] tracking-[0.25em] text-[#DDE5B6] sm:text-xs sm:tracking-[0.3em]">
                THE HEART OF ALPAS
              </p>

              <h3 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                Where the
                <br />
                mind
                <br />
                <span className="italic text-[#DDE5B6]">
                  wanders free.
                </span>
              </h3>

              <div className="mx-auto my-7 h-px w-16 bg-[#DDE5B6]/50 sm:my-8" />

              <p className="font-serif text-base italic text-[#F0EAD2]/75 sm:text-lg">
                A space to pause.
                <br />
                A space to grow.
                <br />
                A space to simply be.
              </p>
            </div>
          </div>

          {/* Letter content */}
          <div className="relative bg-[#FAF7ED] px-6 py-10 sm:px-9 sm:py-12 md:px-12 md:py-16 lg:px-16">
            <div className="pointer-events-none absolute right-6 top-6 text-[#7B8F4B]/15 sm:right-8 sm:top-8">
              <Sparkles size={36} strokeWidth={1} />
            </div>

            <div className="relative z-10 mx-auto max-w-xl">
              <p className="mb-7 text-[10px] tracking-[0.25em] text-[#A98467] sm:mb-8 sm:text-xs">
                A LETTER TO YOU
              </p>

              <h3 className="mb-6 font-serif text-3xl italic text-[#7B8F4B] sm:mb-7">
                Dear friend,
              </h3>

              <div className="space-y-5 font-serif text-base leading-8 text-[#514A3F] sm:text-lg sm:leading-9">
                <p>
                  Have you ever wished for a place where time
                  could slow down, where the world outside
                  could wait just a little longer?
                </p>

                <p>
                  That is the feeling we hoped to create with
                  Alpas.
                </p>

                <p>
                  We imagined a little corner of the world
                  where the smell of freshly brewed coffee
                  meets the comfort of well-loved books. A
                  place where conversations flow as easily
                  as the pages of a favorite story, and where
                  quiet moments are just as welcome as
                  laughter shared over a cup.
                </p>

                <p>
                  To us, Alpas is more than a café. It is an
                  invitation to step away from the rush of
                  everyday life, rediscover the joy of little
                  things, and give yourself permission to
                  wander.
                </p>

                <p>
                  Whether you find yourself tucked into a
                  reading corner, discovering a new favorite
                  drink, working on a dream, or simply
                  enjoying a moment of stillness, we hope
                  you find something here that makes you
                  want to stay a little longer.
                </p>

                <p>
                  And most of all, we hope you feel that
                  there is a place for you here.
                </p>
              </div>

              <div className="mt-9 border-t border-[#17251F]/15 pt-7 sm:mt-10 sm:pt-8">
                <p className="mb-3 font-serif text-base italic text-[#6C584C] sm:text-lg">
                  With warmth and a little room to wander,
                </p>

                <p className="font-serif text-3xl italic text-[#7B8F4B] sm:text-4xl">
                  The Alpas Team
                </p>

                <p className="mt-3 text-[10px] tracking-[0.25em] text-[#A98467]">
                  WHERE THE MIND WANDERS FREE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy heading */}
        <div className="mx-auto mb-10 mt-16 max-w-2xl text-center sm:mb-12 sm:mt-24">
          <p className="mb-3 text-xs tracking-[0.25em] text-[#7B8F4B]">
            WHAT WE BELIEVE IN
          </p>

          <h3 className="font-serif text-3xl sm:text-4xl">
            The Little Things That Make Alpas.
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#6C584C] sm:text-base">
            A few simple things lie at the heart of everything
            we hope this place can be.
          </p>
        </div>

        {/* Values */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-3 md:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="group border-t border-[#17251F]/20 pt-6 transition-colors duration-300 hover:border-[#7B8F4B] sm:pt-7"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-serif text-sm italic text-[#A98467]">
                    0{index + 1}
                  </span>

                  <Icon
                    size={25}
                    strokeWidth={1.3}
                    className="text-[#7B8F4B] transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
                  />
                </div>

                <h4 className="mb-4 font-serif text-xl sm:text-2xl">
                  {value.title}
                </h4>

                <p className="text-sm leading-7 text-[#6C584C]">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Closing message */}
        <div className="mt-16 bg-[#DDE5B6]/45 px-5 py-10 text-center sm:mt-24 sm:px-8 sm:py-12 md:px-12 md:py-16">
          <Sparkles
            size={22}
            strokeWidth={1.3}
            className="mx-auto mb-5 text-[#7B8F4B]"
          />

          <h3 className="mx-auto max-w-2xl font-serif text-2xl italic leading-relaxed sm:text-3xl md:text-4xl">
            Maybe you came for the coffee.
            <br />
            Maybe you'll stay for the feeling.
          </h3>

          <p className="mt-5 text-[10px] tracking-[0.15em] text-[#6C584C] sm:text-xs sm:tracking-[0.2em]">
            EITHER WAY, WE'RE GLAD YOU'RE HERE.
          </p>
        </div>
      </div>
    </section>
  );
}
