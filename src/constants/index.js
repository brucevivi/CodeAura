import {
  c,
  model,
  computer,
  insight,
  movie,
  rocket,
  python,
  docker,
  openai,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  angular,
  kubernetes,
  net,
  nodejs,
  image
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Services",
    title: "Services",
  },
  {
    id: "Works",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "AI-Powered Experiences", icon: model },
  { title: "Reliable Backend Systems", icon: computer },
  { title: "Data Insights & Reporting", icon: insight },
  { title: "MVP Launch Programs", icon: rocket },
  { title: "AI Video & Automation Tools", icon: movie },
];

export const technologies = [
  // { name: "HTML 5", icon: html },
  // { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Angular", icon: angular },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Docker", icon: docker },
  { name: "Kubernetes", icon: kubernetes },
    { name: "Open AI", icon: openai },
  { name: ".NET", icon: net },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "AI/ML Intern",
    company_name: "EduSkill Foundation | AWS Academy | AICTE",
    icon: eduskill,
    iconBg: "#161329",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Acquired hands-on knowledge of AWS Cloud Foundation, delving into cloud infrastructure, services, and deployment.",
      "also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
    ],
  },
  {
    title: "Mathwork Ai Virtual Intern",
    company_name: "Mathwork | AICTE",
    icon: mathwork,
    iconBg: "#161329",
    date: "May 2023 - Sep 2023",
    points: [
      "Completed virtual internship, gaining a strong foundation in MATLAB, including data analysis and processing.",
      "Acquired practical skills in image and signal processing, including segmentation, batch processing, and spectral analysis.",
      "Developed expertise in machine learning models for clustering, classification, and regression, and customized deep learning techniques for image classification.",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company_name: "Edunet Foundation | IBM SkillsBuild | AICTE",
    icon: edunet,
    iconBg: "#161329",
    date: "June 2023 - July 2023",
    points: [
      "Engineered a comprehensive Mental Health Fitness Tracker ML model utilizing Python and scikit-learn.",
      "Maximized the model's performance by refining model parameters and employing ensemble methods, yielding an outstanding accuracy percentage of 98.50%.",
      "Leveraged 12 regression algorithms to attain precise outcomes in analyzing and predicting mental fitness levels across 150+ countries.",
    ],
  },
];

export const projects = [
  {
    name: "Monktree Insurance Website",
    description:
      "Web-based platform that allows users to access information about various insurance plans and get quotes based on their requirements.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" }, 
      { name: "React", color: "blue-text-gradient" },
    ],
    image: image,
    web_link: "https://insurance-mt-demo.vercel.app/",
    source_code_link: "https://github.com/brucevivi/Insurance-MT",
  },
  // {
  //   name: "Terminal Like Portfolio Website",
  //   description:
  //     "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
  //   tags: [
  //     { name: "HTML", color: "blue-text-gradient" },
  //     { name: "css", color: "green-text-gradient" },
  //     { name: "Javascript", color: "pink-text-gradient" },
  //   ],
  //   image: termpw,
  //   source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  // },
  // {
  //   name: "Mental Health Fitness Tracker",
  //   description:
  //     "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
  //   tags: [
  //     { name: "Machine Learning", color: "blue-text-gradient" },
  //     { name: "Jupyter Notebook", color: "green-text-gradient" },
  //     { name: "Regression Algorithms", color: "pink-text-gradient" },
  //   ],
  //   image: mhft,
  //   source_code_link:
  //     "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  // },
  // {
  //   name: "PayloadMaster",
  //   description:
  //     "Tool to automate payload creation using the Metasploit framework",
  //   tags: [
  //     { name: "shell", color: "blue-text-gradient" },
  //   ],
  //   image: payloadmaster,
  //   source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  // },
  // {
  //   name: "CompileVortex",
  //   description:
  //     "Tool to automate payload creation using the Metasploit framework",
  //   tags: [
  //     { name: "Javascript", color: "blue-text-gradient" },
  //     { name: "CSS", color: "green-text-gradient" },
  //     { name: "HTML", color: "pink-text-gradient" },
  //   ],
  //   image: CompileVortex,
  //   source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  // },
  // {
  //   name: "Sketcher",
  //   description:
  //     "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
  //   tags: [
  //     { name: "OpenCV", color: "blue-text-gradient" },
  //     { name: "Matplotlib", color: "green-text-gradient" },
  //     { name: "Python", color: "pink-text-gradient" },
  //   ],

  //   image: sketcher,
  //   source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  // },
];
