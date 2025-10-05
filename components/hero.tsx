"use client"

import { useTheme } from "next-themes"
import { TextPressure } from "@/components/ui/interactive-text-pressure"

function getTextColor(theme: string | undefined) {
  return theme === "dark" ? "#ffffff" : "#111111"
}

export function Hero() {
  const { theme } = useTheme()

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground tracking-widest uppercase animate-fade-in">Welcome to my Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-fade-in-up">Nishant Mehta</h1>
            <p className="text-lg text-muted-foreground mb-4 animate-fade-in-up">A versatile individual skilled in Graphic Design, UI/UX, and Creative Direction.</p>
            <div className="animate-fade-in-up space-y-4">
              <div className="h-56 md:h-80 lg:h-[185px] flex items-center justify-center">
                <TextPressure
                  text="Graphic   Designer"
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor={getTextColor(theme)}
                  strokeColor="#ff0000"
                  minFontSize={200}
                  className="cursor-default"
                />
              </div>
              <div className="h-32 md:h-44 lg:h-56 flex items-center justify-center">
                <TextPressure
                  text="& Creative"
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor={getTextColor(theme)}
                  strokeColor="#ff0000"
                  minFontSize={90}
                  className="cursor-default"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
