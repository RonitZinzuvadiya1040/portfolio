import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Infynno Solution LLP",
    role: "Software Engineer",
    period: "Dec 2025 – Mar 2026",
    location: "Ahmedabad, India",
    points: [
      "Took ownership of key modules, handled development, and fixed production issues to keep the system stable.",
      "Improved old code and converted business requirements into simple, scalable solutions.",
    ],
  },
  {
    company: "Atulyam Technolabs LLP",
    role: "Software Engineer",
    period: "Aug 2025 – Nov 2025",
    location: "Ahmedabad, India",
    points: [
      "Built and maintained features for an eSports platform using CakePHP, focusing on scalability and performance.",
      "Developed backend logic and handled database operations to ensure efficient and reliable system performance.",
    ],
  },
  {
    company: "Intelligent IT Hub Pvt. Ltd. (IIH Global)",
    role: "Software Engineer",
    period: "Jul 2024 – Jul 2025",
    location: "Ahmedabad, India",
    points: [
      "Developed and optimized scalable RESTful APIs using Laravel, improving system performance and reliability by 20%.",
      "Integrated Stripe Payment Intents API with custom fee logic, ensuring accurate payment processing.",
      "Collaborated with cross-functional teams and conducted code reviews to ensure best practices.",
    ],
  },
  {
    company: "WebMobTech Solutions Pvt. Ltd.",
    role: "Software Developer",
    period: "Sep 2023 – Jul 2024",
    location: "Ahmedabad, India",
    points: [
      "Delivered multiple Laravel-based projects by developing RESTful APIs and upgrading legacy systems.",
      "Enhanced Magento 2 e-commerce platforms by developing custom modules.",
      "Developed and published a Magento 2 extension to enhance customer account accessibility.",
    ],
  },
  {
    company: "Rankway Technology Pvt. Ltd.",
    role: "Software Developer",
    period: "Apr 2023 – Jul 2023",
    location: "Ahmedabad, India",
    points: [
      "Built and maintained web applications using Laravel, gaining foundational experience in backend development and MVC architecture.",
    ],
  },
  {
    company: "Brainvire Infotech Inc.",
    role: "Software Developer Intern",
    period: "Oct 2022 – Mar 2023",
    location: "Ahmedabad, India",
    points: [
      "Worked on Magento development by building custom modules and fixing functionality issues.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Work Experience</h2>
        <p className="text-muted-foreground">My professional journey</p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-4 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                <Briefcase size={14} className="text-primary-foreground" />
              </div>
              <div className="ml-14 md:ml-0 md:w-1/2 bg-card border border-border rounded-xl p-5 hover:glow-border transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="font-semibold text-lg">{exp.company}</h3>
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-primary text-sm font-medium mb-1">{exp.role}</p>
                <p className="text-xs text-muted-foreground mb-3">{exp.location}</p>
                <ul className="space-y-1.5">
                  {exp.points.map((p, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
