/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  Terminal, 
  ArrowRight, 
  Home, 
  FolderOpen, 
  User, 
  Code2,
  Figma,
  Layers,
  Smartphone,
  Search,
  Zap,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Compass,
  MapPin,
  Mail,
  Phone,
  Linkedin
} from "lucide-react";

const Header = ({ view, setView }: { view: string, setView: (v: string) => void }) => (
  <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
    <div className="flex justify-between items-center px-6 py-4 max-w-3xl mx-auto w-full">
      <button 
        onClick={() => setView('home')}
        className="font-headline font-black text-xl tracking-tighter hover:opacity-70 transition-all flex items-center gap-2"
      >
        {view === 'case-study' && <ArrowLeft size={20} />}
        Biswashanti.M
      </button>
      <button className="text-primary opacity-80 hover:opacity-100 transition-all">
        <Menu size={24} />
      </button>
    </div>
  </header>
);

const Hero = () => (
  <section className="pt-32 px-6 space-y-8 max-w-3xl mx-auto">
    <div className="space-y-4">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
      >
        Hi, I'm Biswashanti - A UI/UX designer with a CSE background.
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-secondary leading-relaxed max-w-xl"
      >
        Bridging the gap between systematic code and intuitive user experiences through the lens of an Algorithmic Curator.
      </motion.p>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="px-6 max-w-3xl mx-auto mt-12">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-surface-container-low p-8 rounded-2xl space-y-4 relative overflow-hidden group"
    >
      <div className="relative z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-on-tertiary-container mb-2 block">Technical Expertise</span>
        <p className="text-secondary leading-relaxed">
          My technical foundation is built on a deep understanding of <span className="text-primary font-semibold">Frontend Development</span> and <span className="text-on-tertiary-container font-semibold">UI/UX Design</span>. I specialize in crafting performant web and mobile applications using React and React Native, ensuring that every interface is not only visually stunning but also technically robust. From architecting complex state management systems to fine-tuning micro-interactions, I leverage a diverse toolkit to build products that are as functional as they are beautiful.
        </p>
      </div>
      <div className="absolute -top-12 -right-12 opacity-5 pointer-events-none group-hover:rotate-12 transition-transform duration-700">
        <Code2 size={160} strokeWidth={1} />
      </div>
    </motion.div>
  </section>
);

const Skills = () => {
  const skills = [
    { name: "UI/UX Design", icon: <Figma size={18} /> },
    { name: "Frontend Dev", icon: <Code2 size={18} /> },
    { name: "React Native", icon: <Smartphone size={18} /> },
    { name: "User Research", icon: <Search size={18} /> },
    { name: "Prototyping", icon: <Zap size={18} /> },
    { name: "Product Strategy", icon: <Layers size={18} /> },
  ];

  return (
    <section className="px-6 max-w-3xl mx-auto mt-20 space-y-8">
      <h2 className="text-2xl font-bold tracking-tight">Technical Arsenal</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, i) => (
          <motion.div 
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 p-4 bg-surface-container-lowest border border-outline-variant/10 rounded-xl hover:border-on-tertiary-container/30 transition-all group"
          >
            <div className="text-on-tertiary-container group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <span className="text-sm font-semibold">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = ({ onOpenCaseStudy }: { onOpenCaseStudy: () => void }) => (
  <section id="projects" className="px-6 max-w-3xl mx-auto mt-20 space-y-8">
    <div className="flex items-end justify-between">
      <h2 className="text-2xl font-bold tracking-tight">Featured Work</h2>
      <button className="text-on-tertiary-container text-sm font-semibold flex items-center gap-1 hover:underline transition-all">
        View Archive <ArrowRight size={14} />
      </button>
    </div>

    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onOpenCaseStudy}
      className="group cursor-pointer bg-surface-container-lowest rounded-3xl overflow-hidden border border-outline-variant/10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
    >
      <div className="aspect-video w-full bg-surface-container-low relative overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNfx8-apoC8DpNsliA24QuG9kVdCNMl8eOh20rjYVQXYeoVZcsV6v1Hka0aTa5DOdd8Zfg4u5COsXC3GajOLFMS8xYyV4pVKFfkMVr1KJeOEL-tnl3HBaHqbfJvvD4ixTvVgHd4YEBZIjxuNWlauP-pZDlev5LqMt2GvCH8AhXisMKEjobt3tB5VTMwLw5EFmAbOs4gYnH6S-ImEsRsLM4xPNYtKsYPxmJYdDPbqTjeNQ5JYwi9c5usB6ZXvYrkxVw0o3dkJ2B_0O_" 
          alt="Awara Travel App"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-on-tertiary-container/90 backdrop-blur-md text-on-tertiary text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">Mobile App</span>
        </div>
      </div>
      <div className="p-8 space-y-4">
        <h3 className="text-xl font-extrabold leading-tight group-hover:text-on-tertiary-container transition-colors">
          Awara Travel App: Designing a frictionless travel experience
        </h3>
        <p className="text-secondary text-sm leading-relaxed">
          A deep dive into reducing cognitive load during travel planning through modular design systems and predictive user flows.
        </p>
        <div className="pt-2 flex flex-wrap gap-2">
          {["Research", "Prototyping", "React Native"].map((tag) => (
            <span key={tag} className="bg-surface-container-low text-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter border border-outline-variant/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

const Contact = () => (
  <section className="px-6 max-w-3xl mx-auto py-24 text-center space-y-12">
    <div className="space-y-4">
      <h2 className="text-4xl font-black tracking-tighter">Let's build something logical.</h2>
      <p className="text-secondary">Available for new opportunities and collaborations.</p>
    </div>
    
    <div className="grid gap-4 max-w-md mx-auto">
      <a 
        href="mailto:biswashantimohapatra@gmail.com"
        className="flex items-center justify-between p-6 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl hover:border-on-tertiary-container/30 transition-all group"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary-container text-on-tertiary-container rounded-xl group-hover:scale-110 transition-transform">
            <Mail size={20} />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">Email</p>
            <p className="font-bold text-sm md:text-base">biswashantimohapatra@gmail.com</p>
          </div>
        </div>
        <ArrowRight size={16} className="text-secondary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
      </a>

      <a 
        href="tel:+917683955303"
        className="flex items-center justify-between p-6 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl hover:border-on-tertiary-container/30 transition-all group"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary-container text-on-tertiary-container rounded-xl group-hover:scale-110 transition-transform">
            <Phone size={20} />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">Phone</p>
            <p className="font-bold">+91 76839 55303</p>
          </div>
        </div>
        <ArrowRight size={16} className="text-secondary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
      </a>

      <a 
        href="https://linkedin.com/in/biswashanti"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-6 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl hover:border-on-tertiary-container/30 transition-all group"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary-container text-on-tertiary-container rounded-xl group-hover:scale-110 transition-transform">
            <Linkedin size={20} />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">LinkedIn</p>
            <p className="font-bold">biswashanti</p>
          </div>
        </div>
        <ArrowRight size={16} className="text-secondary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
      </a>
    </div>

    <div className="pt-8">
      <button className="h-14 border border-outline-variant/30 text-primary font-semibold rounded-2xl px-8 hover:bg-surface-container-low transition-all">
        Download CV
      </button>
    </div>
  </section>
);

const BottomNav = ({ view, setView }: { view: string, setView: (v: string) => void }) => (
  <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-md z-50">
    <div className="bg-surface-container-lowest/80 backdrop-blur-2xl border border-outline-variant/20 rounded-3xl shadow-2xl shadow-primary/5 px-8 py-4 flex justify-between items-center">
      <button 
        onClick={() => {
          if (view === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            setView('home');
          }
        }}
        className={`flex flex-col items-center gap-1 transition-all ${view === 'home' ? 'text-on-tertiary-container scale-110' : 'text-secondary opacity-60'}`}
      >
        <Home size={20} strokeWidth={view === 'home' ? 2.5 : 2} />
        <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
      </button>
      <button 
        onClick={() => {
          if (view === 'home') {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          } else {
            setView('home');
            setTimeout(() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }}
        className={`flex flex-col items-center gap-1 transition-all ${view === 'case-study' ? 'text-on-tertiary-container scale-110' : 'text-secondary opacity-60'}`}
      >
        <FolderOpen size={20} strokeWidth={view === 'case-study' ? 2.5 : 2} />
        <span className="text-[10px] font-bold uppercase tracking-wider">Projects</span>
      </button>
      <button 
        onClick={() => {
          if (view !== 'home') {
            setView('home');
            setTimeout(() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          } else {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="flex flex-col items-center gap-1 text-secondary opacity-60 hover:opacity-100 transition-opacity"
      >
        <User size={20} />
        <span className="text-[10px] font-bold uppercase tracking-wider">About</span>
      </button>
    </div>
  </nav>
);

const CaseStudyView = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-24 pb-32"
  >
    {/* Intro Section */}
    <section className="px-6 max-w-3xl mx-auto space-y-12">
      <div className="space-y-4">
        <span className="bg-primary-container text-on-tertiary-container text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">Case Study: 2024</span>
        <h1 className="text-5xl font-black tracking-tighter leading-none">
          Awara - <br />
          <span className="text-secondary">The Travel App.</span>
        </h1>
        <p className="text-lg text-secondary leading-relaxed">
          Designed to transform the chaos of trip planning into a journey of discovery.
        </p>
      </div>

      <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-surface-container-low relative">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000" 
          alt="Awara Mission"
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-2xl max-w-xs space-y-4">
            <h3 className="text-xl font-bold">Mission</h3>
            <p className="text-sm text-secondary leading-relaxed">
              To create a warm, intuitive, and seamless travel experience from discovery to destination. A companion that feels less like a tool and more like a local guide.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/10">
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-tertiary-container">My Role</span>
          <p className="font-bold">UI/UX Designer</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-tertiary-container">Duration</span>
          <p className="font-bold">12 Weeks</p>
        </div>
        <div className="col-span-2 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-tertiary-container">Tools</span>
          <div className="flex gap-2">
            {["Figma", "Adobe XD", "Framer"].map(tool => (
              <span key={tool} className="bg-surface-container-low px-4 py-2 rounded-xl text-xs font-bold">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* The Problem */}
    <section className="mt-32 px-6 max-w-3xl mx-auto space-y-12">
      <div className="space-y-2">
        <h2 className="text-4xl font-black tracking-tighter">The <br /><span className="text-on-tertiary-container">Problem.</span></h2>
        <p className="text-2xl font-medium leading-tight text-secondary italic">
          "Planning travel can be overwhelming and disjointed."
        </p>
      </div>

      <div className="grid gap-6">
        <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 space-y-4">
          <div className="text-on-tertiary-container"><Zap size={24} /></div>
          <h3 className="text-xl font-bold">App Fatigue</h3>
          <p className="text-sm text-secondary leading-relaxed">
            Users often juggle 5-7 different apps to coordinate flights, stays, and local discovery, leading to data fragmentation.
          </p>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 space-y-4">
          <div className="text-on-tertiary-container"><AlertCircle size={24} /></div>
          <h3 className="text-xl font-bold">Decision Paralysis</h3>
          <p className="text-sm text-secondary leading-relaxed">
            Endless reviews and generic recommendations create friction rather than inspiration during the discovery phase.
          </p>
        </div>
      </div>
    </section>

    {/* Research Section */}
    <section className="mt-32 bg-surface-container-low py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-16">
        <div className="space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-tertiary-container">Case Study: Awara</span>
          <h2 className="text-5xl font-black tracking-tighter leading-none">Understanding <br />the Traveler.</h2>
          <p className="text-lg text-secondary leading-relaxed">
            To build a travel experience that feels intuitive, we had to dismantle the current friction points. Our research focused on decoding the mental load of modern planning.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-surface-container-lowest p-8 rounded-3xl space-y-6 relative overflow-hidden">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-tertiary-container">
              <Search size={14} /> Key Research Finding
            </div>
            <h3 className="text-2xl font-bold leading-tight">Travelers feel overwhelmed by too many options</h3>
            <p className="text-secondary leading-relaxed">
              The "Paradox of Choice" in travel leads to decision fatigue. Users spend an average of 45 days and visit 38 sites before booking a single trip.
            </p>
            <button className="text-on-tertiary-container text-sm font-bold flex items-center gap-1">
              View quantitative data <ArrowRight size={14} />
            </button>
            <div className="absolute -bottom-4 -right-4 opacity-5">
              <Layers size={120} />
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-3xl space-y-6">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-tertiary-container">
              <CheckCircle2 size={14} /> Trust & Authenticity
            </div>
            <h3 className="text-2xl font-bold leading-tight">They value trust and authentic reviews</h3>
            <p className="text-secondary leading-relaxed">
              Generic star ratings are no longer enough. Users seek narrative-driven feedback from people with similar travel profiles.
            </p>
            <div className="bg-surface-container-low p-6 rounded-2xl italic text-sm text-secondary border-l-4 border-on-tertiary-container">
              "I don't trust a 5-star hotel review from a business traveler if I'm going there with a toddler."
              <span className="block mt-2 font-bold not-italic">— Sarah, 32, Frequent Traveler</span>
            </div>
          </div>
        </div>

        {/* Journey Map */}
        <div className="space-y-12 pt-12">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold">User Journey Map Overview</h3>
            <p className="text-sm text-secondary">Visualizing the emotional highs and lows across the current fragmented landscape.</p>
          </div>
          
          <div className="space-y-12 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/20 -translate-x-1/2" />
            {[
              { label: "Discovery", sub: "Instagram, Pinterest, word of mouth.", status: "EXCITEMENT", color: "bg-on-tertiary-container" },
              { label: "Validation", sub: "Comparing 10+ tabs of reviews and prices.", status: "OVERWHELM", color: "bg-secondary" },
              { label: "Logistics", sub: "Booking separate flights, stays, and cars.", status: "FRICTION", color: "bg-secondary" },
              { label: "Experience", sub: "Living the trip while managing loose emails.", status: "RELIEF", color: "bg-on-tertiary-container" },
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-2">
                <div className={`w-4 h-4 rounded-full ${step.color} border-4 border-surface-container-low`} />
                <h4 className="font-bold">{step.label}</h4>
                <p className="text-xs text-secondary max-w-[200px]">{step.sub}</p>
                <span className="text-[8px] font-black tracking-widest px-2 py-0.5 rounded bg-surface-container-lowest text-secondary">{step.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Personas */}
        <div className="space-y-12 pt-24">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold">Defining Our Users</h3>
            <p className="text-sm text-secondary">We focused on two primary archetypes representing different pain points.</p>
          </div>

          <div className="grid gap-6">
            <div className="bg-surface-container-lowest p-8 rounded-3xl flex gap-6 items-start">
              <div className="w-20 h-20 rounded-2xl bg-surface-container-low flex-shrink-0 flex items-center justify-center text-secondary">
                <User size={40} />
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-bold">The Efficiency Seeker</h4>
                <p className="text-xs text-on-tertiary-container font-bold">Maya, 29, Product Designer</p>
                <p className="text-sm italic text-secondary">"I want a curated list that respects my aesthetic and time. I don't want to browse—I want to decide."</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-3xl flex gap-6 items-start">
              <div className="w-20 h-20 rounded-2xl bg-surface-container-low flex-shrink-0 flex items-center justify-center text-secondary">
                <Compass size={40} />
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-bold">The Authentic Explorer</h4>
                <p className="text-xs text-on-tertiary-container font-bold">Leo, 34, Freelance Photographer</p>
                <p className="text-sm italic text-secondary">"I look for hidden gems that are verified by locals. Trust is the only currency that matters to me."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* The Final Experience */}
    <section className="mt-32 px-6 max-w-3xl mx-auto space-y-24">
      <div className="space-y-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-on-tertiary-container">Case Study: Awara App</span>
        <h2 className="text-5xl font-black tracking-tighter leading-none">The Final <br />Experience.</h2>
        <p className="text-lg text-secondary leading-relaxed">
          Translating abstract travel aspirations into a cohesive visual language that feels both high-tech and deeply human.
        </p>
      </div>

      <div className="space-y-12">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold">Intelligent Discovery</h3>
          <p className="text-secondary leading-relaxed">
            A search interface that prioritizes intent over keywords, using natural language processing to curate the perfect escape.
          </p>
          <div className="aspect-[9/16] max-w-xs mx-auto rounded-[3rem] border-8 border-primary overflow-hidden bg-surface-container-low shadow-2xl relative">
             <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                   <Menu size={20} />
                   <div className="w-8 h-8 rounded-full bg-primary-container" />
                </div>
                <div className="space-y-2">
                   <p className="text-xs font-bold">Where to next?</p>
                   <div className="bg-surface-container-lowest p-3 rounded-xl flex items-center gap-2 text-secondary text-[10px]">
                      <Search size={12} /> Search destinations...
                   </div>
                </div>
                <div className="space-y-3">
                   <p className="text-[10px] font-bold">Recommended for you</p>
                   <div className="aspect-video rounded-xl overflow-hidden bg-surface-container-highest">
                      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="space-y-4 pt-24">
          <h3 className="text-3xl font-bold">Seamless Booking</h3>
          <p className="text-secondary leading-relaxed">
            Eliminating transactional friction through a layered information architecture that reveals detail only when needed.
          </p>
          <div className="aspect-[9/16] max-w-xs mx-auto rounded-[3rem] border-8 border-primary overflow-hidden bg-surface-container-low shadow-2xl relative">
             <div className="p-6 space-y-6">
                <div className="aspect-video rounded-xl overflow-hidden bg-surface-container-highest">
                   <img src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4">
                   <div className="flex justify-between items-end">
                      <div>
                        <h4 className="font-bold">The Nordic Retreat</h4>
                        <p className="text-[10px] text-secondary flex items-center gap-1"><MapPin size={8} /> Oslo, Norway</p>
                      </div>
                      <span className="text-[10px] font-bold text-on-tertiary-container">$250/night</span>
                   </div>
                   <div className="grid grid-cols-2 gap-2">
                      <div className="bg-surface-container-lowest p-2 rounded-lg text-[8px]">
                        <p className="text-secondary">CHECK IN</p>
                        <p className="font-bold">Oct 12, 2024</p>
                      </div>
                      <div className="bg-surface-container-lowest p-2 rounded-lg text-[8px]">
                        <p className="text-secondary">GUESTS</p>
                        <p className="font-bold">2 Adults</p>
                      </div>
                   </div>
                   <button className="w-full bg-primary text-on-tertiary py-3 rounded-xl text-[10px] font-bold">Confirm Booking</button>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Destination Guides */}
      <div className="bg-primary-container text-on-tertiary rounded-3xl overflow-hidden">
        <div className="aspect-video">
          <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
        </div>
        <div className="p-12 space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-tertiary-container">The Curator's Touch</span>
          <h3 className="text-4xl font-black tracking-tighter leading-tight">Hyper-Local Destination Guides</h3>
          <p className="text-on-tertiary/70 leading-relaxed">
            We move beyond tourist traps. Awara integrates real-time local insights, weather-aware suggestions, and crowdsourced secrets into a single, beautiful stream of consciousness.
          </p>
          <div className="flex gap-4">
            <div className="flex-1 bg-surface/10 p-4 rounded-2xl flex items-center gap-3">
               <MapPin size={18} />
               <span className="text-xs font-bold">Local Gems</span>
            </div>
            <div className="flex-1 bg-surface/10 p-4 rounded-2xl flex items-center gap-3">
               <Zap size={18} />
               <span className="text-xs font-bold">Hidden Dining</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Reflections */}
    <section className="mt-32 px-6 max-w-3xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black tracking-tighter">Reflections on the <br />Journey</h2>
        <div className="w-12 h-1 bg-on-tertiary-container mx-auto rounded-full" />
      </div>

      <div className="space-y-12">
        <div className="flex gap-6">
          <div className="w-12 h-12 rounded-xl bg-primary-container flex-shrink-0 flex items-center justify-center text-on-tertiary-container">
            <Zap size={20} />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-bold">Logical Empathy</h4>
            <p className="text-sm text-secondary leading-relaxed">
              The greatest challenge was balancing the CSE-driven logic of the backend algorithms with the soft, aspirational needs of a traveler. By using tonal layering instead of harsh borders, we created an interface that feels as boundless as the destinations it showcases.
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-12 h-12 rounded-xl bg-primary-container flex-shrink-0 flex items-center justify-center text-on-tertiary-container">
            <Zap size={20} />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-bold">Micro-interactions as Feedback</h4>
            <p className="text-sm text-secondary leading-relaxed">
              Every tap in Awara provides haptic and visual feedback that mimics physical movement. These micro-interactions aren't just "delight"—they are a functional language that tells the user the system is listening and responding in real-time.
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-12 h-12 rounded-xl bg-primary-container flex-shrink-0 flex items-center justify-center text-on-tertiary-container">
            <Zap size={20} />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-bold">The Outcome</h4>
            <p className="text-sm text-secondary leading-relaxed">
              Awara successfully reduced booking abandonment by 34% in user testing. The "Algorithmic Curator" approach proved that when technology is presented with a human touch, users feel more confident in making complex travel decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-low p-12 rounded-3xl text-center space-y-8">
        <h3 className="text-3xl font-black tracking-tighter leading-tight">Ready to curate the next big experience?</h3>
        <div className="flex flex-col gap-4 max-w-xs mx-auto">
          <button className="h-14 bg-primary text-on-tertiary font-bold rounded-2xl px-8">Let's Connect</button>
          <button className="h-14 border border-outline-variant/30 text-primary font-semibold rounded-2xl px-8">View More Projects</button>
        </div>
      </div>
    </section>
  </motion.div>
);

export default function App() {
  const [view, setView] = useState('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen">
      <Header view={view} setView={setView} />
      
      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div 
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pb-32"
          >
            <Hero />
            <About />
            <Skills />
            <Projects onOpenCaseStudy={() => setView('case-study')} />
            <Contact />
          </motion.div>
        ) : (
          <CaseStudyView key="case-study" />
        )}
      </AnimatePresence>

      <BottomNav view={view} setView={setView} />
    </div>
  );
}
