import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" className="font-heading font-bold text-xl text-foreground">
          Ronit<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="p-2 text-foreground">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
