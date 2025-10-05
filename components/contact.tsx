import React from "react";

export function Contact() {
  return (
    <footer id="contact" className="py-16 px-6 bg-background text-center border-t border-border">
      <div className="container mx-auto max-w-2xl flex flex-col items-center gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Contact</h2>
        <p className="text-lg text-muted-foreground mb-4">Feel free to reach out for collaborations, projects, or just to say hello!</p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="mailto:nishant07mehta@gmail.com"
            className="rounded-full px-6 py-3 text-base font-medium bg-primary text-primary-foreground shadow hover:scale-105 hover:bg-primary/80 transition-all duration-200"
          >
            nishant07mehta@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/nishant-mehta-817aa0255/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-6 py-3 text-base font-medium bg-primary text-primary-foreground shadow hover:scale-105 hover:bg-primary/80 transition-all duration-200"
          >
            LinkedIn
          </a>
          <a
            href="tel:+917016491050"
            className="rounded-full px-6 py-3 text-base font-medium bg-primary text-primary-foreground shadow hover:scale-105 hover:bg-primary/80 transition-all duration-200"
          >
            +91 7016491050
          </a>
        </div>
        <p className="text-sm text-muted-foreground mt-8">© 2025. Crafted with care and attention to detail.</p>
      </div>
    </footer>
  );
}
