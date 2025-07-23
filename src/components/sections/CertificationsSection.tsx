import { motion } from "framer-motion";

const certifications = [
  {
    title: "Cybersecurity Professional Certificate",
    issuer: "Google",
    image: "/google.png",
    link: "https://www.coursera.org/account/accomplishments/verify/RMGEEI3HRQ4H"
  },
  {
    title: "SIEM Certificate",
    issuer: "LetsDefend",
    image: "/SIEM.png",
    link: "https://app.letsdefend.io/my-rewards/detail/d06c31bf-86b7-444f-b162-3ac1b950a044"
  },
  {
    title: "Cybersecurity Job Simulation",
    issuer: "Forage (2024)",
    image: "/cybersecurityanalystjob.jpg",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_AbQp23iiLXAQxLPGk_1746732319444_completion_certificate.pdf"
  },
  {
    title: "Networking Basics",
    issuer: "Cisco",
    image: "/cisco.png",
    link: "https://www.netacad.com/certificates?issuanceId=41de76c5-e991-4857-aa04-1151d3c831c7"
  },
  {
    title: "CSA Ecconcil",
    issuer: "EC-Council",
    image: "/csa.png",
    link: "https://drive.google.com/file/d/1Y1rRh6jLQ51tGnizFOI9QRIWTyG4T8sy/view"
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-20 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center text-white mb-2">Certifications</h2>
          <p className="text-center text-lg text-purple-300 mb-8">My professional credentials and achievements</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-lg glass-effect border-2 border-border flex flex-col items-center justify-between min-h-[320px] p-6 bg-card animate-float"
            >
              <div className="w-full flex flex-col items-center mb-4">
                <img src={cert.image} alt={cert.title} className="w-20 h-20 object-contain mb-4 rounded-xl bg-black/40" />
                <h3 className="text-xl font-bold text-white text-center mb-2">{cert.title}</h3>
                <span className="text-md text-purple-300 font-semibold text-center mb-2">{cert.issuer}</span>
              </div>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-5 py-2 rounded-lg bg-purple-700 text-white font-semibold shadow hover:bg-purple-800 transition-colors text-center"
                >
                  View Cert
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
