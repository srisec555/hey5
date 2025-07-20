import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Shield, 
  Search, 
  Eye, 
  Terminal, 
  Network, 
  FileText, 
  Code, 
  Activity,
  Server,
  AlertTriangle,
  Zap,
  Lock
} from "lucide-react";

const skills = [
  {
    category: "SIEM & Analytics",
    tools: [
      { name: "Splunk", icon: Activity, color: "text-orange-500" },
      { name: "Wazuh", icon: Shield, color: "text-blue-500" },
      { name: "QRadar", icon: Server, color: "text-green-500" },
      { name: "ELK Stack", icon: Search, color: "text-yellow-500" }
    ]
  },
  {
    category: "Threat Intelligence",
    tools: [
      { name: "MITRE ATT&CK", icon: AlertTriangle, color: "text-red-500" },
      { name: "VirusTotal", icon: Eye, color: "text-purple-500" },
      { name: "Any.run", icon: Terminal, color: "text-cyan-500" },
      { name: "Sigma Rules", icon: FileText, color: "text-indigo-500" }
    ]
  },
  {
    category: "Network & Forensics",
    tools: [
      { name: "Wireshark", icon: Network, color: "text-blue-400" },
      { name: "Suricata", icon: Shield, color: "text-red-400" },
      { name: "Volatility", icon: Search, color: "text-green-400" },
      { name: "Autopsy", icon: Eye, color: "text-purple-400" }
    ]
  },
  {
    category: "Scripting & Automation",
    tools: [
      { name: "Python", icon: Code, color: "text-yellow-400" },
      { name: "PowerShell", icon: Terminal, color: "text-blue-600" },
      { name: "Bash", icon: Terminal, color: "text-green-600" },
      { name: "SOAR", icon: Zap, color: "text-orange-400" }
    ]
  }
];

const SkillCard = ({ skill, index }: { skill: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="card-cyber group-hover:border-primary/80 group-hover:bg-primary/5">
        <div className="flex items-center space-x-3 mb-4">
          <skill.icon className={`w-6 h-6 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
          <span className="font-semibold text-lg">{skill.name}</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-cyber"
            initial={{ width: 0 }}
            animate={isInView ? { width: "85%" } : {}}
            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
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
            My <span className="text-cyber-glow">Cyber Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to defend against cyber threats and maintain security posture
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.tools.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    index={categoryIndex * 4 + skillIndex} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <motion.div 
            className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;