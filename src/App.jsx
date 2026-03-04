import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Cpu, Brain, Code, PenTool, Globe, MapPin, Phone, ExternalLink, Terminal } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-mesh min-h-screen text-white">
      {/* 🧭 NAVIGATION */}
      <nav className="fixed top-0 w-full p-8 z-50 backdrop-blur-xl border-b border-white/5 flex justify-between items-center">
        <span className="font-heading font-extrabold text-3xl tracking-tighter text-neon-cyan">AS.</span>
        <div className="hidden md:flex gap-12 text-sm font-mono uppercase tracking-[0.2em] text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-neon-cyan transition-colors">Projects</a>
          <a href="#experience" className="hover:text-neon-purple transition-colors">Experience</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        </div>
        <a href="#connect" className="px-8 py-3 bg-white text-black text-sm font-black rounded-full hover:bg-neon-cyan transition-all uppercase">
          Contact Me
        </a>
      </nav>

      {/* 🚀 HERO SECTION */}
      <section id="about" className="container mx-auto px-6 pt-56 pb-32 flex flex-col md:flex-row items-center gap-20">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="flex-[1.5]">
          <span className="text-neon-purple font-mono tracking-[0.5em] text-xs mb-8 block uppercase font-bold">Engineering Student @ JKLU</span>
          <h1 className="text-8xl md:text-9xl font-black font-heading mb-10 tracking-tighter leading-[0.8] outline-text">
            Hi, I'm <br/><span className="text-neon-cyan">Aayushi Sharma</span>
          </h1>
          
          <div className="text-2xl text-gray-400 leading-relaxed max-w-3xl mb-14 font-light">
            <p className="mb-6">
              I am an <span className="text-white font-semibold underline decoration-neon-purple decoration-4">Engineering Student</span> exploring Machine Learning, Deep Learning, and Computer Vision. Currently working on <span className="text-neon-purple italic font-medium">Quantum Image Processing</span>.
            </p>
            <p className="text-xl italic text-gray-500 border-l-4 border-neon-cyan pl-6 bg-white/5 py-4 rounded-r-lg">
              "Apart from tech, I like writing and expressing ideas creatively."
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="https://github.com/AayushiSharma2005" className="text-gray-400 hover:text-white transition-all transform hover:scale-125"><Github size={32}/></a>
            <a href="https://www.linkedin.com/in/aayushi-sharma-4720302a0/" className="text-gray-400 hover:text-neon-cyan transition-all transform hover:scale-125"><Linkedin size={32}/></a>
            <a href="https://www.codechef.com/users/aayushisharma0" className="text-gray-400 hover:text-neon-purple transition-all transform hover:scale-125"><Globe size={32}/></a>
          </div>
        </motion.div>
        
        <div className="flex-1 relative">
          <div className="absolute -inset-4 bg-neon-cyan/20 blur-3xl rounded-full"></div>
          <img 
            src="aayushi_pic.png" 
            alt="Aayushi Sharma" 
            className="relative w-full aspect-[4/5] object-cover rounded-[3rem] border-2 border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" 
          />
        </div>
      </section>

      {/* 🛠️ PROJECTS SECTION */}
      <section id="projects" className="container mx-auto px-6 py-40 border-t border-white/5">
        <h2 className="font-heading text-7xl font-black tracking-tighter mb-24">
          Featured <span className="text-neon-cyan italic">Explorations</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Project 1: CV Toolkit */}
          <motion.div whileHover={{ y: -10 }} className="bg-white/[0.03] border border-white/10 p-12 rounded-[4rem] group">
            <div className="flex justify-between items-start mb-8">
              <Cpu className="text-neon-cyan" size={56} />
              <div className="flex gap-3">
                <span className="px-4 py-1 bg-neon-cyan/10 text-neon-cyan text-xs font-bold rounded-full border border-neon-cyan/20">OpenCV</span>
                <span className="px-4 py-1 bg-white/5 text-gray-400 text-xs font-bold rounded-full">Python</span>
              </div>
            </div>
            <h3 className="text-5xl font-bold mb-6 group-hover:text-neon-cyan transition-colors">CV Toolkit 🖼️</h3>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">OpenCV-Powered web app for real-time image processing. Features Edge Detection, Grayscale, and interactive filters.</p>
            <div className="flex gap-6">
              <button className="flex items-center gap-2 text-neon-cyan font-bold hover:underline underline-offset-8 text-lg uppercase tracking-wider">Live Demo <ExternalLink size={20}/></button>
              <button className="flex items-center gap-2 text-gray-500 font-bold hover:text-white text-lg uppercase tracking-wider">Source Code <Github size={20}/></button>
            </div>
          </motion.div>

          {/* Project 2: LLMs for CV */}
          <motion.div whileHover={{ y: -10 }} className="bg-white/[0.03] border border-white/10 p-12 rounded-[4rem] group">
            <Brain className="text-neon-purple mb-8" size={56} />
            <h3 className="text-5xl font-bold mb-6 group-hover:text-neon-purple transition-colors">LLMs for CV</h3>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">Implementing multimodal learning using CLIP, BLIP, and BERT to improve domain generalization in vision tasks on PACS datasets.</p>
            <div className="flex flex-wrap gap-3">
              {["Transformers", "Contrastive Learning", "PyTorch"].map(t => (
                <span key={t} className="text-[10px] font-mono border border-white/10 px-4 py-1 rounded-full text-gray-500 uppercase">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Project 3: Safest Route Finder */}
          <motion.div whileHover={{ y: -10 }} className="bg-white/[0.03] border border-white/10 p-12 rounded-[4rem] group">
            <MapPin className="text-neon-cyan mb-8" size={56} />
            <h3 className="text-5xl font-bold mb-6 group-hover:text-neon-cyan transition-colors">Safest Route</h3>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">Graph theory application predicting travel routes based on real-world crime and accident risk factors for emergency planning.</p>
            <div className="flex gap-3">
               <span className="px-4 py-1 bg-white/5 text-gray-400 text-xs font-bold rounded-full">Dijkstra</span>
               <span className="px-4 py-1 bg-white/5 text-gray-400 text-xs font-bold rounded-full">DAA</span>
            </div>
          </motion.div>

          {/* Project 4: Currency Convertor */}
          <motion.div whileHover={{ y: -10 }} className="bg-white/[0.03] border border-white/10 p-12 rounded-[4rem] group">
            <Terminal className="text-neon-purple mb-8" size={56} />
            <h3 className="text-5xl font-bold mb-6 group-hover:text-neon-purple transition-colors">Currency Hub</h3>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">Python-based desktop converter with real-time exchange rates using forex-python, custom Tkinter GUI, and REST APIs.</p>
            <div className="flex gap-3 text-gray-500">
               <span className="font-mono text-sm">#Python #API_Integration #Tkinter</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 💼 EXPERIENCE & EDUCATION */}
      <section id="experience" className="container mx-auto px-6 py-40 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h3 className="text-4xl font-bold mb-16 text-neon-cyan uppercase tracking-widest">Experience</h3>
          <div className="space-y-12">
            <div className="border-l-2 border-neon-cyan pl-10">
              <h4 className="text-3xl font-bold">ML Intern</h4>
              <p className="text-neon-cyan font-mono text-sm mb-4">LNMIIT, Jaipur | May 2025 - July 2025</p>
              <p className="text-lg text-gray-400">Worked on machine learning model experimentation, evaluating large datasets for vision-based tasks.</p>
            </div>
            <div className="border-l-2 border-white/10 pl-10">
              <h4 className="text-3xl font-bold">Intern</h4>
              <p className="text-gray-500 font-mono text-sm mb-4">Infosys Springboard 6.0 | 2025</p>
              <p className="text-lg text-gray-400">Completed structured modules in foundational engineering and problem-solving skills.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-4xl font-bold mb-16 text-neon-purple uppercase tracking-widest">Education</h3>
          <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10">
            <span className="text-neon-purple font-mono font-bold">2023 - Present</span>
            <h4 className="text-3xl font-black mt-4">Bachelor of Technology</h4>
            <p className="text-xl text-gray-300">Computer Science Engineering</p>
            <p className="text-lg text-gray-500 mt-6 font-medium italic">JK Lakshmipath University, Jaipur</p>
          </div>
        </div>
      </section>
      {/* 🧠 TECHNICAL ARSENAL */}
      <section id="skills" className="container mx-auto px-6 py-32 border-t border-white/5">
        <h2 className="text-5xl font-bold font-heading tracking-tighter text-center mb-16">Technical <span className="text-neon-cyan italic">Arsenal</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] text-center hover:border-neon-cyan transition-all">
            <Code className="mx-auto mb-6 text-neon-cyan" size={32} />
            <h3 className="font-bold mb-2">Languages</h3>
            <p className="text-gray-400 text-sm font-mono leading-loose">Python, C, HTML, CSS, SQL</p>
          </div>
          <div className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] text-center hover:border-neon-purple transition-all">
            <Brain className="mx-auto mb-6 text-neon-purple" size={32} />
            <h3 className="font-bold mb-2">ML & Data</h3>
            <p className="text-gray-400 text-sm font-mono leading-loose">ML Basics, Data Viz, OpenCV</p>
          </div>
          <div className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] text-center hover:border-white transition-all">
            <Cpu className="mx-auto mb-6 text-gray-400" size={32} />
            <h3 className="font-bold mb-2">Hardware</h3>
            <p className="text-gray-400 text-sm font-mono leading-loose">VHDL, Linux Commands</p>
          </div>
          <div className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] text-center hover:border-neon-cyan transition-all">
            <PenTool className="mx-auto mb-6 text-neon-cyan" size={32} />
            <h3 className="font-bold mb-2">Tools</h3>
            <p className="text-gray-400 text-sm font-mono leading-loose">Canva, Figma, Flask</p>
          </div>
        </div>
      </section>

      {/* 🤝 LET'S CONNECT */}
      <section id="connect" className="container mx-auto px-6 py-40 border-t border-white/10">
        <div className="text-center mb-24">
          <h2 className="text-8xl font-black font-heading tracking-tighter mb-6">
            Let's <span className="text-neon-cyan italic">Connect</span>
          </h2>
          <p className="text-2xl text-gray-500">Always open to creative collaborations and technical discussions.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-20">
          <div className="flex items-center gap-6 bg-white/5 border border-white/10 px-10 py-6 rounded-full hover:border-neon-cyan transition-all transform hover:scale-105">
            <Mail className="text-neon-cyan" size={28} />
            <span className="text-gray-300 font-mono text-lg">sharma.aayushi1310@gmail.com</span>
          </div>
          <div className="flex items-center gap-6 bg-white/5 border border-white/10 px-10 py-6 rounded-full hover:border-neon-purple transition-all transform hover:scale-105">
            <Phone className="text-neon-purple" size={28} />
            <span className="text-gray-300 font-mono text-lg">+91 7877341834</span>
          </div>
        </div>

        <div className="flex justify-center gap-10">
          <a href="#" className="p-6 rounded-full bg-white/5 border border-white/10 hover:bg-neon-cyan hover:text-black transition-all transform hover:-translate-y-2">
            <Linkedin size={32} />
          </a>
          <a href="#" className="p-6 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all transform hover:-translate-y-2">
            <Github size={32} />
          </a>
          <button className="px-12 py-6 rounded-full bg-white/5 border border-white/10 hover:bg-neon-purple hover:text-white transition-all font-black text-sm uppercase tracking-[0.3em]">
            Codechef
          </button>
        </div>

        <div className="text-center pt-16 mt-20 border-t border-white/5 opacity-40">
          <p className="font-mono text-xs uppercase tracking-[0.4em]">© 2026 AAYUSHI SHARMA • ALL RIGHTS RESERVED</p>
        </div>
      </section>
    </div>
  );
}