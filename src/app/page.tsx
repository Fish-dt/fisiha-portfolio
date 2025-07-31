"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  Code,
  Database,
  Server,
  GraduationCap,
  ExternalLink,
  Menu,
  Palette,
  Layers,
  PenTool,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import ProfileImageWithBorder from "../components/ProfileImageWithBorder";
import FloatingInfoBox from "../components/FloatingInfoBox";

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 100)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "PHP", category: "Backend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "JavaScript", category: "Programming" },
    { name: "HTML/CSS", category: "Frontend" },
    { name: "Java", category: "Programming" },
    { name: "Python", category: "Data Analysis" },
    { name: "Photoshop", category: "Design" },
    { name: "Illustrator", category: "Design" },
    { name: "Figma", category: "Design" },
    { name: "UI/UX Design", category: "Design" },
  ]

  const experiences = [
    {
      title: "Web Development Intern",
      company: "Wegagen Bank",
      period: "2023 - 2024",
      description:
        "Gained hands-on experience in web development, working on banking applications and learning industry best practices. Also contributed to UI/UX design improvements for better user experience.",
      skills: ["Web Development", "Banking Systems", "UI/UX Design", "Team Collaboration"],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden font-['Inter',sans-serif]">
      {/* Subtle Dark Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-black to-gray-900/20"></div>

      {/* Floating Edge Elements (reduced for performance) */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {/* Top Edge Floating Line */}
        <div
          className="absolute top-20 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
        ></div>
        {/* Left Edge Floating Element */}
        <div
          className="absolute left-0 top-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
        ></div>
        {/* Right Edge Floating Element */}
        <div
          className="absolute right-0 top-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
        ></div>
      </div>

      {/* Floating Header */}
      <header className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-8">
        <nav className="backdrop-blur-2xl bg-gray-900/40 border border-gray-800/50 rounded-3xl shadow-2xl px-10 py-5">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-foreground tracking-wide">Fisiha Desta</div>
            <div className="hidden md:flex space-x-10">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium tracking-wide hover:scale-105"
                >
                  {item}
                </a>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="md:hidden text-foreground">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section - Side by Side Layout */}
      <section className="relative pt-40 pb-32 px-8 lg:px-12">
        <div className="max-w-8xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center"> {/* Decreased gap */}
            {/* Name and Info (now on the left) */}
            <div
              className="space-y-10 order-2 lg:order-1"
              style={{ marginLeft: "12rem" }}
            >
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-light tracking-tight leading-none">
                  <span className="text-foreground font-extralight">Fisiha Desta</span>
                </h1>
                <p className="text-2xl lg:text-3xl font-light text-muted-foreground tracking-wide">
                  Web Developer & Graphic Designer
                </p>
                <p className="text-lg text-muted-foreground/80 max-w-2xl leading-relaxed font-light tracking-wide">
                  Passionate about creating innovative web solutions and stunning visual designs with expertise in
                  full-stack development, UI/UX design, and graphic design
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 rounded-2xl px-10 py-6 transition-all duration-300 hover:scale-105 shadow-xl font-medium tracking-wide"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-700 text-white hover:bg-gray-900/50 rounded-2xl px-10 py-6 transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-transparent font-medium tracking-wide"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-3" />
                </Button>
              </div>
            </div>
            {/* Profile Image with Border and Floating Boxes (now on the right) */}
            <div className="relative flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-[36rem] h-[36rem] flex items-center justify-center"> {/* Even bigger image */}
                <ProfileImageWithBorder />
                <div className="z-50">
                  <FloatingInfoBox text="React Developer" style={{ bottom: 90, left: -10, background: 'rgba(255,255,255,0.7)', color: 'black', fontWeight: 600, boxShadow: '0 4px 24px 0 rgba(124,58,237,0.10)', border: '1.5px solid #e9d5ff', backdropFilter: 'blur(8px)', zIndex: 50 }} />
                  <FloatingInfoBox text="UI/UX Designer" style={{ bottom: 40, right: 40, background: 'rgba(255,255,255,0.7)', color: 'black', fontWeight: 600, boxShadow: '0 4px 24px 0 rgba(124,58,237,0.10)', border: '1.5px solid #e9d5ff', backdropFilter: 'blur(8px)', zIndex: 50 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Space */}
      <div className="h-32"></div>

      {/* About Section */}
      <section id="about" className="relative py-32 px-8 lg:px-12">
        <div className="max-w-8xl mx-auto">
          <div
            className={`text-center mb-24 transition-all duration-1000 ease-out ${
              scrollY > 200 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-5xl lg:text-7xl font-extralight mb-8 text-foreground tracking-tight">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed tracking-wide">
              Information Systems graduate from Hawassa University with a passion for web development and graphic
              design, creating both functional and visually stunning digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: GraduationCap,
                title: "Education",
                subtitle: "Bachelor's in Information Systems",
                company: "Hawassa University",
                description:
                  "Comprehensive education in information systems, database management, and software development principles.",
                delay: "delay-100",
              },
              {
                icon: Code,
                title: "Web Development",
                subtitle: "Full-Stack Development",
                company: "Modern Technologies",
                description:
                  "Expertise in React, Node.js, and modern web technologies for creating scalable applications.",
                delay: "delay-300",
              },
              {
                icon: Palette,
                title: "Graphic Design",
                subtitle: "Visual Design & Branding",
                company: "Creative Solutions",
                description: "Creating stunning visual identities, UI/UX designs, and digital illustrations.",
                delay: "delay-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`backdrop-blur-2xl bg-gray-900/20 border border-gray-800/30 rounded-3xl p-10 shadow-2xl hover:shadow-purple-500/5 transition-all duration-700 hover:scale-105 hover:bg-gray-900/30 ${item.delay} ${
                  scrollY > 300 ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-4 rounded-2xl bg-gray-800/50 border border-gray-700/50">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-foreground tracking-wide">{item.title}</h3>
                </div>
                <h4 className="font-medium text-xl mb-3 text-foreground tracking-wide">{item.subtitle}</h4>
                <p className="text-purple-400 mb-6 font-light tracking-wide">{item.company}</p>
                <p className="text-muted-foreground leading-relaxed font-light tracking-wide">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Space */}
      <div className="h-32"></div>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-8 lg:px-12">
        <div className="max-w-8xl mx-auto">
          <div
            className={`text-center mb-24 transition-all duration-1000 ease-out ${
              scrollY > 600 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-5xl lg:text-7xl font-extralight mb-8 text-foreground tracking-tight">Technical Skills</h2>
            <p className="text-xl text-muted-foreground font-light tracking-wide">
              Proficient in modern web technologies, programming languages, and design tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: "Frontend", icon: Code, category: "Frontend" },
              { title: "Backend", icon: Server, category: "Backend" },
              { title: "Programming", icon: Database, category: "Programming" },
              { title: "Design", icon: Palette, category: "Design" },
            ].map((skillGroup, index) => (
              <div
                key={index}
                className={`backdrop-blur-2xl bg-gray-900/20 border border-gray-800/30 rounded-3xl p-10 shadow-2xl hover:shadow-purple-500/5 transition-all duration-700 hover:scale-105 hover:bg-gray-900/30 ${
                  scrollY > 700 ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-gray-800/50 border border-gray-700/50">
                    <skillGroup.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-foreground tracking-wide">{skillGroup.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills
                    .filter(
                      (skill) =>
                        skill.category === skillGroup.category ||
                        (skillGroup.category === "Programming" && skill.category === "Data Analysis"),
                    )
                    .map((skill) => (
                      <Badge
                        key={skill.name}
                        className="backdrop-blur-sm bg-gray-800/30 text-gray-300 border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300 rounded-xl px-4 py-2 font-light tracking-wide"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Space */}
      <div className="h-32"></div>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-8 lg:px-12">
        <div className="max-w-8xl mx-auto">
          <div
            className={`text-center mb-24 transition-all duration-1000 ease-out ${
              scrollY > 1000 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-5xl lg:text-7xl font-extralight mb-8 text-white tracking-tight">Experience</h2>
            <p className="text-xl text-gray-400 font-light tracking-wide">
              Professional experience in web development, design, and banking systems
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`backdrop-blur-2xl bg-gray-900/20 border border-gray-800/30 rounded-3xl p-12 shadow-2xl hover:shadow-purple-500/5 transition-all duration-700 hover:scale-105 hover:bg-gray-900/30 ${
                  scrollY > 1100 ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
                }`}
              >
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-light text-white mb-3 tracking-wide">{exp.title}</h3>
                    <p className="text-2xl font-light text-purple-400 tracking-wide">{exp.company}</p>
                  </div>
                  <Badge className="backdrop-blur-sm bg-gray-800/30 text-gray-300 border-gray-700/50 rounded-xl px-6 py-3 font-light tracking-wide">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed font-light tracking-wide">{exp.description}</p>
                <div className="flex flex-wrap gap-4">
                  {exp.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="backdrop-blur-sm bg-gray-800/30 text-gray-300 border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300 rounded-xl px-4 py-2 font-light tracking-wide"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Space */}
      <div className="h-32"></div>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-8 lg:px-12">
        <div className="max-w-8xl mx-auto">
          <div
            className={`text-center mb-24 transition-all duration-1000 ease-out ${
              scrollY > 1400 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-5xl lg:text-7xl font-extralight mb-8 text-white tracking-tight">Projects</h2>
            <p className="text-xl text-gray-400 font-light tracking-wide">
              Showcase of my web development and graphic design projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Web Development Project", icon: Code, gradient: "from-gray-800 to-gray-900" },
              { title: "UI/UX Design Project", icon: Layers, gradient: "from-gray-800 to-gray-900" },
              { title: "Graphic Design Project", icon: PenTool, gradient: "from-gray-800 to-gray-900" },
            ].map((project, index) => (
              <div
                key={index}
                className={`backdrop-blur-2xl bg-gray-900/20 border border-gray-800/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/5 transition-all duration-700 hover:scale-105 hover:bg-gray-900/30 group ${
                  scrollY > 1500 ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden border-b border-gray-800/30`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-white/70" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-light text-white mb-4 tracking-wide">{project.title}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed font-light tracking-wide">
                    Coming soon - Exciting {project.title.toLowerCase()} showcasing modern technologies and creative
                    design
                  </p>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800/50 rounded-xl transition-all duration-300 flex-1 bg-transparent font-light tracking-wide"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {index === 0 ? "Code" : "View"}
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white text-black hover:bg-gray-100 rounded-xl transition-all duration-300 flex-1 font-medium tracking-wide"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Space */}
      <div className="h-32"></div>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-8 lg:px-12">
        <div className="max-w-8xl mx-auto">
          <div
            className={`text-center mb-24 transition-all duration-1000 ease-out ${
              scrollY > 1800 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-5xl lg:text-7xl font-extralight mb-8 text-white tracking-tight">Get In Touch</h2>
            <p className="text-xl text-gray-400 font-light tracking-wide">
              Let's discuss opportunities and collaborate on exciting projects
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div
                className={`backdrop-blur-2xl bg-gray-900/20 border border-gray-800/30 rounded-3xl p-12 shadow-2xl hover:shadow-purple-500/5 transition-all duration-700 hover:bg-gray-900/30 ${
                  scrollY > 1900 ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
                }`}
              >
                <h3 className="text-3xl font-light mb-12 text-white tracking-wide">Contact Information</h3>
                <div className="space-y-8">
                  {[
                    { icon: Mail, text: "fissehadesta70@gmail.com" },
                    { icon: Phone, text: "+251932550454" },
                    { icon: MapPin, text: "Hawassa, Ethiopia" },
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center gap-6">
                      <div className="p-4 rounded-2xl bg-gray-800/50 border border-gray-700/50">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-300 text-lg font-light tracking-wide">{contact.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-16">
                  <h4 className="text-xl font-light mb-8 text-white tracking-wide">Connect With Me</h4>
                  <div className="flex gap-6">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800/50 rounded-2xl transition-all duration-300 px-8 bg-transparent font-light tracking-wide"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800/50 rounded-2xl transition-all duration-300 px-8 bg-transparent font-light tracking-wide"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`backdrop-blur-2xl bg-gray-900/20 border border-gray-800/30 rounded-3xl p-12 shadow-2xl hover:shadow-purple-500/5 transition-all duration-700 hover:bg-gray-900/30 ${
                  scrollY > 1900 ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
                }`}
              >
                <h3 className="text-2xl font-light text-white mb-12 tracking-wide">Send a Message</h3>
                <form className="space-y-8">
                  <div>
                    <label className="block text-sm font-light mb-4 text-gray-300 tracking-wide">Name</label>
                    <input
                      type="text"
                      className="w-full px-6 py-5 backdrop-blur-sm bg-gray-800/20 border border-gray-700/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 font-light tracking-wide"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light mb-4 text-gray-300 tracking-wide">Email</label>
                    <input
                      type="email"
                      className="w-full px-6 py-5 backdrop-blur-sm bg-gray-800/20 border border-gray-700/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 font-light tracking-wide"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light mb-4 text-gray-300 tracking-wide">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-6 py-5 backdrop-blur-sm bg-gray-800/20 border border-gray-700/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 resize-none font-light tracking-wide"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-2xl py-6 transition-all duration-300 hover:scale-105 shadow-xl font-medium tracking-wide">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Space */}
      <div className="h-32"></div>

      {/* Footer */}
      <footer className="relative backdrop-blur-2xl bg-gray-900/20 border-t border-gray-800/30 py-16 px-8 lg:px-12">
        <div className="max-w-8xl mx-auto text-center">
          <p className="text-gray-400 text-lg font-light tracking-wide">
            © {new Date().getFullYear()} Fisiha Desta. All rights reserved.
          </p>
          <p className="text-gray-500 mt-3 font-light tracking-wide">Built with Next.js, React, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
