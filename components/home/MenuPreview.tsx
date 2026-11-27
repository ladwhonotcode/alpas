
"use client";

import { useState } from "react";
import { ShoppingBag, X, Plus, Minus } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";
import { products, type MenuProduct } from "@/data/menu";

type Product = MenuProduct;

export default function MenuPreview() {
  const { addToCart: addCartItem, totalItems } = useCart();

  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Regular");
  const [addedMessage, setAddedMessage] = useState("");

  function openProduct(product: Product) {
    setSelectedProduct(product);
    setQuantity(1);
    setSize("Regular");
    setAddedMessage("");
  }

  function addToCart(
    product: Product,
    amount = 1,
    selectedSize = "Regular"
  ) {
    const hasSizeOptions =
      product.type === "drink" && product.hasSizes !== false;

    addCartItem(
      {
        id: product.id,
        name: product.name,
        price:
          hasSizeOptions && selectedSize === "Large"
            ? product.largePrice ?? product.price
            : product.price,
        image: product.image,
        size: hasSizeOptions ? selectedSize : undefined,
      },
      amount
    );

    setAddedMessage(
      `${amount} × ${product.name} added to your bag.`
    );
  }

  function closeProduct() {
    setSelectedProduct(null);
    setAddedMessage("");
  }

  const hasSelectedSizeOptions =
    selectedProduct?.type === "drink" &&
    selectedProduct.hasSizes !== false;

  const selectedProductPrice =
    hasSelectedSizeOptions && size === "Large"
      ? selectedProduct.largePrice ?? selectedProduct.price
      : selectedProduct?.price ?? 0;

  return (
    <section
      id="menu"
      className="bg-[#F0EAD2] px-5 py-20 text-[#17251F] sm:px-6 sm:py-24 md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#7B8F4B] sm:text-sm">
              A Little Something to Sip
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              Made for your
              <br />
              <span className="italic">
                little moments.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#6C584C] sm:text-base sm:leading-8">
              From comforting cups of coffee to little treats
              worth slowing down for, there is always something
              waiting for you at Alpas.
            </p>
          </div>

          {/* Cart indicator */}
          <div className="flex items-center gap-3 self-start rounded-full border border-[#A98467]/40 px-5 py-3 md:self-auto">
            <ShoppingBag size={19} />

            <span className="text-sm tracking-wide">
              Your bag:{" "}
              <strong aria-live="polite">{totalItems}</strong>
            </span>
          </div>
        </div>

        {/* Product cards */}
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {products.map((product, index) => (
            <article
              key={product.id}
              className={`group overflow-hidden rounded-2xl bg-[#F8F5E9] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                index % 2 === 1 ? "lg:mt-10" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => openProduct(product)}
                aria-label={`View ${product.name} details`}
                className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#7B8F4B]"
              >
                {/* Product image */}
                <div className="relative h-60 overflow-hidden bg-[#DDE5B6] sm:h-72">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none"
                    style={{
                      backgroundImage: `url('${product.image}')`,
                    }}
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                </div>

                {/* Product information */}
                <div className="px-5 pb-2 pt-5">
                  <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-[#7B8F4B]">
                    {product.category}
                  </p>

                  <h3 className="font-serif text-xl sm:text-2xl">
                    {product.name}
                  </h3>

                  <p className="mt-2 min-h-12 text-sm leading-6 text-[#79675C]">
                    {product.description}
                  </p>
                </div>
              </button>

              {/* Price and quick add */}
              <div className="flex items-center justify-between gap-3 px-5 pb-5 pt-3">
                <span className="font-sans text-lg font-bold">
                  ₱{product.price}
                </span>

                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  aria-label={`Add ${product.name} to bag`}
                  className="flex items-center gap-2 rounded-full bg-[#17251F] px-4 py-2.5 text-xs font-bold tracking-wide text-[#F0EAD2] transition-colors hover:bg-[#7B8F4B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7B8F4B]"
                >
                  <Plus size={15} />
                  ADD
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Full menu link */}
        <div className="mt-12 text-center sm:mt-14">
          <a
            href="/menu"
            className="inline-block border-b border-[#6C584C] pb-2 font-sans text-xs tracking-widest transition-colors hover:border-[#7B8F4B] hover:text-[#7B8F4B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7B8F4B] sm:text-sm"
          >
            EXPLORE THE FULL MENU →
          </a>
        </div>
      </div>

      {/* Product detail dialog */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm sm:p-5"
          onClick={closeProduct}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-title"
            className="relative my-auto max-h-[calc(100svh-2rem)] w-full max-w-2xl overflow-y-auto rounded-2xl bg-[#F0EAD2] text-[#17251F] shadow-2xl sm:max-h-[calc(100svh-2.5rem)]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeProduct}
              aria-label="Close product details"
              className="absolute right-4 top-4 z-10 rounded-full bg-[#F0EAD2] p-2 shadow-md transition hover:bg-[#DDE5B6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B8F4B]"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Product image */}
              <div
                className="min-h-56 bg-cover bg-center sm:min-h-72 md:min-h-full"
                style={{
                  backgroundImage: `url('${selectedProduct.image}')`,
                }}
                role="img"
                aria-label={selectedProduct.name}
              />

              {/* Product details */}
              <div className="p-6 sm:p-7 md:p-9">
                <p className="mb-3 pr-10 text-[10px] font-bold tracking-[0.2em] text-[#7B8F4B] sm:text-xs">
                  {selectedProduct.category}
                </p>

                <h3
                  id="product-title"
                  className="font-serif text-3xl sm:text-4xl"
                >
                  {selectedProduct.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#6C584C]">
                  {selectedProduct.description}
                </p>

                {/* Size selection for eligible drinks */}
                {hasSelectedSizeOptions && (
                  <div className="mt-7">
                    <p className="mb-3 text-sm font-bold">
                      Choose your size
                    </p>

                    <div className="flex gap-3">
                      {["Regular", "Large"].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setSize(option)}
                          aria-pressed={size === option}
                          className={`rounded-full border px-5 py-2 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B8F4B] ${
                            size === option
                              ? "border-[#17251F] bg-[#17251F] text-[#F0EAD2]"
                              : "border-[#A98467] hover:bg-[#DDE5B6]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    <p className="mt-2 text-xs text-[#79675C]">
                      Large size comes with an additional ₱25.
                    </p>
                  </div>
                )}

                {/* Quantity and price */}
                <div className="mt-7 flex items-center justify-between gap-3">
                  <p className="font-sans text-xl font-bold sm:text-2xl">
                    ₱{selectedProductPrice * quantity}
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((q) => Math.max(1, q - 1))
                      }
                      aria-label="Decrease quantity"
                      className="rounded-full border border-[#A98467] p-2 transition hover:bg-[#DDE5B6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B8F4B]"
                    >
                      <Minus size={15} />
                    </button>

                    <span
                      className="min-w-5 text-center"
                      aria-live="polite"
                    >
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((q) => q + 1)
                      }
                      aria-label="Increase quantity"
                      className="rounded-full border border-[#A98467] p-2 transition hover:bg-[#DDE5B6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B8F4B]"
                    >
                      <Plus size={15} />
                    </button>
                  </div>
                </div>

                {/* Add to bag */}
                <button
                  type="button"
                  onClick={() =>
                    addToCart(selectedProduct, quantity, size)
                  }
                  className="mt-7 w-full rounded-full bg-[#17251F] px-6 py-4 text-sm font-bold tracking-widest text-[#F0EAD2] transition hover:bg-[#7B8F4B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7B8F4B]"
                >
                  ADD TO BAG
                </button>

                {addedMessage && (
                  <p
                    className="mt-4 text-center text-sm text-[#6C584C]"
                    aria-live="polite"
                  >
                    {addedMessage}
                  </p>
                )}

                {hasSelectedSizeOptions && (
                  <p className="mt-4 text-center text-xs text-[#79675C]">
                    Selected size: {size}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
