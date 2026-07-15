"use client"

import { motion } from "framer-motion"
import { FaGithub, FaArrowDown, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ResumeButton } from "../shared/ResumeButton";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-background to-background" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium rounded-full bg-primary/10 text-primary">
              Available for Work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl"
          >
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Sadaan
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground sm:text-xl md:text-2xl"
          >
            Building scalable web applications, enterprise solutions, and
            real-time experiences with React, Node.js, and modern backend
            technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
          >
            <Link href="#projects">
              <Button variant="outline" className="rounded-full">
                View My Work
              </Button>
            </Link>

            <Link href="#contact">
              <Button variant="outline" className="rounded-full">
                Let's Talk
              </Button>
            </Link>

            <Link href="#resume">
                <ResumeButton />             
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-6 mt-8"
          >
            <Link
              href="https://github.com/AnsariSadaan"
              target="_blank"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <FaGithub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/sadaan-ansari-82a191214/"
              target="_blank"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <FaLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://x.com/sadaan_18"
              target="_blank"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <FaXTwitter className="h-5 w-5" />
              <span className="sr-only">X - Twitter</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <FaArrowDown className="h-6 w-6 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
}