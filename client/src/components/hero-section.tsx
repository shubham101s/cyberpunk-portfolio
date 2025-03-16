import { motion } from "framer-motion";
import ReactPlayer from "react-player";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <ReactPlayer
          url="https://player.vimeo.com/video/517117695"
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{ opacity: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/60" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Shubham Chavda</span>
            <br />
            Video Editor & Motion Artist
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Crafting Cinematic Magic – One Frame at a Time
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Hire Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
