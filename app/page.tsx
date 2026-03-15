"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Facebook, Instagram, ChevronDown, Mail, Download } from "lucide-react"
import SkillsGrid from "@/components/skills-grid"
import PersonalSkills from "@/components/personal-skills"
import ProjectCard from "@/components/project-card"
import TypedText from "@/components/typed-text"
import CertificationSlider from "@/components/certification-slider"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 overflow-hidden bg-[#f7f7f7]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <Badge className="mb-4 bg-blue-100 text-[#420177] hover:bg-blue-200">ASPIRING IT PROFESSIONAL</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0e2431] mb-4">
                Hi There, I'm <span className="text-[#fc8c05]">Bhusan Shrestha</span>
              </h1>
              <div className="mt-8">
                <Button
                  onClick={() => {
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="bg-[#2506ad] hover:bg-[#1a047e] text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-[#3044f7]/60 hover:shadow-[#3044f7]/50 transition-all duration-300"
                >
                  About Me
                  <ChevronDown className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="flex justify-center md:justify-start mt-8 gap-4">
                <Link href="https://www.linkedin.com/in/bhusan-shrestha/" target="_blank" aria-label="LinkedIn">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#09011b] border-none hover:bg-[#007bb6] text-[#00d9ff]"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://github.com/Bhusan-Shrestha/" target="_blank" aria-label="GitHub">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#09011b] border-none hover:bg-[#0e0e0e] text-[#00d9ff]"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://www.instagram.com/bhushan_shrestha_/" target="_blank" aria-label="Instagram">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#09011b] border-none hover:bg-[#ee00da] text-[#00d9ff]"
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://www.facebook.com/ItsBhushanShrestha/" target="_blank" aria-label="Facebook">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#09011b] border-none hover:bg-[#00aced] text-[#00d9ff]"
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#011aff]/50 shadow-xl shadow-[#011aff]/30">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#011aff]/20 to-transparent z-10"></div>
                <Image
                  src="/hero-bhusan.jpg"
                  alt="Bhusan Shrestha"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#f7f7f7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            About <span className="text-[#011aff]">Me</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/bhusan.jpg"
                  alt="Bhusan Shrestha"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 text-black">I am Bhusan Shrestha.</h3>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                Passionate about Learning New Things.
              </Badge>
              <p className="text-gray-800 mb-6" style={{ textAlign: "justify" }}>
                I am an enthusiastic, self-motivated, reliable, responsible, and hard-working person. I am a mature team
                worker and adaptable to all challenging situations. I am able to work well both in a team environment
                and using my own initiative. I am able to work well under pressure and adhere to strict deadlines. I believe in learning by doing and through mistakes and experience. Working in myself to improve my skills.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="text-gray-800">
                    <span className="font-semibold">Degree:</span> BIT Running
                  </p>
                  <p className="text-gray-800">
                    <span className="font-semibold">Phone:</span> +977 9814247219
                  </p>
                </div>
                <div>
                  <p className="text-gray-800">
                    <span className="font-semibold">Email:</span> bhushanshrestha2060@gmail.com
                  </p>
                  <p className="text-gray-800">
                    <span className="font-semibold">Location:</span> Madhyapur Thimi, Bhaktapur, Nepal
                  </p>
                </div>
              </div>
              <Button
                onClick={() => {
                  window.open("/Bhusan_Shrestha_Resume.pdf", "_blank")
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Resume
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#f7f7f7] text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Technical <span className="text-[#fc8c05]">Skills</span>
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-800">
            Specialized in programming languages, development technologies, and problem-solving
          </p>
          <SkillsGrid />
        </div>
      </section>

      {/* Personal Development & Social Skills Section */}
      <section id="personal-skills" className="py-20 bg-[#f7f7f7] text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Personal Development & <span className="text-[#fc8c05]">Social Skills</span>
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-800">
            Soft skills that enhance professional capabilities and teamwork
          </p>
          <PersonalSkills />
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-[#f7f7f7] text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Professional <span className="text-[#011aff]">Certifications</span>
          </h2>
          <p className="text-center text-gray-800 mb-16 max-w-3xl mx-auto">
            Credentials validating expertise in programming and security
          </p>
          <CertificationSlider />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#f7f7f7] text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Projects <span className="text-[#fc8c05]">Made</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Movie Streaming Platforms"
              description="A movie website that is build using react for Frontend and spring boot for Backend which play movies and shows movie details."
              image="/Movie-Website.png"
              // liveUrl="  "
              codeUrl="https://github.com/Bhusan-Shrestha/Movie-Website"
              codeUrl1="https://github.com/Bhusan-Shrestha/Movie-API"
            />

            <ProjectCard
              title="Vehicle Classification System"
              description="A machine learning project that classifies different types of vehicles using image processing techniques."
              image="/Vehicle_Classification.jpeg"
              // liveUrl="https://github.com/Bhusan-Shrestha/Vehicle_Classification"
              codeUrl="https://github.com/Bhusan-Shrestha/Vehicle_Classification"
            />

            <ProjectCard
              title="Movie Recommendation System"
              description="A movie recommendation system that suggests movies based on user preferences using collaborative filtering and content-based filtering techniques."
              image="/Movie-Recommendation.jpeg"
              // liveUrl="https://github.com/Bhusan-Shrestha/Movie-Recommendation"
              codeUrl="https://github.com/Bhusan-Shrestha/Movie-Recommendation"
            />

            <ProjectCard
              title="Heart Disease Classification"
              description="A machine learning project that predicts the presence of heart disease in patients based on various health parameters."
              image="/Heart-Disease-Classification.jpeg"
              // liveUrl="https://github.com/Bhusan-Shrestha/Heart-Disease-Classification"
              codeUrl="https://github.com/Bhusan-Shrestha/Heart-Disease-Classification"
            />

            <ProjectCard
              title="Travel Agency - Ghum Gham"
              description="This is about the landing page of a travel agency. Which is for the Frontend Design Fest organized by Whitehouse Innovator."
              image="/Ghum-Gham.png"
              liveUrl="https://bhusan-shrestha.github.io/Ghum-Gham/"
              codeUrl="https://github.com/Bhusan-Shrestha/Ghum-Gham"
            />

            <ProjectCard
              title="Cliniflow - Health Care System"
              description="A java project done in the 3rd semester project for BIT in Purbanchal University Course. With the help of two team members."
              image="/cliniflow.jpg"
              codeUrl="https://github.com/Bhusan-Shrestha/Cliniflow"
            />

            <ProjectCard
              title="Hospital Appointment System"
              description="A Web base project done in the 5th semester project for BIT in Purbanchal University Course. With the help of two team members."
              image="/HMS.png"
              // liveUrl="https://github.com/Bhusan-Shrestha/Hospital-Appointment-System"
              codeUrl="https://github.com/Bhusan-Shrestha/Hospital-Appointment-System"
            />

            <ProjectCard
              title="Votex - Online Voting System"
              description="The Online Voting System. Which is developed by my team for the TI Fest 2081 organized by ANNFSU Himalayan WhiteHouse International College committee."
              image="/Votex.png"
              // liveUrl="https://github.com/HikmatBaniya/Itfest"
              codeUrl="https://github.com/HikmatBaniya/Itfest"
            />
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-[#f7f7f7] text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Awards & <span className="text-[#011aff]">Achievement</span>
          </h2>
          <p className="text-center text-gray-800 mb-16 max-w-3xl mx-auto">
            Achievements and achievement for outstanding work
          </p>
          <div className="max-w-3xl mx-auto">
            <Card className="border border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-blue-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 15c2.21 0 4-1.79 4-4 0-2.21-1.79-4-4-4-2.21 0-4 1.79-4 4 0 2.21 1.79 4 4 4z"></path>
                      <path d="M19.93 21.12c-1.9-3.79-6.07-6.12-9.93-6.12s-8.03 2.33-9.93 6.12"></path>
                      <path d="M8 7.82v4.36"></path>
                      <path d="M16 7.82v4.36"></path>
                      <path d="M12 4v2"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Outstanding Design Skills</h3>
                    <p className="text-blue-600 mb-1">Whitehouse Innovator</p>
                    <p className="text-gray-700">
                      This award is provided by Whitehouse Innovation for the outstanding design skills in the Front
                      Design Fest held in 23 February,2025 at Himalayan WhiteHouse International College.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div><br></br>
          <div className="max-w-3xl mx-auto">
            <Card className="border border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-blue-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 15c2.21 0 4-1.79 4-4 0-2.21-1.79-4-4-4-2.21 0-4 1.79-4 4 0 2.21 1.79 4 4 4z"></path>
                      <path d="M19.93 21.12c-1.9-3.79-6.07-6.12-9.93-6.12s-8.03 2.33-9.93 6.12"></path>
                      <path d="M8 7.82v4.36"></path>
                      <path d="M16 7.82v4.36"></path>
                      <path d="M12 4v2"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2nd Position on IT Fest 2081 </h3>
                    <p className="text-blue-600 mb-1">ANNFSU Himalayan WhiteHouse International College Committee</p>
                    <p className="text-gray-700">
                      This award is provided by ANNFSU Himalayan WhiteHouse International College committee for the 2nd position in the IT Fest 2081 held in 24 & 25 March,2025 at Himalayan WhiteHouse International College.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#00012b] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Bhusan's Portfolio</h3>
              <p className="text-gray-400 mb-4">
                Thank you for visiting my personal portfolio website. Connect with me over socials.
                <br />
                <br />
                Keep Rising 🚀. Connect with me!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-gray-400 hover:text-[#ffae00] transition-colors">
                    <span className="flex items-center">
                      <ChevronDown className="h-4 w-4 mr-2 rotate-90" />
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-[#ffae00] transition-colors">
                    <span className="flex items-center">
                      <ChevronDown className="h-4 w-4 mr-2 rotate-90" />
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-gray-400 hover:text-[#ffae00] transition-colors">
                    <span className="flex items-center">
                      <ChevronDown className="h-4 w-4 mr-2 rotate-90" />
                      Skills
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#personal-skills" className="text-gray-400 hover:text-[#ffae00] transition-colors">
                    <span className="flex items-center">
                      <ChevronDown className="h-4 w-4 mr-2 rotate-90" />
                      Personal Skills
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-400 hover:text-[#ffae00] transition-colors">
                    <span className="flex items-center">
                      <ChevronDown className="h-4 w-4 mr-2 rotate-90" />
                      Projects
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <p className="text-gray-400 flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +977 9814247219
              </p>
              <p className="text-gray-400 flex items-center mb-2">
                <Mail className="h-5 w-5 mr-2" />
                bhushanshrestha2060@gmail.com
              </p>
              <p className="text-gray-400 flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Madhyapur Thimi, Bhaktapur, Nepal
              </p>
              <div className="flex space-x-4">
                <Link href="https://www.linkedin.com/in/bhusan-shrestha/" target="_blank" aria-label="LinkedIn">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#09011b] border-none hover:bg-[#007bb6] text-[#00d9ff] hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://github.com/Bhusan-Shrestha" target="_blank" aria-label="GitHub">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#09011b] border-none hover:bg-[#0e0e0e] text-[#00d9ff] hover:text-white"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="mailto:bhushanshrestha2060@gmail.com" target="_blank" aria-label="Mail">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#09011b] border-none hover:bg-[#d44638] text-[#00d9ff] hover:text-white"
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://www.instagram.com/bhushan_shrestha_/" target="_blank" aria-label="Instagram">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#09011b] border-none hover:bg-[#ee00da] text-[#00d9ff] hover:text-white"
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://www.facebook.com/ItsBhushanShrestha/" target="_blank" aria-label="Facebook">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#09011b] border-none hover:bg-[#1877f2] text-[#00d9ff] hover:text-white"
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; Copyright{" "}
              <Link href="https://www.linkedin.com/in/bhusan-shrestha/" className="text-[#ffae00]">
                Bhusan Shrestha
              </Link>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  )
}

