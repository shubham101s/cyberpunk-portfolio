import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation, useQuery } from "@tanstack/react-query";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { apiRequest } from "@/lib/queryClient";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const { data: messages = [], refetch } = useQuery({
    queryKey: ["/api/chat"],
    enabled: isOpen
  });

  const mutation = useMutation({
    mutationFn: async (message: string) => {
      await apiRequest("POST", "/api/chat", { message, isBot: false });
      // Simulate bot response
      await new Promise(resolve => setTimeout(resolve, 1000));
      await apiRequest("POST", "/api/chat", {
        message: "Thank you for your message! I'll get back to you soon.",
        isBot: true
      });
    },
    onSuccess: () => {
      refetch();
      setMessage("");
    }
  });

  return (
    <>
      <Button
        size="icon"
        className="fixed bottom-4 right-4 rounded-full h-12 w-12"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-80 bg-card rounded-lg shadow-lg border"
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-medium">Chat with me</h3>
              <Button size="icon" variant="ghost" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <ScrollArea className="h-80 p-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-4 ${
                    msg.isBot ? "mr-8" : "ml-8"
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      msg.isBot
                        ? "bg-muted text-muted-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </ScrollArea>

            <div className="p-4 border-t">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (message.trim()) {
                    mutation.mutate(message);
                  }
                }}
                className="flex gap-2"
              >
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                />
                <Button type="submit" disabled={mutation.isPending}>
                  Send
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
