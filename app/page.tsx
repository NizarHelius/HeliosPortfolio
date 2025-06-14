"use client";

import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Float,
} from "@react-three/drei";
import { useTheme } from "next-themes";

// Update the AnimatedSphere component to change colors based on theme
function AnimatedSphere() {
  const { theme } = useTheme();
  const sphereColor = theme === "dark" ? "#8b5cf6" : "#7c3aed"; // Purple in both modes but slightly different shades

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color={sphereColor}
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
        />
      </Sphere>
    </Float>
  );
}

// Update the BackgroundShapes component to change colors based on theme
function BackgroundShapes() {
  const { theme } = useTheme();

  // More vibrant colors for light mode
  const sphere1Color = theme === "dark" ? "#06b6d4" : "#0ea5e9"; // Cyan/blue
  const sphere2Color = theme === "dark" ? "#f59e0b" : "#f59e0b"; // Amber
  const sphere3Color = theme === "dark" ? "#ef4444" : "#ec4899"; // Red/Pink

  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[0.5, 32, 32]} position={[-4, 2, -2]}>
          <MeshDistortMaterial
            color={sphere1Color}
            attach="material"
            distort={0.2}
            speed={2}
            roughness={0}
            transparent
            opacity={0.6}
          />
        </Sphere>
      </Float>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
        <Sphere args={[0.3, 32, 32]} position={[4, -2, -1]}>
          <MeshDistortMaterial
            color={sphere2Color}
            attach="material"
            distort={0.4}
            speed={1}
            roughness={0}
            transparent
            opacity={0.7}
          />
        </Sphere>
      </Float>
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <Sphere args={[0.4, 32, 32]} position={[2, 3, -3]}>
          <MeshDistortMaterial
            color={sphere3Color}
            attach="material"
            distort={0.3}
            speed={1.8}
            roughness={0}
            transparent
            opacity={0.5}
          />
        </Sphere>
      </Float>
    </>
  );
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      title: "Crovvu",
      description:
        "A modern social media platform built with Next.js and TypeScript, featuring real-time interactions, user authentication, and a responsive design.",
      image: "/projects/Crovvu.jpg",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
      ],
      github: "https://github.com/NizarHelius/Crovvu-Website",
      live: "https://blhipdn49gvens01j.lite.vusercontent.net/",
    },
    {
      title: "Culinary",
      description:
        "A recipe sharing and meal planning platform that helps users discover, save, and share their favorite recipes with a beautiful and intuitive interface.",
      image: "/projects/Culinary.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      github: "https://github.com/NizarHelius/Culinary-Website",
      live: "https://reliable-lily-86b29f.netlify.app/",
    },
    {
      title: "FitFlow",
      description:
        "A comprehensive fitness tracking application that helps users monitor their workouts, set goals, and track their progress with detailed analytics.",
      image: "/projects/FitFlow.jpg",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Chart.js",
      ],
      github: "https://github.com/NizarHelius/fit-flow-launch",
      live: "https://fit-flow-launch.lovable.app/",
    },
    {
      title: "Cozy Brew",
      description:
        "An e-commerce platform for coffee enthusiasts, featuring product catalog, shopping cart, and secure payment processing.",
      image: "/projects/Cozy brew.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      github: "https://github.com/NizarHelius/cozy-brew-portal",
      live: "https://cozy-brew-portal.lovable.app/",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="hover:text-purple-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-purple-600 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="hover:text-purple-600 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-purple-600 transition-colors"
              >
                Contact
              </a>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-4 transition-transform hover:scale-110"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-yellow-400" />
                ) : (
                  <Moon className="h-5 w-5 text-purple-600" />
                )}
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="mr-2 transition-transform hover:scale-110"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-yellow-400" />
                ) : (
                  <Moon className="h-5 w-5 text-purple-600" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="hover:text-purple-600 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="hover:text-purple-600 transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="hover:text-purple-600 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="hover:text-purple-600 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full opacity-60">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <AnimatedSphere />
            <BackgroundShapes />
            <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
              <mesh position={[-3, -2, -1]}>
                <torusGeometry args={[0.6, 0.2, 16, 32]} />
                <meshStandardMaterial
                  color={theme === "dark" ? "#10b981" : "#059669"}
                  transparent
                  opacity={0.7}
                />
              </mesh>
            </Float>
            <Float speed={1.8} rotationIntensity={1.2} floatIntensity={0.8}>
              <mesh position={[3.5, 1, -2]} rotation={[0.5, 0.5, 0]}>
                <boxGeometry args={[0.6, 0.6, 0.6]} />
                <meshStandardMaterial
                  color={theme === "dark" ? "#f97316" : "#ea580c"}
                  transparent
                  opacity={0.8}
                />
              </mesh>
            </Float>
            <Float speed={2.2} rotationIntensity={0.4} floatIntensity={1.5}>
              <mesh position={[0, -3, -1.5]}>
                <octahedronGeometry args={[0.5, 0]} />
                <meshStandardMaterial
                  color={theme === "dark" ? "#8b5cf6" : "#7c3aed"}
                  transparent
                  opacity={0.7}
                />
              </mesh>
            </Float>
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Photo Section */}
            <div className="flex justify-center lg:justify-start order-1 lg:order-1">
              <div className="relative">
                <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-purple-500/20 shadow-2xl">
                  <img
                    src="/projects/Personalpic.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements around photo */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cyan-500 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>

            {/* Text Content Section */}
            <div className="text-center lg:text-left order-2 lg:order-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
                <span
                  className={`bg-gradient-to-r ${
                    theme === "dark"
                      ? "from-purple-600 via-blue-600 to-cyan-600"
                      : "from-purple-600 via-blue-500 to-pink-500"
                  } bg-clip-text text-transparent`}
                >
                  Web Developer
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                Creating beautiful, functional, and user-friendly web
                experiences with modern technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className={`${
                    theme === "dark"
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      : "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                  }`}
                  asChild
                >
                  <a
                    href="#projects"
                    className="scroll-smooth"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    View My Work
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 hover:bg-secondary/10"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate web developer with 5+ years of experience creating
              innovative digital solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a full-stack web developer who loves turning complex
                problems into simple, beautiful designs. My passion lies in
                creating user-centric applications that not only look great but
                also provide exceptional user experiences.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through blog posts and community talks.
              </p>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-purple-100 hover:text-purple-700 dark:hover:bg-purple-900 dark:hover:text-purple-300 cursor-pointer"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden">
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <ambientLight intensity={0.6} />
                  <pointLight position={[10, 10, 10]} />
                  <pointLight
                    position={[-10, -10, -10]}
                    color="#8b5cf6"
                    intensity={0.3}
                  />

                  {/* Main central sphere */}
                  <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                    <Sphere args={[1.5, 64, 64]}>
                      <MeshDistortMaterial
                        color="#06b6d4"
                        attach="material"
                        distort={0.4}
                        speed={2}
                        roughness={0}
                      />
                    </Sphere>
                  </Float>

                  {/* Orbiting smaller spheres */}
                  <Float speed={2} rotationIntensity={0.8} floatIntensity={0.5}>
                    <Sphere args={[0.3, 32, 32]} position={[2.5, 0, 0]}>
                      <meshStandardMaterial
                        color="#f59e0b"
                        transparent
                        opacity={0.8}
                      />
                    </Sphere>
                  </Float>

                  <Float
                    speed={1.8}
                    rotationIntensity={0.6}
                    floatIntensity={0.7}
                  >
                    <Sphere args={[0.25, 32, 32]} position={[-2.2, 1, 0.5]}>
                      <meshStandardMaterial
                        color="#ef4444"
                        transparent
                        opacity={0.9}
                      />
                    </Sphere>
                  </Float>

                  <Float
                    speed={2.2}
                    rotationIntensity={0.4}
                    floatIntensity={0.6}
                  >
                    <Sphere args={[0.2, 32, 32]} position={[1.5, -2, -0.5]}>
                      <meshStandardMaterial
                        color="#10b981"
                        transparent
                        opacity={0.7}
                      />
                    </Sphere>
                  </Float>

                  {/* Geometric shapes for variety */}
                  <Float speed={1.3} rotationIntensity={1} floatIntensity={0.8}>
                    <mesh position={[-1.8, -1.5, 1]} rotation={[0.5, 0.5, 0]}>
                      <boxGeometry args={[0.4, 0.4, 0.4]} />
                      <meshStandardMaterial
                        color="#8b5cf6"
                        transparent
                        opacity={0.6}
                      />
                    </mesh>
                  </Float>

                  <Float
                    speed={1.7}
                    rotationIntensity={0.7}
                    floatIntensity={1.2}
                  >
                    <mesh position={[0.8, 2.2, -0.8]}>
                      <octahedronGeometry args={[0.3, 0]} />
                      <meshStandardMaterial
                        color="#ec4899"
                        transparent
                        opacity={0.8}
                      />
                    </mesh>
                  </Float>

                  {/* Wireframe torus for tech aesthetic */}
                  <Float
                    speed={0.8}
                    rotationIntensity={0.3}
                    floatIntensity={0.4}
                  >
                    <mesh position={[0, 0, -2]} rotation={[Math.PI / 4, 0, 0]}>
                      <torusGeometry args={[2, 0.1, 16, 100]} />
                      <meshBasicMaterial
                        color="#06b6d4"
                        wireframe
                        transparent
                        opacity={0.3}
                      />
                    </mesh>
                  </Float>

                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                  />
                </Canvas>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life.
          </p>

          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <a href="mailto:nizarbghdadi@gmail.com" className="block group">
              <Card className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-purple-50 dark:hover:bg-purple-950/30 cursor-pointer border-2 hover:border-purple-300 dark:hover:border-purple-600">
                <Mail className="w-8 h-8 mx-auto mb-4 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                  Email
                </h3>
                <p className="text-muted-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  nizarbghdadi@gmail.com
                </p>
              </Card>
            </a>
            <a
              href="https://www.linkedin.com/in/nizar-barhdadi-732178309/"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-blue-50 dark:hover:bg-blue-950/30 cursor-pointer border-2 hover:border-blue-300 dark:hover:border-blue-600">
                <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  LinkedIn
                </h3>
                <p className="text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  @NizarBarhdadi
                </p>
              </Card>
            </a>
            <a
              href="https://github.com/NizarHelius"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-orange-50 dark:hover:bg-orange-950/30 cursor-pointer border-2 hover:border-orange-300 dark:hover:border-orange-600">
                <Github className="w-8 h-8 mx-auto mb-4 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2 group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors">
                  GitHub
                </h3>
                <p className="text-muted-foreground group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  @NizarHelius
                </p>
              </Card>
            </a>
          </div>

          <Button
            size="lg"
            className={`${
              theme === "dark"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                : "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
            }`}
          >
            <Mail className="w-5 h-5 mr-2" />
            Send Message
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Helios Portfolio.</p>
        </div>
      </footer>
    </div>
  );
}
