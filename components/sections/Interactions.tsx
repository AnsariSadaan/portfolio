"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Play, Pause, Zap, Heart, Star } from "lucide-react";

export function Interactions() {
  const [isToggled, setIsToggled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const dragRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  // Animated counter
  useEffect(() => {
    if (clickCount > 0) {
      const controls = animate(clickCount, clickCount, {
        duration: 0.5,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [clickCount]);

  // Mouse move handler for 3D card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="interactions"
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
          <h2 className="text-3xl font-bold sm:text-4xl bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Micro-Interaction Sandbox
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Physics-based UI elements that make interfaces feel alive
          </p>
          <div className="w-20 h-1 mx-auto mt-4 bg-primary rounded-full" />
        </motion.div>

        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {/* 1. SPRINGY BUTTON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Springy Button</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Physics-based scale & rotation
                </p>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, -3, 3, 0],
                    transition: { rotate: { duration: 0.3 } },
                  }}
                  whileTap={{
                    scale: 0.85,
                    rotate: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <Button
                    className="rounded-full px-8 relative overflow-hidden group"
                    onClick={() => setClickCount((c) => c + 1)}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      Click Me
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </motion.div>
                <motion.p
                  className="mt-3 text-sm font-mono text-primary"
                  animate={{ scale: clickCount > 0 ? [1, 1.2, 1] : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Clicks: {clickCount}
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 2. FLUID TOGGLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Fluid Toggle</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Smooth, organic state transition
                </p>
                <div className="flex flex-col items-center">
                  <motion.div
                    className={`w-20 h-10 rounded-full cursor-pointer relative ${
                      isToggled ? "bg-primary" : "bg-muted"
                    }`}
                    onClick={() => setIsToggled(!isToggled)}
                    layout
                    transition={{ type: "spring", stiffness: 700, damping: 30 }}
                  >
                    <motion.div
                      className="absolute top-1 left-1 w-8 h-8 rounded-full bg-white shadow-lg"
                      animate={{
                        x: isToggled ? 40 : 0,
                        scale: isToggled ? 1.1 : 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 700,
                        damping: 30,
                      }}
                    >
                      <motion.div
                        className="w-full h-full rounded-full bg-linear-to-br from-primary/20 to-primary/5"
                        animate={{ opacity: isToggled ? 1 : 0 }}
                      />
                    </motion.div>
                  </motion.div>
                  <motion.span
                    className="mt-3 text-sm font-medium"
                    animate={{
                      color: isToggled
                        ? "var(--primary)"
                        : "var(--muted-foreground)",
                    }}
                  >
                    {isToggled ? "ENABLED" : "DISABLED"}
                  </motion.span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 3. INERTIAL DRAG */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Inertial Drag</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Tactile dragging with momentum
                </p>
                <div className="relative h-32 flex items-center justify-center">
                  <motion.div
                    drag
                    dragConstraints={{
                      left: -60,
                      right: 60,
                      top: -40,
                      bottom: 40,
                    }}
                    dragTransition={{
                      bounceStiffness: 300,
                      bounceDamping: 20,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-linear-to-br from-primary/30 to-primary/5 cursor-grab active:cursor-grabbing flex items-center justify-center text-4xl shadow-lg"
                  >
                    <motion.div
                      animate={{
                        rotate: isHovered ? 360 : 0,
                        scale: isHovered ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      🎯
                    </motion.div>
                  </motion.div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Drag me anywhere!
                </p>
              </CardContent>
            </Card>
          </motion.div> */}

          {/* 4. 3D CARD TILT */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card
              className="overflow-hidden group hover:shadow-xl transition-shadow"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                style={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                  transformStyle: "preserve-3d",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">3D Card Tilt</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Hover to see the magic
                  </p>
                  <motion.div
                    className="relative h-32 rounded-lg bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-4xl"
                    >
                      🚀
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-linear-to-tr from-primary/5 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </CardContent>
              </motion.div>
            </Card>
          </motion.div> */}

          {/* 5. ANIMATED LIKE BUTTON */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Animated Like</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Heart animation with particles
                </p>
                <div className="flex flex-col items-center">
                  <motion.button
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => setLiked(!liked)}
                  >
                    <motion.div
                      animate={{
                        scale: liked ? [1, 1.4, 1] : 1,
                        rotate: liked ? [0, -10, 10, -10, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Heart
                        className={`h-16 w-16 transition-colors ${
                          liked
                            ? "fill-red-500 text-red-500"
                            : "text-muted-foreground"
                        }`}
                      />
                    </motion.div>
                    {liked && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                        transition={{ duration: 0.8 }}
                      >
                        <div className="absolute inset-0 rounded-full bg-red-500/20" />
                      </motion.div>
                    )}
                  </motion.button>
                  <span className="mt-2 text-sm text-muted-foreground">
                    {liked ? "Liked ❤️" : "Tap to like"}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div> */}

          {/* 6. STAR RATING */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Star Rating</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Interactive rating system
                </p>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.8 }}
                      onHoverStart={() => setHoverRating(star)}
                      onHoverEnd={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="relative"
                    >
                      <motion.div
                        animate={{
                          scale: rating >= star ? [1, 1.2, 1] : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Star
                          className={`h-10 w-10 transition-colors ${
                            (hoverRating || rating) >= star
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground"
                          }`}
                        />
                      </motion.div>
                    </motion.button>
                  ))}
                </div>
                <motion.p
                  className="mt-3 text-sm text-muted-foreground"
                  animate={{ opacity: rating > 0 ? 1 : 0.5 }}
                >
                  {rating > 0 ? `Rating: ${rating} ⭐` : "Tap a star to rate"}
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 7. PULSING BUTTON */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Pulsing Button</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Attention-grabbing animation
                </p>
                <div className="flex justify-center">
                  <motion.div
                    // className="relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(var(--primary), 0.4)",
                          "0 0 0 20px rgba(var(--primary), 0)",
                          "0 0 0 0 rgba(var(--primary), 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Button className="rounded-full px-8 relative overflow-hidden">
                        <motion.span
                          animate={{
                            opacity: [1, 0.7, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          {isPlaying ? (
                            <Pause className="mr-2 h-4 w-4" />
                          ) : (
                            <Play className="mr-2 h-4 w-4" />
                          )}
                          {isPlaying ? "Playing" : "Play Now"}
                        </motion.span>
                        <motion.div
                          className="absolute inset-0 bg-white/10"
                          animate={{
                            x: ["-100%", "100%"],
                            opacity: [0, 0.5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div> */}

          {/* 8. VOLUME SLIDER */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Volume Slider</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Smooth draggable control
                </p>
                <div className="flex items-center gap-4 px-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isToggled ? (
                      <Volume2 className="h-5 w-5 text-primary" />
                    ) : (
                      <VolumeX className="h-5 w-5 text-muted-foreground" />
                    )}
                  </motion.div>
                  <div className="flex-1 h-2 bg-muted rounded-full relative cursor-pointer">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      style={{ width: isToggled ? "75%" : "20%" }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-md cursor-grab active:cursor-grabbing"
                      style={{ left: isToggled ? "73%" : "18%" }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0}
                      // onDrag={(e, info) => {
                      //   const rect =
                      //     e.currentTarget.parentElement?.getBoundingClientRect();
                      //   if (rect) {
                      //     const x = info.point.x - rect.left;
                      //     const percentage = Math.min(
                      //       Math.max(x / rect.width, 0),
                      //       1
                      //     );
                      //     setIsToggled(percentage > 0.5);
                      //   }
                      // }}
                      onDrag={(e, info) => {
                        const target = e.currentTarget as HTMLElement;

                        const rect =
                          target.parentElement?.getBoundingClientRect();

                        if (rect) {
                          const x = info.point.x - rect.left;
                          const percentage = Math.min(
                            Math.max(x / rect.width, 0),
                            1
                          );

                          setIsToggled(percentage > 0.5);
                        }
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    />
                  </div>
                  <motion.span
                    className="text-sm font-mono min-w-12"
                    animate={{
                      color: isToggled
                        ? "var(--primary)"
                        : "var(--muted-foreground)",
                    }}
                  >
                    {isToggled ? "75%" : "20%"}
                  </motion.span>
                </div>
              </CardContent>
            </Card>
          </motion.div> */}
        </div>

        {/* Interactive Sandbox Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            ✨ Hover, click, drag, and interact with these physics-based
            components
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">
              Built with Framer Motion & Tailwind CSS
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
