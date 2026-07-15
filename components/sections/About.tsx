"use client";

import { motion } from "framer-motion";
import { Code2, Users, Award, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { icon: Code2, value: "2+", label: "Years Experience" },
  { icon: Users, value: "3+", label: "Projects Delivered" },
  { icon: Award, value: "3", label: "Client Satisfaction" },
  { icon: Rocket, value: "50%", label: "Performance Gains" },
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I'm a Junior Software Developer with 2.1 years of experience in
            full-stack development, specializing in Node.js, React.js, REST
            APIs, and database-driven applications. I enjoy building scalable
            backend services, optimizing application performance, and delivering
            end-to-end solutions for enterprise platforms and modern web
            products. My experience spans across microservices architecture,
            real-time applications, and both SQL and NoSQL databases including
            MySQL, MongoDB, Redis, and ScyllaDB.
          </p>
          <div className="w-20 h-1 mx-auto mt-4 bg-primary rounded-full" />
        </motion.div>

        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <span className="text-3xl font-bold">{stat.value}</span>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-12 text-center"
        >
          <p className="text-muted-foreground"></p>
        </motion.div> */}
      </div>
    </section>
  );
}
