import React from "react";

const posters = [
  "/Code Relay.png",
  "/Git and Github final.png",
  "/Instagram post - 14.jpg",
  "/Instagram post - 17.jpg",
  "/HS 4.png",
  "/TailwindWokshop.jpg",
  "/EDM Night.png",
  "/Basketball.png",
  "/Instagram post - 21.png",
];

export function BestPosters() {
  return (
    <section id="work" className="py-16 px-4 mx-auto max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight text-foreground">Social Branding & Event Posters</h2>
      <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
        A curated selection of my poster designs for workshops, competitions, and campus events—crafted to engage, inform, and build community presence.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posters.map((src, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-neutral-100 to-neutral-300 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200 dark:border-neutral-700 aspect-square"
          >
            <img
              src={src}
              alt={`Poster ${idx + 1}`}
              className="w-full h-full object-cover object-center aspect-square"
            />
            <div className="absolute inset-0 flex items-end p-4 pointer-events-none">
              <span className="text-white text-lg font-semibold" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8), 0 0 2px #000" }}>
                {idx === 4 ? "Hackspire Logo" : `Poster ${idx + 1}`}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
