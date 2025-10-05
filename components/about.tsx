export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="glass rounded-3xl p-12 md:p-16 space-y-8 hover:shadow-2xl transition-all duration-500">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-light text-foreground">About</h2>
            <div className="w-16 h-1 bg-accent rounded-full" />
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I specialize in creating beautiful, functional designs that bridge the gap between aesthetics and
              usability. My approach combines artistic vision with technical precision.
            </p>
            <p className="text-lg">
              With a background in both design and development, I bring a unique perspective to every project, ensuring
              that creative concepts are not only visually stunning but also technically feasible.
            </p>
            <p className="text-lg">
              I am also passionate about UI/UX, crafting intuitive and engaging user experiences for digital products and brands.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">Experience</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>
                  Creative Head of ASPDC (Adani Student Programming and Development Club)
                </li>
                <li>
                  Design Head of ASPIRE Fest, Adani University
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            {["UI/UX Design", "Branding", "Web Design", "Typography", "Art Direction"].map((skill) => (
              <span key={skill} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
