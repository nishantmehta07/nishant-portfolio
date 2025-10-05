"use client"

import { Home, User, Briefcase, Mail } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function Navigation() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Work', url: '#work', icon: Briefcase },
    { name: 'Contact', url: '#contact', icon: Mail }
  ]

  return <NavBar items={navItems} />
}
