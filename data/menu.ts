
export type MenuProduct = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  largePrice?: number;
  hasSizes?: boolean;
  image: string;
  type: "drink" | "pastry" | "food";
};

export const products: MenuProduct[] = [
  // SIGNATURE COFFEE
  {
    id: 1,
    name: "Iced Vanilla Latte",
    category: "SIGNATURE COFFEE",
    description:
      "Smooth espresso blended with creamy milk and a hint of vanilla sweetness, served over ice.",
    price: 155,
    largePrice: 180,
    image: "/images/menu/iced-vanilla-latte.jpg",
    type: "drink",
  },
  {
    id: 2,
    name: "Velvet Cappuccino",
    category: "SIGNATURE COFFEE",
    description:
      "Rich espresso beneath a cloud of silky steamed milk and delicate foam.",
    price: 145,
    largePrice: 170,
    image: "/images/menu/velvet-cappuccino.jpg",
    type: "drink",
  },
  {
    id: 5,
    name: "Spanish Latte",
    category: "SIGNATURE COFFEE",
    description:
      "A comforting espresso favorite sweetened with condensed milk and balanced with smooth, creamy milk.",
    price: 165,
    largePrice: 190,
    image: "/images/menu/spanish-latte.jpg",
    type: "drink",
  },
  {
    id: 6,
    name: "Brown Sugar Shaken Espresso",
    category: "SIGNATURE COFFEE",
    description:
      "Bold espresso shaken with brown sugar and ice, finished with a splash of creamy milk.",
    price: 175,
    largePrice: 200,
    image: "/images/menu/brown-sugar-espresso.jpg",
    type: "drink",
  },

  // NON-COFFEE
  {
    id: 3,
    name: "Garden Matcha",
    category: "NON-COFFEE",
    description:
      "Earthy Japanese-inspired matcha with creamy milk for a refreshing little pause.",
    price: 160,
    largePrice: 185,
    image: "/images/menu/garden-matcha.jpg",
    type: "drink",
  },
  {
    id: 7,
    name: "Ube Cloud Latte",
    category: "NON-COFFEE",
    description:
      "A dreamy blend of rich Filipino ube and creamy milk, topped with a soft layer of milk foam.",
    price: 165,
    largePrice: 190,
    image: "/images/menu/ube-cloud-latte.jpg",
    type: "drink",
  },
  {
    id: 8,
    name: "Classic Hot Chocolate",
    category: "NON-COFFEE",
    description:
      "Velvety chocolate blended with steamed milk for a warm, comforting cup.",
    price: 145,
    largePrice: 170,
    image: "/images/menu/hot-chocolate.jpg",
    type: "drink",
  },

  // TEA & REFRESHERS
  {
    id: 9,
    name: "Peach Blossom Iced Tea",
    category: "TEA & REFRESHERS",
    description:
      "Light and fragrant brewed tea infused with sweet peach and served over ice.",
    price: 135,
    hasSizes: false,
    image: "/images/menu/peach-blossom-iced-tea.jpg",
    type: "drink",
  },
  {
    id: 10,
    name: "Hibiscus Berry Tea",
    category: "TEA & REFRESHERS",
    description:
      "A refreshing floral tea with bright hibiscus notes and a delicate mix of berries.",
    price: 145,
    hasSizes: false,
    image: "/images/menu/hibiscus-berry-tea.jpg",
    type: "drink",
  },
  {
    id: 11,
    name: "Lemon Mint Cooler",
    category: "TEA & REFRESHERS",
    description:
      "Fresh lemon and cooling mint come together in a bright, citrusy drink.",
    price: 130,
    hasSizes: false,
    image: "/images/menu/lemon-mint-cooler.jpg", 
    type: "drink",
  },

  // FRESHLY BAKED
  {
    id: 4,
    name: "Golden Croissant",
    category: "FRESHLY BAKED",
    description:
      "A golden, buttery pastry with delicate flaky layers. A lovely companion to your coffee.",
    price: 95,
    image: "/images/menu/golden-croissant.jpg",
    type: "pastry",
  },
  {
    id: 12,
    name: "Almond Croissant",
    category: "FRESHLY BAKED",
    description:
      "A buttery, flaky croissant filled with almond cream and finished with toasted almonds and powdered sugar.",
    price: 125,
    image: "/images/menu/almond-croissant.jpg",
    type: "pastry",
  },
  {
    id: 13,
    name: "Cinnamon Sugar Roll",
    category: "FRESHLY BAKED",
    description:
      "A soft, freshly baked roll swirled with cinnamon sugar and finished with a delicate sweet glaze.",
    price: 115,
    image: "/images/menu/cinnamon-sugar-roll.jpg",
    type: "pastry",
  },

  // DESSERTS
  {
    id: 14,
    name: "Basque Cheesecake",
    category: "DESSERTS",
    description:
      "A rich and creamy cheesecake with a beautifully caramelized top and a soft, delicate center.",
    price: 175,
    image: "/images/menu/basque-cheesecake.jpg",
    type: "food",
  },
  {
    id: 15,
    name: "Classic Tiramisu",
    category: "DESSERTS",
    description:
      "Layers of coffee-soaked sponge and silky mascarpone cream, finished with a dusting of cocoa.",
    price: 165,
    image: "/images/menu/classic-tiramisu.jpg",
    type: "food",
  },
  {
    id: 16,
    name: "Sea Salt Chocolate Cookie",
    category: "DESSERTS",
    description:
      "A soft-centered chocolate cookie filled with rich chocolate chunks and a touch of sea salt.",
    price: 85,
    image: "/images/menu/sea-salt-chocolate-cookie.jpg",
    type: "food",
  },

  // SAVORY BITES
  {
    id: 17,
    name: "Ham & Cheese Croissant",
    category: "SAVORY BITES",
    description:
      "A warm, flaky croissant filled with savory ham and melted cheese.",
    price: 155,
    image: "/images/menu/ham-cheese-croissant.jpg",
    type: "food",
  },
  {
    id: 18,
    name: "Truffle Mushroom Toast",
    category: "SAVORY BITES",
    description:
      "Toasted bread topped with creamy mushrooms, aromatic herbs, and a hint of truffle.",
    price: 185,
    image: "/images/menu/truffle-mushroom-toast.jpg",
    type: "food",
  },
  {
    id: 19,
    name: "Chicken Pesto Sandwich",
    category: "SAVORY BITES",
    description:
      "Tender chicken, fresh greens, and fragrant basil pesto tucked between slices of toasted bread.",
    price: 195,
    image: "/images/menu/chicken-pesto-sandwich.jpg",
    type: "food",
  },
];
