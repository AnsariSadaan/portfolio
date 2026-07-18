"use client";

import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const posts = [
  {
    title: "Optimizing Next.js Performance",
    excerpt: "Learn how to reduce bundle size and improve load times.",
    date: "2024-03-15",
    readTime: "5 min read",
    slug: "optimizing-nextjs",
  },
  {
    title: "Building with TypeScript",
    excerpt: "Best practices for type-safe applications.",
    date: "2024-02-20",
    readTime: "4 min read",
    slug: "typescript-best-practices",
  },
  {
    title: "Mastering Tailwind CSS",
    excerpt: "Create beautiful UIs with utility-first CSS.",
    date: "2024-01-10",
    readTime: "3 min read",
    slug: "tailwind-mastery",
  },
];

export function Blog() {
  // return (
  //   <section id="blog" className="py-20 bg-muted/30">
  //     <div className="container px-4 mx-auto">
  //       <motion.div
  //         initial={{ opacity: 0, y: 20 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 0.5 }}
  //         viewport={{ once: true }}
  //         className="max-w-3xl mx-auto text-center"
  //       >
  //         <h2 className="text-3xl font-bold sm:text-4xl">Latest Blog Posts</h2>
  //         <p className="mt-4 text-lg text-muted-foreground">
  //           Thoughts on development, design, and technology
  //         </p>
  //         <div className="w-20 h-1 mx-auto mt-4 bg-primary rounded-full" />
  //       </motion.div>

  //       <div className="max-w-3xl mx-auto mt-12 space-y-6">
  //         {posts.map((post, index) => (
  //           <motion.div
  //             key={index}
  //             initial={{ opacity: 0, x: -20 }}
  //             whileInView={{ opacity: 1, x: 0 }}
  //             transition={{ duration: 0.5, delay: index * 0.1 }}
  //             viewport={{ once: true }}
  //           >
  //             <Card className="group">
  //               <CardContent className="p-6">
  //                 <Link href={`/blog/${post.slug}`}>
  //                   <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
  //                     {post.title}
  //                   </h3>
  //                   <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
  //                   <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
  //                     <span className="flex items-center gap-1">
  //                       <Calendar className="h-4 w-4" />
  //                       {post.date}
  //                     </span>
  //                     <span className="flex items-center gap-1">
  //                       <Clock className="h-4 w-4" />
  //                       {post.readTime}
  //                     </span>
  //                   </div>
  //                 </Link>
  //               </CardContent>
  //             </Card>
  //           </motion.div>
  //         ))}
  //       </div>

  //       <motion.div
  //         initial={{ opacity: 0, y: 20 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 0.5, delay: 0.3 }}
  //         viewport={{ once: true }}
  //         className="mt-12 text-center"
  //       >
  //         <Link href="#blog">
  //           <Button className="rounded-full">
  //             Read All Posts →
  //           </Button>
  //         </Link>
  //       </motion.div>
  //     </div>
  //   </section>
  // );
}
