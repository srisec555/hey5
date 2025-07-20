import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Shield, 
  Network, 
  Search, 
  Bot, 
  ExternalLink, 
  Github,
  Code,
  Terminal
} from "lucide-react";

const projects = [
  {
    title: "Advanced Honeypot System",
    description: "Deployed high-interaction honeypots to capture and analyze attack patterns, providing valuable threat intelligence for proactive defense strategies.",
    tech: ["Python", "Docker", "ELK Stack", "Suricata"],
    features: [
      "Real-time attack detection",
      "Automated threat analysis", 
      "IOC extraction & sharing",
      "Attack pattern visualization"
    ],
    icon: Shield,
    color: "from-purple-500 to-pink-500",
    github: "#",
    demo: "#"
  },
  {
    title: "SOAR Incident Response",
    description: "Built automated incident response workflows using SOAR platform to reduce MTTR from hours to minutes for common security incidents.",
    tech: ["Phantom", "Python", "REST APIs", "Splunk"],
    features: [
      "Automated ticket creation",
      "Email notification system",
      "Asset enrichment",
      "Response orchestration"
    ],
    icon: Bot,
    color: "from-blue-500 to-cyan-500",
    github: "#",
    demo: "#"
  },
  {
    title: "MITRE ATT&CK Mapper",
    description: "Developed a tool to map security events to MITRE ATT&CK framework, enabling better threat hunting and gap analysis.",
    tech: ["React", "D3.js", "Python", "MITRE API"],
    features: [
      "Interactive attack mapping",
      "Coverage gap analysis",
      "Threat actor profiling",
      "Custom detection rules"
    ],
    icon: Search,
    color: "from-green-500 to-emerald-500",
    github: "#",
    demo: "#"
  },
  {
    title: "Network Traffic Analyzer",
    description: "Created a comprehensive network analysis tool using Wireshark and Python to identify suspicious traffic patterns and potential threats.",
    tech: ["Wireshark", "Python", "Scapy", "NetworkX"],
    features: [
      "Real-time packet analysis",
      "Anomaly detection",
      "Protocol analysis",
      "Visual network mapping"
    ],
    icon: Network,
    color: "from-orange-500 to-red-500",
    github: "#",
    demo: "#"
  }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group"
    >
      <div className="card-cyber h-full group-hover:border-primary/80 group-hover:scale-105 transition-all duration-300">
        {/* Project Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color}`}>
              <project.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </div>
          </div>
          <div className="flex space-x-2">
            <a 
              href={project.github}
              className="p-2 rounded-lg bg-muted/20 hover:bg-primary/20 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href={project.demo}
              className="p-2 rounded-lg bg-muted/20 hover:bg-primary/20 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-primary mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-center space-x-2 text-sm">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-auto">
          <h4 className="text-sm font-semibold text-primary mb-3">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-muted/20 rounded-full text-xs font-medium border border-border/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  
  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My Blue Team <span className="text-cyber-glow">Missions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world cybersecurity projects that demonstrate my expertise in threat detection, 
            incident response, and security automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <Code className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Python Automation</span>
            </div>
            <div className="w-px h-6 bg-border/50"></div>
            <div className="flex items-center space-x-2">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">SIEM Integration</span>
            </div>
            <div className="w-px h-6 bg-border/50"></div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Threat Hunting</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;