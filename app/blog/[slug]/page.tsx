import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample blog posts data - replace with your actual data source
const posts = {
  "optimizing-nextjs": {
    title: "Optimizing Next.js Performance",
    date: "2024-03-15",
    readTime: "5 min read",
    content: `
      <h2>Introduction</h2>
      <p>Next.js is a powerful framework, but optimizing it requires understanding several key concepts...</p>
      
      <h3>1. Image Optimization</h3>
      <p>Use the Next.js Image component for automatic optimization...</p>
      
      <h3>2. Code Splitting</h3>
      <p>Leverage dynamic imports to split your code...</p>
    `,
  },
  // Add more posts...
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen py-20">
      <div className="container px-4 mx-auto max-w-3xl">
          <Link href="/#blog">
            <Button variant="ghost" className="rounded-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

        <header className="mb-8">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="flex items-center gap-4 mt-4 text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </header>

        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
