"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiJavascript,
  SiRedis,
  SiScylladb,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiPhp,
  SiDocker,
  SiGit,
  SiPostman,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "JavaScript",   icon: SiJavascript,     color: "#F7DF1E" },
  { name: "React.js",     icon: SiReact,          color: "#61DAFB" },
  { name: "Next.js",      icon: SiNextdotjs,      color: "#000000" },
  { name: "Node.js",      icon: SiNodedotjs,      color: "#339933" },
  { name: "Express.js",   icon: SiExpress,        color: "#808080" },
  { name: "MongoDB",      icon: SiMongodb,        color: "#47A248" },
  { name: "MySQL",        icon: SiMysql,          color: "#4479A1" },
  { name: "Redis",        icon: SiRedis,          color: "#DC382D" },
  { name: "ScyllaDB",     icon: SiScylladb,       color: "#6CD4FF" },
  { name: "Socket.IO",    icon: SiSocketdotio,    color: "#010101" },
  { name: "PHP",          icon: SiPhp,            color: "#777BB4" },
  { name: "Tailwind CSS", icon: SiTailwindcss,    color: "#06B6D4" },
  { name: "Docker",       icon: SiDocker,         color: "#2496ED" },
  { name: "Postman",      icon: SiPostman,        color: "#FF6C37" },
  { name: "Git",          icon: SiGit,            color: "#F05032" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Tech Stack</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tools and technologies I work with
          </p>
          <div className="w-20 h-1 mx-auto mt-4 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 gap-4 mt-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-4">
                  <skill.icon
                    className="h-12 w-12"
                    style={{ color: skill.color }}
                  />
                  <span className="mt-2 text-sm font-medium">{skill.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
