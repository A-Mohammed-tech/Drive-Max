/**
 * All website text lives here, so you can edit content without touching components.
 *
 * Facts that came from the company LETTERHEAD (address, phone numbers, tagline) are
 * used as printed. Descriptions of manufacturing activities, quality, vision,
 * mission and values were adapted from the supplied profile document.
 *
 * NOTE: the supplied profile document describes "Sri Auto Parts Pvt. Ltd." (a
 * different company). Its company-specific claims were deliberately NOT copied:
 * no ISO / IATF certifications, awards, production volumes, staff numbers,
 * factory sizes, founding year, leadership names or customer claims.
 * Please have the DriveMax owners confirm every statement below, and add
 * certifications, founding year, etc. only when they are verified.
 */
import {
  Hammer,
  Layers,
  Factory,
  Cog,
  Wrench,
  Paintbrush,
  Ruler,
  ClipboardCheck,
  ShieldCheck,
  Gauge,
  Truck,
  Settings,
  Handshake,
  Target,
  Lightbulb,
  Eye,
  Compass,
} from "lucide-react";

/* ---------- Company details (from the letterhead) ---------- */
export const company = {
  name: "DriveMax Spares Private Limited",
  shortName: "DriveMax",
  tagline: "Drive Better Tomorrow",
  addressLines: [
    "No F12, Sipcot Industrial Complex,",
    "Sipcot Industrial Estate,",
    "Chennai-601201, Tamil Nadu",
  ],
  landline: { display: "044-32485647", href: "tel:+914432485647" },
  mobile: { display: "89765 34120", href: "tel:+918976534120" },
  // Opens Google Maps with a search for the printed address (no pin is invented).
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "No F12, Sipcot Industrial Complex, Sipcot Industrial Estate, Chennai 601201, Tamil Nadu"
    ),
};

/* ---------- Navigation ---------- */
export const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About Us", href: "#about" },
  { id: "products", label: "Products", href: "#products" },
  { id: "manufacturing", label: "Manufacturing", href: "#manufacturing" },
  { id: "quality", label: "Quality", href: "#quality" },
  { id: "vision", label: "Vision & Mission", href: "#vision" },
  { id: "contact", label: "Contact Us", href: "#contact" },
];

/* ---------- About ---------- */
export const about = {
  title: "Automobile spare parts, made in Chennai",
  paragraphs: [
    "DriveMax Spares Private Limited manufactures automobile spare parts at SIPCOT Industrial Estate in Chennai, Tamil Nadu. Our range covers four-wheeler spare parts, engine components and wheels, along with related automobile components.",
    "Our work is built around technological innovation, quality orientation and a principled approach to customer satisfaction. From tooling and development to manufacturing and testing, we focus on making parts that fit well and perform reliably.",
  ],
  facts: [
    { label: "Company", value: "DriveMax Spares Private Limited" },
    { label: "Business", value: "Automobile spare parts manufacturing" },
    { label: "Location", value: "SIPCOT Industrial Estate, Chennai, Tamil Nadu" },
    {
      label: "Range",
      value: "Four-wheeler spare parts, engine components, wheels and related components",
    },
  ],
};

/* ---------- Products ---------- */
// To use a real photo, put it in /public/images and set e.g. image: "/images/wheel.jpg".
// While `image` is null, a built-in illustration is shown instead.
export const products = [
  {
    id: "engine",
    kind: "engine",
    title: "Engine components",
    description:
      "Engine components for four-wheelers, manufactured with a focus on precision and a consistent fit.",
    image: null,
  },
  {
    id: "wheels",
    kind: "wheel",
    title: "Automobile wheels",
    description:
      "Wheels for four-wheelers, made with attention to accuracy, durability and dependable everyday performance.",
    image: null,
  },
  {
    id: "spares",
    kind: "parts",
    title: "Four-wheeler spare parts",
    description:
      "A range of spare parts and related automobile components for four-wheelers.",
    image: null,
  },
];

export const productInterests = [...products.map((p) => p.title), "Something else"];

/* ---------- Manufacturing ---------- */
export const manufacturing = {
  title: "How we make our parts",
  intro:
    "Our manufacturing activities cover the whole path from the tool that shapes a part to the test that checks it.",
  capabilities: [
    {
      icon: Hammer,
      title: "Sheet metal pressing and forming",
      text: "Shaping sheet metal into accurate components with press tools.",
    },
    {
      icon: Layers,
      title: "Deep drawing",
      text: "Forming flat sheet into deep, hollow shapes for parts that need them.",
    },
    {
      icon: Factory,
      title: "Light, medium and heavy fabrication",
      text: "Cutting, joining and finishing metal parts across a range of thicknesses.",
    },
    {
      icon: Cog,
      title: "Component assemblies",
      text: "Bringing individual parts together into finished assemblies.",
    },
    {
      icon: Wrench,
      title: "Tooling",
      text: "Making and maintaining the tools that shape each part.",
    },
    {
      icon: Paintbrush,
      title: "Surface coating",
      text: "Protective finishes that improve durability and appearance.",
    },
    {
      icon: Ruler,
      title: "Design and development",
      text: "Turning a part requirement into a process we can manufacture.",
    },
    {
      icon: ClipboardCheck,
      title: "Testing",
      text: "Checking parts against requirements before they are supplied.",
    },
  ],
  flow: [
    { icon: Wrench, title: "Tooling", text: "Tools and dies are prepared for the part." },
    { icon: Ruler, title: "Development", text: "The process is designed and refined." },
    { icon: Factory, title: "Manufacturing", text: "Parts are formed, fabricated and finished." },
    { icon: ClipboardCheck, title: "Testing", text: "Parts are checked against requirements." },
  ],
};

/* ---------- Quality ---------- */
export const quality = {
  title: "Quality and reliability",
  intro:
    "A part is only useful if it performs the same way every time. Quality control is built into our work from tooling to testing, so reliability is designed in, not added at the end.",
  items: [
    {
      icon: ShieldCheck,
      title: "Quality control across the range",
      text: "A quality control system covers our product range, so every part is held to the same standard.",
    },
    {
      icon: ClipboardCheck,
      title: "Testing and inspection",
      text: "Testing is part of how we manufacture, alongside tooling and development.",
    },
    {
      icon: Gauge,
      title: "Reliable performance",
      text: "We aim for product quality that exceeds expectations and performs dependably on the road.",
    },
    {
      icon: Settings,
      title: "Continuous improvement",
      text: "We keep reviewing our products, processes and services to make them better.",
    },
    {
      icon: Truck,
      title: "On-time delivery",
      text: "We work to deliver on time, because a late part stalls a customer's work.",
    },
  ],
};

/* ---------- Vision, mission, values ---------- */
export const vision = {
  statement:
    "To be a global leader and a brand of choice for our valued customers, an employer of choice for our employees, and a forward-looking company with sustainable performance and responsible business practices.",
};

export const mission = [
  "Ensure on-time deliveries with 100% customer satisfaction",
  "Pursue excellence in every area of the business",
  "Manufacture and supply the best quality products",
  "Reach a level of product quality that exceeds expectations",
  "Use the best technologies in mechanical, statistical and management areas",
  "Treat customers, suppliers and employees with trust and respect",
  "Keep the highest standards of honesty and integrity in all our relationships",
];

export const values = [
  {
    icon: Handshake,
    title: "Customer focus",
    text: "We work to maintain the highest quality standards across our range, always improving.",
  },
  {
    icon: Target,
    title: "Passion for excellence",
    text: "In products, processes and services, we pursue excellence through continuous improvement.",
  },
  {
    icon: Compass,
    title: "Pioneering",
    text: "We take on tough challenges with customer insight and fresh ideas.",
  },
  {
    icon: Eye,
    title: "Transparency and integrity",
    text: "We take responsibility for our actions and operate ethically, safely and openly.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We keep creating value-added solutions for emerging needs.",
  },
];
