"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Upload,
  BookOpen,
  Users,
  Lightbulb,
  BarChart,
  FileText,
  Clock,
  Menu,
  X,
} from "lucide-react";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "insights", "share", "explore"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-black">
      <header className="fixed w-full z-50 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold"
            >
              InterviewInsights
            </motion.h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-1">
                {[
                  { name: "Home", id: "home" },
                  { name: "Insights", id: "insights" },
                  { name: "Share", id: "share" },
                  { name: "Explore", id: "explore" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        activeSection === item.id
                          ? "bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg text-black"
                          : "hover:bg-white hover:bg-opacity-20"
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-y-0 right-0 w-64 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg z-50 p-4 shadow-lg"
          >
            <Button
              variant="ghost"
              className="absolute top-4 right-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <X />
            </Button>
            <nav className="mt-12">
              <ul className="space-y-4">
                {["Home", "Insights", "Share", "Explore"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block py-2 hover:bg-white hover:bg-opacity-20 rounded-lg px-4 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section
          id="home"
          className="min-h-screen flex items-center justify-center pt-16"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Unlock the Power of
              <br />
              Interview Insights
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-12 text-gray-700 max-w-3xl mx-auto"
            >
              Navigate your career journey with wisdom from those who&apos;ve
              walked the path before you
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
            >
              <Button
                size="lg"
                className="bg-black bg-opacity-80 text-white hover:bg-opacity-100 rounded-full px-8 backdrop-filter backdrop-blur-lg"
              >
                <Search className="mr-2 h-5 w-5" /> Explore Experiences
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black border-opacity-20 text-black hover:bg-black hover:bg-opacity-10 hover:text-black rounded-full px-8 backdrop-filter backdrop-blur-lg"
              >
                <Upload className="mr-2 h-5 w-5" /> Share Your Story
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="insights" className="py-20">
          <div className="container mx-auto px-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-12"
            >
              Key Insights from Senior Interviews
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <BookOpen className="h-6 w-6" />,
                  title: "Placement Season Advice",
                  description: "Navigate the placement season with confidence",
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Stress Management",
                  description: "Master the art of staying calm under pressure",
                },
                {
                  icon: <Lightbulb className="h-6 w-6" />,
                  title: "Extracurriculars Impact",
                  description: "Leverage your activities for interview success",
                },
                {
                  icon: <BarChart className="h-6 w-6" />,
                  title: "Technical Round Tips",
                  description:
                    "Ace your technical interviews with expert advice",
                },
                {
                  icon: <FileText className="h-6 w-6" />,
                  title: "Selection Factors",
                  description: "Understand what companies really look for",
                },
                {
                  icon: <Clock className="h-6 w-6" />,
                  title: "Test Insights",
                  description: "Conquer written and online assessments",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:bg-opacity-30"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-black bg-opacity-80 text-white p-3 rounded-full">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="share"
          className="py-20 bg-black bg-opacity-80 text-white backdrop-filter backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-8"
            >
              Ready to Share Your Experience?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto"
            >
              Your insights can be the guiding light for future candidates.
              Share your journey and help others succeed.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-white bg-opacity-20 text-white hover:bg-opacity-30 rounded-full px-8 backdrop-filter backdrop-blur-lg"
              >
                <Upload className="mr-2 h-5 w-5" /> Share Your Journey
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="explore" className="py-20">
          <div className="container mx-auto px-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-12"
            >
              Explore Interview Experiences
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-md mx-auto"
            >
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Search by company or role"
                  className="bg-white bg-opacity-20 border-gray-300 border-opacity-20 rounded-full backdrop-filter backdrop-blur-lg"
                />
                <Button
                  type="submit"
                  className="bg-black bg-opacity-80 hover:bg-opacity-100 text-white rounded-full backdrop-filter backdrop-blur-lg"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
