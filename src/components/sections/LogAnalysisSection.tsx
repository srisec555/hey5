import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Terminal, AlertTriangle, CheckCircle, Shield, Eye } from "lucide-react";

const logEvents = [
  {
    timestamp: "2024-01-20 14:23:41",
    level: "INFO",
    source: "WinEventLog:Security",
    event: "User authentication successful",
    user: "admin@corp.local",
    ip: "192.168.1.100",
    status: "normal"
  },
  {
    timestamp: "2024-01-20 14:24:15",
    level: "WARNING",
    source: "WinEventLog:Security", 
    event: "Multiple failed login attempts detected",
    user: "unknown",
    ip: "103.45.67.89",
    status: "suspicious"
  },
  {
    timestamp: "2024-01-20 14:24:22",
    level: "CRITICAL",
    source: "Suricata",
    event: "Malware signature detected in network traffic",
    user: "system",
    ip: "103.45.67.89",
    status: "threat"
  },
  {
    timestamp: "2024-01-20 14:24:25",
    level: "INFO",
    source: "SOAR-Platform",
    event: "Automated threat response initiated",
    user: "soar-bot",
    ip: "10.0.0.1",
    status: "response"
  },
  {
    timestamp: "2024-01-20 14:24:28",
    level: "SUCCESS",
    source: "Firewall",
    event: "Malicious IP blocked successfully",
    user: "system",
    ip: "103.45.67.89",
    status: "mitigated"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "normal": return "text-cyan-400";
    case "suspicious": return "text-yellow-400";
    case "threat": return "text-red-400";
    case "response": return "text-blue-400";
    case "mitigated": return "text-green-400";
    default: return "text-gray-400";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "threat": return AlertTriangle;
    case "mitigated": return CheckCircle;
    case "response": return Shield;
    case "suspicious": return Eye;
    default: return Terminal;
  }
};

const LogAnalysisSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const [currentLogIndex, setCurrentLogIndex] = useState(-1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    if (isInView && !isAnalyzing) {
      setIsAnalyzing(true);
      const interval = setInterval(() => {
        setCurrentLogIndex((prev) => {
          if (prev >= logEvents.length - 1) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [isInView, isAnalyzing]);

  return (
    <section ref={ref} className="py-20 relative bg-gradient-to-b from-background to-cyber-darker">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 font-mono text-sm"
          >
            {/* Terminal Header & Command Line Only */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center space-x-3">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="font-semibold">SOC-WORKSTATION-01</span>
                <span className="text-muted-foreground">~/security/logs</span>
              </div>
              <div>
                <span className="text-primary">srivenkatesh@soc-analyst:~$</span>
                <span className="ml-2">tail -f /var/log/security/events.log | grep -E "(CRITICAL|WARNING)"</span>
              </div>
            </div>

            {/* Log Stream */}
            <div className="space-y-2 max-h-96 overflow-hidden">
              <AnimatePresence>
                {logEvents.slice(0, currentLogIndex + 1).map((log, index) => {
                  const StatusIcon = getStatusIcon(log.status);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20, height: 0 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0, 
                        height: "auto",
                        backgroundColor: log.status === "threat" ? "rgba(239, 68, 68, 0.1)" : 
                                        log.status === "mitigated" ? "rgba(34, 197, 94, 0.1)" : "transparent"
                      }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded border-l-4 ${
                        log.status === "threat" ? "border-red-500" :
                        log.status === "mitigated" ? "border-green-500" :
                        log.status === "suspicious" ? "border-yellow-500" :
                        log.status === "response" ? "border-blue-500" :
                        "border-cyan-500"
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <StatusIcon className={`w-4 h-4 mt-0.5 ${getStatusColor(log.status)}`} />
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-2 text-xs">
                          <span className="text-muted-foreground">{log.timestamp}</span>
                          <span className={`font-semibold ${getStatusColor(log.status)}`}>
                            [{log.level}]
                          </span>
                          <span className="text-cyan-300">{log.source}</span>
                          <span>{log.event}</span>
                        </div>
                      </div>
                      <div className="ml-7 mt-1 text-xs text-muted-foreground">
                        User: {log.user} | IP: {log.ip}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* Cursor */}
              {currentLogIndex >= 0 && (
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-primary"
                >
                  █
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Threat Summary */}
          {currentLogIndex >= logEvents.length - 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="card-cyber text-center">
                <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-red-400">1</div>
                <div className="text-sm text-muted-foreground">Threats Detected</div>
              </div>
              <div className="card-cyber text-center">
                <Shield className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-400">1</div>
                <div className="text-sm text-muted-foreground">Auto Responses</div>
              </div>
              <div className="card-cyber text-center">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-sm text-muted-foreground">Mitigation Rate</div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LogAnalysisSection;