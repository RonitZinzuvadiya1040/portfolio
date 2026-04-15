import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";

const HeroSection = () => (
  <section className="hero-gradient min-h-screen flex items-center pt-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
      <div className="flex flex-col items-center text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            Software Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Hi, I'm <span className="text-gradient">Ronit Zinzuvadiya</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-4"
        >
          Laravel Developer with 3+ years of experience in PHP, REST APIs, and MySQL. 
          Building scalable applications and optimizing backend performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 text-muted-foreground mb-8"
        >
          <MapPin size={16} />
          <span className="text-sm">Morbi, Gujarat, India</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <a href="mailto:ronitzinzuvadiya2001@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            <Mail size={18} /> Get in Touch
          </a>
          <a href="https://github.com/RonitZinzuvadiya1040" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-accent transition-colors">
            <Github size={18} /> GitHub
          </a>
          <a href="https://linkedin.com/in/ronit-zinzuvadiya" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-accent transition-colors">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="https://ronitzinzuvadiya.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-accent transition-colors">
            <ExternalLink size={18} /> Portfolio
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
