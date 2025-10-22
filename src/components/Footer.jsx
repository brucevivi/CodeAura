import { motion } from "framer-motion";
import { Phone, MessageCircle, Linkedin, ExternalLink } from "lucide-react";
import { logo } from "../assets";
import { MapPin, Mail } from "lucide-react";
const Footer = () => {
  const insuranceServices = [
    "AI-Powered Experiences ",
    "Reliable Backend Systems", 
    "Data Insights & Reporting",
    "MVP Launch Programs",
    "AI Video & Automation Tools",
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#Services" }, 
    { name: "Work", href: "#Works" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#https://www.linkedin.com/in/YOUR_USERNAME", label: "Linkedin", color: "hover:text-green-400" },
    { icon: ExternalLink, href: "#https://www.notion.so/Mad-About-Coding-291894eb0d3980cf8e50f7446fff2778", label: "Notion", color: "hover:text-pink-400" },
    { icon: Mail, href: "#https://mail.google.com/mail/?view=cm&fs=1&to=madaboutcoding.official@gmail.com&su=Inquiry&body=Hi%20there%2C", label: "Email", color: "hover:text-blue-400" },
  ];

  return (
    <footer className="bg-[#0f0f0f] text-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="bg-white/10 p-3 rounded-xl inline-block">
            <img src={logo} alt=" Mad About Coding" className="h-14" />
          </div>
          <p className="text-sm text-secondary leading-relaxed">
MadAboutCoding isn’t just a name — it’s a mindset          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Bangalore, Karnataka</span>
            </div>
            {/* <div className="flex items-center">
              <Phone className="w-4 h-4 text-primary mr-2" />
              <span>+91 98765 43210</span>
            </div> */}
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>madaboutcoding.official@gmail</span>
            </div>
          </div>
        </motion.div>

        {/* Insurance Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="text-lg font-semibold mb-4">Our Solutions</h4>
          <ul className="space-y-2">
            {insuranceServices.map((service, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <a
                  href="#solutions"
                  className="text-sm text-secondary hover:text-white transition-all hover:translate-x-1 inline-block"
                >
                  {service}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <a
                  href={link.href}
                  className="text-sm text-secondary hover:text-white transition-all hover:translate-x-1 inline-block"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <p className="text-sm text-secondary mb-4">
            Follow us for coding tips and updates.
          </p>
          <div className="flex space-x-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`p-2 bg-white/10 rounded-lg text-white ${social.color} hover:bg-white/20 transition-all`}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 pt-6 border-t border-white/10 text-center"
      >
        <p className="text-xs text-white/50">
          © 2025 Mad about coding. All rights reserved. | Privacy Policy | Terms of Service
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;