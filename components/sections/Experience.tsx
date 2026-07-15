"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Junior Software Developer",
    company: "SlashRTC Software Services Pvt Ltd",
    period: "Oct 2024  - Present",
    description:
      "Develop and customize enterprise web applications using React.js, JavaScript, PHP, and backend technologies. Contribute to customer delivery projects, implement new features, resolve production issues as part of the L3 Development team, and work on internal platforms such as Ticket Portal focused on workflow automation and customer support.",
  },
  {
    title: "Junior Developer",
    company: "Coast to Coast Holidays",
    period: "May 2024 - Sep 2024",
    description:
      "Worked on website content management, implemented business logic using CodeIgniter and PHP, developed MySQL solutions, and collaborated on database design and optimization.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Work Experience</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My professional journey
          </p>
          <div className="w-20 h-1 mx-auto mt-4 bg-primary rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto mt-12 space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary/30"
            >
              <div className="absolute -left-3 top-0 p-1 rounded-full bg-primary/10">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>
              <div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{exp.period}</span>
              </div>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-primary font-medium">{exp.company}</p>
              <p className="mt-2 text-muted-foreground">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
