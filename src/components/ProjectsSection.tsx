import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  { name: "Golden Pathways", url: "https://goldenpathways.com", desc: "Full-featured web platform built with modern backend technologies." },
  { name: "Meshhh", url: "https://meshhh.com", desc: "Interactive web application with custom functionality and integrations." },
  { name: "Independent Music Mall", url: "https://www.independentmusicmall.com", desc: "E-commerce platform for independent music artists and labels." },
  { name: "Viva Wireless", url: "https://www.vivawirelessusa.com", desc: "Wireless service provider platform with user-friendly interface." },
  { name: "Scriptrx", url: "https://scriptrx.co.uk", desc: "Healthcare-related web platform serving UK market." },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 section-alt">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Projects</h2>
        <p className="text-muted-foreground">Some of the projects I've worked on</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-card border border-border rounded-xl p-6 hover:glow-border transition-all hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{p.name}</h3>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
            </div>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
