import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "Golden Pathways",
    url: "https://goldenpathways.com",
    desc: "Senior living care platform helping families find assisted living, memory care, and home care services.",
    tech: ["Laravel", "React.js", "Redux", "MySQL", "REST API", "Tailwind CSS"],
  },
  {
    name: "Meshhh",
    url: "https://meshhh.com",
    desc: "Construction industry platform connecting tradespeople, contractors, and project managers across the UK.",
    tech: ["Laravel", "PHP", "JavaScript", "jQuery", "MySQL", "AJAX"],
  },
  {
    name: "Independent Music Mall",
    url: "https://www.independentmusicmall.com",
    desc: "E-commerce platform for independent music artists with profit sharing and digital music sales.",
    tech: ["CodeIgniter 3", "PHP", "MySQL", "Stripe", "Payment Gateway", "JavaScript"],
  },
  {
    name: "Viva Wireless",
    url: "https://www.vivawirelessusa.com",
    desc: "E-commerce store for wireless accessories, phone cases, repair parts, and electronic devices.",
    tech: ["Magento 2", "PHP", "MySQL", "JavaScript", "jQuery", "E-commerce"],
  },
  {
    name: "ScriptRx",
    url: "https://scriptrx.co.uk",
    desc: "E-prescription healthcare platform for secure digital prescriptions and pharmacy integration.",
    tech: ["Laravel", "PHP", "Third-party APIs", "Payment Integration", "MySQL", "Healthcare"],
  },
  {
    name: "Chat Application",
    url: "https://github.com/RonitZinzuvadiya1040/Chat-Laravel-Pusher",
    desc: "Real-time chat application built with Laravel and Pusher for instant messaging functionality.",
    tech: ["Laravel", "Pusher", "WebSockets", "PHP", "JavaScript", "MySQL"],
  },
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
            className="group bg-card border border-border rounded-xl p-6 hover:glow-border transition-all hover:-translate-y-1 flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{p.name}</h3>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {p.tech.map((t) => (
                <Badge key={t} variant="secondary" className="text-xs font-normal">
                  {t}
                </Badge>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
