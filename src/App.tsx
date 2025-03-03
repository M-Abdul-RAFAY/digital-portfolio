import {
  Code,
  Brain,
  Database,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Terminal,
  Layers,
  Cpu,
  Globe,
  Server,
  Blocks,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ContactForm from "./components/ContactForm";

function App() {
  const languages = [
    { name: "JavaScript", icon: <Blocks className="text-emerald-400" /> },
    { name: "Node.js", icon: <Server className="text-emerald-500" /> },
    { name: "Python", icon: <Globe className="text-emerald-500" /> },
    { name: "C++", icon: <Cpu className="text-emerald-500" /> },
    { name: "HTML & CSS", icon: <Code className="text-emerald-500" /> },
    { name: "SQL", icon: <Database className="text-emerald-400" /> },
    { name: "React.js", icon: <Blocks className="text-emerald-400" /> },
    { name: "Express.js", icon: <Server className="text-emerald-400" /> },
  ];

  const WaveSeparator = ({ color = "emerald", inverted = false }) => (
    <div className={`wave-separator ${color} w-full`}>
      <svg
        viewBox="0 0 1440 100"
        className={`${inverted ? "rotate-180" : ""} w-full`}
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          fillOpacity="0.1"
          d="M0,0 C480,80 960,80 1440,30 L1440,100 L0,100 Z"
        />
        <path
          fill="currentColor"
          fillOpacity="0.05"
          d="M0,20 C480,100 960,100 1440,50 L1440,100 L0,100 Z"
        />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <header
        id="about"
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/10 via-teal-600/10 to-transparent dark:from-emerald-600/10 dark:via-teal-600/10 dark:to-gray-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),rgba(255,255,255,1))] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.8),rgba(17,24,39,1))]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 opacity-75 group-hover:opacity-100 blur-lg transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/50">
                <img
                  src="./rafay.png"
                  alt="Muhammad Abdul Rafay"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
              Muhammad Abdul Rafay
            </h1>
            <div className="text-xl text-gray-700 dark:text-gray-300 mb-4 h-[30px]">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "React.js Enthusiast",
                  2000,
                  "Node.js Backend Developer",
                  2000,
                  "Express.js Expert",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "MongoDB Architect",
                  2000,
                  "RESTful API Developer",
                  2000,
                  "Python Developer",
                  2000,
                  "Flask Developer",
                  2000,
                  "Machine Learning Practitioner",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Passionate about creating innovative web solutions and exploring
              the frontiers of technology. With expertise in full-stack
              development, AI integration, and cybersecurity, I bring ideas to
              life through clean, efficient, and secure code.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a
                href="https://github.com/M-Abdul-RAFAY"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800/50 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Github
                  className="text-gray-700 dark:text-gray-300"
                  size={24}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-abdul-rafay--/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800/50 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Linkedin
                  className="text-gray-700 dark:text-gray-300"
                  size={24}
                />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#search/in%3Adraft+muhammadabdulrafay59%40gmail.com?compose=new"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800/50 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Mail className="text-gray-700 dark:text-gray-300" size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <WaveSeparator color="purple" />

      {/* Languages Section */}
      <section
        id="skills"
        className="py-20 relative overflow-hidden section-purple"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
            Programming Languages & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    {lang.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{lang.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator color="blue" inverted />

      {/* Skills Section */}
      <section className="py-20 relative section-blue">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 group">
              <Terminal className="w-12 h-12 mb-4 text-emerald-400" />
              <h3 className="text-xl font-bold mb-2">Full Stack Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                MERN Stack, Python/Flask, RESTful APIs, GraphQL
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-105 group">
              <Brain className="w-12 h-12 mb-4 text-teal-400" />
              <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                TensorFlow, PyTorch, Natural Language Processing
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105 group">
              <Layers className="w-12 h-12 mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-2">Database</h3>
              <p className="text-gray-600 dark:text-gray-300">
                MongoDB, Mongoos, MySQL, Microsoft Access
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveSeparator color="emerald" />

      {/* Projects Section */}
      <section id="projects" className="py-20 section-emerald">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Charsol",
                description:
                  "Designed a Figma wireframe and converted it into a fully functional website. Developed using HTML, CSS, Bootstrap, and JavaScript with a focus on responsive design.",
                image: "charsol.png",
                tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
                source: "https://github.com/M-Abdul-RAFAY/Charsol",
                website: "https://charsol.netlify.app/",
              },
              {
                title: "Wanderlust",
                description:
                  "Built a backend server with Express.js, MongoDB, and Mongoose, implementing RESTful APIs with CRUD operations and authentication.",
                image: "wanderlust.png",
                tech: ["Express.js", "MongoDB", "Mongoose", "Node.js"],
                source: "https://github.com/M-Abdul-RAFAY/Wanderlust",
                website:
                  "https://wanderlust-production-f284.up.railway.app/listing",
              },
              {
                title: "Anonymous Chat App",
                description:
                  "Developed a real-time chat app using React, Vite, and Socket.io, featuring room creation and message broadcasting with WebSocket integration.",
                image: "chatapp.png",
                tech: ["React", "Vite", "Socket.io", "Node.js"],
                source: "https://github.com/M-Abdul-RAFAY/anonymous-chat-app",
                website:
                  "https://anonymous-chat-app-production.up.railway.app/",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-105 group"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700/50 rounded-full text-sm transform transition-transform hover:scale-110"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors duration-300"
                    >
                      View Source Code{" "}
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors duration-300"
                    >
                      View Website <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator color="rose" inverted />

      {/* Contact Section */}
      <section id="contact" className="py-20 relative section-rose">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
            Let's Work Together
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-center">
            I'm currently available for freelance projects and full-time
            opportunities. If you're interested in collaborating or have a
            project in mind, feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="bg-gray-100 dark:bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-emerald-400" />
                  <a
                    href="https://mail.google.com/mail/u/0/#search/in%3Adraft+muhammadabdulrafay59%40gmail.com?compose=new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                  >
                    muhammadabdulrafay59@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="text-emerald-400" />
                  <a
                    href="https://github.com/M-Abdul-RAFAY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                  >
                    github.com/M-Abdul-RAFAY
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="text-emerald-400" />
                  <a
                    href="https://www.linkedin.com/in/muhammad-abdul-rafay--/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                  >
                    linkedin.com/in/muhammad-abdul-rafay--
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-100 dark:bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 Muhammad Abdul Rafay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
