import { motion } from "framer-motion";
import { Mail, Phone, MapPin, LinkedinIcon } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 section-alt">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Get in Touch</h2>
        <p className="text-muted-foreground">Let's connect and discuss opportunities</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto bg-card border border-border rounded-xl p-8 space-y-5"
      >
        <a href="mailto:ronitzinzuvadiya2001@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
            <Mail size={18} className="text-accent-foreground" />
          </div>
          <span className="text-sm break-all">ronitzinzuvadiya2001@gmail.com</span>
        </a>
        <a href="tel:+919033463695" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
            <Phone size={18} className="text-accent-foreground" />
          </div>
          <span className="text-sm">+91-9033463695</span>
        </a>
        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
            <MapPin size={18} className="text-accent-foreground" />
          </div>
          <span className="text-sm">Morbi, Gujarat, India</span>
        </div>

        <div className="pt-4 border-t border-border flex gap-3 justify-center">
          <a href="https://github.com/RonitZinzuvadiya1040" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/ronit-zinzuvadiya" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
