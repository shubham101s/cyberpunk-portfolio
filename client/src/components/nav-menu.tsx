import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";

export default function NavMenu() {
  const isMobile = useIsMobile();

  const MenuItems = () => (
    <>
      <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
      <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
      <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
      <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          Shubham Chavda
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <MenuItems />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-8">
            <MenuItems />
          </div>
        )}
      </div>
    </nav>
  );
}