import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Shield,
  Heart
} from "lucide-react";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/srivenkatesh",
      icon: Linkedin,
      color: "hover:text-blue-500"
    },
    {
      name: "GitHub", 
      url: "https://github.com/srivenkatesh",
      icon: Github,
      color: "hover:text-gray-400"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/srivenkatesh",
      icon: Instagram,
      color: "hover:text-pink-500"
    },
    {
      name: "TryHackMe",
      url: "https://tryhackme.com/p/srivenkatesh",
      icon: Shield,
      color: "hover:text-green-500"
    }
  ];

  return (
    <footer ref={ref} className="relative py-16 bg-gradient-to-t from-cyber-darker to-background border-t border-border/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h3 className="text-3xl font-bold">
              <span className="text-cyber-glow">Srivenkatesh</span>
            </h3>
            <p className="text-muted-foreground mt-2">SOC Analyst & Cybersecurity Professional</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className={`group relative p-3 rounded-full bg-card/30 border border-border/50 ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-[var(--glow-purple)]`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-card border border-border/50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-8 text-sm"
          >
            <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <a href="#resume" className="text-muted-foreground hover:text-primary transition-colors">
              Resume
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8 border-t border-border/30"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © 2024 Srivenkatesh. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>for cybersecurity</span>
              </div>
            </div>
          </motion.div>

          {/* Background Decoration */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1.1, 1, 1.1]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-xl"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;