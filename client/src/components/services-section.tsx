import { motion } from "framer-motion";
import { VideoIcon, Palette, Wand2, Share2 } from "lucide-react";

const services = [
  {
    icon: VideoIcon,
    title: "Video Editing",
    description: "Professional video editing with seamless transitions and perfect timing"
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Expert color correction and grading to enhance visual appeal"
  },
  {
    icon: Wand2,
    title: "Visual Effects",
    description: "Creative visual effects and motion graphics integration"
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Optimized edits for various social media platforms"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          My <span className="text-primary">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-lg bg-card border hover:border-primary transition-colors"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
