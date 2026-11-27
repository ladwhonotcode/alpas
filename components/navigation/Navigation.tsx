
"use client";

import { useEffect, useState } from "react";
import {
  ShoppingBag,
  UserRound,
  Menu,
  X,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
} from "lucide-react";

import { useCart } from "@/components/cart/CartContext";

const navLinks = [
  { label: "Home", href: "/#top" },
  { label: "Our Spaces", href: "/#spaces" },
  { label: "Menu", href: "/menu" },
  { label: "The Library", href: "/#library" },
  { label: "Membership", href: "/#membership" },
  { label: "Our Story", href: "/#story" },
  { label: "Visit Us", href: "/#visit" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const {
    items,
    totalItems,
    subtotal,
    updateQuantity,
    removeFromCart,
  } = useCart();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isCartOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsCartOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isCartOpen]);

  function goToTop() {
    setIsMobileMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function openCart() {
    setIsMobileMenuOpen(false);
    setCheckoutMessage("");
    setIsCartOpen(true);
  }

  function closeCart() {
    setIsCartOpen(false);
    setCheckoutMessage("");
  }

  function handleCheckout() {
    setCheckoutMessage(
      "Thank you for choosing Alpas! Checkout is a demonstration for this project."
    );
  }

  function formatPrice(price: number) {
    return `₱${price.toLocaleString("en-PH")}`;
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#17251F]/95 shadow-lg backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          {/* Brand */}
          <a
            href="/#top"
            aria-label="Alpas - return to homepage"
            className="font-serif text-2xl font-semibold tracking-[0.25em] text-[#F0EAD2]"
            >
            ALPAS
        </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-sm text-[#F0EAD2] transition-colors duration-300 hover:text-[#ADC178] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#ADC178] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop action icons */}
          <div className="hidden items-center gap-5 text-[#F0EAD2] lg:flex">
            <button
              type="button"
              onClick={openCart}
              aria-label={`Shopping cart with ${totalItems} items`}
              className="relative transition-colors hover:text-[#ADC178]"
            >
              <ShoppingBag size={20} />

              {totalItems > 0 && (
                <span className="absolute -right-2.5 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ADC178] px-1 text-[9px] font-bold text-[#17251F]">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </button>

            <button
              type="button"
              aria-label="Account"
              className="transition-colors hover:text-[#ADC178]"
            >
              <UserRound size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={
              isMobileMenuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={isMobileMenuOpen}
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
            className="text-[#F0EAD2] lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>
        </nav>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="border-t border-[#F0EAD2]/15 bg-[#17251F] px-6 py-6 lg:hidden">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-[#F0EAD2] transition-colors hover:text-[#ADC178]"
                >
                  {link.label}
                </a>
              ))}

              <div className="flex gap-6 border-t border-[#F0EAD2]/15 pt-5 text-[#F0EAD2]">
                <button
                  type="button"
                  aria-label={`Shopping cart with ${totalItems} items`}
                  onClick={openCart}
                  className="relative transition-colors hover:text-[#ADC178]"
                >
                  <ShoppingBag size={20} />

                  {totalItems > 0 && (
                    <span className="absolute -right-2.5 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ADC178] px-1 text-[9px] font-bold text-[#17251F]">
                      {totalItems > 99 ? "99+" : totalItems}
                    </span>
                  )}
                </button>

                <button type="button" aria-label="Account">
                  <UserRound size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Shopping bag backdrop */}
      <div
        className={`fixed inset-0 z-100 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Shopping bag drawer */}
      <aside
        role="dialog"
        aria-modal={isCartOpen}
        aria-labelledby="cart-title"
        aria-hidden={!isCartOpen}
        className={`fixed right-0 top-0 z-101 flex h-full w-full max-w-md flex-col bg-[#F0EAD2] text-[#17251F] shadow-2xl transition-transform duration-500 ease-in-out ${
          isCartOpen
            ? "translate-x-0"
            : "translate-x-full pointer-events-none"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-[#A98467]/30 px-6 py-6">
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#7B8F4B]">
              YOUR LITTLE COLLECTION
            </p>

            <h2
              id="cart-title"
              className="font-serif text-3xl"
            >
              Your Bag
            </h2>

            <p className="mt-1 text-xs text-[#79675C]">
              {totalItems} {totalItems === 1 ? "item" : "items"} waiting for you
            </p>
          </div>

          <button
            type="button"
            onClick={closeCart}
            aria-label="Close shopping bag"
            className="rounded-full border border-[#A98467]/40 p-2 transition-colors hover:bg-[#DDE5B6]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-5 rounded-full bg-[#DDE5B6] p-6">
                <ShoppingBag
                  size={35}
                  strokeWidth={1.3}
                />
              </div>

              <h3 className="font-serif text-2xl">
                Your bag is taking a little rest.
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-[#79675C]">
                It looks like you haven't added anything just yet.
                Perhaps a cup of coffee or a little treat?
              </p>

              <button
                type="button"
                onClick={() => {
                  closeCart();
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-7 rounded-full bg-[#17251F] px-7 py-3 text-xs font-bold tracking-widest text-[#F0EAD2] transition-colors hover:bg-[#7B8F4B]"
              >
                EXPLORE THE MENU
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <article
                  key={item.cartKey}
                  className="flex gap-4 border-b border-[#A98467]/25 pb-6"
                >
                  {/* Product image */}
                  <div className="h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-[#DDE5B6]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Product information */}
                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl leading-tight">
                        {item.name}
                      </h3>

                      {item.size && (
                        <p className="mt-1 text-xs text-[#79675C]">
                          Size: {item.size}
                        </p>
                      )}

                      <p className="mt-2 text-sm font-semibold">
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 rounded-full border border-[#A98467]/40 px-3 py-1.5">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.cartKey,
                              item.quantity - 1
                            )
                          }
                          aria-label={`Decrease ${item.name} quantity`}
                          className="transition-colors hover:text-[#7B8F4B]"
                        >
                          <Minus size={13} />
                        </button>

                        <span className="min-w-4 text-center text-xs font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.cartKey,
                              item.quantity + 1
                            )
                          }
                          aria-label={`Increase ${item.name} quantity`}
                          className="transition-colors hover:text-[#7B8F4B]"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      {/* Remove item */}
                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(item.cartKey)
                        }
                        aria-label={`Remove ${item.name}`}
                        className="flex items-center gap-1 text-xs text-[#8B6254] transition-colors hover:text-red-700"
                      >
                        <Trash2 size={14} />
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Drawer footer */}
        {items.length > 0 && (
          <div className="border-t border-[#A98467]/30 bg-[#F8F5E9] px-6 py-6">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="text-[#79675C]">
                Subtotal
              </span>

              <span className="text-lg font-bold">
                {formatPrice(subtotal)}
              </span>
            </div>

            <p className="mb-5 text-xs leading-5 text-[#79675C]">
              Taxes, if applicable, and other charges are not
              included. Final ordering is a project demonstration.
            </p>

            <button
              type="button"
              onClick={handleCheckout}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#17251F] px-6 py-4 text-xs font-bold tracking-[0.2em] text-[#F0EAD2] transition-all duration-300 hover:bg-[#7B8F4B]"
            >
              PROCEED TO CHECKOUT
              <ArrowRight size={16} />
            </button>

            {checkoutMessage && (
              <p
                className="mt-4 text-center text-xs leading-5 text-[#6C584C]"
                aria-live="polite"
              >
                {checkoutMessage}
              </p>
            )}
          </div>
        )}

        {items.length === 0 && (
          <div className="border-t border-[#A98467]/20 px-6 py-5 text-center">
            <p className="font-serif text-sm italic text-[#79675C]">
              A little something is always waiting at Alpas.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
