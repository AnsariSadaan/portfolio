"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUp, Code, Rocket, Star, Zap, Coffee } from "lucide-react";

// Section 1: Progress Bar
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
      style={{ scaleX }}
    />
  );
}

// Section 2: Fade In on Scroll
export function FadeInSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Section 3: Scale on Scroll
export function ScaleOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Section 4: Slide In from Left
export function SlideInLeft({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Section 5: Slide In from Right
export function SlideInRight({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Section 6: Stagger Children
export function StaggerContainer({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Section 7: Stagger Item
export function StaggerItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Section 8: Parallax Section
export function ParallaxSection({
  children,
  speed = 0.5,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}

// Section 9: Floating Animation
export function FloatingElement({
  children,
  delay = 0,
  duration = 3,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

// Section 10: Counter Animation
export function AnimatedCounter({
  target,
  label,
  suffix = "",
}: {
  target: number;
  label: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const step = Math.max(1, Math.floor(target / 60));

      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, duration / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="text-4xl font-bold text-primary"
      >
        {count}
        {suffix}
      </motion.div>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

// Section 11: Rotating Element
export function RotatingElement({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
}

// Section 12: Pulse Animation
export function PulseElement({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

// Main Demo Component
export function ScrollAnimationsDemo() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setShowScrollTop(latest > 500);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const stats = [
    { target: 50, label: "Projects Completed", suffix: "+" },
    { target: 30, label: "Happy Clients", suffix: "+" },
    { target: 10, label: "Awards Won", suffix: "" },
    { target: 100, label: "Coffee Cups", suffix: "+" },
  ];

  return (
    <section className="overflow-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>

      {/* <div className="container px-4 mx-auto">
        <FadeInSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-primary/10 text-primary">
                Scroll Animations
              </span>
            </motion.div>
            <h2 className="text-3xl font-bold sm:text-4xl bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Animations That Come Alive
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Scroll to see different animation effects in action
            </p>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary rounded-full" />
          </div>
        </FadeInSection>

        <div className="grid gap-6 mt-12 md:grid-cols-3">
          {[
            {
              icon: Code,
              title: "Clean Code",
              desc: "Write maintainable, scalable code",
            },
            {
              icon: Rocket,
              title: "Fast Performance",
              desc: "Optimized for speed and efficiency",
            },
            {
              icon: Zap,
              title: "Modern Stack",
              desc: "Latest technologies and frameworks",
            },
          ].map((item, index) => (
            <FadeInSection key={index} delay={index * 0.15}>
              <div className="p-6 rounded-lg border bg-card group hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        <div className="grid gap-8 mt-16 md:grid-cols-4">
          {stats.map((stat, index) => (
            <ScaleOnScroll key={index}>
              <div className="p-6 rounded-lg border bg-card">
                <AnimatedCounter
                  target={stat.target}
                  label={stat.label}
                  suffix={stat.suffix}
                />
              </div>
            </ScaleOnScroll>
          ))}
        </div>

        <div className="mt-16">
          <StaggerContainer>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Star,
                  title: "Best Developer 2024",
                  color: "text-yellow-500",
                },
                {
                  icon: Rocket,
                  title: "Fastest Delivery",
                  color: "text-blue-500",
                },
                {
                  icon: Coffee,
                  title: "Most Caffeinated",
                  color: "text-amber-500",
                },
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <div className="p-6 rounded-lg border bg-card text-center group hover:shadow-xl transition-all">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:scale-110 transition-transform">
                        <item.icon className={`h-8 w-8 ${item.color}`} />
                      </div>
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-xl bg-linear-to-r from-primary/20 to-secondary/20 p-12">
          <ParallaxSection speed={0.3}>
            <div className="relative text-center">
              <FloatingElement delay={0}>
                <h3 className="text-2xl font-bold">
                  Parallax & Floating Effects
                </h3>
              </FloatingElement>
              <FloatingElement delay={0.5} duration={4}>
                <p className="mt-2 text-muted-foreground">
                  Elements move at different speeds as you scroll
                </p>
              </FloatingElement>
              <div className="flex justify-center gap-8 mt-6">
                <FloatingElement delay={0.2} duration={2.5}>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                    🚀
                  </div>
                </FloatingElement>
                <FloatingElement delay={0.7} duration={3}>
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-2xl">
                    ⭐
                  </div>
                </FloatingElement>
                <FloatingElement delay={1.2} duration={3.5}>
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-2xl">
                    ✨
                  </div>
                </FloatingElement>
              </div>
            </div>
          </ParallaxSection>
        </div>

        <div className="grid gap-8 mt-16 md:grid-cols-2">
          <div className="p-8 rounded-lg border bg-card text-center">
            <h3 className="font-semibold mb-4">Rotating Element</h3>
            <RotatingElement>
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center text-3xl">
                🔄
              </div>
            </RotatingElement>
          </div>
          <div className="p-8 rounded-lg border bg-card text-center">
            <h3 className="font-semibold mb-4">Pulse Effect</h3>
            <PulseElement>
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center text-3xl">
                💫
              </div>
            </PulseElement>
          </div>
        </div>

        <div className="grid gap-8 mt-16 md:grid-cols-2">
          <SlideInLeft>
            <div className="p-8 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold text-primary">
                Slide In from Left
              </h3>
              <p className="mt-2 text-muted-foreground">
                This element slides in from the left when you scroll
              </p>
            </div>
          </SlideInLeft>
          <SlideInRight>
            <div className="p-8 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold text-primary">
                Slide In from Right
              </h3>
              <p className="mt-2 text-muted-foreground">
                This element slides in from the right when you scroll
              </p>
            </div>
          </SlideInRight>
        </div>
      </div> */}
    </section>
  );
}
