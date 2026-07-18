"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Interactions() {
  const [isToggled, setIsToggled] = useState(false);
  const [springValue, setSpringValue] = useState(1);

  return (
    <section id="interactions" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Micro-Interactions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Physics-based UI elements that make interfaces feel alive
          </p>
          <div className="w-20 h-1 mx-auto mt-4 bg-primary rounded-full" />
        </motion.div>

        <div className="grid gap-8 mt-12 md:grid-cols-3">
          {/* Springy Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-4">Springy Button</h3>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button className="rounded-full">Click Me</Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Fluid Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-4">Fluid Toggle</h3>
                <motion.div
                  className={`w-16 h-8 rounded-full cursor-pointer ${
                    isToggled ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setIsToggled(!isToggled)}
                  layout
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                >
                  <motion.div
                    className="w-6 h-6 rounded-full bg-white shadow-md m-1"
                    animate={{ x: isToggled ? 32 : 0 }}
                    transition={{ type: "spring", stiffness: 700, damping: 30 }}
                  />
                </motion.div>
                <span className="text-sm text-muted-foreground mt-2 block">
                  {isToggled ? "ON" : "OFF"}
                </span>
              </CardContent>
            </Card>
          </motion.div>

          {/* Inertial Drag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-4">Inertial Drag</h3>
                <motion.div
                  drag
                  dragConstraints={{
                    left: -50,
                    right: 50,
                    top: -50,
                    bottom: 50,
                  }}
                  dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                  className="w-16 h-16 rounded-full bg-primary/20 cursor-grab active:cursor-grabbing mx-auto"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-full h-full flex items-center justify-center text-primary">
                    🎯
                  </div>
                </motion.div>
                <span className="text-sm text-muted-foreground mt-2 block">
                  Drag me!
                </span>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
