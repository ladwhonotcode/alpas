
"use client";

import { useState } from "react";
import { X } from "lucide-react";

const spaces = [
  {
    id: "reading",
    number: "01",
    name: "The Reading Nook",
    subtitle: "Lose yourself between the pages.",
    description:
      "Step into a quiet little sanctuary filled with stories waiting to be discovered. Settle into a comfortable seat, borrow a book, and let the rest of the world fade away. Members can also take selected books home through our rental program.",
    image: "/images/spaces/reading-nook.jpg",
    detail:
      "A quieter corner for curious minds and wandering imaginations.",
  },
  {
    id: "study",
    number: "02",
    name: "The Study Corner",
    subtitle: "Make room for your next big idea.",
    description:
      "A peaceful, distraction-free space for students, readers, and professionals. With comfortable desks, thoughtful lighting, and convenient power outlets, it's a place to focus, create, and get things done.",
    image: "/images/spaces/study-corner.jpg",
    detail:
      "Bring your notes, open your laptop, and settle into a productive rhythm.",
  },
  {
    id: "gathering",
    number: "03",
    name: "The Gathering Place",
    subtitle: "Some stories are better shared.",
    description:
      "Not every visit has to be quiet. Enjoy a livelier corner where friends can play board games, share conversations, and make memories over a cup of coffee.",
    image: "/images/spaces/gathering-place.jpg",
    detail:
      "A welcoming space for laughter, friendly games, and good company.",
  },
];

export default function Spaces() {
  const [selectedSpace, setSelectedSpace] =
    useState<(typeof spaces)[number] | null>(null);

  return (
    <section
      id="spaces"
      className="bg-background px-5 py-20 text-foreground sm:px-6 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.3em] text-primary sm:text-xs">
            Find Your Escape
          </p>

          <h2 className="font-serif text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            A little space for
            <br />
            every kind of soul.
          </h2>

          <p className="mt-5 max-w-xl font-sans text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base sm:leading-8">
            Whether you seek silence, inspiration, or good company,
            there's a little corner of Alpas waiting for you.
          </p>
        </div>

        {/* Editorial staggered cards */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {spaces.map((space, index) => (
            <button
              key={space.id}
              type="button"
              onClick={() => setSelectedSpace(space)}
              aria-label={`Discover ${space.name}`}
              className={`group relative min-h-[22rem] overflow-hidden rounded-2xl bg-[#6C584C] text-left text-[#F0EAD2] transition-shadow duration-300 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7B8F4B] sm:min-h-[24rem] ${
                index === 0
                  ? "md:row-span-2 md:min-h-[48rem]"
                  : ""
              }`}
            >
              {/* Background photograph */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                style={{
                  backgroundImage: `url('${space.image}')`,
                }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/5" />

              {/* Card content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 md:p-9">
                <p className="mb-3 font-sans text-[10px] tracking-[0.25em] text-[#DDE5B6] sm:text-xs">
                  {space.number} / ALPAS SPACES
                </p>

                <h3 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">
                  {space.name}
                </h3>

                <p className="mt-3 font-serif text-base italic text-[#F0EAD2]/90 sm:text-lg">
                  {space.subtitle}
                </p>

                <span className="mt-5 inline-block border-b border-[#DDE5B6] pb-1 font-sans text-[10px] uppercase tracking-widest text-[#DDE5B6] transition-all duration-300 group-hover:tracking-[0.2em] sm:mt-6 sm:text-xs">
                  Discover this space →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Space detail dialog */}
      {selectedSpace && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:p-5"
          onClick={() => setSelectedSpace(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="space-dialog-title"
            className="relative my-auto max-h-[calc(100svh-2rem)] w-full max-w-xl overflow-y-auto rounded-2xl bg-background p-6 text-foreground shadow-2xl sm:max-h-[calc(100svh-2.5rem)] sm:p-8 md:p-12"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedSpace(null)}
              aria-label="Close details"
              className="absolute right-4 top-4 rounded-full p-2 transition-colors hover:bg-muted sm:right-5 sm:top-5"
            >
              <X size={20} />
            </button>

            <p className="mb-4 pr-10 font-sans text-[10px] uppercase tracking-[0.3em] text-primary sm:text-xs">
              {selectedSpace.number} / ALPAS SPACES
            </p>

            <h3
              id="space-dialog-title"
              className="font-serif text-3xl font-medium sm:text-4xl"
            >
              {selectedSpace.name}
            </h3>

            <p className="mt-4 font-serif text-lg italic text-muted-foreground sm:text-xl">
              {selectedSpace.subtitle}
            </p>

            <p className="mt-6 font-sans text-sm leading-7 text-muted-foreground sm:mt-7 sm:text-base sm:leading-8">
              {selectedSpace.description}
            </p>

            <p className="mt-5 border-l-2 border-primary pl-4 font-serif text-sm italic sm:mt-6 sm:text-base">
              {selectedSpace.detail}
            </p>

            <button
              type="button"
              onClick={() => setSelectedSpace(null)}
              className="mt-7 rounded-full bg-primary px-7 py-3 font-sans text-sm font-bold text-primary-foreground transition-opacity hover:opacity-85 sm:mt-9"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
