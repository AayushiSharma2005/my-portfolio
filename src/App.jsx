import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Cpu,
  Brain,
  Code,
  PenTool,
  Globe,
  MapPin,
  Phone,
  ExternalLink,
  Terminal,
} from "lucide-react";

export default function App() {
  return (
    <div className="bg-mesh min-h-screen text-white overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full p-6 md:p-8 z-50 backdrop-blur-xl border-b border-white/5 flex justify-between items-center">
        <span className="font-heading font-extrabold text-2xl md:text-3xl tracking-tighter text-neon-cyan">
          AS.
        </span>

        <div className="hidden md:flex gap-10 text-sm font-mono uppercase tracking-[0.2em] text-gray-400">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-neon-cyan">Projects</a>
          <a href="#experience" className="hover:text-neon-purple">Experience</a>
          <a href="#skills" className="hover:text-white">Skills</a>
        </div>

        <a
          href="#connect"
          className="px-6 py-3 bg-white text-black text-xs md:text-sm font-black rounded-full hover:bg-neon-cyan transition-all uppercase"
        >
          Contact Me
        </a>
      </nav>

      {/* HERO SECTION */}
      <section
        id="about"
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-36 md:pt-56 pb-20 flex flex-col md:flex-row items-center gap-16 md:gap-20"
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1"
        >
          <span className="text-neon-purple font-mono tracking-[0.4em] text-xs mb-8 block uppercase font-bold">
            Engineering Student @ JKLU
          </span>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black font-heading mb-8 leading-[1] tracking-tight">
            Hi, I'm <br />
            <span className="text-neon-cyan">Aayushi Sharma</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
            I am an{" "}
            <span className="text-white font-semibold underline decoration-neon-purple decoration-4">
              Engineering Student
            </span>{" "}
            exploring Machine Learning, Deep Learning, and Computer Vision.
            Currently working on{" "}
            <span className="text-neon-purple italic font-medium">
              Quantum Image Processing
            </span>
            .
          </p>

          <p className="text-md sm:text-lg italic text-gray-500 border-l-4 border-neon-cyan pl-6 bg-white/5 py-3 rounded-r-lg mb-10">
            "Apart from tech, I like writing and expressing ideas creatively."
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/AayushiSharma2005"
              className="text-gray-400 hover:text-white transform hover:scale-125 transition-all"
            >
              <Github size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/aayushi-sharma-4720302a0/"
              className="text-gray-400 hover:text-neon-cyan transform hover:scale-125 transition-all"
            >
              <Linkedin size={30} />
            </a>
            <a
              href="https://www.codechef.com/users/aayushisharma0"
              className="text-gray-400 hover:text-neon-purple transform hover:scale-125 transition-all"
            >
              <Globe size={30} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 relative w-full max-w-sm md:max-w-md">
          <div className="absolute -inset-4 bg-neon-cyan/20 blur-3xl rounded-full"></div>
          <img
            src="aayushi_pic.png"
            alt="Aayushi"
            className="relative w-full object-cover rounded-[2.5rem] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
          />
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-24 border-t border-white/10"
      >
        <h2 className="text-5xl sm:text-6xl font-heading font-black tracking-tight mb-20">
          Featured <span className="text-neon-cyan italic">Explorations</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* PROJECT 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/[0.03] border border-white/10 p-10 rounded-3xl"
          >
            <div className="flex justify-between mb-6">
              <Cpu className="text-neon-cyan" size={50} />
              <div className="flex gap-3">
                <span className="px-4 py-1 bg-neon-cyan/10 text-neon-cyan text-xs font-bold rounded-full">
                  OpenCV
                </span>
                <span className="px-4 py-1 bg-white/5 text-gray-400 text-xs font-bold rounded-full">
                  Python
                </span>
              </div>
            </div>

            <h3 className="text-4xl font-bold mb-4">CV Toolkit 🖼️</h3>
            <p className="text-lg text-gray-400 mb-8">
              OpenCV-powered web app for real-time image processing.
            </p>

            <div className="flex gap-6">
              <a
                href="https://drive.google.com/file/d/1xXTeMn_zzoUx-Ep5D_y0s1J1hcQ9Hkvg/view?usp=drive_link"
                className="flex items-center gap-2 text-neon-cyan font-bold hover:underline text-lg"
              >
                Live Demo <ExternalLink size={18} />
              </a>

              <a
                href="https://github.com/AayushiSharma2005/-OpenCV-Toolkit-"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-lg"
              >
                Source Code <Github size={18} />
              </a>
            </div>
          </motion.div>

          {/* PROJECT 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/[0.03] border border-white/10 p-10 rounded-3xl"
          >
            <Brain className="text-neon-purple mb-6" size={50} />
            <h3 className="text-4xl font-bold mb-4">LLMs for CV</h3>
            <p className="text-lg text-gray-400 mb-8">
              Multimodal learning using CLIP, BLIP, and BERT.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Transformers", "Contrastive Learning", "PyTorch"].map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono border border-white/10 px-4 py-1 rounded-full text-gray-500 uppercase"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* PROJECT 3 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/[0.03] border border-white/10 p-10 rounded-3xl"
          >
            <MapPin className="text-neon-cyan mb-6" size={50} />
            <h3 className="text-4xl font-bold mb-4">Safest Route</h3>
            <p className="text-lg text-gray-400 mb-8">
              Route prediction using risk factor analysis.
            </p>
            <div className="flex gap-3">
              <span className="px-4 py-1 bg-white/5 text-gray-400 text-xs font-bold rounded-full">
                Dijkstra
              </span>
              <span className="px-4 py-1 bg-white/5 text-gray-400 text-xs font-bold rounded-full">
                DAA
              </span>
            </div>
          </motion.div>

          {/* PROJECT 4 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/[0.03] border border-white/10 p-10 rounded-3xl"
          >
            <Terminal className="text-neon-purple mb-6" size={50} />
            <h3 className="text-4xl font-bold mb-4">Currency Hub</h3>
            <p className="text-lg text-gray-400 mb-8">
              Python-based currency converter with live API rates.
            </p>
            <span className="font-mono text-sm text-gray-500">
              #Python #API #Tkinter
            </span>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION */}
      <section
        id="experience"
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-24 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-16"
      >
        {/* Experience */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-neon-cyan uppercase tracking-widest">
            Experience
          </h3>

          <div className="space-y-10">
            <div className="border-l-2 border-neon-cyan pl-8">
              <h4 className="text-2xl font-bold">ML Intern</h4>
              <p className="text-neon-cyan font-mono text-sm mb-4">
                LNMIIT, Jaipur | May–July 2025
              </p>
              <p className="text-gray-400">
                Worked on ML model experimentation and data evaluation.
              </p>
            </div>

            <div className="border-l-2 border-white/10 pl-8">
              <h4 className="text-2xl font-bold">Intern</h4>
              <p className="text-gray-500 font-mono text-sm mb-4">
                Infosys Springboard 6.0 | 2025
              </p>
              <p className="text-gray-400">
                Completed structured engineering and problem-solving modules.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-neon-purple uppercase tracking-widest">
            Education
          </h3>

          <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
            <span className="text-neon-purple font-mono font-bold">
              2023 - Present
            </span>
            <h4 className="text-3xl font-black mt-4">Bachelor of Technology</h4>
            <p className="text-xl text-gray-300">
              Computer Science Engineering
            </p>
            <p className="text-lg text-gray-500 mt-4 italic">
              JK Lakshmipath University, Jaipur
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-24 border-t border-white/10"
      >
        <h2 className="text-4xl sm:text-5xl font-heading text-center font-bold mb-16">
          Technical <span className="text-neon-cyan italic">Arsenal</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/[0.03] p-8 rounded-2xl border border-white/10 text-center hover:border-neon-cyan transition">
            <Code className="mx-auto mb-4 text-neon-cyan" size={32} />
            <h3 className="font-bold mb-2">Languages</h3>
            <p className="text-gray-400 text-sm">Python, C, HTML, CSS, SQL</p>
          </div>

          <div className="bg-white/[0.03] p-8 rounded-2xl border border-white/10 text-center hover:border-neon-purple transition">
            <Brain className="mx-auto mb-4 text-neon-purple" size={32} />
            <h3 className="font-bold mb-2">ML & Data</h3>
            <p className="text-gray-400 text-sm">ML Basics, Data Viz, OpenCV</p>
          </div>

          <div className="bg-white/[0.03] p-8 rounded-2xl border border-white/10 text-center transition">
            <Cpu className="mx-auto mb-4 text-gray-400" size={32} />
            <h3 className="font-bold mb-2">Hardware</h3>
            <p className="text-gray-400 text-sm">VHDL, Linux Commands</p>
          </div>

          <div className="bg-white/[0.03] p-8 rounded-2xl border border-white/10 text-center hover:border-neon-cyan transition">
            <PenTool className="mx-auto mb-4 text-neon-cyan" size={32} />
            <h3 className="font-bold mb-2">Tools</h3>
            <p className="text-gray-400 text-sm">Canva, Figma, Flask</p>
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section
        id="connect"
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-24 border-t border-white/10"
      >
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-7xl font-black mb-6">
            Let's <span className="text-neon-cyan italic">Connect</span>
          </h2>
          <p className="text-xl text-gray-400">
            Always open to creative collaborations and technical discussions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full hover:border-neon-cyan transition">
            <Mail className="text-neon-cyan" size={24} />
            <span className="text-gray-300">sharma.aayushi1310@gmail.com</span>
          </div>

          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full hover:border-neon-purple transition">
            <Phone className="text-neon-purple" size={24} />
            <span className="text-gray-300">+91 7877341834</span>
          </div>
        </div>

        <div className="flex justify-center gap-8">
          <a className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-neon-cyan transition">
            <Linkedin size={28} />
          </a>
          <a className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white transition">
            <Github size={28} />
          </a>
          <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-neon-purple transition text-xs font-black tracking-widest uppercase">
            Codechef
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-12 opacity-60">
          © 2026 AAYUSHI SHARMA • ALL RIGHTS RESERVED
        </p>
      </section>
    </div>
  );
}
