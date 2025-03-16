import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import ReactPlayer from "react-player";

const projects = [
  {
    id: 1,
    title: "Commercial Brand Film",
    thumbnail: "https://images.unsplash.com/photo-1528109901743-12b16e05eedf",
    videoUrl: "https://player.vimeo.com/video/517117695",
    description: "A cinematic brand film showcasing luxury products"
  },
  {
    id: 2,
    title: "Music Video Edit",
    thumbnail: "https://images.unsplash.com/photo-1527786560821-46037fab26b3",
    videoUrl: "https://player.vimeo.com/video/517117695",
    description: "Dynamic music video editing with complex transitions"
  }
];

export default function PortfolioGallery() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group cursor-pointer rounded-lg overflow-hidden"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <h3 className="text-xl font-medium text-primary">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="aspect-video">
                  <ReactPlayer
                    url={project.videoUrl}
                    width="100%"
                    height="100%"
                    controls
                  />
                </div>
                <h3 className="text-xl font-medium mt-4">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
