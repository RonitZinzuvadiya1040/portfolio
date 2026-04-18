import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const links = ["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      // If near the bottom of page, highlight Contact
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
        setActiveSection("Contact");
        return;
      }

      const offset = 150;

      // Check sections from bottom to top, find the one whose top is above viewport offset
      for (let i = links.length - 1; i >= 0; i--) {
        const id = links[i] === "Home" ? "hero" : links[i].toLowerCase();
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            setActiveSection(links[i]);
            return;
          }
        }
      }

      setActiveSection("Home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <div className="flex flex-wrap justify-center items-center gap-1 px-3 py-2 rounded-3xl sm:rounded-full bg-background/80 backdrop-blur-lg border border-border shadow-lg max-w-[calc(100vw-2rem)]">
        {links.map((l) => (
          <a
            key={l}
            href={l === "Home" ? "#" : `#${l.toLowerCase()}`}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all whitespace-nowrap ${
              activeSection === l
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            {l}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
