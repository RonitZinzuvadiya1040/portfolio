import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  { degree: "B.E. Information Technology", school: "Marwadi University", period: "2019 – 2022", location: "Rajkot, India", grade: "CGPA: 7.87" },
  { degree: "Diploma Information Technology", school: "Lukhdhirji Engineering College, GTU", period: "2016 – 2019", location: "Morbi, India", grade: "CGPA: 7.04" },
  { degree: "S.S.C + 12th Equivalent Certificate", school: "", period: "2015 – 2016", location: "Morbi, India", grade: "54.33%" },
];

const EducationSection = () => (
  <section id="education" className="py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Education</h2>
        <p className="text-muted-foreground">My academic background</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {education.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 hover:glow-border transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
              <GraduationCap size={20} className="text-accent-foreground" />
            </div>
            <h3 className="font-semibold mb-1">{e.degree}</h3>
            {e.school && <p className="text-sm text-primary mb-1">{e.school}</p>}
            <p className="text-xs text-muted-foreground mb-2">{e.period} • {e.location}</p>
            <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-accent-foreground">{e.grade}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
