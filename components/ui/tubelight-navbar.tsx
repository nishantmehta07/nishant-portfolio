"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const sectionIds = items.map(item => item.url.replace('#', ''));
    const sectionElements = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0.1,
    };
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const found = items.find(item => item.url.replace('#', '') === id);
          if (found) setActiveTab(found.name);
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersect, observerOptions);
    sectionElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <div
      className={cn(
        "fixed md:top-0 left-1/2 -translate-x-1/2 z-[100] mb-6 md:pt-6 select-none",
        className,
      )}
    >
      <div className="flex items-center gap-6 bg-background/5 border border-border backdrop-blur-lg py-3 px-6 rounded-full shadow-lg md:min-w-[600px] justify-between select-none">
        {/* Name on the left - hidden on mobile */}
        <div className="hidden md:flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-semibold text-foreground text-sm">Nishant Mehta</span>
        </div>
        
        {/* Navigation items on the right */}
        <div className="flex items-center gap-2">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name); // Ensure tab switches immediately on click
                if (item.name === 'Home') {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                } else {
                  const sectionId = item.url.replace('#', '')
                  if (sectionId) {
                    const element = document.getElementById(sectionId)
                    element?.scrollIntoView({ behavior: "smooth" })
                  }
                }
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
        </div>
      </div>
    </div>
  )
}