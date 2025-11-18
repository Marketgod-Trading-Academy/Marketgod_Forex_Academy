// import { Resource } from "../../types";

import type { Resource } from "../../types";

export const resources: Resource[] = [{
  id: 1,
  title: "All-in-One Resource Test",
  category: "Trading",
  description: "This is a full test resource containing images, videos, YouTube, and Instagram embeds.",
  fullText: `
## Introduction
This resource demonstrates all supported media types.

### YouTube
Check out this YouTube video.

### Instagram
Check out this Instagram post.

### Cloudinary Video
A sample Cloudinary video.

### Image
A sample image from Unsplash.
`,
  author: "MarketGod",
  date: "2025-11-18",
  platform: "youtube",
  image: "https://images.unsplash.com/photo-1601597114259-5c7f11e9c1a4?auto=format&fit=crop&w=800&q=80",
  link: "https://example.com",
  media: [
    {
      src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
    },
    {
      src: "https://www.instagram.com/p/DPq2Fh6DASg/",
      thumbnail: "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=400&q=60" // Example thumbnail
    },
    {
      src: "https://res.cloudinary.com/demo/video/upload/sample.mp4",
      thumbnail: "https://res.cloudinary.com/demo/image/upload/sample.jpg"
    },
    {
      src: "https://images.unsplash.com/photo-1601597114259-5c7f11e9c1a4?auto=format&fit=crop&w=800&q=80",
    },
  ],
}];
