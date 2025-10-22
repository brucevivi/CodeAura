import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";

const InputField = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    />
  </label>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setConfirmation("");

    if (!validateEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!form.name.trim()) {
      setNameError("Name is required.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_r2i0by4",
        "template_mf5x3bh",
        {
          from_name: form.name,
          to_name: "Mad about codinbg",
          from_email: form.email,
          to_email: "madaboutcoding.official@gmail.com",
          message: form.message,
        },
        "p-gXzzyvEhPaJ0XA-"
      )
      .then(
        () => {
          setLoading(false);
          setConfirmation("Thank you! we will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        }
      )
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setConfirmation("Something went wrong. Please try again. :)");
      });
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact us</h3>

  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Email */}
<motion.a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=madaboutcoding.official@gmail.com&su=Inquiry&body=Hi%20there%2C"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ y: -5 }}
  className="bg-white/5 p-6 rounded-xl border border-white/20 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all duration-300 cursor-pointer"
  aria-label="Email us"
>
      <Mail className="w-10 h-10 text-white" />
      <p className="text-white text-center text-sm">Email</p>
    </motion.a>

    {/* LinkedIn */}
    <motion.a
      href="https://www.linkedin.com/in/YOUR_USERNAME"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      className="bg-white/5 p-6 rounded-xl border border-white/20 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all duration-300 cursor-pointer"
      aria-label="LinkedIn"
    >
      <Linkedin className="w-10 h-10 text-white" />
      <p className="text-white text-center text-sm">Connect on LinkedIn</p>
    </motion.a>

    {/* Notion */}
    <motion.a
      href="https://www.notion.so/Mad-About-Coding-291894eb0d3980cf8e50f7446fff2778"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      className="bg-white/5 p-6 rounded-xl border border-white/20 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all duration-300 cursor-pointer"
      aria-label="Notion"
    >
      <ExternalLink className="w-10 h-10 text-white" />
      <p className="text-white text-center text-sm">View on Notion</p>
    </motion.a>
  </div>


        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <InputField
            label="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Insert Your name here..."
            type="text"
          />
          {nameError && <span className="text-red-500">{nameError}</span>}

          <InputField
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email address?"
            type="email"
          />
          {emailError && <span className="text-red-500">{emailError}</span>}

          <InputField
            label="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What you want to say...?"
            type="text"
          />

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
          {confirmation && <p className="text-green-500">{confirmation}</p>}
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
