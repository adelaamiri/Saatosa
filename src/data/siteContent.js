import {
  FaAmazon,
  FaFirefoxBrowser,
  FaGoogle,
  FaSlack,
  FaSpotify,
} from "react-icons/fa";
import { FiCheck, FiX } from "react-icons/fi";
import { FiClock, FiLayers } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

import featureDark from "../assets/sec1.png";
import featureLight from "../assets/sec2.png";
import featureBlue from "../assets/sec4.png";
import invoiceImg from "../assets/img1.png";
import statsImg from "../assets/img2.png";
import blog1 from "../assets/sec101.png";
import blog2 from "../assets/sec102.png";

export const navLinks = ["Pages", "About us", "Features", "Pricing"];

export const brands = [
  { icon: FaFirefoxBrowser, name: "Radiyal" },
  { icon: FaSpotify, name: "UTOSIA" },
  { icon: FaGoogle, name: "goldline" },
  { icon: FaSlack, name: "amara" },
  { icon: FaAmazon, name: "FOXHUB" },
];

export const featureCards = [
  {
    image: featureDark,
    alt: "Dark dashboard feature card",
    className: "bg-[#0B0F15]",
  },
  {
    image: featureLight,
    alt: "Automation feature card",
    className: "bg-[#EDF2F7]",
  },
  {
    image: featureBlue,
    alt: "Analytics feature card",
    className: "bg-[#3498DB]",
  },
];

export const solutionCards = [
  {
    title: "Scalable Solutions",
    description:
      "Scalable Solutions Grow with Your Business refers the ability of SaaS platform to expand and adapt a changing needs.",
    image: invoiceImg,
    alt: "Invoice Statistics",
    className: "bg-blue-500 text-white",
    textClassName: "text-white/90",
  },
  {
    title: "Automated Workflow",
    description:
      "Automated Workflows for Increased Efficiency refers the use of technology to streamline repetitive tasks.",
    image: statsImg,
    alt: "Website Stats Activity",
    className: "bg-slate-950 text-white",
    textClassName: "text-white/80",
  },
];

export const aiFeatures = [
  {
    icon: FiClock,
    title: "Real-Time Insights",
    description: "AI tools can generate high quality content optimize keywords.",
  },
  {
    icon: FiLayers,
    title: "User-Friendly Experience",
    description: "User-Friendly Experience focuses creating products.",
  },
];

export const analyticsItems = [
  "Seamless Integration with Existing Tools",
  "User-Friendly Interface for Navigation",
];

export const billingPrices = {
  monthly: {
    regular: 15,
    standard: 29,
    premium: 49,
  },
  yearly: {
    regular: 150,
    standard: 290,
    premium: 490,
  },
};

export const pricingPlans = [
  {
    key: "regular",
    name: "Regular Plan",
    description: "Free for personal use",
    featured: false,
    features: [
      { label: "2 Limited sites available", included: true },
      { label: "1 GB storage per site", included: true },
      { label: "Up to 5 pages per site", included: true },
      { label: "Free SSL for custom domain", included: false },
      { label: "Connect custom domain", included: false },
    ],
  },
  {
    key: "standard",
    name: "Standard Plan",
    description: "For startups, billed monthly",
    featured: true,
    features: [
      { label: "5 Limited sites available", included: true },
      { label: "5 GB storage per site", included: true },
      { label: "Up to 15 pages per site", included: true },
      { label: "Free SSL for custom domain", included: true },
      { label: "Connect custom domain", included: false },
    ],
  },
  {
    key: "premium",
    name: "Premium Plan",
    description: "For scaling, billed monthly",
    featured: false,
    features: [
      { label: "10 Limited sites available", included: true },
      { label: "10 GB storage per site", included: true },
      { label: "Up to 20 pages per site", included: true },
      { label: "Free SSL for custom domain", included: true },
      { label: "Connect custom domain", included: true },
    ],
  },
];

export const priceIcons = {
  included: FiCheck,
  excluded: FiX,
};

export const collaborationItems = [
  {
    icon: FiCheckCircle,
    label: "User-Friendly Interface for Effortless Navigation",
  },
  {
    icon: FiCheckCircle,
    label: "Customizable Dashboards Tailored to Your Needs",
  },
  {
    icon: FiCheckCircle,
    label: "Flexible Pricing Plans to Fit Any Budget",
  },
];

export const faqs = [
  {
    question: "How does your pricing work?",
    answer:
      "Our pricing is subscription-based, offering different plans depending on the features and services you need. You can choose monthly or yearly subscriptions, and custom plans are also available.",
  },
  {
    question: "Can I integrate your software with other tools?",
    answer:
      "Yes. Saatosa connects with common business tools so teams can keep their data and workflows in sync.",
  },
  {
    question: "Is my data secure on your platform?",
    answer:
      "Security is built into the platform with role-based access, encrypted data handling, and monitored infrastructure.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, you can start with a 14-day free trial before choosing the plan that fits your team.",
  },
  {
    question: "How often is the software updated?",
    answer:
      "The platform is updated regularly with performance improvements, security fixes, and new product features.",
  },
  {
    question: "What kind of customer support do you offer?",
    answer:
      "Support is available through email and guided onboarding resources, with priority support on higher plans.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. You can cancel or change your subscription from your account settings at any time.",
  },
  {
    question: "Is there a limit to the number of users?",
    answer:
      "User limits depend on the selected plan, and custom plans are available for larger teams.",
  },
  {
    question: "How do I get started with your platform?",
    answer:
      "Create your workspace, invite your team, connect your tools, and start tracking customer workflows from one dashboard.",
  },
];

export const blogPosts = [
  {
    title: "Scaling Your Business to with SaaS Guide Growth and Flexibility",
    category: "Software",
    image: blog1,
  },
  {
    title: "How SaaS Solutions Are Transforming Business Efficiency in 2024",
    category: "Software",
    image: blog2,
  },
];

export const footerColumns = [
  {
    title: "Quick Link",
    links: ["Features", "Pricing Plan", "Contact", "404"],
  },
  {
    title: "Resources",
    links: ["About Us", "Changelog", "Blog", "Terms & Condition"],
  },
  {
    title: "Get In Touch",
    links: [
      "hello@pentaclay.com",
      "55 main Street, 2nd block Melbourne, Australia",
      "+000 (123) 456 88",
    ],
  },
];
