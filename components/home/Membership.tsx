
"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  Coffee,
  Crown,
  Sparkles,
  Star,
  X,
} from "lucide-react";

type PlanName = "The Chapter" | "The Anthology";
type Billing = "monthly" | "annually";

type MembershipRecord = {
  name: string;
  email: string;
  plan: PlanName;
  billing: Billing;
  price: number;
  joinedAt: string;
  renewalDate: string;
};

const plans = [
  {
    name: "The Chapter" as PlanName,
    description:
      "For the curious reader who wants a little more Alpas in everyday life.",
    monthlyPrice: 149,
    annualPrice: 1490,
    icon: BookOpen,
    benefits: [
      "Borrow 1 book at a time",
      "7-day borrowing period",
      "Access to exclusive member events",
      "A welcoming community of readers",
    ],
    accent: "#A98467",
    featured: false,
  },
  {
    name: "The Anthology" as PlanName,
    description:
      "For the devoted book lover who wants to make Alpas their second home.",
    monthlyPrice: 249,
    annualPrice: 2490,
    icon: Crown,
    benefits: [
      "Borrow up to 3 books at a time",
      "14-day borrowing period",
      "Access to exclusive member events",
      "Priority access to selected events",
      "10% discount on all café purchases",
    ],
    accent: "#DDE5B6",
    featured: true,
  },
];

const comparison = [
  {
    feature: "Books you can borrow",
    chapter: "1 book",
    anthology: "3 books",
  },
  {
    feature: "Borrowing period",
    chapter: "7 days",
    anthology: "14 days",
  },
  {
    feature: "Member events",
    chapter: true,
    anthology: true,
  },
  {
    feature: "Priority event access",
    chapter: false,
    anthology: true,
  },
  {
    feature: "Café purchase discount",
    chapter: "—",
    anthology: "10% off",
  },
];

function formatPrice(price: number) {
  return `₱${price.toLocaleString("en-PH")}`;
}

function getRenewalDate(billing: Billing) {
  const date = new Date();
  date.setMonth(date.getMonth() + (billing === "annually" ? 12 : 1));

  return date.toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Membership() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const [selectedPlan, setSelectedPlan] = useState<PlanName | null>(null);
  const [memberName, setMemberName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [membership, setMembership] =
    useState<MembershipRecord | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Load previously saved demo membership.
  useEffect(() => {
    try {
      const savedMembership = localStorage.getItem("alpas-membership");

      if (savedMembership) {
        setMembership(JSON.parse(savedMembership));
      }
    } catch {
      localStorage.removeItem("alpas-membership");
    }
  }, []);

  // Handle modal scrolling and Escape-key behavior.
  useEffect(() => {
    const isModalOpen = Boolean(selectedPlan) || showConfirmation;

    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (showConfirmation) {
          setShowConfirmation(false);
        } else {
          setSelectedPlan(null);
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPlan, showConfirmation]);

  function joinMembership(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedPlan || !memberName.trim() || !memberEmail.trim()) {
      return;
    }

    const plan = plans.find((item) => item.name === selectedPlan);

    if (!plan) return;

    const newMembership: MembershipRecord = {
      name: memberName.trim(),
      email: memberEmail.trim(),
      plan: selectedPlan,
      billing,
      price:
        billing === "monthly"
          ? plan.monthlyPrice
          : plan.annualPrice,
      joinedAt: new Date().toLocaleDateString("en-PH", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      renewalDate: getRenewalDate(billing),
    };

    localStorage.setItem(
      "alpas-membership",
      JSON.stringify(newMembership)
    );

    setMembership(newMembership);
    setSelectedPlan(null);
    setShowConfirmation(true);
  }

  function openJoinModal(plan: PlanName) {
    setSelectedPlan(plan);
    setMemberName(membership?.name ?? "");
    setMemberEmail(membership?.email ?? "");
  }

  function closeJoinModal() {
    setSelectedPlan(null);
  }

  const selectedPlanDetails = plans.find(
    (plan) => plan.name === selectedPlan
  );

  const selectedPlanPrice = selectedPlanDetails
    ? billing === "monthly"
      ? selectedPlanDetails.monthlyPrice
      : selectedPlanDetails.annualPrice
    : 0;

  return (
    <section
      id="membership"
      className="relative overflow-hidden bg-[#17251F] px-5 py-20 text-[#F0EAD2] sm:px-6 sm:py-24 md:px-10 lg:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full border border-[#DDE5B6]/10" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full border border-[#DDE5B6]/10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div className="mb-5 flex items-center justify-center gap-3 text-[#DDE5B6]">
            <span className="h-px w-10 bg-[#DDE5B6]/40" />
            <Sparkles size={15} />
            <span className="text-xs tracking-[0.3em]">
              THE ALPAS MEMBERSHIP
            </span>
            <Sparkles size={15} />
            <span className="h-px w-10 bg-[#DDE5B6]/40" />
          </div>

          <h2 className="mb-5 font-serif text-4xl font-medium leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Find Your Place
            <br />
            <span className="italic text-[#DDE5B6]">
              in Our Story.
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-7 text-[#F0EAD2]/70 sm:text-base sm:leading-8">
            Some places feel like home. Make Alpas a little more
            yours with a membership made for readers, dreamers,
            and those who love having somewhere to belong.
          </p>
        </div>

        {/* Membership introduction */}
        <div className="mb-12 grid gap-6 border-y border-[#F0EAD2]/15 py-8 sm:mb-14 sm:gap-8 md:grid-cols-3">
          <div className="flex items-center gap-4">
            <BookOpen
              size={27}
              strokeWidth={1}
              className="shrink-0 text-[#DDE5B6]"
            />
            <div>
              <p className="font-serif text-lg">More stories</p>
              <p className="text-xs text-[#F0EAD2]/55">
                Take a little adventure home.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Coffee
              size={27}
              strokeWidth={1}
              className="shrink-0 text-[#DDE5B6]"
            />
            <div>
              <p className="font-serif text-lg">More moments</p>
              <p className="text-xs text-[#F0EAD2]/55">
                Enjoy the little things at Alpas.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Sparkles
              size={27}
              strokeWidth={1}
              className="shrink-0 text-[#DDE5B6]"
            />
            <div>
              <p className="font-serif text-lg">More belonging</p>
              <p className="text-xs text-[#F0EAD2]/55">
                Be part of our little community.
              </p>
            </div>
          </div>
        </div>

        {/* Billing toggle */}
        <div className="mb-10 flex flex-col items-center gap-4">
          <p className="text-center text-xs tracking-[0.2em] text-[#DDE5B6]">
            CHOOSE YOUR MEMBERSHIP PLAN
          </p>

          <div className="inline-flex max-w-full rounded-full border border-[#F0EAD2]/20 p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
              className={`rounded-full px-5 py-2.5 text-xs transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDE5B6] sm:px-6 ${
                billing === "monthly"
                  ? "bg-[#F0EAD2] text-[#17251F]"
                  : "text-[#F0EAD2]/70 hover:text-[#F0EAD2]"
              }`}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBilling("annually")}
              aria-pressed={billing === "annually"}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDE5B6] sm:px-6 ${
                billing === "annually"
                  ? "bg-[#F0EAD2] text-[#17251F]"
                  : "text-[#F0EAD2]/70 hover:text-[#F0EAD2]"
              }`}
            >
              Annually
              <span
                className={`rounded-full px-2 py-0.5 text-[9px] ${
                  billing === "annually"
                    ? "bg-[#7B8F4B] text-white"
                    : "bg-[#7B8F4B]/30 text-[#DDE5B6]"
                }`}
              >
                2 MONTHS FREE
              </span>
            </button>
          </div>
        </div>

        {/* Membership cards */}
        <div className="mx-auto grid max-w-5xl gap-6 sm:gap-7 lg:grid-cols-2">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price =
              billing === "monthly"
                ? plan.monthlyPrice
                : plan.annualPrice;

            return (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-sm border p-6 transition-all duration-500 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8 md:p-10 ${
                  plan.featured
                    ? "border-[#DDE5B6]/70 bg-[#F0EAD2] text-[#17251F] shadow-2xl"
                    : "border-[#F0EAD2]/20 bg-[#20352B] text-[#F0EAD2]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 right-4 flex items-center gap-2 bg-[#7B8F4B] px-3 py-1.5 text-[10px] tracking-[0.15em] text-white sm:right-7 sm:px-4 sm:tracking-[0.18em]">
                    <Star size={11} fill="currentColor" />
                    MOST LOVED
                  </div>
                )}

                <div
                  className={`mb-7 flex h-12 w-12 items-center justify-center rounded-full ${
                    plan.featured
                      ? "bg-[#DDE5B6]"
                      : "bg-[#DDE5B6]/10"
                  }`}
                >
                  <Icon
                    size={23}
                    strokeWidth={1.4}
                    className={
                      plan.featured
                        ? "text-[#52663A]"
                        : "text-[#DDE5B6]"
                    }
                  />
                </div>

                <p
                  className={`mb-3 text-xs tracking-[0.25em] ${
                    plan.featured
                      ? "text-[#7B8F4B]"
                      : "text-[#DDE5B6]"
                  }`}
                >
                  {plan.featured
                    ? "THE PREMIUM CHAPTER"
                    : "THE STARTING CHAPTER"}
                </p>

                <h3 className="mb-3 font-serif text-3xl sm:text-4xl">
                  {plan.name}
                </h3>

                <p
                  className={`mb-8 min-h-12 text-sm leading-6 ${
                    plan.featured
                      ? "text-[#6C584C]"
                      : "text-[#F0EAD2]/65"
                  }`}
                >
                  {plan.description}
                </p>

                <div
                  className={`mb-8 border-y py-6 ${
                    plan.featured
                      ? "border-[#17251F]/15"
                      : "border-[#F0EAD2]/15"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-serif text-4xl sm:text-5xl">
                      {formatPrice(price)}
                    </span>
                    <span
                      className={`text-xs ${
                        plan.featured
                          ? "text-[#6C584C]"
                          : "text-[#F0EAD2]/60"
                      }`}
                    >
                      / {billing === "monthly" ? "month" : "year"}
                    </span>
                  </div>

                  {billing === "annually" && (
                    <p
                      className={`mt-2 text-xs ${
                        plan.featured
                          ? "text-[#7B8F4B]"
                          : "text-[#DDE5B6]"
                      }`}
                    >
                      Save 2 months with annual billing
                    </p>
                  )}
                </div>

                <p
                  className={`mb-5 text-xs tracking-[0.18em] ${
                    plan.featured
                      ? "text-[#7B8F4B]"
                      : "text-[#DDE5B6]"
                  }`}
                >
                  YOUR MEMBERSHIP INCLUDES
                </p>

                <ul className="mb-10 flex-1 space-y-4">
                  {plan.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          plan.featured
                            ? "text-[#7B8F4B]"
                            : "text-[#DDE5B6]"
                        }`}
                      />
                      <span
                        className={
                          plan.featured
                            ? "text-[#4D5143]"
                            : "text-[#F0EAD2]/80"
                        }
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => openJoinModal(plan.name)}
                  className={`flex w-full items-center justify-center gap-3 px-5 py-4 text-xs tracking-[0.15em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DDE5B6] sm:px-6 sm:tracking-[0.18em] ${
                    plan.featured
                      ? "bg-[#17251F] text-[#F0EAD2] hover:bg-[#7B8F4B]"
                      : "border border-[#DDE5B6]/50 text-[#F0EAD2] hover:bg-[#F0EAD2] hover:text-[#17251F]"
                  }`}
                >
                  JOIN {plan.name.toUpperCase()}
                  <ArrowRight size={15} />
                </button>
              </article>
            );
          })}
        </div>

        {/* Plan comparison */}
        <div className="mx-auto mt-16 max-w-5xl sm:mt-24">
          <div className="mb-9 text-center">
            <p className="mb-3 text-xs tracking-[0.25em] text-[#DDE5B6]">
              FIND YOUR PERFECT FIT
            </p>
            <h3 className="font-serif text-3xl md:text-4xl">
              A Side-by-Side Look
            </h3>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[580px] overflow-hidden border border-[#F0EAD2]/20">
              <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-[#20352B] px-4 py-5 text-xs md:px-7">
                <span className="text-[#F0EAD2]/60">
                  MEMBERSHIP BENEFITS
                </span>
                <span className="text-center text-[#DDE5B6]">
                  THE CHAPTER
                </span>
                <span className="text-center text-[#DDE5B6]">
                  THE ANTHOLOGY
                </span>
              </div>

              {comparison.map((item, index) => (
                <div
                  key={item.feature}
                  className={`grid grid-cols-[1.2fr_1fr_1fr] items-center px-4 py-5 text-xs md:px-7 ${
                    index % 2 === 0
                      ? "bg-[#F0EAD2]/4"
                      : "bg-transparent"
                  }`}
                >
                  <span className="pr-2 text-[#F0EAD2]/80">
                    {item.feature}
                  </span>

                  <span className="text-center text-[#F0EAD2]/70">
                    {typeof item.chapter === "boolean" ? (
                      item.chapter ? (
                        <Check
                          size={17}
                          className="mx-auto text-[#DDE5B6]"
                        />
                      ) : (
                        "—"
                      )
                    ) : (
                      item.chapter
                    )}
                  </span>

                  <span className="text-center text-[#DDE5B6]">
                    {typeof item.anthology === "boolean" ? (
                      item.anthology ? (
                        <Check size={17} className="mx-auto" />
                      ) : (
                        "—"
                      )
                    ) : (
                      item.anthology
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Saved membership details */}
        {membership && (
          <div className="mx-auto mt-16 max-w-3xl border border-[#DDE5B6]/40 bg-[#20352B] p-5 sm:mt-20 sm:p-7 md:p-9">
            <div className="mb-6 flex items-center gap-3">
              <Sparkles className="text-[#DDE5B6]" size={21} />
              <p className="text-xs tracking-[0.2em] text-[#DDE5B6]">
                YOUR ALPAS MEMBERSHIP
              </p>
            </div>

            <h3 className="mb-2 break-words font-serif text-2xl sm:text-3xl">
              Welcome, {membership.name}.
            </h3>

            <p className="mb-7 text-sm text-[#F0EAD2]/65">
              Your simulated membership details are saved on this
              device for your project demonstration.
            </p>

            <div className="grid gap-5 border-t border-[#F0EAD2]/15 pt-6 sm:grid-cols-2">
              <div>
                <p className="mb-1 text-[10px] tracking-widest text-[#DDE5B6]">
                  MEMBERSHIP PLAN
                </p>
                <p className="font-serif text-xl">{membership.plan}</p>
              </div>

              <div>
                <p className="mb-1 text-[10px] tracking-widest text-[#DDE5B6]">
                  BILLING
                </p>
                <p className="font-serif text-xl capitalize">
                  {membership.billing}
                </p>
              </div>

              <div>
                <p className="mb-1 text-[10px] tracking-widest text-[#DDE5B6]">
                  MEMBERSHIP PRICE
                </p>
                <p className="font-serif text-xl">
                  {formatPrice(membership.price)}
                </p>
              </div>

              <div>
                <p className="mb-1 text-[10px] tracking-widest text-[#DDE5B6]">
                  DEMO RENEWAL DATE
                </p>
                <p className="font-serif text-xl">
                  {membership.renewalDate}
                </p>
              </div>
            </div>

            <p className="mt-6 break-words text-xs text-[#F0EAD2]/45">
              Registered {membership.joinedAt} · {membership.email}
            </p>
          </div>
        )}

        {/* Closing note */}
        <div className="mt-16 text-center sm:mt-24">
          <div className="mx-auto mb-5 h-px w-16 bg-[#DDE5B6]/40" />
          <p className="font-serif text-xl italic text-[#DDE5B6] sm:text-2xl md:text-3xl">
            There's always room for one more story.
          </p>
          <p className="mt-4 text-xs tracking-[0.2em] text-[#F0EAD2]/50">
            WE'LL SAVE A LITTLE SPACE FOR YOU.
          </p>
        </div>
      </div>

      {/* Join membership modal */}
      {selectedPlan && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto bg-black/75 p-3 backdrop-blur-sm sm:p-5"
          onClick={closeJoinModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="membership-modal-title"
            className="relative my-auto max-h-[calc(100svh-1.5rem)] w-full max-w-lg overflow-y-auto bg-[#F0EAD2] p-5 text-[#17251F] shadow-2xl sm:max-h-[calc(100svh-2.5rem)] sm:p-8 md:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeJoinModal}
              aria-label="Close membership form"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#17251F] text-[#F0EAD2] transition-colors hover:bg-[#7B8F4B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B8F4B]"
            >
              <X size={17} />
            </button>

            <div className="mb-6 flex items-center gap-2 pr-10 text-[#7B8F4B]">
              <Sparkles size={17} />
              <span className="text-xs tracking-[0.2em]">
                YOUR NEXT CHAPTER STARTS HERE
              </span>
            </div>

            <h3
              id="membership-modal-title"
              className="mb-3 pr-8 font-serif text-3xl"
            >
              Join {selectedPlan}
            </h3>

            <p className="mb-7 text-sm leading-6 text-[#6C584C]">
              Just a few details before we welcome you to the
              Alpas community.
            </p>

            <div className="mb-7 border-y border-[#17251F]/15 py-5">
              <div className="flex items-center justify-between gap-3">
                <span className="font-serif text-lg">
                  {selectedPlan}
                </span>
                <span className="font-serif text-2xl">
                  {formatPrice(selectedPlanPrice)}
                </span>
              </div>
              <p className="mt-1 text-xs text-[#6C584C]">
                Billed {billing}
              </p>
            </div>

            <form onSubmit={joinMembership} className="space-y-5">
              <div>
                <label
                  htmlFor="member-name"
                  className="mb-2 block text-xs tracking-wide"
                >
                  FULL NAME
                </label>
                <input
                  id="member-name"
                  type="text"
                  autoComplete="name"
                  value={memberName}
                  onChange={(event) => setMemberName(event.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full border border-[#17251F]/20 bg-white/50 px-4 py-3 text-sm outline-none transition-colors focus:border-[#7B8F4B] focus:ring-1 focus:ring-[#7B8F4B]"
                />
              </div>

              <div>
                <label
                  htmlFor="member-email"
                  className="mb-2 block text-xs tracking-wide"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  id="member-email"
                  type="email"
                  autoComplete="email"
                  value={memberEmail}
                  onChange={(event) => setMemberEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full border border-[#17251F]/20 bg-white/50 px-4 py-3 text-sm outline-none transition-colors focus:border-[#7B8F4B] focus:ring-1 focus:ring-[#7B8F4B]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 bg-[#17251F] px-6 py-4 text-xs tracking-[0.18em] text-[#F0EAD2] transition-colors hover:bg-[#7B8F4B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7B8F4B]"
              >
                CONFIRM DEMO MEMBERSHIP
                <ArrowRight size={15} />
              </button>
            </form>

            <p className="mt-5 text-center text-[10px] leading-5 text-[#6C584C]">
              DEMONSTRATION ONLY · NO PAYMENT WILL BE PROCESSED.
              <br />
              Your sample membership details are saved locally
              in this browser.
            </p>
          </div>
        </div>
      )}

      {/* Confirmation modal */}
      {showConfirmation && membership && (
        <div
          className="fixed inset-0 z-[130] flex items-center justify-center overflow-y-auto bg-black/75 p-3 backdrop-blur-sm sm:p-5"
          onClick={() => setShowConfirmation(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="membership-confirmation-title"
            className="my-auto w-full max-w-md bg-[#F0EAD2] p-6 text-center text-[#17251F] shadow-2xl sm:p-8 md:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE5B6]">
              <Check size={30} className="text-[#52663A]" />
            </div>

            <p className="mb-3 text-xs tracking-[0.25em] text-[#7B8F4B]">
              WELCOME TO ALPAS
            </p>

            <h3
              id="membership-confirmation-title"
              className="mb-4 font-serif text-3xl"
            >
              Your next chapter begins.
            </h3>

            <p className="mb-7 text-sm leading-7 text-[#6C584C]">
              Thank you, {membership.name}! Your demo membership
              for {membership.plan} has been recorded successfully.
              We hope you enjoy your little escape.
            </p>

            <button
              type="button"
              onClick={() => {
                setShowConfirmation(false);
                document
                  .getElementById("membership")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full bg-[#17251F] px-6 py-4 text-xs tracking-[0.18em] text-[#F0EAD2] transition-colors hover:bg-[#7B8F4B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7B8F4B]"
            >
              EXPLORE MY MEMBERSHIP
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
