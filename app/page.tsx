"use client"

import { Button } from "@/components/ui/button"
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
  Menu,
  Palette,
  Layers,
  PenTool,
  ArrowRight,
  X,
  ExternalLink,
  GraduationCap,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 100)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "React.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Tailwind",
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_logo.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
      ],
    },
    {
      title: "Data Science",
      skills: [
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Pandas",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        },
        {
          name: "NumPy",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        },
        {
          name: "Matplotlib",
          icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
        },
        {
          name: "Scikit-learn",
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        },
      ],
    },
    {
      title: "Design & Graphics",
      skills: [
        {
          name: "Photoshop",
          icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
        },
        {
          name: "Illustrator",
          icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
      ],
    },
  ]

  const projects = [
    {
      title: "Chereta Hub",
      icon: Code,
      gradient: "from-indigo-900/40 to-violet-900/40",
      description: "Auction platform built with modern web technologies",
      githubUrl: "https://github.com/Fish-dt/auction-website",
      demoUrl: "https://chereta-hub.vercel.app/auctions",
      type: "code",
      image: "/images/chereta-hub-new.png",
    },
    {
      title: "EthiStudy",
      icon: GraduationCap,
      gradient: "from-indigo-900/40 to-violet-900/40",
      description: "Educational platform that helps students study effectively",
      githubUrl: "https://github.com/Fish-dt/ethistudy-dashboard",
      demoUrl: "https://ethistudy.vercel.app/",
      type: "code",
      image: "/images/ethistudy-dashboard.png",
    },
    {
      title: "Graphic Design Portfolio",
      icon: PenTool,
      gradient: "from-indigo-900/40 to-violet-900/40",
      description: "Brand identity and visual design solutions",
      type: "design",
      onClick: () => setIsModalOpen(true),
      image: "/images/graphic-design-portfolio.jpg",
    },
  ]

  return (
    <div className="min-h-screen text-white relative overflow-hidden font-neue-machina bg-grain">
      {/* Dark Background with Grain */}
      <div className="fixed inset-0 z-0">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-black"></div>

        {/* Grain texture overlay */}
        <div className="absolute inset-0 bg-grain opacity-30"></div>

        {/* Subtle gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/30"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-electric-blue/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-neon-pink/5 via-transparent to-transparent"></div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Small Text Snippets */}
      <div className="fixed inset-0 pointer-events-none z-10 font-mono text-[8px] text-gray-600/30">
        <div className="absolute top-32 left-8">
          <div>// PORTFOLIO_VERSION_2025</div>
          <div>// BUILT_WITH_NEXTJS</div>
          <div>// DESIGNED_BY_FISIHA</div>
          <div>// STATUS: ACTIVE</div>
        </div>
        <div className="absolute top-1/2 right-8">
          <div>// SKILLS_LOADED</div>
          <div>// PROJECTS_READY</div>
          <div>// CONTACT_AVAILABLE</div>
          <div>// RESUME_DOWNLOADABLE</div>
        </div>
        <div className="absolute bottom-32 left-1/4">
          <div>// RESPONSIVE_DESIGN</div>
          <div>// MODERN_TYPOGRAPHY</div>
          <div>// GLASSMORPHISM_UI</div>
          <div>// OPTIMIZED_PERFORMANCE</div>
        </div>
      </div>

      {/* Graphic Design Portfolio Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-6xl max-h-[90vh] w-full bg-black/95 rounded-3xl border border-electric-blue/30 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-electric-blue/20">
              <h2 className="text-2xl font-light text-white tracking-wide">Graphic Design Portfolio</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-electric-blue/10 transition-colors duration-300"
              >
                <X className="w-6 h-6 text-gray-300 hover:text-white" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-electric-blue/20">
                <Image
                  src="/images/graphic-design-portfolio.jpg"
                  alt="Graphic Design Portfolio Collection"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  A collection of my graphic design work including event posters, promotional materials, brand identity
                  designs, and visual communications created for various clients and projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content with relative positioning */}
      <div className="relative z-20">
        {/* Floating Header */}
        <header className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-8">
          <nav className="backdrop-blur-2xl bg-black/40 border border-white/10 rounded-3xl shadow-2xl px-10 py-5 flex justify-between items-center">
            <div className="text-2xl font-bold text-white tracking-wide">Fisiha Desta</div>
            <div className="hidden md:flex space-x-10">
              {["Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-electric-blue transition-all duration-300 text-sm font-medium tracking-wide hover:scale-105"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white">
                <Menu className="w-5 h-5" />
              </Button>
              
            </div>
          </nav>
        </header>

        {/* Hero Section - Side by Side Layout */}
        <section className="relative pt-40 pb-20 px-8 mx-12 lg:px-12 mx-12">
          <div className="max-w-8xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image with Pink Gradient Background */}
              <div
                className={`relative transition-all duration-800 ease-out ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
              >
                <div className="relative w-96 h-96 mx-auto lg:ml-16 lg:mr-0">
                  {/* Pink gradient background like Neue Machina image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-pink via-orange-400 to-yellow-300 rounded-full blur-3xl opacity-80"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-neon-pink/60 via-orange-400/60 to-yellow-300/60 rounded-full blur-2xl"></div>

                  {/* Static UI Elements around profile */}
                  <div className="absolute -top-8 -left-8 w-20 h-14 bg-black/60 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-electric-blue" />
                  </div>

                  <div className="absolute -top-4 -right-12 w-20 h-14 bg-black/60 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center">
                    <Palette className="w-5 h-5 text-neon-pink" />
                  </div>

                  <div className="absolute -bottom-6 -left-12 w-20 h-14 bg-black/60 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center">
                    <Database className="w-6 h-6 text-blue-400" />
                  </div>

                  <div className="absolute -bottom-8 -right-8 w-20 h-14 bg-black/60 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center">
                    <Server className="w-5 h-5 text-purple-400" />
                  </div>

                  {/* Profile image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm bg-gradient-to-br from-neon-pink via-orange-400 to-yellow-300 shadow-2xl shadow-neon-pink/20">
                    <Image
                      src="/images/profile.jpg"
                      alt="Fisiha Desta"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Name and Info */}
              <div
                className={`space-y-12 transition-all duration-800 ease-out delay-300 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
              >
                <div className="space-y-8">
                  <h1 className="text-6xl lg:text-8xl font-black tracking-tight leading-none font-neue-machina">
                    <span className="text-white">Fisiha Desta</span>
                  </h1>
                  <p className="text-2xl lg:text-3xl font-medium bg-gradient-to-r from-electric-blue to-neon-pink bg-clip-text text-transparent tracking-wide">
                    Web Developer & Graphic Designer
                  </p>
                  <p className="text-lg text-gray-300 max-w-2xl leading-relaxed font-light tracking-wide">
                    Passionate about creating innovative web solutions and stunning visual designs with expertise in
                    full-stack development, UI/UX design, and graphic design
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 pt-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-electric-blue to-neon-pink hover:from-electric-blue/80 hover:to-neon-pink/80 text-white rounded-2xl px-10 py-6 transition-all duration-300 hover:scale-105 shadow-xl shadow-electric-blue/20 font-medium tracking-wide"
                    onClick={() => window.open('/cv/Fisiha-Desta-CV.pdf', '_blank')}
                  >
                    <Download className="w-5 h-5 mr-3" />
                    Download Resume
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10 rounded-2xl px-10 py-6 transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-transparent font-medium tracking-wide"
                    onClick={() => window.location.href = 'mailto:fissehadesta70@gmail.com'}
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    Get In Touch
                    <ArrowRight className="w-4 h-4 ml-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Section - Single Project with Glowing Effects */}
        <section className="relative py-16 px-8 lg:px-12">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 text-white tracking-tight font-neue-machina">Featured Work</h2>
              <p className="text-lg text-gray-300 font-light tracking-wide">
                A glimpse into my latest projects and designs
              </p>
            </div>

            {/* Single Project Display with Glowing Effects */}
            <div className="flex justify-center items-center">
              {/* Main Project Screen - Chereta Hub with Enhanced Glowing Effects */}
              <div
                className="relative w-[900px] lg:w-[1200px] h-[550px] lg:h-[700px] cursor-pointer transition-all duration-100 hover:scale-105"
                onClick={() => window.open("https://chereta-hub.vercel.app/auctions", "_blank")}
              >
                {/* Enhanced Glowing Background like Profile Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 via-neon-pink/20 to-electric-blue/20 rounded-3xl blur-3xl opacity-60"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-electric-blue/10 via-neon-pink/10 to-electric-blue/10 rounded-3xl blur-2xl"></div>
                
                <div className="relative w-full h-full bg-black/90 rounded-3xl border-2 border-electric-blue/40 overflow-hidden shadow-2xl backdrop-blur-sm animate-glow">
                  <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue/30 via-neon-pink/30 to-electric-blue/30 rounded-3xl blur-lg"></div>
                  <div className="relative w-full h-full bg-black/90 rounded-3xl overflow-hidden backdrop-blur-sm">
                    {/* Reduced Header Height */}
                    <div className="h-6 bg-black/90 flex items-center justify-between px-6 gap-3 backdrop-blur-sm border-b border-electric-blue/20">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="ml-4 text-xs text-gray-200 font-medium">Chereta Hub - Auction Platform</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open("https://chereta-hub.vercel.app/auctions", "_blank")
                          }}
                          className="p-1 hover:bg-white/10 rounded transition-colors"
                        >
                          <ExternalLink className="w-3 h-3 text-gray-400 hover:text-white" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open("https://github.com/Fish-dt/auction-website", "_blank")
                          }}
                          className="p-1 hover:bg-white/10 rounded transition-colors"
                        >
                          <Github className="w-3 h-3 text-gray-400 hover:text-white" />
                        </button>
                      </div>
                    </div>
                    <div className="h-full relative overflow-hidden">
                      <Image
                        src="/images/chereta-hub-new.png"
                        alt="Chereta Hub Auction Platform"
                        fill
                        className="object-cover object-top"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Screen Stand */}
                </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Compact */}
        <section id="skills" className="relative py-12 px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white tracking-tight font-neue-machina">Technical Skills</h2>
              <p className="text-lg text-gray-300 font-light tracking-wide">
                Proficient in modern technologies and design tools
              </p>
            </div>

            {/* Three Column Compact Layout */}
            <div className="grid md:grid-cols-12 gap-8">
              {/* Web Development - Wider column */}
              <div className="md:col-span-6">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-white text-center tracking-wide mb-6">Web Development</h3>
                  <div className="grid grid-cols-4 gap-3">
                    {skillCategories[0].skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                        title={skill.name}
                      >
                        <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={skill.icon || "/placeholder.svg"}
                            alt={skill.name}
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = "none"
                            }}
                          />
                        </div>
                        <span className="text-white text-xs font-light tracking-wide text-center leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Data Science - Medium column */}
              <div className="md:col-span-3">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-white text-center tracking-wide mb-6">Data Science</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {skillCategories[1].skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                        title={skill.name}
                      >
                        <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={skill.icon || "/placeholder.svg"}
                            alt={skill.name}
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = "none"
                            }}
                          />
                        </div>
                        <span className="text-white text-xs font-light tracking-wide text-center leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Design & Graphics - Smaller column */}
              <div className="md:col-span-3">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-white text-center tracking-wide mb-6">Design & Graphics</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {skillCategories[2].skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                        title={skill.name}
                      >
                        <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={skill.icon || "/placeholder.svg"}
                            alt={skill.name}
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = "none"
                            }}
                          />
                        </div>
                        <span className="text-white text-xs font-light tracking-wide text-center leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - With Project Images */}
        <section id="projects" className="relative py-16 px-8 lg:px-12">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl lg:text-7xl font-black mb-8 text-white tracking-tight font-neue-machina">Projects</h2>
              <p className="text-xl text-gray-300 font-light tracking-wide">
                Showcase of my web development and graphic design projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-electric-blue/10 transition-all duration-500 hover:scale-105 hover:bg-white/10 group"
                >
                  <div className="h-48 relative overflow-hidden border-b border-white/10">
                    {project.image ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      </div>
                    ) : (
                      <div className={`bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <project.icon className="w-16 h-16 text-electric-blue/80" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{project.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed font-light tracking-wide">{project.description}</p>
                    <div className="flex gap-3">
                      {project.type === "code" ? (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-white/20 text-white hover:bg-white/10 rounded-lg transition-all duration-300 flex-1 bg-transparent"
                            onClick={() => window.open(project.githubUrl, "_blank")}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-electric-blue to-neon-pink hover:from-electric-blue/80 hover:to-neon-pink/80 text-white rounded-lg transition-all duration-300 flex-1"
                            onClick={() => window.open(project.demoUrl, "_blank")}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        </>
                      ) : (
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-electric-blue to-neon-pink hover:from-electric-blue/80 hover:to-neon-pink/80 text-white rounded-lg transition-all duration-300 w-full"
                          onClick={project.onClick}
                        >
                          <Layers className="w-4 h-4 mr-2" />
                          View Portfolio
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Compact */}
        <section id="contact" className="relative py-16 px-8 lg:px-12">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl lg:text-7xl font-black mb-8 text-white tracking-tight font-neue-machina">Get In Touch</h2>
              <p className="text-xl text-gray-300 font-light tracking-wide">
                Let's discuss opportunities and collaborate on exciting projects
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl hover:shadow-electric-blue/10 transition-all duration-500 hover:bg-white/10">
                  <h3 className="text-2xl font-bold mb-10 text-white tracking-wide">Contact Information</h3>
                  <div className="space-y-6">
                    {[
                      { icon: Mail, text: "fissehadesta70@gmail.com" },
                      { icon: Phone, text: "+251932550454" },
                      { icon: MapPin, text: "Addis Ababa, Ethiopia" },
                    ].map((contact, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-gradient-to-r from-electric-blue/20 to-neon-pink/20 border border-white/20">
                          <contact.icon className="w-5 h-5 text-electric-blue" />
                        </div>
                        <span className="text-gray-300 text-lg font-light tracking-wide">{contact.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12">
                    <h4 className="text-lg font-medium mb-6 text-white tracking-wide">Connect With Me</h4>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-white/20 text-white hover:bg-white/10 rounded-xl transition-all duration-300 px-6 bg-transparent"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-white/20 text-white hover:bg-white/10 rounded-xl transition-all duration-300 px-6 bg-transparent"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl hover:shadow-electric-blue/10 transition-all duration-500 hover:bg-white/10">
                  <h3 className="text-xl font-medium text-white mb-8 tracking-wide">Send a Message</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-3 text-gray-300 tracking-wide">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-4 backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-3 text-gray-300 tracking-wide">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-4 backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-3 text-gray-300 tracking-wide">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-4 backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-electric-blue to-neon-pink hover:from-electric-blue/80 hover:to-neon-pink/80 text-white rounded-xl py-4 transition-all duration-300 hover:scale-105 shadow-xl shadow-electric-blue/20">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative backdrop-blur-xl bg-white/5 border-t border-white/10 py-12 px-8 lg:px-12">
          <div className="max-w-8xl mx-auto text-center">
            <p className="text-gray-300 text-lg font-light tracking-wide">
              © {new Date().getFullYear()} Fisiha Desta. All rights reserved.
            </p>
            <p className="text-gray-400 mt-2 font-light tracking-wide">Built with Next.js, React, and Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
