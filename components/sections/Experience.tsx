"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  GraduationCap,
  FileBadge,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const experiences = [
  {
    title: "Junior Software Developer",
    company: "SlashRTC Software Services Pvt Ltd",
    period: "Oct 2024 - Present",
    location: "Mumbai, India",
    type: "Full-time",
    description: [
      "Develop and customize enterprise web applications using React.js, JavaScript, PHP, and backend technologies.",
      "Contribute to customer delivery projects, implement new features, and resolve production issues as part of the L3 Development team.",
      "Work on internal platforms such as Ticket Portal focused on workflow automation and customer support.",
    ],
    achievements: [
      "Reduced ticket resolution time by 30% through workflow automation",
      "Implemented new features used by 50+ enterprise clients",
    ],
    image: "/projects/slash.png", // Only for work experience
  },
  {
    title: "Junior Developer",
    company: "Coast to Coast Holidays",
    period: "May 2024 - Sep 2024",
    location: "Mumbai, India",
    type: "Full-time",
    description: [
      "Worked on website content management and implemented business logic using CodeIgniter and PHP.",
      "Developed MySQL solutions and collaborated on database design and optimization.",
    ],
    achievements: [
      "Improved database query performance by 40%",
      "Successfully migrated legacy systems to modern architecture",
    ],
    image: "/projects/ctch.jpg", // Only for work experience
  },
];

const education = {
  degree: "BE in Computer Engineering",
  institution: "G.V Acharya Institute of Engineering and Technology",
  period: "2020 - 2023",
  cgpa: "8.58/10",
  // No image - using icon
};

const certificates = [
  {
    name: "Namaste React",
    issuer: "Akshay Saini",
    year: "2024",
  },
  {
    name: "Full Stack Development Program",
    issuer: "Hasbasoft Technology Pvt Ltd",
    year: "2023",
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
          <h2 className="text-3xl font-bold sm:text-4xl">
            Experience & Education
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My professional journey and academic background
          </p>
          <div className="w-20 h-1 mx-auto mt-4 bg-primary rounded-full" />
        </motion.div>

        {/* Work Experience Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            Work Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="h-1 bg-primary/20 group-hover:bg-primary transition-all duration-300" />
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      {/* Image/Logo - Only for Work Experience */}
                      <div className="shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center overflow-hidden group-hover:bg-primary/10 transition-all duration-300 border border-muted/50">
                          {exp.image ? (
                            <Image
                              src={exp.image}
                              alt={exp.company}
                              width={56}
                              height={56}
                              className="object-contain p-1.5"
                            />
                          ) : (
                            <Briefcase className="h-7 w-7 text-primary" />
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <p className="text-primary font-medium text-sm">
                              {exp.company}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{exp.location}</span>
                          </div>
                          <span className="text-muted-foreground/30">|</span>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-3.5 w-3.5" />
                            <span>{exp.type}</span>
                          </div>
                        </div>
                        <ul className="space-y-2 text-muted-foreground">
                          {exp.description.map((item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-2 text-sm"
                            >
                              <span className="text-primary text-lg leading-none mt-0.5">
                                •
                              </span>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                        {exp.achievements && (
                          <div className="mt-4 pt-4 border-t border-muted">
                            <div className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
                              <Award className="h-4 w-4" />
                              <span>Key Achievements</span>
                            </div>
                            <div className="grid gap-2 md:grid-cols-2">
                              {exp.achievements.map((achievement, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: idx * 0.05,
                                  }}
                                  viewport={{ once: true }}
                                  className="flex items-center gap-2 text-sm bg-primary/5 px-3 py-2 rounded-lg"
                                >
                                  <TrendingUp className="h-3.5 w-3.5 text-primary" />
                                  <span className="text-muted-foreground">
                                    {achievement}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section - No Images, Only Icons */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h3>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="h-1 bg-primary/20 group-hover:bg-primary transition-all duration-300" />
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                      <GraduationCap className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                          {education.degree}
                        </h3>
                        <p className="text-primary font-medium text-sm">
                          {education.institution}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{education.period}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      {/* <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{education.location}</span>
                      </div>
                      <span className="text-muted-foreground/30">|</span> */}
                      <div className="flex items-center gap-1">
                        <Award className="h-3.5 w-3.5 text-primary" />
                        <span className="font-medium text-primary">
                          CGPA: {education.cgpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Certificates Section - No Images, Only Icons */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FileBadge className="h-6 w-6 text-primary" />
            Certificates
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full">
                  <div className="h-1 bg-primary/20 group-hover:bg-primary transition-all duration-300" />
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                          <FileBadge className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold group-hover:text-primary transition-colors duration-300 truncate">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </p>
                        <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}