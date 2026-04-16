import { motion } from "framer-motion";

const links = ["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-background/80 backdrop-blur-lg border border-border shadow-lg overflow-x-auto max-w-full scrollbar-hide">
        {links.map((l) => (
          <a
            key={l}
            href={l === "Home" ? "#" : `#${l.toLowerCase()}`}
            className="px-3 py-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-all whitespace-nowrap"
          >
            {l}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
