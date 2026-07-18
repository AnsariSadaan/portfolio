"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Dev Connect",
    description:
      "Developer networking platform featuring real-time chat, premium memberships, and secure authentication built with the MERN stack and Socket.io.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Redux Toolkit",
      "Razorpay",
      "Tailwind CSS",
    ],
    image: "/projects/devConnectBanner.png",
    demo: "https://github.com/AnsariSadaan/devConnect",
    github: "https://github.com/AnsariSadaan/devConnect",
  },
  {
    title: "Just Shop",
    description:
      "Full-stack MERN e-commerce application with JWT authentication, shopping cart functionality, Redux state management, and secure REST APIs.",
    tags: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    image: "/projects/justShopBanner.png",
    demo: "https://github.com/AnsariSadaan/just-shop",
    github: "https://github.com/AnsariSadaan/just-shop",
  },
  {
    title: "MetroApp",
    description:
      "Metro ticket booking platform featuring QR-based digital tickets, secure authentication, and responsive user interfaces built with the MERN stack.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "QR Code",
      "Tailwind CSS",
    ],
    image: "/projects/metroAppBanner.png",
    demo: "https://github.com/AnsariSadaan/metroApp",
    github: "https://github.com/AnsariSadaan/metroApp",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Things I've built and shipped
          </p>
          <div className="w-20 h-1 mx-auto mt-4 bg-primary rounded-full" />
        </motion.div>

        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <Card className="overflow-hidden group h-full flex flex-col">
                <div className="relative aspect-video bg-muted overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2} // Load first 2 images faster
                    />
                  ) : (
                    // Fallback if no image
                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/10 to-primary/5">
                      <span className="text-muted-foreground">No Image</span>
                    </div>
                  )}

                  {/* Optional: Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Link href={project.demo}>
                      <Button variant="outline" className="rounded-full">
                        <FiArrowUpRight className="mr-1 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>

                    <Link href={project.github}>
                      <Button variant="outline" className="rounded-full">
                        <FaGithub className="mr-1 h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="https://github.com/AnsariSadaan?tab=repositories">
            <Button className="rounded-full">View All Projects →</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
