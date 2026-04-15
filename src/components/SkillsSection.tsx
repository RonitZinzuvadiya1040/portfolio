import { motion } from "framer-motion";

const skills = [
  { name: "Laravel", level: 95 },
  { name: "PHP", level: 90 },
  { name: "REST APIs", level: 90 },
  { name: "MySQL", level: 85 },
  { name: "Magento 2", level: 80 },
  { name: "CodeIgniter 3", level: 75 },
  { name: "CakePHP", level: 70 },
  { name: "JavaScript", level: 75 },
  { name: "jQuery", level: 80 },
  { name: "AJAX", level: 80 },
  { name: "Tailwind CSS", level: 75 },
  { name: "Bootstrap", level: 80 },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 section-alt">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Skills & Technologies</h2>
        <p className="text-muted-foreground">Technologies I work with daily</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-xl p-4 border border-border hover:glow-border transition-shadow"
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium text-sm">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                className="h-full rounded-full bg-primary"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
