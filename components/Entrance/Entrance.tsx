
"use client";

import { useState } from "react";
import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/home/Hero";
import Spaces from "@/components/home/Spaces";
import MenuPreview from "@/components/home/MenuPreview";
import Library from "@/components/home/Library";
import Membership from "@/components/home/Membership";
import OurStory from "@/components/home/OurStory";
import VisitUs from "@/components/home/VisitUs";
import Footer from "@/components/home/Footer";

export default function Entrance() {
  const [isEntering, setIsEntering] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  function enterAlpas() {
    if (isEntering || hasEntered) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setHasEntered(true);
      return;
    }

    setIsEntering(true);

    window.setTimeout(() => {
      setHasEntered(true);
    }, 1000);
  }

  function skipIntro() {
    setIsEntering(false);
    setHasEntered(true);
  }

  if (hasEntered) {
    return (
      <main className="relative min-h-screen bg-[#17251F]">
        <Navigation />
        <Hero />
        <Spaces />
        <MenuPreview />
        <Library />
        <Membership />
        <OurStory />
        <VisitUs />
        <Footer />
      </main>
    );
  }

  return (
    <main
      className={`relative flex min-h-screen items-center justify-center overflow-hidden bg-[#17251F] text-[#F0EAD2] transition-opacity duration-1000 motion-reduce:transition-none ${
        isEntering ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Entrance background */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-1500 ease-in-out motion-reduce:transition-none ${
          isEntering ? "scale-110" : "scale-100"
        }`}
        style={{
          backgroundImage: "url('/images/entrance/alpas-entrance.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Skip intro */}
      <button
        type="button"
        onClick={skipIntro}
        className="absolute right-6 top-6 z-20 rounded-full border border-[#F0EAD2]/50 px-5 py-2 font-sans text-xs tracking-widest text-[#F0EAD2] transition-colors duration-300 hover:bg-[#F0EAD2] hover:text-[#17251F] motion-reduce:transition-none"
      >
        SKIP INTRO →
      </button>

      {/* Brand content */}
      <div
        className={`relative z-10 px-6 text-center transition-all duration-700 motion-reduce:transition-none ${
          isEntering
            ? "translate-y-4 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <p className="mb-4 font-sans text-sm uppercase tracking-[0.35em]">
          A little escape from the everyday
        </p>

        <h1 className="font-serif text-6xl font-medium tracking-[0.15em] md:text-8xl">
          ALPAS
        </h1>

        <p className="mt-5 font-serif text-xl italic md:text-2xl">
          Where the mind wanders free.
        </p>

        <button
          type="button"
          onClick={enterAlpas}
          disabled={isEntering}
          className="mt-10 rounded-full border border-[#F0EAD2]/70 px-8 py-3 font-sans text-sm tracking-widest transition-all duration-300 hover:bg-[#F0EAD2] hover:text-[#17251F] disabled:cursor-wait motion-reduce:transition-none"
        >
          {isEntering ? "ENTERING..." : "ENTER ALPAS"}
        </button>
      </div>
    </main>
  );
}
