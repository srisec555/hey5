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
  Lock,
  Flame,
  Bug,
  Radar,
  Key,
  Database
} from "lucide-react";

// Removed skills array and cards for terminal window redesign

// Removed SkillCard component for terminal window redesign

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
        </motion.div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Blue Team Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
            className="w-full md:w-1/2 max-w-xl shadow-blue-500/60 shadow-2xl rounded-xl bg-black/90 border border-blue-500/40 p-0 font-mono text-cyan-300 relative"
          >
            <div className="flex items-center px-4 py-2 bg-blue-900/80 rounded-t-xl border-b border-blue-500/30">
              <span className="text-blue-300 font-bold">blue-terminal@defense:~$</span>
            </div>
            <div className="p-4 text-sm leading-relaxed">
              <span className="text-blue-400">$ cat /opt/defense/seim/seimtools.txt | grep -i "siem"</span><br />
              Splunk<br />
              QRadar<br />
              Elastic SIEM<br />
              Wazuh<br />
              SentinelOne<br />
              <br />
              <span className="text-blue-400">$ grep "EDR" /var/log/edr-tools.log</span><br />
              ✓ CrowdStrike Falcon<br />
              ✓ Microsoft Defender ATP<br />
              ✓ SentinelOne<br />
              ✓ Carbon Black<br />
              <br />
              <span className="text-blue-400">$ ls /etc/firewall/</span><br />
              iptables.conf<br />
              pfSense.rules<br />
              cisco_asa.cfg<br />
              fortigate.fw<br />
              <br />
              <span className="text-blue-400">$ echo "Active IDS Tools:" &amp;&amp; cat ids.list | sort</span><br />
              Snort<br />
              Suricata<br />
              Zeek<br />
              <br />
              <span className="text-blue-400">$ cat threat-intel.db | grep -E "OTX|MISP"</span><br />
              AlienVault OTX<br />
              MISP<br />
              AbuseIPDB<br />
              VirusTotal<br />
              <br />
              <span className="text-blue-400">$ touch incident_response_ready &amp;&amp; echo "IR Plan Loaded "</span><br />
              IR Plan Loaded 
            </div>
          </motion.div>
          {/* Red Team Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", stiffness: 60, delay: 0.2 }}
            className="w-full md:w-1/2 max-w-xl shadow-purple-500/60 shadow-2xl rounded-xl bg-black/90 border border-pink-500/40 p-0 font-mono text-pink-400 relative"
          >
            <div className="flex items-center px-4 py-2 bg-pink-900/80 rounded-t-xl border-b border-pink-500/30">
              <span className="text-pink-300 font-bold">red-terminal@offense:~$</span>
            </div>
            <div className="p-4 text-sm leading-relaxed">
              <span className="text-pink-400">$ echo "Reconnaissance Tools:"</span><br />
              Nmap<br />
              Shodan<br />
              <br />
              <span className="text-pink-400">$ cat brute_force.txt | grep -i "hydra"</span><br />
              Hydra<br />
              <br />
              <span className="text-pink-400">$ echo "Exploitation Frameworks:"</span><br />
              Metasploit<br />
              <br />
              <span className="text-pink-400">$ cat vuln_scan.txt | grep -E "nikto|sqlmap"</span><br />
              Nikto<br />
              SQLMap<br />
              <br />
              <span className="text-pink-400">$ touch payload_dropper && echo "Payload Dropped!"</span><br />
              Payload Dropped!<br />
              <br />
              <span className="text-pink-400">$ echo "Password Cracking:" && cat john.txt</span><br />
              John the Ripper<br />
            </div>
          </motion.div>
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