# MarketGod Forex Academy

**MarketGod Academy** is a comprehensive platform dedicated to Forex trading education, providing live trading signals, mentorship, and VIP access to proven strategies. The application is built with modern web technologies to ensure high performance, SEO optimization, and a seamless user experience.

## 🚀 Features

- **Educational Platform**: Access to trading courses and mentorship programs.
- **Trading Signals**: Real-time updates for VIP members.
- **Dark Mode Support**: Automatically detects system preference or user selection (persisted via `localStorage`).
- **SEO Optimized**:
  - Fully configured Meta tags for Google Search.
  - Open Graph (OG) tags for beautiful link previews on Facebook/WhatsApp.
  - Twitter Card integration.
  - `sitemap.xml` and `robots.txt` for search engine indexing.
- **Analytics**: Integrated Facebook Pixel for conversion tracking.

## 🛠️ Tech Stack

- **Frontend**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS / Tailwind CSS (implied by dark mode logic)
- **Hosting**: Firebase Hosting (implied by `web.app` domain) / Custom Domain

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher recommended)
- npm or yarn

## 💻 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/marketgod-forex-academy.git
   cd marketgod-forex-academy
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be generated in the `dist/` folder, ready for deployment.

## 🔍 SEO & Metadata

The project includes a robust SEO setup located in `index.html` and `public/`.

- **Sitemap**: Located at `/sitemap.xml`.
- **Robots**: Configured in `public/robots.txt` to allow crawling and point to the sitemap.
- **Verification**: Google Site Verification is implemented for Search Console.

### Updating Meta Tags
To update how the site looks when shared on social media, edit the `<head>` section in `index.html`:

```html
<meta property="og:title" content="Your New Title" />
<meta property="og:description" content="Your New Description" />
<meta property="og:image" content="URL_TO_YOUR_IMAGE" />
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.