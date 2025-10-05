import React from "react";

const tools = [
  {
    name: "Figma",
    logo: "/figma-logo.png",
  },
  {
    name: "Canva",
    logo: "/canva-logo.png",
  },
  {
    name: "Adobe Photoshop",
    logo: "/photoshop-logo.png",
  },
  {
    name: "Adobe Illustrator",
    logo: "/illustrator-logo.jpg",
  },
];

export function ToolsSection() {
  return (
    <section className="py-16 px-4 mx-auto max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight text-foreground">Design Tools I Use</h2>
      <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
        These are the creative tools I am proficient with for digital design, branding, and visual content creation.
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        {tools.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center">
            <div className="w-20 h-20 mb-2 flex items-center justify-center rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-300 dark:from-neutral-900 dark:to-neutral-800 shadow-lg border border-neutral-200 dark:border-neutral-700">
              <img src={tool.logo} alt={tool.name + ' logo'} className="w-16 h-16 object-contain m-0" />
            </div>
            <span className="text-base font-medium text-foreground drop-shadow text-center">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
