"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "CTO at TechCorp",
    image: "https://i.pravatar.cc/150?img=1",
    content:
      "Sadaan built our entire platform with incredible attention to detail. The performance improvements were remarkable.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Product Manager at StartUp",
    image: "https://i.pravatar.cc/150?img=2",
    content:
      "One of the most talented developers I've worked with. Delivered complex features ahead of schedule.",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    role: "Founder at DevStudio",
    image: "https://i.pravatar.cc/150?img=3",
    content:
      "Sadaan's expertise in React and Next.js helped us scale our application seamlessly.",
    rating: 5,
  },
];

export function Testimonials() {
  // return (
  //   <section id="testimonials" className="py-20">
  //     <div className="container px-4 mx-auto">
  //       <motion.div
  //         initial={{ opacity: 0, y: 20 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 0.5 }}
  //         viewport={{ once: true }}
  //         className="max-w-3xl mx-auto text-center"
  //       >
  //         <h2 className="text-3xl font-bold sm:text-4xl">What People Say</h2>
  //         <p className="mt-4 text-lg text-muted-foreground">
  //           Testimonials from clients and colleagues
  //         </p>
  //         <div className="w-20 h-1 mx-auto mt-4 bg-primary rounded-full" />
  //       </motion.div>

  //       <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
  //         {testimonials.map((testimonial, index) => (
  //           <motion.div
  //             key={index}
  //             initial={{ opacity: 0, y: 20 }}
  //             whileInView={{ opacity: 1, y: 0 }}
  //             transition={{ duration: 0.5, delay: index * 0.1 }}
  //             viewport={{ once: true }}
  //           >
  //             <Card className="h-full group hover:shadow-xl transition-shadow">
  //               <CardContent className="p-6">
  //                 <div className="flex items-center gap-4 mb-4">
  //                   <Avatar className="h-12 w-12 border-2 border-primary/20 group-hover:border-primary transition-colors">
  //                     <AvatarImage
  //                       src={testimonial.image}
  //                       alt={testimonial.name}
  //                     />
  //                     <AvatarFallback className="bg-primary/10 text-primary">
  //                       {testimonial.name
  //                         .split(" ")
  //                         .map((n) => n[0])
  //                         .join("")}
  //                     </AvatarFallback>
  //                   </Avatar>
  //                   <div>
  //                     <p className="font-semibold">{testimonial.name}</p>
  //                     <p className="text-sm text-muted-foreground">
  //                       {testimonial.role}
  //                     </p>
  //                   </div>
  //                 </div>
  //                 <div className="flex gap-1 mb-3">
  //                   {[...Array(testimonial.rating)].map((_, i) => (
  //                     <Star
  //                       key={i}
  //                       className="h-4 w-4 fill-yellow-400 text-yellow-400"
  //                     />
  //                   ))}
  //                 </div>
  //                 <p className="text-muted-foreground">
  //                   "{testimonial.content}"
  //                 </p>
  //               </CardContent>
  //             </Card>
  //           </motion.div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
}
