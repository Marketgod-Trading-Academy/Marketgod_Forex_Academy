import { useEffect, useState } from "react";

export default function TourPopup() {
  const [open, setOpen] = useState(false);

  const tourDates = [
    { city: "Ho", date: "21 Feb" },
    { city: "Takoradi", date: "7 Mar" },
    { city: "Kumasi", date: "21 Mar" },
    { city: "Tamale", date: "28 Mar" },
    { city: "Koforidua", date: "11 Apr" },
    { city: "Techiman", date: "25 Apr" },
  ];

  const firstUpcoming = 0; // Highlight first city

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-mg-black/80 backdrop-blur-sm px-4 overflow-auto">
      <div className="relative w-full max-w-5xl my-8 rounded-2xl overflow-hidden border-2 border-mg-blue shadow-2xl flex flex-col lg:flex-row bg-mg-dark-surface">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 z-10 text-mg-dark-textSecondary hover:text-mg-white text-lg"
        >
          ✕
        </button>

        {/* LEFT IMAGE SECTION */}
        <div className="lg:w-1/2 w-full h-64 lg:h-auto relative overflow-hidden">
          <img
            src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1763522350/SnapInsta.to_475855951_18485769310003421_2639630250731726422_n_ov7o6i.jpg" // replace with your image path
            alt="Market God Tour"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {/* Badge */}
          <div className="absolute top-4 left-4 bg-mg-gold text-mg-black text-xs font-bold px-3 py-1 rounded-full shadow-gold-glow">
            Marketgod 2026 Ghana Tour
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-mg-black/70 via-transparent to-transparent hidden lg:block"></div>
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="lg:w-1/2 w-full p-6 lg:p-8 text-mg-dark-text">

          {/* Headline */}
          <h2 className="text-3xl font-bold text-mg-gold mb-4 uppercase tracking-wide">
            The Journey Continues.
          </h2>

          {/* Story */}
          <div className="text-mg-dark-textSecondary space-y-3 text-sm leading-relaxed mb-6">
            <p>Every year, he shows up. Every year, traders level up.</p>
            <p>From city to city. From confusion to clarity. From inconsistency to discipline.</p>
            <p>This year again, Market God returns — touring six cities across Ghana.</p>
            <p className="text-mg-white font-medium">
              Not just to teach charts. But to build serious, profitable traders.
            </p>
          </div>

          {/* Tour Dates */}
          <div className="grid grid-cols-2 gap-3 text-sm mb-6">
            {tourDates.map((item, index) => (
              <div
                key={index}
                className={`border rounded-lg px-3 py-2 text-mg-dark-textSecondary
                  ${index === firstUpcoming ? "border-mg-gold font-semibold text-mg-white shadow-gold-glow" : "border-mg-dark-border"}`}
              >
                {item.city} — {item.date}
              </div>
            ))}
          </div>

          {/* Psychological Trigger */}
          <p className="text-xs text-mg-dark-textSecondary mb-4 italic">
            The serious ones will show up.
          </p>

          {/* CTA */}
          <button className="w-full bg-mg-gold text-mg-black font-semibold py-3 rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300">
            Secure My Seat
          </button>

        </div>
      </div>
    </div>
  );
}
