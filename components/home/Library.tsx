
"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Sparkles,
  X,
} from "lucide-react";

type Category =
  | "All Books"
  | "Romance"
  | "Fantasy"
  | "Historical"
  | "Young Adult"
  | "Gothic";

type Book = {
  id: number;
  title: string;
  author: string;
  isbn: string;
  category: Exclude<Category, "All Books">;
  ageGroup: string;
  year: string;
  description: string;
  contentNote: string;
  cover: string;
  coverAccent: string;
  coverText: string;
  featured?: boolean;
};

const categories: Category[] = [
  "All Books",
  "Romance",
  "Fantasy",
  "Historical",
  "Young Adult",
  "Gothic",
];

const books: Book[] = [
  {
    id: 1,
    title: "One Last Stop",
    author: "Casey McQuiston",
    isbn: "9781250244499",
    category: "Romance",
    ageGroup: "Adult",
    year: "2021",
    description:
      "August never believed in magic or cinematic love stories. Then she meets Jane, a charming woman on her subway commute who turns out to be displaced in time from the 1970s. A warm, magical romance about finding love in the most unexpected places.",
    contentNote: "Mature romantic themes and sexual content.",
    cover: "linear-gradient(145deg, #314C43, #17251F 75%)",
    coverAccent: "#DDE5B6",
    coverText: "A LOVE\nOUT OF\nTIME",
    featured: true,
  },
  {
    id: 2,
    title: "Delilah Green Doesn't Care",
    author: "Ashley Herring Blake",
    isbn: "9780593336403",
    category: "Romance",
    ageGroup: "Adult",
    year: "2022",
    description:
      "A photographer returns to her hometown for a wedding assignment and finds herself drawn to a woman from her past. An enemies-to-lovers story about old wounds, unexpected connections, and second chances.",
    contentNote: "Mature romantic themes and sexual content.",
    cover: "linear-gradient(145deg, #B47768, #70483F 75%)",
    coverAccent: "#F5D9B9",
    coverText: "A LITTLE\nTOWN,\nA BIG LOVE",
  },
  {
    id: 3,
    title: "Kiss Her Once for Me",
    author: "Alison Cochrun",
    isbn: "9781982191139",
    category: "Romance",
    ageGroup: "Adult",
    year: "2022",
    description:
      "A struggling artist enters a holiday arrangement with her landlord, only to discover that his sister is the woman she once shared an unforgettable kiss with. A festive story of love, complicated feelings, and second chances.",
    contentNote: "Mature romantic themes.",
    cover: "linear-gradient(145deg, #8C4147, #492C37 75%)",
    coverAccent: "#F3D6A2",
    coverText: "KISS HER\nONCE\nFOR ME",
  },
  {
    id: 4,
    title: "The Honey Witch",
    author: "Sydney J. Shields",
    isbn: "9780356522524",
    category: "Fantasy",
    ageGroup: "Adult",
    year: "2024",
    description:
      "On the Isle of Innisfree, a young witch inherits a magical calling and a curse that makes her impossible to love. But when a skeptical woman arrives, her carefully guarded world begins to change.",
    contentNote: "Romantic themes and fantasy peril.",
    cover: "linear-gradient(145deg, #B28B52, #586247 80%)",
    coverAccent: "#F8E9C8",
    coverText: "THE\nHONEY\nWITCH",
    featured: true,
  },
  {
    id: 5,
    title: "The Priory of the Orange Tree",
    author: "Samantha Shannon",
    isbn: "9781408883464",
    category: "Fantasy",
    ageGroup: "Adult",
    year: "2019",
    description:
      "An epic tale of divided kingdoms, ancient dragons, powerful women, and a world threatened by an awakening evil. A sweeping fantasy with a meaningful sapphic romance.",
    contentNote: "War, violence, and mature themes.",
    cover: "linear-gradient(145deg, #C47745, #713D35 75%)",
    coverAccent: "#F4D9A4",
    coverText: "THE PRIORY\nOF THE\nORANGE TREE",
  },
  {
    id: 6,
    title: "The Jasmine Throne",
    author: "Tasha Suri",
    isbn: "9780316538510",
    category: "Fantasy",
    ageGroup: "Adult",
    year: "2021",
    description:
      "An imprisoned princess and a maid with dangerous secrets form an unlikely alliance. Together, they become entangled in a struggle involving forbidden magic, political power, and a changing empire.",
    contentNote: "Violence, oppression, and political conflict.",
    cover: "linear-gradient(145deg, #536B49, #293D32 75%)",
    coverAccent: "#E5D5A9",
    coverText: "THE\nJASMINE\nTHRONE",
  },
  {
    id: 7,
    title: "Last Night at the Telegraph Club",
    author: "Malinda Lo",
    isbn: "9780525555278",
    category: "Historical",
    ageGroup: "Young Adult",
    year: "2021",
    description:
      "In 1950s San Francisco, seventeen-year-old Lily discovers a hidden world of queer community and begins to understand her identity and feelings for another girl.",
    contentNote: "Historical homophobia, racism, and discrimination.",
    cover: "linear-gradient(145deg, #C16E51, #74423C 75%)",
    coverAccent: "#F5D9B9",
    coverText: "LAST NIGHT\nAT THE\nTELEGRAPH CLUB",
    featured: true,
  },
  {
    id: 8,
    title: "Fingersmith",
    author: "Sarah Waters",
    isbn: "9781844081653",
    category: "Historical",
    ageGroup: "Adult",
    year: "2002",
    description:
      "Set in Victorian England, this atmospheric novel follows a young thief drawn into an elaborate scheme involving a wealthy heiress. Secrets, betrayal, and unexpected affection turn everything upside down.",
    contentNote: "Violence, abuse, and mature themes.",
    cover: "linear-gradient(145deg, #424C55, #202A32 75%)",
    coverAccent: "#D5C8A9",
    coverText: "A TALE OF\nSECRETS &\nDECEPTION",
  },
  {
    id: 9,
    title: "Under the Udala Trees",
    author: "Chinelo Okparanta",
    isbn: "9780544003446",
    category: "Historical",
    ageGroup: "Adult",
    year: "2015",
    description:
      "During and after the Nigerian Civil War, a young woman discovers love and struggles to reconcile her identity with the expectations of family, faith, and society.",
    contentNote: "War, grief, homophobia, and discrimination.",
    cover: "linear-gradient(145deg, #66744C, #35452F 75%)",
    coverAccent: "#E8DDBB",
    coverText: "UNDER THE\nUDALA\nTREES",
  },
  {
    id: 10,
    title: "She Drives Me Crazy",
    author: "Kelly Quindlen",
    isbn: "9781250821126",
    category: "Young Adult",
    ageGroup: "Young Adult",
    year: "2021",
    description:
      "After a frustrating collision with her school's cheerleading star, a teenage basketball player finds herself in a fake-dating arrangement that might become something real.",
    contentNote: "Teen romance and high-school drama.",
    cover: "linear-gradient(145deg, #D47D83, #8B4859 75%)",
    coverAccent: "#FFE5D8",
    coverText: "SHE\nDRIVES\nME CRAZY",
  },
  {
    id: 11,
    title: "Hani and Ishu's Guide to Fake Dating",
    author: "Adiba Jaigirdar",
    isbn: "9781645677543",
    category: "Young Adult",
    ageGroup: "Young Adult",
    year: "2021",
    description:
      "Two Bangladeshi Irish girls agree to fake-date for very different reasons. But as their arrangement continues, they begin to discover that their feelings may be genuine.",
    contentNote: "Teen romance, identity, and family expectations.",
    cover: "linear-gradient(145deg, #D28D4F, #94523B 75%)",
    coverAccent: "#FFE8C6",
    coverText: "A GUIDE TO\nFAKE\nDATING",
  },
  {
    id: 12,
    title: "Carmilla",
    author: "J. Sheridan Le Fanu",
    isbn: "9780815652045",
    category: "Gothic",
    ageGroup: "Classic",
    year: "1872",
    description:
      "A mysterious young woman enters the life of a secluded household, forming an intense connection with its daughter. A haunting Gothic novella often discussed for its queer subtext and vampire mythology.",
    contentNote: "Gothic horror, obsession, and violence.",
    cover: "linear-gradient(145deg, #593A49, #29232D 75%)",
    coverAccent: "#E6C7B5",
    coverText: "CARMILLA\nA GOTHIC\nTALE",
  },
];

function BookCover({
  book,
  large = false,
}: {
  book: Book;
  large?: boolean;
}) {
  return (
    <div
      className={`relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-xl ${
        large ? "max-w-[17.5rem]" : ""
      }`}
      style={{ background: book.cover }}
    >
      {/* Decorative fallback cover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
        <span
          className="mb-5 text-[9px] tracking-[0.3em]"
          style={{ color: book.coverAccent }}
        >
          ALPAS LIBRARY
        </span>

        <h3
          className="whitespace-pre-line font-serif text-xl font-semibold leading-snug"
          style={{ color: book.coverAccent }}
        >
          {book.coverText}
        </h3>

        <div
          className="my-4 h-px w-10"
          style={{ backgroundColor: book.coverAccent }}
        />

        <p
          className="text-xs"
          style={{ color: book.coverAccent }}
        >
          {book.author}
        </p>
      </div>

      {/* Original published book cover */}
      <img
        src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
        alt={`Published cover of ${book.title} by ${book.author}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

export default function Library() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All Books");

  const [selectedBook, setSelectedBook] =
    useState<Book | null>(null);

  const filteredBooks =
    activeCategory === "All Books"
      ? books
      : books.filter(
          (book) => book.category === activeCategory
        );

  // Handle modal keyboard interaction and page scroll locking
  useEffect(() => {
    if (!selectedBook) return;

    const previousOverflow = document.body.style.overflow;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedBook(null);
      }
    }

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedBook]);

  return (
    <section
      id="library"
      className="relative overflow-hidden bg-[#F0EAD2] px-5 py-20 text-[#17251F] sm:px-6 sm:py-24 md:px-10 lg:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full border border-[#7B8F4B]/15" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full border border-[#7B8F4B]/15" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-5 flex items-center justify-center gap-3 text-[#7B8F4B]">
            <span className="h-px w-7 bg-[#7B8F4B]/50 sm:w-10" />
            <Sparkles size={15} />
            <span className="text-[10px] tracking-[0.25em] sm:text-xs sm:tracking-[0.3em]">
              THE ALPAS COLLECTION
            </span>
            <Sparkles size={15} />
            <span className="h-px w-7 bg-[#7B8F4B]/50 sm:w-10" />
          </div>

          <h2 className="mb-5 font-serif text-4xl font-medium leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Stories Worth
            <br />
            <span className="italic text-[#7B8F4B]">
              Getting Lost In.
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-[#6C584C] sm:text-base sm:leading-8 md:text-lg">
            A little collection of stories about love, longing,
            magic, and becoming. Find a story that feels like
            it was waiting for you.
          </p>
        </div>

        {/* Collection banner */}
        <div className="relative mb-12 overflow-hidden rounded-sm bg-[#17251F] px-5 py-8 text-[#F0EAD2] sm:mb-16 sm:px-7 sm:py-10 md:px-12 md:py-14">
          <div className="pointer-events-none absolute -right-10 -top-24 h-72 w-72 rounded-full border border-[#DDE5B6]/20" />
          <div className="pointer-events-none absolute -right-2 -top-16 h-56 w-56 rounded-full border border-[#DDE5B6]/15" />

          <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="mb-4 inline-block text-xs tracking-[0.3em] text-[#DDE5B6]">
                A SPECIAL COLLECTION
              </span>

              <h3 className="mb-4 font-serif text-2xl italic sm:text-3xl md:text-4xl">
                The Sapphic Collection
              </h3>

              <p className="max-w-xl text-sm leading-7 text-[#F0EAD2]/75">
                For the stories that make us feel seen. Explore
                books celebrating women who love women, queer
                identity, self-discovery, and the many ways
                love can unfold.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-4">
              <BookOpen
                size={38}
                strokeWidth={1}
                className="text-[#DDE5B6]"
              />

              <div>
                <p className="font-serif text-4xl">
                  {books.length.toString().padStart(2, "0")}
                </p>
                <p className="text-xs tracking-[0.2em] text-[#DDE5B6]">
                  BOOKS TO EXPLORE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Browse heading */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs tracking-[0.25em] text-[#7B8F4B]">
              TAKE A LOOK AROUND
            </p>

            <h3 className="font-serif text-3xl md:text-4xl">
              Browse the Bookshelf
            </h3>
          </div>

          <p
            className="text-sm text-[#6C584C]"
            aria-live="polite"
            aria-atomic="true"
          >
            Showing {filteredBooks.length}{" "}
            {filteredBooks.length === 1 ? "book" : "books"}
          </p>
        </div>

        {/* Category filters */}
        <div className="-mx-5 mb-10 overflow-x-auto px-5 pb-3 sm:mx-0 sm:px-0">
          <div className="flex w-max gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-xs tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B8F4B] motion-reduce:transition-none ${
                  activeCategory === category
                    ? "border-[#17251F] bg-[#17251F] text-[#F0EAD2]"
                    : "border-[#17251F]/20 bg-transparent text-[#17251F] hover:border-[#7B8F4B] hover:text-[#7B8F4B]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Book grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {filteredBooks.map((book) => (
            <article
              key={book.id}
              className="group flex min-w-0 flex-col"
            >
              <button
                type="button"
                onClick={() => setSelectedBook(book)}
                aria-label={`View details for ${book.title}`}
                className="mb-5 block w-full rounded-sm text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7B8F4B]"
              >
                <div className="relative mb-5 overflow-hidden bg-[#D9D0B9] p-2 shadow-md transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
                  <BookCover book={book} />

                  {book.featured && (
                    <span className="absolute left-3 top-3 bg-[#DDE5B6] px-2 py-1 text-[8px] tracking-[0.15em] text-[#17251F]">
                      FEATURED
                    </span>
                  )}

                  <div className="absolute inset-2 flex items-center justify-center bg-[#17251F]/0 opacity-0 transition-all duration-300 group-hover:bg-[#17251F]/65 group-hover:opacity-100 motion-reduce:transition-none">
                    <span className="flex items-center gap-2 border border-[#F0EAD2]/70 px-4 py-2 text-xs tracking-wider text-[#F0EAD2]">
                      VIEW BOOK
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#7B8F4B]">
                    {book.category}
                  </span>

                  <span className="text-[10px] text-[#6C584C]">
                    {book.ageGroup}
                  </span>
                </div>

                <h4 className="mb-1 font-serif text-base leading-snug transition-colors group-hover:text-[#7B8F4B] sm:text-lg md:text-xl">
                  {book.title}
                </h4>

                <p className="text-xs text-[#6C584C]">
                  {book.author}
                </p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedBook(book)}
                aria-label={`Discover ${book.title}`}
                className="mt-auto flex w-fit items-center gap-2 border-b border-[#7B8F4B]/50 pb-1 text-xs tracking-wide text-[#17251F] transition-colors hover:border-[#7B8F4B] hover:text-[#7B8F4B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7B8F4B]"
              >
                Discover this book
                <ArrowUpRight size={13} />
              </button>
            </article>
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-16 border-t border-[#17251F]/15 pt-8 text-center sm:mt-24 sm:pt-10">
          <Sparkles
            size={20}
            className="mx-auto mb-4 text-[#7B8F4B]"
          />

          <p className="font-serif text-xl italic text-[#6C584C] sm:text-2xl md:text-3xl">
            Every story deserves a place on the shelf.
          </p>

          <p className="mt-3 text-xs tracking-[0.2em] text-[#7B8F4B]">
            FIND YOUR NEXT FAVORITE AT ALPAS
          </p>
        </div>
      </div>

      {/* Book details modal */}
      {selectedBook && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto bg-black/70 p-3 backdrop-blur-sm sm:p-5"
          onClick={() => setSelectedBook(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-modal-title"
            className="relative my-auto max-h-[calc(100svh-1.5rem)] w-full max-w-3xl overflow-x-hidden overflow-y-auto rounded-sm bg-[#F0EAD2] shadow-2xl sm:max-h-[calc(100svh-2.5rem)]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedBook(null)}
              aria-label="Close book details"
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#17251F] text-[#F0EAD2] transition-colors hover:bg-[#7B8F4B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B8F4B] sm:right-4 sm:top-4"
            >
              <X size={18} />
            </button>

            <div className="grid min-h-0 md:grid-cols-[0.8fr_1.2fr]">
              {/* Modal book cover */}
              <div className="flex items-center justify-center bg-[#DED5BD] p-6 sm:p-8 md:p-10">
                <BookCover book={selectedBook} large />
              </div>

              {/* Modal book information */}
              <div className="flex flex-col justify-center p-5 sm:p-7 md:p-10">
                <p className="mb-3 text-xs tracking-[0.25em] text-[#7B8F4B]">
                  FROM THE ALPAS BOOKSHELF
                </p>

                <h3
                  id="book-modal-title"
                  className="mb-2 pr-8 font-serif text-3xl leading-tight md:text-4xl"
                >
                  {selectedBook.title}
                </h3>

                <p className="mb-6 text-sm text-[#6C584C]">
                  By {selectedBook.author}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#DDE5B6] px-3 py-1 text-xs text-[#17251F]">
                    {selectedBook.category}
                  </span>

                  <span className="rounded-full border border-[#17251F]/20 px-3 py-1 text-xs text-[#17251F]">
                    {selectedBook.ageGroup}
                  </span>

                  <span className="rounded-full border border-[#17251F]/20 px-3 py-1 text-xs text-[#17251F]">
                    {selectedBook.year}
                  </span>
                </div>

                <h4 className="mb-2 font-serif text-lg">
                  About this story
                </h4>

                <p className="mb-7 text-sm leading-7 text-[#6C584C]">
                  {selectedBook.description}
                </p>

                <div className="border-l-2 border-[#7B8F4B] bg-[#DDE5B6]/40 p-4">
                  <p className="mb-1 text-xs font-semibold tracking-wide text-[#17251F]">
                    A LITTLE NOTE
                  </p>

                  <p className="text-xs leading-6 text-[#6C584C]">
                    {selectedBook.contentNote}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedBook(null)}
                  className="mt-8 w-fit border border-[#17251F] px-6 py-3 text-xs tracking-[0.15em] text-[#17251F] transition-all hover:bg-[#17251F] hover:text-[#F0EAD2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7B8F4B]"
                >
                  BACK TO THE BOOKSHELF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
