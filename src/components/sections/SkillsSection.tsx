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
        {/* SKILLS Title Centered Above Blue Terminal */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-center text-primary">SKILLS</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Blue Team Linux Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
            className="w-full md:w-1/2 max-w-xl shadow-blue-500/60 shadow-2xl rounded-lg bg-gradient-to-br from-black via-blue-950 to-cyan-900 border border-blue-500/40 font-mono text-cyan-300 relative"
          >
            {/* Linux Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-blue-900/80 rounded-t-lg border-b border-blue-500/30">
              <span className="text-blue-300 font-bold ml-auto">blue-terminal@defense:~$</span>
              <div className="flex items-center gap-2 ml-4">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
            </div>
            <div className="p-5 text-sm leading-relaxed">
              <span className="text-blue-400">$ cat /opt/defense/seim/seimtools.txt | grep -i "siem"</span><br />
              <span className="pl-6">Splunk</span><br />
              <span className="pl-6">QRadar</span><br />
              <span className="pl-6">Elastic SIEM</span><br />
              <span className="pl-6">Wazuh</span><br />
              <span className="pl-6">SentinelOne</span><br />
              <br />
              <span className="text-blue-400">$ grep "EDR" /var/log/edr-tools.log</span><br />
              <span className="pl-6">✓ CrowdStrike Falcon</span><br />
              <span className="pl-6">✓ Microsoft Defender ATP</span><br />
              <span className="pl-6">✓ SentinelOne</span><br />
              <span className="pl-6">✓ Carbon Black</span><br />
              <br />
              <span className="text-blue-400">$ ls /etc/firewall/</span><br />
              <span className="pl-6">iptables.conf</span><br />
              <span className="pl-6">pfSense.rules</span><br />
              <span className="pl-6">cisco_asa.cfg</span><br />
              <span className="pl-6">fortigate.fw</span><br />
              <br />
              <span className="text-blue-400">$ echo "Active IDS Tools:" && cat ids.list | sort</span><br />
              <span className="pl-6">Snort</span><br />
              <span className="pl-6">Suricata</span><br />
              <span className="pl-6">Zeek</span><br />
              <br />
              <span className="text-blue-400">$ cat threat-intel.db | grep -E "OTX|MISP"</span><br />
              <span className="pl-6">AlienVault OTX</span><br />
              <span className="pl-6">MISP</span><br />
              <span className="pl-6">AbuseIPDB</span><br />
              <span className="pl-6">VirusTotal</span><br />
              <br />
              <span className="text-blue-400">$ touch incident_response_ready && echo "IR Plan Loaded ✅"</span><br />
              <span className="pl-6">IR Plan Loaded</span>
            </div>
          </motion.div>
          {/* Red Team Linux Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", stiffness: 60, delay: 0.2 }}
            className="w-full md:w-1/2 max-w-xl shadow-pink-500/60 shadow-2xl rounded-lg bg-gradient-to-br from-black via-pink-950 to-red-900 border border-pink-500/40 font-mono text-pink-300 relative"
          >
            {/* Linux Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-pink-900/80 rounded-t-lg border-b border-pink-500/30">
              <span className="text-pink-300 font-bold ml-auto">red-terminal@offense:~$</span>
              <div className="flex items-center gap-2 ml-4">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
            </div>
            <div className="p-5 text-sm leading-relaxed">
              <span className="text-pink-400">$ echo "Reconnaissance Tools:"</span><br />
              <span className="pl-6">Nmap</span><br />
              <span className="pl-6">Shodan</span><br />
              <br />
              <span className="text-pink-400">$ cat brute_force.txt | grep -i "hydra"</span><br />
              <span className="pl-6">Hydra</span><br />
              <br />
              <span className="text-pink-400">$ echo "Exploitation Frameworks:"</span><br />
              <span className="pl-6">Metasploit</span><br />
              <br />
              <span className="text-pink-400">$ cat vuln_scan.txt | grep -E "nikto|sqlmap"</span><br />
              <span className="pl-6">Nikto</span><br />
              <span className="pl-6">SQLMap</span><br />
              <br />
              <span className="text-pink-400">$ touch payload_dropper && echo "Payload Dropped!"</span><br />
              <span className="pl-6">Payload Dropped!</span><br />
              <br />
              <span className="text-pink-400">$ echo "Password Cracking:" && cat john.txt</span><br />
              <span className="pl-6">John the Ripper</span>
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