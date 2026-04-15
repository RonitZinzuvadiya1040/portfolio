import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          I'm a passionate Software Developer with over 3 years of hands-on experience building robust web applications. 
          Specializing in Laravel, PHP, and MySQL, I focus on creating scalable backend architectures, 
          optimizing performance, and delivering clean, maintainable code. I've worked across diverse domains 
          including e-commerce (Magento 2), eSports platforms, and healthcare solutions.
        </p>
      </div>
    </section>
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <EducationSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
