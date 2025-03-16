import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1552345387-b54624b477d7",
    content: "Shubham's video editing skills transformed our brand content. His attention to detail and creativity is outstanding."
  },
  {
    name: "Michael Chen",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1643902917449-98c7ef8c9685",
    content: "Working with Shubham was a game-changer. He brings ideas to life with his exceptional editing skills."
  },
  {
    name: "Emma Williams",
    role: "YouTuber",
    avatar: "https://images.unsplash.com/photo-1676222490204-d1221b992320",
    content: "Shubham's editing style adds the perfect professional touch to my content. Highly recommended!"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client <span className="text-primary">Testimonials</span>
        </h2>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Avatar className="w-20 h-20 mx-auto mb-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      </Avatar>
                      <p className="text-lg mb-4">{testimonial.content}</p>
                      <h4 className="font-medium text-primary">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
