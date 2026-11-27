
"use client";

import { useMemo, useState } from "react";
import {
  Search,
  ShoppingBag,
  Plus,
  Minus,
  ArrowUpRight,
  Coffee,
  BookOpen,
  X,
} from "lucide-react";

import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/home/Footer";
import { products } from "@/data/menu";
import { useCart } from "@/components/cart/CartContext";

const categories = [
  "ALL",
  "SIGNATURE COFFEE",
  "NON-COFFEE",
  "TEA & REFRESHERS",
  "FRESHLY BAKED",
  "DESSERTS",
  "SAVORY BITES",
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] =
    useState<(typeof products)[number] | null>(null);

    const [selectedSize, setSelectedSize] = useState("Regular");
    const [quantity, setQuantity] = useState(1);

  const { addToCart, totalItems } = useCart();
const selectedProductPrice =
  selectedProduct?.type === "drink" &&
  selectedProduct.hasSizes !== false &&
  selectedSize === "Large"
    ? selectedProduct.largePrice ?? selectedProduct.price
    : selectedProduct?.price ?? 0;

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "ALL" ||
        product.category === activeCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  function handleAddToCart(product: (typeof products)[number]) {
  addToCart(
    {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size:
        product.type === "drink" && product.hasSizes !== false
          ? "Regular"
          : undefined,
    },
    1
  );
}

  function openProduct(product: (typeof products)[number]) {
  setSelectedProduct(product);
  setSelectedSize("Regular");
  setQuantity(1);
}

function closeProduct() {
  setSelectedProduct(null);
  setSelectedSize("Regular");
  setQuantity(1);
}


function addSelectedProduct() {
  if (!selectedProduct) return;

  addToCart(
    {
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProductPrice,
      image: selectedProduct.image,
      size:
        selectedProduct.type === "drink"
          ? selectedSize
          : undefined,
    },
    quantity
  );

  closeProduct();
}


  return (
    <main className="min-h-screen overflow-hidden bg-[#17251F] text-[#F0EAD2]">
      <Navigation />

      {/* =====================================
          MENU INTRODUCTION
      ====================================== */}
      <section className="relative px-6 pb-24 pt-40 md:px-12 md:pb-32 md:pt-48">

        {/* Decorative background details */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-20 h-80 w-80 rounded-full border border-[#DDE5B6]/10" />
          <div className="absolute -left-20 top-32 h-56 w-56 rounded-full border border-[#DDE5B6]/10" />
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full border border-[#DDE5B6]/10" />

          <span className="absolute right-[12%] top-36 font-serif text-8xl italic text-[#DDE5B6]/5 md:text-[180px]">
            A
          </span>
        </div>

        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">

            {/* Main heading */}
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-[#A98467]" />

                <p className="text-[10px] tracking-[0.35em] text-[#DDE5B6]">
                  THE ALPAS CAFÉ COLLECTION
                </p>
              </div>

              <h1 className="font-serif text-6xl leading-[1.05] md:text-8xl">
                A menu for
                <br />
                <span className="italic text-[#DDE5B6]">
                  wandering
                </span>{" "}
                souls.
              </h1>

              <p className="mt-8 max-w-lg text-sm leading-8 text-[#F0EAD2]/65 md:text-base">
                A thoughtful collection of comforting cups,
                freshly baked delights, and little indulgences.
                Made to be enjoyed slowly, one moment at a time.
              </p>

              <div className="mt-10 flex items-center gap-3">
                <Coffee size={17} className="text-[#A98467]" />

                <span className="text-[10px] tracking-[0.25em] text-[#DDE5B6]/80">
                  BREWED WITH CARE. SERVED WITH HEART.
                </span>
              </div>
            </div>

            {/* Editorial side note */}
            <div className="relative mx-auto w-full max-w-sm border border-[#DDE5B6]/20 p-7 md:ml-auto md:p-9">

              <div className="absolute -right-2 -top-2 h-8 w-8 border-r border-t border-[#A98467]" />
              <div className="absolute -bottom-2 -left-2 h-8 w-8 border-b border-l border-[#A98467]" />

              <p className="mb-7 text-[9px] tracking-[0.3em] text-[#A98467]">
                A LITTLE REMINDER
              </p>

              <BookOpen
                size={28}
                strokeWidth={1}
                className="mb-6 text-[#DDE5B6]"
              />

              <p className="font-serif text-3xl italic leading-relaxed text-[#F0EAD2]">
                "There is always time for one more chapter...
                and one more cup."
              </p>

              <div className="my-7 h-px w-full bg-[#DDE5B6]/20" />

              <p className="text-[9px] tracking-[0.25em] text-[#DDE5B6]/60">
                YOUR TABLE IS WAITING
              </p>
            </div>

          </div>

          {/* Bottom decorative line */}
          <div className="mt-20 flex items-center gap-5 border-t border-[#DDE5B6]/15 pt-6">
            <span className="font-serif text-sm italic text-[#A98467]">
              01
            </span>

            <div className="h-px flex-1 bg-[#DDE5B6]/15" />

            <span className="text-[9px] tracking-[0.3em] text-[#F0EAD2]/40">
              EXPLORE OUR OFFERINGS
            </span>
          </div>

        </div>
      </section>

      {/* =====================================
          MENU COLLECTION
      ====================================== */}
      <section className="bg-[#F0EAD2] px-6 py-20 text-[#17251F] md:px-12 md:py-28">

        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              <p className="mb-4 text-[10px] tracking-[0.35em] text-[#A98467]">
                SOMETHING TO SAVOR
              </p>

              <h2 className="font-serif text-5xl leading-tight md:text-6xl">
                The café
                <br />
                <span className="italic text-[#7B8F4B]">
                  collection.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#6C584C]">
                Find your familiar favorite or discover something
                new. Every little offering has a story of its own.
              </p>
            </div>

            {/* Bag indicator */}
            <div className="flex items-center gap-4 border-y border-[#17251F]/15 py-5 md:min-w-52.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#17251F] text-[#F0EAD2]">
                <ShoppingBag size={17} />
              </div>

              <div>
                <p className="text-[9px] tracking-[0.2em] text-[#6C584C]">
                  YOUR LITTLE BAG
                </p>

                <p className="mt-1 font-serif text-xl">
                  {totalItems}{" "}
                  {totalItems === 1 ? "item" : "items"}
                </p>
              </div>
            </div>

          </div>

          {/* Search and filters */}
          <div className="mb-12 border-y border-[#17251F]/15 py-6">

            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

              {/* Category filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const isActive = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-3 text-[9px] tracking-[0.15em] transition-all duration-300 ${
                        isActive
                          ? "bg-[#17251F] text-[#F0EAD2]"
                          : "border border-[#17251F]/15 text-[#6C584C] hover:border-[#17251F] hover:text-[#17251F]"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              {/* Search */}
              <div className="flex items-center gap-3 border-b border-[#17251F]/30 pb-3 lg:w-64">
                <Search
                  size={17}
                  className="shrink-0 text-[#7B8F4B]"
                />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(event.target.value)
                  }
                  placeholder="Find something lovely..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-[#6C584C]/60"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="text-[#6C584C] transition hover:text-[#17251F]"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

            </div>
          </div>

          {/* Results heading */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-[9px] tracking-[0.25em] text-[#A98467]">
                CURRENTLY BROWSING
              </p>

              <h3 className="mt-2 font-serif text-2xl">
                {activeCategory === "ALL"
                  ? "All offerings"
                  : activeCategory.toLowerCase().replace(/\b\w/g, (letter) =>
                      letter.toUpperCase()
                    )}
              </h3>
            </div>

            <p className="text-[10px] tracking-[0.15em] text-[#6C584C]">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "OFFERING" : "OFFERINGS"}
            </p>
          </div>

          {/* Product grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {filteredProducts.map((product, index) => (
                <article
                  key={product.id}
                  className="group flex flex-col"
                >

                  
                {/* Product image */}
                <button
                type="button"
                onClick={() => openProduct(product)}
                aria-label={`View details for ${product.name}`}
                className="group relative aspect-4/5 w-full overflow-hidden bg-[#DDE5B6]/40 text-left"
                >
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#17251F]/30 via-transparent to-transparent opacity-60" />

                {/* Product number */}
                <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#F0EAD2]/70 bg-[#17251F]/60 font-serif text-sm italic text-[#F0EAD2] backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                </span>

                {/* Category label */}
                <span className="absolute bottom-4 left-4 bg-[#F0EAD2] px-3 py-2 text-[8px] tracking-[0.18em] text-[#17251F]">
                    {product.category}
                </span>

                {/* Hover decoration */}
                <span className="absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-[#F0EAD2] text-[#17251F] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                </span>
                </button>


                  {/* Product information */}
                  <div className="flex flex-1 flex-col pt-5">

                    <div className="flex items-start justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => openProduct(product)}
                        className="text-left font-serif text-2xl leading-tight transition-colors hover:text-[#7B8F4B]"
                        >
                        {product.name}
                        </button>

                      <span className="shrink-0 pt-1 text-sm font-medium">
                        ₱{product.price}
                      </span>
                    </div>

                    <p className="mt-3 flex-1 text-xs leading-7 text-[#6C584C]">
                      {product.description}
                    </p>

                    <div className="my-5 h-px w-full bg-[#17251F]/15" />

                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      className="flex w-full items-center justify-between border border-[#17251F] px-5 py-4 text-[9px] tracking-[0.2em] transition-all duration-300 hover:bg-[#17251F] hover:text-[#F0EAD2]"
                    >
                      <span>ADD TO BAG</span>

                      <Plus size={16} />
                    </button>

                  </div>
                </article>
              ))}

            </div>
          ) : (
            /* Empty search state */
            <div className="border border-[#17251F]/15 px-6 py-24 text-center">

              <BookOpen
                size={30}
                strokeWidth={1}
                className="mx-auto mb-6 text-[#7B8F4B]"
              />

              <h3 className="font-serif text-3xl italic">
                This page is still waiting to be written.
              </h3>

              <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#6C584C]">
                We couldn't find that particular offering.
                Perhaps another little discovery awaits?
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("ALL");
                }}
                className="mt-8 border border-[#17251F] px-7 py-4 text-[9px] tracking-[0.2em] transition hover:bg-[#17251F] hover:text-[#F0EAD2]"
              >
                EXPLORE ALL OFFERINGS
              </button>

            </div>
          )}

        </div>
      </section>

      {/* =====================================
          CLOSING SECTION
      ====================================== */}
      <section className="relative overflow-hidden px-6 py-24 text-center md:py-32">

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-[220px] italic text-[#DDE5B6]/[0.035] md:text-[360px]">
            A
          </span>
        </div>

        <div className="relative mx-auto max-w-2xl">

          <p className="mb-7 text-[9px] tracking-[0.35em] text-[#A98467]">
            BEFORE YOU TURN THE PAGE
          </p>

          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Every good story deserves
            <br />
            <span className="italic text-[#DDE5B6]">
              a good cup of coffee.
            </span>
          </h2>

          <div className="mx-auto my-9 h-px w-16 bg-[#A98467]" />

          <p className="text-[9px] tracking-[0.3em] text-[#F0EAD2]/50">
            WE'LL SAVE YOU A SEAT.
          </p>

        </div>
      </section>

      <Footer />

{/* =====================================
    PRODUCT DETAILS MODAL
====================================== */}
{selectedProduct && (
  <div
    className="fixed inset-0 z-100 flex items-center justify-center bg-[#101A15]/85 px-4 py-6 backdrop-blur-sm"
    onClick={closeProduct}
  >
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onClick={(event) => event.stopPropagation()}
      className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-[#F0EAD2] text-[#17251F] shadow-2xl"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={closeProduct}
        aria-label="Close product details"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#F0EAD2] text-[#17251F] shadow-md transition hover:bg-[#17251F] hover:text-[#F0EAD2]"
      >
        <X size={19} />
      </button>

      <div className="grid md:grid-cols-2">

        {/* Product image */}
        <div className="relative min-h-70 bg-[#DDE5B6]/40 md:min-h-137.5">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <span className="absolute bottom-5 left-5 bg-[#F0EAD2] px-4 py-3 text-[9px] tracking-[0.2em]">
            {selectedProduct.category}
          </span>
        </div>

        {/* Product information */}
        <div className="flex flex-col justify-center p-7 md:p-12">

          <p className="mb-5 text-[9px] tracking-[0.3em] text-[#A98467]">
            A LITTLE SOMETHING FROM ALPAS
          </p>

          <h2
            id="product-modal-title"
            className="font-serif text-4xl leading-tight md:text-5xl"
          >
            {selectedProduct.name}
          </h2>

          <div className="my-6 h-px w-16 bg-[#A98467]" />

          <p className="text-sm leading-8 text-[#6C584C]">
            {selectedProduct.description}
          </p>

          {/* Price */}
          <div className="mt-7">
            <p className="text-[9px] tracking-[0.2em] text-[#A98467]">
              PRICE
            </p>

            <p className="mt-2 font-serif text-3xl">
              ₱{selectedProductPrice}
            </p>
          </div>

          {/* Drink size selection */}
          {selectedProduct.type === "drink" &&
            selectedProduct.hasSizes !== false && (
            <div className="mt-8">
              <p className="mb-4 text-[9px] tracking-[0.2em] text-[#6C584C]">
                CHOOSE YOUR SIZE
              </p>

              <div className="grid grid-cols-2 gap-3">
                {["Regular", "Large"].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`border px-4 py-4 text-xs tracking-[0.1em] transition ${
                      selectedSize === size
                        ? "border-[#17251F] bg-[#17251F] text-[#F0EAD2]"
                        : "border-[#17251F]/25 text-[#6C584C] hover:border-[#17251F]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <p className="mt-3 text-[10px] text-[#6C584C]/70">
                Large size comes with an additional ₱25.
              </p>
            </div>
          )}

          {/* Quantity selector */}
          <div className="mt-8">
            <p className="mb-4 text-[9px] tracking-[0.2em] text-[#6C584C]">
              QUANTITY
            </p>

            <div className="flex w-fit items-center border border-[#17251F]/25">
              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => Math.max(1, current - 1))
                }
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
                className="flex h-11 w-12 items-center justify-center transition hover:bg-[#DDE5B6] disabled:cursor-not-allowed disabled:opacity-30"
              >
                <Minus size={15} />
              </button>

              <span className="flex h-11 w-12 items-center justify-center font-serif text-lg">
                {quantity}
              </span>

              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => current + 1)
                }
                aria-label="Increase quantity"
                className="flex h-11 w-12 items-center justify-center transition hover:bg-[#DDE5B6]"
              >
                <Plus size={15} />
              </button>
            </div>
          </div>

          {/* Total and add to bag */}
          <div className="mt-9 border-t border-[#17251F]/15 pt-6">

            <div className="mb-5 flex items-center justify-between">
              <span className="text-[9px] tracking-[0.2em] text-[#6C584C]">
                ORDER TOTAL
              </span>

              <span className="font-serif text-2xl">
                ₱{selectedProductPrice * quantity}
              </span>
            </div>

            <button
              type="button"
              onClick={addSelectedProduct}
              className="flex w-full items-center justify-between bg-[#17251F] px-6 py-5 text-[10px] tracking-[0.2em] text-[#F0EAD2] transition hover:bg-[#304438]"
            >
              <span>ADD TO BAG</span>
              <ShoppingBag size={17} />
            </button>

            <p className="mt-5 text-center font-serif text-sm italic text-[#6C584C]">
              Made slowly. Enjoyed fully.
            </p>

          </div>
        </div>
      </div>
    </div>
  </div>
)}

    </main>
  );
}
