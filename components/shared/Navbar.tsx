"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { CommandPalette } from "@/components/shared/CommandPalette";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FileDown } from 'lucide-react';

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Resume download handler
  const handleDownloadResume = () => {
    // Create link to your resume file
    const resumeUrl = "/SadaanAnsari-SDE.pdf"; // Update with your filename
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Sadaan_Ansari_Resume.pdf"; // Name of downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link href="/" className="text-xl font-bold">
          <span className="text-primary">SadaanAnsari</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Resume Button - Desktop */}
          <Link
            href="/SadaanAnsari-SDE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <FileDown className="h-4 w-4" />
            Resume
          </Link>

          <CommandPalette />
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
          <div className="container flex flex-col py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Resume Download - Mobile */}
            <Link
              href="/SadaanAnsari-SDE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <FileDown className="h-4 w-4" />
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
