import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { textGlowAnimation } from "@/lib/animations";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      textGlowAnimation(titleRef.current);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1e74674daa6416f0888838f547&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
          >
            Crafting Cinematic Magic
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            One Frame at a Time
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              asChild
            >
              <a href="#contact">Hire Me</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="#portfolio">View Portfolio</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
