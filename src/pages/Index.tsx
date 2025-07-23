import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/sections/SkillsSection";
import LogAnalysisSection from "@/components/sections/LogAnalysisSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Log Analysis Section */}
      <section id="analysis">
        <LogAnalysisSection />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Certifications Section */}
      <section id="certifications">
        {/* Ensure this import exists at the top: import CertificationsSection from "@/components/sections/CertificationsSection"; */}
        <CertificationsSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;
