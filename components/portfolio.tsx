const projects = [
  {
    title: "Brand Identity",
    description: "Complete visual identity system for a tech startup",
    category: "Branding",
    image: "/modern-brand-identity.png",
  },
  {
    title: "E-commerce Platform",
    description: "Seamless shopping experience with elegant UI",
    category: "Web Design",
    image: "/elegant-ecommerce-website.png",
  },
  {
    title: "Mobile App Design",
    description: "Intuitive health and wellness application",
    category: "UI/UX",
    image: "/minimal-mobile-app-interface.png",
  },
  {
    title: "Editorial Design",
    description: "Magazine layout with sophisticated typography",
    category: "Print",
    image: "/editorial-magazine-layout-design.jpg",
  },
  {
    title: "Portfolio Website",
    description: "Minimalist portfolio for a photographer",
    category: "Web Design",
    image: "/minimalist-photography-portfolio.png",
  },
  {
    title: "Packaging Design",
    description: "Sustainable packaging for organic products",
    category: "Branding",
    image: "/elegant-product-packaging.png",
  },
]

export function Portfolio() {
  return (
    <section id="work" className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-foreground">Selected Work</h2>
          <p className="text-muted-foreground text-lg">A collection of recent projects</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="glass rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-accent font-medium tracking-wider uppercase">{project.category}</span>
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-4 h-4 text-secondary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
