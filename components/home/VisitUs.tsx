
import {
  ArrowUpRight,
  Clock,
  Coffee,
  Camera,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const openingHours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday – Friday", hours: "9:00 AM – 9:00 PM" },
  { day: "Saturday – Sunday", hours: "9:00 AM – 9:00 PM" },
];

export default function VisitUs() {
  return (
    <section
      id="visit"
      className="relative overflow-hidden bg-[#17251F] px-5 py-20 text-[#F0EAD2] sm:px-6 sm:py-24 md:px-10 lg:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full border border-[#DDE5B6]/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-[#DDE5B6]/10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-5 flex items-center justify-center gap-3 text-[#DDE5B6]">
            <span className="h-px w-7 bg-[#DDE5B6]/40 sm:w-10" />
            <Coffee size={16} />
            <span className="text-[10px] tracking-[0.25em] sm:text-xs sm:tracking-[0.3em]">
              COME FIND YOUR CORNER
            </span>
            <Coffee size={16} />
            <span className="h-px w-7 bg-[#DDE5B6]/40 sm:w-10" />
          </div>

          <h2 className="font-serif text-4xl font-medium leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            We'd Love to
            <br />
            <span className="italic text-[#DDE5B6]">
              Have You Here.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#F0EAD2]/65 sm:mt-6 sm:text-base">
            Your next favorite reading corner might be closer
            than you think. Drop by, settle in, and let the
            hours wander.
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Location card */}
          <div className="flex flex-col overflow-hidden bg-[#F0EAD2] text-[#17251F]">
            {/* Decorative map panel */}
            <div className="relative flex min-h-[17rem] items-center justify-center overflow-hidden bg-[#DDE5B6] p-6 sm:min-h-[19rem] sm:p-8 md:min-h-[20rem]">
              <div className="absolute inset-0 opacity-40">
                <div className="absolute left-[12%] top-0 h-full w-px rotate-25 bg-[#7B8F4B]" />
                <div className="absolute left-[38%] top-0 h-full w-px rotate-[-18deg] bg-[#7B8F4B]" />
                <div className="absolute left-[72%] top-0 h-full w-px rotate-12 bg-[#7B8F4B]" />
                <div className="absolute left-0 top-[25%] h-px w-full rotate-[8deg] bg-[#7B8F4B]" />
                <div className="absolute left-0 top-[68%] h-px w-full rotate-[-10deg] bg-[#7B8F4B]" />
                <div className="absolute left-0 top-[45%] h-px w-full rotate-2 bg-[#7B8F4B]" />
              </div>

              <div className="absolute left-5 top-5 rounded-full border border-[#7B8F4B]/30 bg-[#F0EAD2]/80 px-3 py-2 text-[9px] tracking-[0.15em] text-[#52613A] sm:left-8 sm:top-8 sm:px-4 sm:text-[10px] sm:tracking-[0.2em]">
                QUEZON CITY, PH
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#F0EAD2] bg-[#17251F] text-[#DDE5B6] shadow-xl sm:h-16 sm:w-16">
                  <MapPin size={29} strokeWidth={1.4} />
                </div>

                <div className="bg-[#F0EAD2] px-5 py-3 text-center shadow-lg">
                  <p className="font-serif text-2xl">Alpas</p>
                  <p className="mt-1 text-[9px] tracking-[0.2em] text-[#7B8F4B]">
                    YOUR LITTLE ESCAPE
                  </p>
                </div>
              </div>

              <div className="absolute bottom-5 right-5 font-serif text-[10px] italic text-[#52613A] sm:bottom-7 sm:right-7 sm:text-xs">
                Somewhere to wander.
              </div>
            </div>

            {/* Address details */}
            <div className="flex flex-1 flex-col p-6 sm:p-8 md:p-10">
              <p className="mb-3 text-[10px] tracking-[0.25em] text-[#7B8F4B]">
                FIND OUR LITTLE CORNER
              </p>

              <h3 className="mb-5 font-serif text-2xl sm:text-3xl">
                Come on over.
              </h3>

              <div className="flex items-start gap-4">
                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-[#7B8F4B]"
                />
                <p className="text-sm leading-7 text-[#6C584C]">
                  14 Pahina Street,
                  <br />
                  Brgy. Malaya, Quezon City,
                  <br />
                  Metro Manila, Philippines
                </p>
              </div>

              <div className="mt-8 border-t border-[#17251F]/15 pt-6 sm:mt-auto">
                <p className="text-xs leading-6 text-[#6C584C]">
                  A fictional address created for the Alpas
                  website project.
                </p>
              </div>
            </div>
          </div>

          {/* Hours and contact */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Opening hours */}
            <div className="bg-[#24362C] p-6 sm:p-8 md:p-10">
              <div className="mb-7 flex items-center gap-3">
                <Clock
                  size={21}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#DDE5B6]"
                />
                <p className="text-[10px] tracking-[0.25em] text-[#DDE5B6]">
                  WHEN THE DOORS ARE OPEN
                </p>
              </div>

              <h3 className="mb-7 font-serif text-2xl sm:text-3xl">
                Opening Hours
              </h3>

              <div className="space-y-5">
                {openingHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-[#F0EAD2]/10 pb-4 text-sm"
                  >
                    <span className="text-[#F0EAD2]/75">
                      {item.day}
                    </span>

                    <span
                      className={
                        item.hours === "Closed"
                          ? "italic text-[#A98467]"
                          : "text-[#DDE5B6]"
                      }
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs italic text-[#F0EAD2]/45">
                Take your time. There's no rush here.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex-1 bg-[#F0EAD2] p-6 text-[#17251F] sm:p-8 md:p-10">
              <p className="mb-3 text-[10px] tracking-[0.25em] text-[#7B8F4B]">
                LET'S KEEP IN TOUCH
              </p>

              <h3 className="mb-7 font-serif text-2xl sm:text-3xl">
                Say hello.
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:hello@alpas.cafe"
                  className="group flex items-center justify-between gap-4 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#7B8F4B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F0EAD2]"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <Mail
                      size={20}
                      className="shrink-0 text-[#7B8F4B]"
                    />
                    <div className="min-w-0">
                      <p className="mb-1 text-[9px] tracking-[0.2em] text-[#A98467]">
                        EMAIL
                      </p>
                      <p className="break-all text-sm">
                        hello@alpas.cafe
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </a>

                <a
                  href="https://www.instagram.com/alpas.cafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Alpas on Instagram (opens in a new tab)"
                  className="group flex items-center justify-between gap-4 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#7B8F4B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F0EAD2]"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <Camera
                      size={20}
                      className="shrink-0 text-[#7B8F4B]"
                    />
                    <div>
                      <p className="mb-1 text-[9px] tracking-[0.2em] text-[#A98467]">
                        INSTAGRAM
                      </p>
                      <p className="text-sm">@alpas.cafe</p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </a>

                <div className="flex items-center gap-4">
                  <Phone
                    size={20}
                    className="shrink-0 text-[#7B8F4B]"
                  />
                  <div>
                    <p className="mb-1 text-[9px] tracking-[0.2em] text-[#A98467]">
                      PHONE
                    </p>
                    <p className="text-sm">(02) 0000-0000</p>
                    <p className="mt-1 text-[10px] text-[#A98467]">
                      Fictional contact number
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing invitation */}
        <div className="mt-16 text-center sm:mt-24">
          <div className="mx-auto mb-6 h-px w-16 bg-[#DDE5B6]/40" />

          <p className="mb-4 text-[10px] tracking-[0.25em] text-[#DDE5B6] sm:text-xs sm:tracking-[0.3em]">
            YOUR TABLE IS WAITING
          </p>

          <h3 className="font-serif text-2xl italic leading-relaxed sm:text-3xl md:text-5xl">
            Until then, keep wandering.
          </h3>

          <p className="mt-5 font-serif text-base text-[#F0EAD2]/55 sm:text-lg">
            With love, Alpas.
          </p>
        </div>
      </div>
    </section>
  );
}
