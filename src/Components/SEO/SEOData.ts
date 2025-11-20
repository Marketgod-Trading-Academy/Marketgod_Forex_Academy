// src/SEOData.ts

const ogImg = "https://res.cloudinary.com/dzqdfaghg/image/upload/v1763578745/Black_White_Gradient_Digital_Marketing_Instagram_Post_f2zh1x.png"

interface SEOInfo {
  title: string;
  description: string;
  image: string;
  type: string;
  url: string;
}
export const SEOData: { [key: string]: SEOInfo } = {
  "/": {
    title: "MarketGod Academy - Trade Smarter, Not Harder",
    description: "Join MarketGod Academy for live trading signals, mentorship, VIP access, and proven strategies.",
    image: ogImg,
    type: "website",
    url: "https://marketgod-academy.web.app"
  },
  "/about": {
    title: "About MarketGod Academy",
    description: "Learn about MarketGod Academy’s mission, trading philosophy, and team of expert mentors.",
  image: ogImg,
    type: "website",
    url: "https://marketgod-academy.web.app/about"
  },
  "/plans": {
    title: "MarketGod VIP Plans & Courses",
    description: "Explore VIP plans, live sessions, and mentorship programs to level up your trading.",
   image: ogImg,
    type: "website",
    url: "https://marketgod-academy.web.app/plans"
  },
  "/blog": {
    title: "MarketGod Blog - Trading Tips & Insights",
    description: "Stay updated with trading strategies, market analysis, and mentorship insights from MarketGod Academy.",
   image: ogImg,
    type: "website",
    url: "https://marketgod-academy.web.app/blog"
  },
  "/contact": {
    title: "Contact MarketGod Academy",
    description: "Get in touch with the MarketGod team for mentorship, support, and inquiries.",
    image: ogImg,
    type: "website",
    url: "https://marketgod-academy.web.app/contact"
  },
  "/notfound": {
    title: "Page Not Found - MarketGod Academy",
    description: "Oops! The page you are looking for does not exist. Return home or explore our courses.",
    image: ogImg,
    type: "website",
    url: "https://marketgod-academy.web.app/notfound"
  }
};
    // src/SEOData.ts
import { resources } from "../data/data";

const generateSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export const getBlogSEO = (slug: string) => {
  const post = resources.find((b) => generateSlug(b.title) === slug);
  if (!post) return null;

  return {
    title: `${post.title} - MarketGod Blog`,
    description: post.description,
    image: post.image,
    type: "article",
    url: `https://marketgod-academy.web.app/blog/${slug}`,
    datePublished: post.date,
    author: post.author
  };
};
