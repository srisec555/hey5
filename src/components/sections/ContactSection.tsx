import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Mail, 
  Send, 
  CheckCircle, 
  Loader2,
  MessageCircle,
  User,
  FileText
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const { toast } = useToast();

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
            Ready to <span className="text-cyber-glow">Secure Your Systems?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Looking for a dedicated SOC analyst? Let's discuss how I can help strengthen 
            your organization's cybersecurity posture.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 w-full text-center"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new cybersecurity challenges and opportunities 
                to apply my SOC expertise. Whether you need threat detection, incident 
                response, or security automation - I'm here to help.
              </p>
            </div>
          </motion.div>

          {/* Hire Me Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex justify-center items-center w-full mt-8"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=srivenkatesh.soc@gmail.com&su=SOC%20Analyst%20Opportunity"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-6 rounded-xl font-bold text-2xl text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 shadow-lg
                transition-all duration-300
                hover:shadow-[0_0_40px_10px_rgba(139,92,246,0.7)]
                hover:scale-105
                focus:outline-none
                focus:ring-2 focus:ring-purple-500"
              style={{
                boxShadow: "0 0 32px 0 rgba(139,92,246,0.4)",
                backgroundClip: "padding-box"
              }}
            >
              Hire Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;