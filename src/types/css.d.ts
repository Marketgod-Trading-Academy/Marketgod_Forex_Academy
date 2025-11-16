// ──────────────────────────────────────────────────────────────
// Keep everything you already have
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.less";
declare module "*.styl";

// ──────────────────────────────────────────────────────────────
// Swiper CSS – add these two lines
declare module "swiper/css/autoplay" {
  const content: string;
  export default content;
}
declare module "swiper/css/navigation" {
  const content: string;
  export default content;
}
declare module "swiper/css" {
  const content: string;
  export default content;
}
declare module "swiper/css/pagination" {
  const content: string;
  export default content;
}
declare module "swiper/css/effect-fade" {
  const content: string;
  export default content;
}

// ──────────────────────────────────────────────────────────────
// (Optional) Add any other Swiper modules you might use later
// declare module "swiper/css/pagination" { ... }
// declare module "swiper/css/effect-fade" { ... }