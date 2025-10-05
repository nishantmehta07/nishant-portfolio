import React from "react";

const experiences = [
  {
    title: "Creative Head",
    org: "ASPDC (Adani Student Programming & Development Club)",
    logo: "/ASPDC  Logo.jpg",
    description:
      "Led the creative direction for ASPDC, overseeing branding, event posters, and digital content to foster a vibrant tech community at Adani University.",
  },
  {
    title: "Design Head",
    org: "ASPIRE Fest, Adani University",
    logo: "/aspire_logo-removebg-preview.png",
    description:
      "Managed all design aspects for ASPIRE Fest, including visual identity, promotional materials, and event graphics, ensuring a memorable campus experience.",
  },
];

export function ExperienceSection() {
  return (
    <section className="py-16 px-4 mx-auto max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight text-foreground">Leadership & Experience</h2>
      <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
        My journey as a creative and design lead at Adani University clubs and fests.
      </p>
      <div className="flex flex-col gap-8">
        {experiences.map((exp) => (
          <div key={exp.title} className="flex items-center gap-6 p-6 rounded-xl shadow-lg bg-gradient-to-br from-neutral-100 to-neutral-300 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200 dark:border-neutral-700">
            <div className="w-24 h-24 flex items-center justify-center rounded-lg bg-neutral-200 dark:bg-neutral-800">
              <img src={exp.logo} alt={exp.org + ' logo'} className="w-20 h-20 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
              <p className="text-base font-medium text-muted-foreground mb-1">{exp.org}</p>
              <p className="text-sm text-muted-foreground">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
