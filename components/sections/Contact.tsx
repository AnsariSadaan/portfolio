"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ExternalLink,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Your EmailJS credentials - Replace with your actual values
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;


export function Contact() {

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      // Get form data
      const formData = new FormData(e.currentTarget);
      const name = formData.get("user_name") as string;
      const email = formData.get("user_email") as string;
      const message = formData.get("user_message") as string;

      // Prepare template parameters
      const templateParams = {
        name: name, // Matches {{name}} in template
        email: email, // Matches {{email}} in template
        message: message, // Matches {{message}} in template
      };

      console.log("Sending email with params:", templateParams);

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus("success");
        setStatusMessage(
          "Message sent successfully! I'll get back to you soon."
        );
        formRef.current?.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setStatusMessage(
        "Failed to send message. Please try again or contact me directly via email."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-b from-background to-muted/30"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-primary/10 text-primary">
            Contact
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Let's Build Something Great
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out through any of the channels below.
          </p>
          <div className="w-20 h-1 mx-auto mt-4 bg-primary rounded-full" />
        </motion.div>

        {/* Contact Cards - 3 Column Layout */}
        <div className="grid gap-6 mt-12 md:grid-cols-3 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center h-full">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Get a response within 24 hours
                </p>
                <Link
                  href="mailto:ansarisadaan72@gmail.com"
                  className="text-primary text-sm font-medium mt-2 hover:underline flex items-center gap-1"
                >
                  ansarisadaan72@gmail.com
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center h-full">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Available for calls
                </p>
                <Link
                  href="tel:+917045623244"
                  className="text-primary text-sm font-medium mt-2 hover:underline"
                >
                  +91 70456 23244
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center h-full">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Based in India
                </p>
                <p className="text-primary text-sm font-medium mt-2">
                  Mumbai, India
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Form + Social Section */}
        <div className="grid gap-8 mt-12 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Send a Message
                </h3>
                <form
                  ref={formRef}
                  className="space-y-4"
                  onSubmit={handleSubmit}
                >
                  <Input
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    disabled={isLoading}
                  />
                  <Input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    disabled={isLoading}
                  />
                  <Textarea
                    name="user_message"
                    placeholder="Tell me about your project..."
                    rows={4}
                    required
                    className="rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    disabled={isLoading}
                  />

                  {/* Status Messages */}
                  {status === "success" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 text-green-500 border border-green-500/20">
                      <CheckCircle className="h-4 w-4 shrink-0" />
                      <p className="text-sm">{statusMessage}</p>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 text-red-500 border border-red-500/20">
                      <XCircle className="h-4 w-4 shrink-0" />
                      <p className="text-sm">{statusMessage}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full rounded-lg group"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        Send Message
                        <span className="ml-2 text-xs opacity-70">→</span>
                      </>
                    )}
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  ✨ Usually responds within 24 hours
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Connect */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🌐</span>
                  Social Connect
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Connect with me on social media. I'm always open to new
                  connections and conversations.
                </p>

                <div className="grid grid-cols-2 gap-3 flex-1">
                  <Link
                    href="https://github.com/AnsariSadaan"
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-lg border border-muted hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                      <FaGithub className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">GitHub</p>
                      <p className="text-xs text-muted-foreground">
                        @AnsariSadaan
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/sadaan-ansari-82a191214/"
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-lg border border-muted hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                      <FaLinkedin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">LinkedIn</p>
                      <p className="text-xs text-muted-foreground">Connect</p>
                    </div>
                  </Link>

                  <Link
                    href="https://x.com/sadaan_18"
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-lg border border-muted hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                      <FaXTwitter className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Twitter</p>
                      <p className="text-xs text-muted-foreground">Follow</p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium">
              Available for Freelance Work
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}