import { motion } from "framer-motion";
import { Shield, Terminal, Eye } from "lucide-react";
import ThreeScene from "../ThreeScene";
import ParticleBackground from "../ParticleBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeScene />
      <ParticleBackground />
      
      {/* Hero Content Layout */}
      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between min-h-[60vh]">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl flex flex-col items-start justify-center w-full md:w-2/3"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-left"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Hi, I'm{" "}
            <span className="text-cyber-glow bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Srivenkatesh
            </span>{" "}
          </motion.h1>
          <motion.div 
            className="flex items-center justify-start gap-4 mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Shield className="w-8 h-8 text-blue-400 dark:text-purple-400 animate-pulse-glow" />
            <span className="text-xl md:text-2xl font-semibold">SOC Analyst</span>
          </motion.div>
          <div className="mb-8 w-full">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-left">
              I am a passionate and dedicated cybersecurity enthusiast with a strong focus on Blue Team operations, currently pursuing a career as a Security Operations Center (SOC) Analyst. With hands-on experience in log analysis, threat detection, SIEM tools, and incident response, I thrive in dynamic environments where I can monitor, analyze, and defend against cyber threats in real time. My goal is to contribute to securing organizations by leveraging my skills in threat hunting, security monitoring, and cyber forensics.
            </p>
            {/* Works Button */}
            <div className="mt-6">
              <a
                href="#projects"
                className="inline-block px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-lg hover:bg-primary/80 transition-colors"
              >
                Works
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Profile Image in Circle */}
        <div className="hidden md:flex items-center justify-center w-full md:w-1/3 h-full min-h-[400px]">
          <div className="flex items-center justify-center h-full w-full">
            <div className="relative flex items-center justify-center">
              <div className="rounded-full border-2 border-blue-400 dark:border-purple-500 bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-700 shadow-2xl w-[22rem] h-[22rem] flex items-center justify-center">
                <img
                  src={"/logo.svg"}
                  alt="Profile"
                  className="rounded-full w-[19rem] h-[19rem] object-cover bg-black p-2"
                  style={{ boxShadow: "0 0 60px 0 rgba(88, 101, 242, 0.4)" }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Mobile: Profile image below text */}
        <div className="flex md:hidden items-center justify-center w-full mt-8">
          <div className="relative flex items-center justify-center">
            <div className="rounded-full border-2 border-blue-400 dark:border-purple-500 bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-700 shadow-2xl w-56 h-56 flex items-center justify-center">
              <img
                src={"/logo.svg"}
                alt="Profile"
                className="rounded-full w-48 h-48 object-cover bg-black p-2"
                style={{ boxShadow: "0 0 40px 0 rgba(88, 101, 242, 0.4)" }}
              />
            </div>
          </div>
        </div>
        
        {/* Floating Badges */}
        
        <motion.div 
          className="absolute bottom-40 left-20 hidden lg:block"
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          <div className="card-cyber p-4 animate-float" style={{ animationDelay: '4s' }}>
            <div className="text-terminal">24/7 SOC Ready</div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;