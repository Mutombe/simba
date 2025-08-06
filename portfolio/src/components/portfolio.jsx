import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Globe,
  Sparkles,
  ArrowDown,
  ExternalLink,
  Star,
  Zap,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  Menu,
  X,
  Download,
  Eye,
  Calendar,
  Users,
  TrendingUp,
  Coffee,
  Heart,
  Rocket,
} from "lucide-react";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const heroRef = useRef(null);
  const textToType = [
    "Full-Stack Developer",
    "Software Engineer",
    "React Specialist",
    "Problem Solver",
    "Innovation Driver",
  ];

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "projects",
        "skills",
        "experience",
        "testimonials",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Typing animation effect
  useEffect(() => {
    const typeText = () => {
      const currentText = textToType[currentTextIndex];
      let charIndex = 0;
      setIsTyping(true);

      const typingInterval = setInterval(() => {
        setTypedText(currentText.slice(0, charIndex + 1));
        charIndex++;

        if (charIndex >= currentText.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            const deletingInterval = setInterval(() => {
              setTypedText(currentText.slice(0, charIndex - 1));
              charIndex--;

              if (charIndex <= 0) {
                clearInterval(deletingInterval);
                setCurrentTextIndex((prev) => (prev + 1) % textToType.length);
                setTimeout(() => setIsTyping(false), 500);
              }
            }, 50);
          }, 2000);
        }
      }, 100);
    };

    if (!isTyping) {
      const timeout = setTimeout(typeText, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentTextIndex, isTyping]);

  const projects = [
    {
      title: "Auto Eden Marketplace",
      description:
        "A comprehensive marketplace for selling and buying vehicles with advanced search, filtering, and user management features. Includes real-time chat, payment integration, and dealer management system.",
      company: "Auto Eden",
      tech: ["ReactJS", "Tailwind CSS", "Redux", "Python", "SQL", "WebSocket"],
      gradient: "from-blue-600 via-purple-600 to-indigo-600",
      icon: <Globe className="w-6 h-6" />,
      stats: { users: "10K+", transactions: "500+", uptime: "99.9%" },
      github: "https://github.com/Mutombe/auto-eden",
      link: "https://autoeden.co.zw",
      year: "2024",
    },
    {
      title: "Real Estate Web Application",
      description:
        "Full-featured real estate platform with property listings, advanced search, virtual tours, and client management system. Features AI-powered property recommendations and market analytics.",
      company: "House of Stone Properties",
      tech: ["ReactJS", "Tailwind CSS", "Redux", "Python", "SQL", "AI/ML"],
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: <Briefcase className="w-6 h-6" />,
      stats: { properties: "5K+", clients: "1.5K+", sales: "$10M+" },
      github: "https://github.com/Mutombe/zim-rec",
      link: "https://houseofstone.onrender.com",
      year: "2024",
    },
    {
      title: "Psychotherapy Website",
      description:
        "Professional therapy practice website with appointment booking, client portal, secure communication, and HIPAA-compliant data handling. Includes telehealth integration and progress tracking.",
      company: "Raphaela Psychotherapy (Canada)",
      tech: [
        "ReactJS",
        "Tailwind CSS",
        "Redux",
        "Python",
        "SQL",
        "Healthcare APIs",
      ],
      gradient: "from-pink-600 via-rose-600 to-red-600",
      icon: <Heart className="w-6 h-6" />,
      stats: { sessions: "1K+", satisfaction: "98%", countries: "3" },
      github: "https://github.com/Mutombe/risewithme",
      link: "https://raphaela-psychotherapy.ca",
      year: "2023",
    },
    {
      title: "Renewable Energy RECs Platform",
      description:
        "Renewable Energy Certificate registration and management system with blockchain integration, carbon tracking, and automated compliance reporting for green energy initiatives.",
      company: "Zim-Rec",
      tech: ["ReactJS", "Tailwind CSS", "Redux", "Python", "SQL", "Blockchain"],
      gradient: "from-green-600 via-lime-600 to-emerald-600",
      icon: <Zap className="w-6 h-6" />,
      stats: { certificates: "50K+", co2saved: "100K tons", efficiency: "95%" },
      github: "https://github.com/zim-rec",
      link: "https://zim-rec.co.zw",
      year: "2023",
    },
    {
      title: "Africa RECs Platform",
      description:
        "Continental renewable energy certificate platform for African markets with multi-currency support, analytics dashboard, and cross-border compliance management.",
      company: "Africa RECs",
      tech: ["ReactJS", "Tailwind CSS", "Redux", "Python", "Multi-Currency"],
      gradient: "from-orange-600 via-amber-600 to-yellow-600",
      icon: <Award className="w-6 h-6" />,
      stats: { countries: "15+", revenue: "$20k+", growth: "200%" },
      github: "https://github.com/Mutombe/ari",
      link: "https://africarecs.com",
      year: "2023",
    },
  ];

  const skills = [
    {
      name: "ReactJS",
      level: 95,
      icon: <Code className="w-5 h-5" />,
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      level: 92,
      icon: <Sparkles className="w-5 h-5" />,
      category: "frontend",
    },
    {
      name: "Redux",
      level: 88,
      icon: <Database className="w-5 h-5" />,
      category: "frontend",
    },
    {
      name: "Python",
      level: 90,
      icon: <Code className="w-5 h-5" />,
      category: "backend",
    },
    {
      name: "SQL",
      level: 85,
      icon: <Database className="w-5 h-5" />,
      category: "backend",
    },
    {
      name: "JavaScript",
      level: 93,
      icon: <Code className="w-5 h-5" />,
      category: "frontend",
    },
    {
      name: "Node.js",
      level: 87,
      icon: <Rocket className="w-5 h-5" />,
      category: "backend",
    },
    {
      name: "Git/GitHub",
      level: 91,
      icon: <Github className="w-5 h-5" />,
      category: "tools",
    },
  ];

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      period: "2023 - Present",
      description:
        "Delivered 5+ high-impact web applications across diverse industries including automotive, real estate, healthcare, and renewable energy sectors.",
      achievements: [
        "Built scalable marketplace serving 10K+ users",
        "Implemented HIPAA-compliant healthcare solutions",
        "Developed blockchain-integrated environmental platforms",
      ],
      tech: ["React", "Python", "SQL", "Tailwind CSS"],
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Software Engineer",
      company: "Tech Consulting",
      period: "2022 - 2023",
      description:
        "Specialized in full-stack development with focus on modern web technologies and scalable architecture design.",
      achievements: [
        "Reduced application load times by 40%",
        "Implemented responsive designs for mobile-first approach",
        "Led code reviews and mentored junior developers",
      ],
      tech: ["React", "Redux", "Python", "Database Design"],
      gradient: "from-cyan-600 to-blue-600",
    },
  ];

  const testimonials = [
    {
      name: "Anold Gwira",
      role: "CTO, Auto Eden",
      content:
        "Simbarashe delivered an exceptional marketplace platform that exceeded our expectations. His attention to detail and technical expertise are remarkable.",
      rating: 5,
      image: "anold.jpeg",
    },
    {
      name: "L. Shonhiwa",
      role: "Psychotherapist, Canada",
      content:
        "The therapy platform Simbarashe built transformed my practice. The secure, user-friendly interface has improved patient engagement significantly.",
      rating: 5,
      image: "lilian3.jpeg",
    },
    {
      name: "Lionita Mhishi",
      role: "Director, House of Stone",
      content:
        "Outstanding work on our real estate platform. The AI-powered features and intuitive design have boosted our client satisfaction to 98%.",
      rating: 5,
      image: "leo.jpeg",
    },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const SkillCard = ({ skill, index }) => (
    <div
      className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 group hover:scale-105"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform">
            {skill.icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
        </div>
        <span className="text-cyan-400 font-bold text-lg">{skill.level}%</span>
      </div>

      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full transition-all duration-2000 ease-out transform origin-left"
          style={{
            width: `${skill.level}%`,
            animation: `fillBar 2s ease-out ${index * 200}ms both`,
          }}
        ></div>
      </div>

      <div className="text-xs text-white/60 capitalize">{skill.category}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden relative">
      {/* Custom Cursor */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-screen transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: "scale(1)",
        }}
      />

      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fillBar {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Simba
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                "hero",
                "about",
                "projects",
                "skills",
                "experience",
                "testimonials",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 hover:scale-105 relative ${
                    activeSection === section
                      ? "text-cyan-400 font-semibold"
                      : "text-white/80"
                  }`}
                >
                  {section === "hero" ? "Home" : section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-lg rounded-2xl mb-4 p-6 border border-white/10">
              {[
                "hero",
                "about",
                "projects",
                "skills",
                "experience",
                "testimonials",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-3 capitalize text-white/80 hover:text-cyan-400 transition-colors border-b border-white/5 last:border-0"
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 pt-20"
        ref={heroRef}
      >
        <div className="max-w-7xl mx-auto w-full text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-6 sm:mb-8">
              {/* Availability Badge */}
              <div className="inline-block p-2 sm:p-3 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-full backdrop-blur-sm border border-white/10 mb-4 sm:mb-6">
                <span className="text-cyan-400 font-semibold text-xs sm:text-sm">
                  🚀 Available for Fellowship Opportunities
                </span>
              </div>

              {/* Name - Perfectly Responsive */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight px-2">
                <span className="block sm:inline">Simbarashe</span>
                <span className="block sm:inline sm:ml-4">Mutombe</span>
              </h1>

              {/* Typed Text - Mobile Optimized */}
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-white/90 mb-4 sm:mb-6 px-2">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                  <span className="text-center">I'm a</span>
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold min-h-[1.5em] flex items-center justify-center">
                    <span className="text-center min-w-[200px] xs:min-w-[250px] sm:min-w-[300px]">
                      {typedText}
                      <span className="animate-pulse">|</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
                Passionate software engineer with{" "}
                <span className="text-cyan-400 font-semibold">
                  5+ successful projects
                </span>{" "}
                across diverse industries. Specializing in{" "}
                <span className="text-purple-400 font-semibold">
                  modern web technologies
                </span>{" "}
                and ready to bring innovation to New York's tech ecosystem.
              </p>

              {/* Tags - Mobile Responsive */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4">
                {[
                  "Full-Stack",
                  "React Expert",
                  "Python Developer",
                  "UI/UX Focused",
                  "Problem Solver",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-white/10 to-white/5 rounded-full backdrop-blur-sm border border-white/20 text-xs sm:text-sm font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons - Mobile Stacked */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden text-sm sm:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">View My Work</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform relative" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm hover:scale-105 text-sm sm:text-base"
              >
                Get In Touch
              </button>

              <button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/25 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
                onClick={() => window.open("/Profile.pdf", "_blank")}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Resume
              </button>
            </div>

            {/* Social Links - Mobile Optimized */}
            <div className="flex justify-center space-x-4 sm:space-x-6">
              {[
                {
                  icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
                  href: "https://github.com/mutombe",
                  color: "from-gray-600 to-gray-800",
                },
                {
                  icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
                  href: "#",
                  color: "from-blue-600 to-blue-800",
                },
                {
                  icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
                  href: "mailto:simbarashemutombe1@gmail.com",
                  color: "from-red-600 to-red-800",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-3 sm:p-4 bg-white/10 rounded-full hover:bg-gradient-to-r hover:${social.color} transition-all duration-300 hover:scale-110 backdrop-blur-sm group`}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" />
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-xl text-white/70 mt-6 max-w-3xl mx-auto">
              Transforming ideas into digital reality with cutting-edge
              technology and creative problem-solving
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-6">
              <div className="p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400">
                    Innovation-Driven Developer
                  </h3>
                </div>
                <p className="text-white/80 leading-relaxed text-lg">
                  I'm a passionate full-stack developer who thrives on creating
                  impactful digital solutions. With expertise spanning modern
                  frontend frameworks and robust backend systems, I build
                  comprehensive applications that not only meet business
                  requirements but exceed user expectations.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-400">
                    Diverse Industry Experience
                  </h3>
                </div>
                <p className="text-white/80 leading-relaxed text-lg">
                  From automotive marketplaces to healthcare platforms,
                  renewable energy systems to real estate solutions, I've
                  successfully delivered projects across multiple industries.
                  Each project has strengthened my ability to adapt quickly and
                  deliver tailored solutions that drive real business value.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: <Briefcase className="w-8 h-8" />,
                  number: "5+",
                  label: "Projects Completed",
                  color: "from-cyan-600 to-blue-600",
                },
                {
                  icon: <Code className="w-8 h-8" />,
                  number: "8+",
                  label: "Technologies Mastered",
                  color: "from-purple-600 to-pink-600",
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  number: "15K+",
                  label: "Users Impacted",
                  color: "from-green-600 to-emerald-600",
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  number: "100%",
                  label: "Client Satisfaction",
                  color: "from-orange-600 to-red-600",
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  number: "99.9%",
                  label: "Uptime Achieved",
                  color: "from-indigo-600 to-purple-600",
                },
                {
                  icon: <Coffee className="w-8 h-8" />,
                  number: "∞",
                  label: "Coffee Consumed",
                  color: "from-amber-600 to-orange-600",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 text-center hover:scale-105 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`p-3 bg-gradient-to-r ${stat.color} rounded-xl w-fit mx-auto mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-xl text-white/70 mt-6 max-w-3xl mx-auto">
              Showcasing innovative solutions that have transformed businesses
              and impacted thousands of users
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col xl:flex-row items-start gap-8">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <div
                          className={`p-4 rounded-2xl bg-gradient-to-r ${project.gradient} text-white shadow-lg`}
                        >
                          {project.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-4">
                            <p className="text-cyan-400 font-semibold text-lg">
                              {project.company}
                            </p>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70">
                              {project.year}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {Object.entries(project.stats).map(
                            ([key, value], statIndex) => (
                              <div
                                key={statIndex}
                                className="text-center px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm"
                              >
                                <div className="text-white font-bold text-sm">
                                  {value}
                                </div>
                                <div className="text-white/60 text-xs capitalize">
                                  {key}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      <p className="text-white/80 text-lg leading-relaxed mb-8">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white text-sm font-medium border border-white/20 hover:bg-opacity-30 transition-all duration-300`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 xl:w-auto w-full">
                      <button
                        className={`px-8 py-4 rounded-2xl bg-gradient-to-r ${project.gradient} text-white font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group hover:scale-105`}
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <Eye className="w-5 h-5" />
                        View Live Demo
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button
                        className="px-8 py-4 rounded-2xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-5 h-5" />
                        Source Code
                      </button>
                      <button
                        className="px-8 py-4 rounded-2xl border-2 border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
                        onClick={() => scrollToSection("testimonials")}
                      >
                        <Award className="w-5 h-5" />
                        Case Study
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-xl text-white/70 mt-6 max-w-3xl mx-auto">
              Mastering cutting-edge technologies to build scalable, performant,
              and user-centric applications
            </p>
          </div>

          {/* Skills by Category */}
          <div className="space-y-12">
            {["frontend", "backend", "tools"].map((category, categoryIndex) => (
              <div key={category} className="space-y-6">
                <h3 className="text-2xl font-bold text-white capitalize mb-6 flex items-center gap-3">
                  <div
                    className={`w-3 h-8 rounded-full bg-gradient-to-b ${
                      category === "frontend"
                        ? "from-cyan-400 to-blue-600"
                        : category === "backend"
                        ? "from-purple-400 to-pink-600"
                        : "from-green-400 to-emerald-600"
                    }`}
                  ></div>
                  {category} Development
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Showcase */}
          <div className="mt-16 p-8 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Additional Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Responsive Design",
                "REST APIs",
                "Database Design",
                "UI/UX Design",
                "Version Control",
                "Agile Methodology",
                "Testing",
                "Performance Optimization",
                "Security Best Practices",
                "Cloud Deployment",
                "Mobile-First Development",
                "SEO Optimization",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full text-white/80 text-sm font-medium border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-xl text-white/70 mt-6 max-w-3xl mx-auto">
              A track record of delivering exceptional results and driving
              innovation across diverse projects
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.01]"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <div
                          className={`p-4 rounded-2xl bg-gradient-to-r ${exp.gradient} text-white shadow-lg`}
                        >
                          <Briefcase className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-4">
                            <p className="text-cyan-400 font-semibold text-lg">
                              {exp.company}
                            </p>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70 flex items-center gap-2">
                              <Calendar className="w-3 h-3" />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-white/80 text-lg leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <h4 className="text-white font-semibold text-lg flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-white/70 flex items-start gap-3"
                            >
                              <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {exp.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-4 py-2 rounded-full bg-gradient-to-r ${exp.gradient} bg-opacity-20 text-white text-sm font-medium border border-white/20`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section id="testimonials" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-xl text-white/70 mt-6 max-w-3xl mx-auto">
              Hear from clients who have experienced the impact of exceptional
              software solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-500 hover:scale-105 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white/20 group-hover:border-cyan-400/50 transition-all duration-300"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-white/80 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-xl text-white/80 mt-6 max-w-3xl mx-auto">
              Ready to collaborate on innovative projects or discuss fellowship
              opportunities in New York? Let's turn your vision into reality
              with cutting-edge technology and creative solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email",
                value: "simbarashemutombe1@gmail.com",
                color: "from-red-600 to-pink-600",
                href: "mailto:simbarashe1mutombe@gmail.com",
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Phone",
                value: "+263 78 594 8128",
                color: "from-green-600 to-emerald-600",
                href: "tel:+263785948128",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Location",
                value: "14 Ceres Road, Avondale, Harare",
                color: "from-blue-600 to-cyan-600",
                href: "#",
              },
              {
                icon: <Linkedin className="w-8 h-8" />,
                title: "LinkedIn",
                value: "Connect with me",
                color: "from-blue-600 to-indigo-600",
                href: "https://www.linkedin.com/in/simbarashemutombe/",
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="group block text-center p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`p-4 bg-gradient-to-r ${contact.color} rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <div className="text-white">{contact.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {contact.title}
                </h3>
                <p className="text-white/70 group-hover:text-white transition-colors">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-8">
            <div className="inline-block p-6 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 rounded-3xl backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl">
                Whether you're looking for a dedicated developer, technical
                consultant, or fellowship candidate, I'm excited to discuss how
                we can work together to create something exceptional.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Send Message
                </button>
                <button
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => window.open("/Profile.pdf", "_blank")}
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
                <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule Call
                </button>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              {[
                {
                  icon: <Github className="w-6 h-6" />,
                  href: "https://github.com/mutombe",
                  color: "hover:from-gray-600 hover:to-gray-800",
                  label: "GitHub",
                },
                {
                  icon: <Linkedin className="w-6 h-6" />,
                  href: "https://www.linkedin.com/in/simbarashemutombe/",
                  color: "hover:from-blue-600 hover:to-blue-800",
                  label: "LinkedIn",
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  href: "mailto:simbarashemutombe1@gmail.com",
                  color: "hover:from-red-600 hover:to-red-800",
                  label: "Email",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  title={social.label}
                  className={`group p-4 bg-white/10 rounded-full ${social.color} hover:bg-gradient-to-r transition-all duration-300 hover:scale-110 backdrop-blur-sm`}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 border-t border-white/10 bg-black/20 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 to-purple-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Simbarashe Mutombe
            </div>

            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Building the future of web development, one innovative solution at
              a time. Passionate about creating technology that makes a
              difference.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 text-white/40 text-sm">
              <span>© 2025 Simbarashe Mutombe</span>
              <span>•</span>
              <span>Crafted with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              <span>and React</span>
              <span>•</span>
              <span>Available for Fellowship Opportunities</span>
            </div>

            <div className="pt-6">
              <p className="text-cyan-400 font-semibold text-sm">
                🚀 Ready to innovate? Let's connect and build something
                extraordinary together!
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
