"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function Hero() {
  // State for image hover effect
  const [isHovered, setIsHovered] = useState(false);

  // State for text carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  const titles = [
    "Computer Engineer",
    "Full Stack Developer",
    "Creating with code. Small details matter."
  ];

  // Auto-rotate titles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Artistic Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-background" />

        {/* Decorative Circles */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Text Content - Shows first on mobile, left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 order-1 lg:order-1 text-center lg:text-left"
          >
            {/* Title Badge with Carousel */}
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-primary">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  {titles[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Name - Single Line */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="text-foreground">Sadaan </span>
              <span className="text-primary">Ansari</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0"
            >
              Building scalable web applications, enterprise platforms, and
              real-time systems using React, Node.js, and modern backend
              technologies.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8"
            >
              <Link href="#projects">
                <Button className="rounded-full">View My Work</Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" className="rounded-full">
                  Let's Talk
                </Button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-6 mt-8"
            >
              <Link
                href="https://github.com/AnsariSadaan"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sadaan-ansari-82a191214/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/sadaan_18"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaTwitter className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Artistic Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-2 lg:order-2"
          >
            <div
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Outer Ring with Animation */}
              <div className="absolute -inset-4 rounded-full bg-linear-to-r from-primary/30 via-secondary/20 to-primary/30 animate-spin-slow blur-sm" />

              {/* Inner Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl cursor-pointer group">
                {/* Default Image */}
                <Image
                  src="/my-profile.png"
                  alt="Sadaan Ansari"
                  width={400}
                  height={400}
                  className={`object-cover w-full h-full transition-all duration-700 ${
                    isHovered ? "opacity-0 scale-110" : "opacity-100 scale-100"
                  }`}
                  priority
                />

                {/* Hover Image */}
                <Image
                  src="/my-profile2.png"
                  alt="Sadaan Ansari - Alternative"
                  width={400}
                  height={400}
                  className={`absolute inset-0 object-cover w-full h-full transition-all duration-700 ${
                    isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                  priority
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent pointer-events-none" />

                {/* Hover Hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    ✨ Hover me
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 bg-primary text-primary-foreground p-3 rounded-xl shadow-lg rotate-12">
                <span className="text-sm font-medium">✨</span>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-3 rounded-xl shadow-lg -rotate-6">
                <span className="text-sm font-medium">⚡</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
}