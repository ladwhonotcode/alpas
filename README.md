# Alpas Café — Where the Mind Wanders Free.

A cozy café, literary escape, and creative space brought together in one digital experience.

**Alpas Café** is a responsive café website developed as an academic project for Web Systems and Technologies (WST). Inspired by the atmosphere of an enchanted bookshop and the charm of literary spaces, the website combines café culture, reading, and community through an immersive and user-friendly interface.

---

## About the Project

Alpas Café is designed around the idea that a café can be more than just a place to enjoy coffee. It can be a space where people slow down, discover stories, study, connect, and find inspiration.

The website introduces the Alpas brand through an elegant, literary-inspired design featuring forest-green tones, parchment-inspired surfaces, warm typography, and thoughtfully arranged content.

It provides visitors with an interactive way to explore the café, browse its menu, discover its library, learn about membership options, and find contact information.

## Features and Functionalities

### Homepage
- Responsive landing page with an introductory hero section.
- Overview of the café's different spaces.
- Featured menu selections.
- Interactive library section featuring books and categories.
- Membership plans and benefits.
- Brand story and café philosophy.
- Location, opening hours, and contact information.

### Menu
- Dedicated menu page featuring café products.
- Product categories and search functionality.
- Product descriptions and images.
- Product detail modal.
- Drink size selection for eligible beverages.
- Automatic price adjustment for larger drink sizes.

### Shopping Cart
- Shared shopping cart functionality across the website.
- Add products to the cart.
- Adjust product quantities.
- Remove products from the cart.
- Automatic subtotal calculation.
- Separate cart entries for different drink sizes.
- Simulated checkout interaction.

### Membership
- Two membership plans: The Chapter and The Anthology.
- Monthly and annual membership options.
- Membership benefits and plan comparison.
- Membership registration interface.
- Simulated membership confirmation.

### Interactive Elements
- Responsive navigation.
- Mobile-friendly navigation menu.
- Interactive buttons, links, and modals.
- Category filters and search functionality.
- Smooth scrolling and visual transitions.
- Responsive layouts for different screen sizes.

## Membership Plans

Alpas offers two fictional membership options as part of the website experience.

| Membership | Monthly | Annual |
|---|---:|---:|
| The Chapter | ₱149 | ₱1,490 |
| The Anthology | ₱249 | ₱2,490 |

**The Chapter**
- Borrow one book at a time.
- Seven-day borrowing period.
- Access to exclusive community events.

**The Anthology**
- Borrow up to three books at a time.
- Fourteen-day borrowing period.
- Access to exclusive events and priority access.
- 10% discount on café purchases.

Annual membership pricing is equivalent to two months free compared with paying monthly for twelve months.

## Technologies Used

The project uses the following technologies and tools:

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework and application structure |
| React | Component-based user interface |
| TypeScript | Type-safe development |
| Tailwind CSS v4 | Styling and responsive layouts |
| Lucide React | Icons and interface elements |
| HTML | Web page structure |
| CSS | Visual presentation and styling |
| JavaScript / TypeScript | Application logic and interactivity |

## Design Concept

The visual identity of Alpas follows an **Enchanted Bookshop / Literary Dark Academia** aesthetic.

The design combines warm, natural colors and elegant typography to create a welcoming atmosphere inspired by reading corners, old bookstores, and cozy cafés.

### Color Palette

| Color | Hex Code | Usage |
|---|---|---|
| Forest Green | `#17251F` | Primary backgrounds |
| Parchment | `#F0EAD2` | Light backgrounds |
| Olive Green | `#7B8F4B` | Accents and details |
| Pale Green | `#DDE5B6` | Highlights and decorative elements |
| Brown | `#6C584C` | Supporting text and details |
| Warm Cream | `#F8F5E9` | Supporting surfaces |

### Typography
- **Cormorant Garamond** — Literary headings and expressive text.
- **Lato** — Clean and readable interface text.
- **Inter** — Supporting interface typography.

## Project Structure

The project follows the Next.js App Router structure.

```text
alpas/
├── app/
│   ├── menu/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── cart/
│   │   └── CartContext.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── Spaces.tsx
│   │   ├── MenuPreview.tsx
│   │   ├── Library.tsx
│   │   ├── Membership.tsx
│   │   ├── OurStory.tsx
│   │   ├── VisitUs.tsx
│   │   └── Footer.tsx
│   └── navigation/
│       └── Navigation.tsx
│
├── data/
│   └── menu.ts
│
├── public/
│   └── images/
│       └── menu/
│
├── package.json
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

*Note: This is an overview of the main project files and directories, not necessarily an exhaustive listing.*

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure the following are installed on your computer:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)

### Installation

1. Clone or download the project repository.
2. Open the project folder in your preferred code editor or terminal.
3. Install the project dependencies:

```bash
npm install
```

### Run the Development Server

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and visit:

```text
http://localhost:3000
```

The website should now be running locally.

Changes made to the source files will automatically reflect in the development environment.

## Available Scripts

The following commands are available through npm:

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs the configured linting checks, if available in the project |

## Important Project Disclaimer

Alpas Café is an academic website project developed for educational and demonstration purposes.

The café, its location, contact information, products, and membership offerings are fictional and created as part of the website concept.

The shopping cart, checkout process, and membership registration are **front-end simulations only**. They demonstrate user interface interactions and client-side functionality.

The project does not currently implement:
- Real payment processing.
- Actual online ordering or order fulfillment.
- A production membership management system.
- A backend database for customer accounts or transactions.

No real purchases or membership subscriptions are processed through the website.

## Deployment

This project can be deployed using platforms that support Next.js applications, such as [Vercel](https://vercel.com/).

For deployment instructions, refer to the official [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learning Resources

For additional information about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide React Documentation](https://lucide.dev/guide/packages/lucide-react)

---

<p align="center">
  <strong>ALPAS CAFÉ</strong><br />
  <em>Where the Mind Wanders Free.</em><br /><br />
  Made with love, coffee, and a little imagination.
</p>
