"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Calendar,
  Clock,
  Code,
  Users,
  Menu,
  X,
  GraduationCap,
  Activity,
  CheckCircle,
  FileText,
  List,
} from "lucide-react";

// Mock data for a single interview experience
const experience = {
  id: 1,
  company: "Tech Giant Inc.",
  logo: "/placeholder.svg", // Replace with actual logo path
  role: "Senior Software Engineer",
  date: "2023/05/15",
  difficulty: 8,
  duration: "3 hours",
  interviewer: "Jane Doe",
  interviewerRole: "Engineering Manager",
  review:
    "The interview process was comprehensive and challenging, but also fair and insightful. It consisted of multiple rounds, each focusing on different aspects of software engineering.",
  rounds: [
    {
      title: "Technical Screen",
      description:
        "A 45-minute call with an engineer, focusing on basic coding and system design concepts.",
    },
    {
      title: "Coding Challenge",
      description:
        "Two medium-level LeetCode-style problems to be solved in 90 minutes. Focus was on data structures and algorithms.",
    },
    {
      title: "System Design",
      description:
        "Asked to design a scalable social media feed. Discussed trade-offs between different architectures and technologies.",
    },
    {
      title: "Behavioral Interview",
      description:
        "Questions about past projects, teamwork, and handling conflicts. Emphasis on leadership and communication skills.",
    },
  ],
  juniorAdvice:
    "Start preparing early, focus on fundamentals, and don't be afraid to apply for roles that seem challenging. Every interview is a learning experience.",
  stressManagement:
    "Practice mindfulness techniques, maintain a healthy work-life balance, and remember that one interview doesn't define your worth or capabilities.",
  extracurriculars:
    "Being part of the college's coding club and participating in hackathons significantly boosted my problem-solving skills and teamwork abilities.",
  technicalTips:
    "Focus on understanding core concepts rather than memorizing solutions. Practice explaining your thought process out loud while solving problems.",
  selectionFactors:
    "Strong problem-solving skills, ability to communicate complex ideas clearly, and a demonstrated passion for continuous learning were key factors in my selection.",
  writtenTestInsights:
    "The online assessment included both multiple-choice questions on computer science fundamentals and a timed coding challenge. Time management was crucial.",
  placementProcedure:
    "The process involved an initial application, online assessment, technical phone screen, and finally, a full day of on-site interviews covering both technical and behavioral aspects.",
  interviewerBio:
    "I'm a software engineer with 5 years of experience, specializing in distributed systems. I'm passionate about mentoring and believe in fostering an inclusive tech community.",
  overallExperience:
    "Overall, it was a positive experience. The interviewers were professional and seemed genuinely interested in my thought process. While challenging, the questions were fair and relevant to the role.",
};

export default function ReadFullExperience() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900"
            >
              InterviewInsights
            </motion.h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
                {["Home", "Explore", "Share", "About"].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <a
                      href="#"
                      className={`px-3 py-2 rounded-full transition-colors ${
                        item === "Explore"
                          ? "bg-gray-200 text-gray-900"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="text-gray-900" />
            </Button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "tween" }}
          className="fixed inset-y-0 right-0 w-64 bg-white z-50 p-4 shadow-lg rounded-l-2xl"
        >
          <Button
            variant="ghost"
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="text-gray-900" />
          </Button>
          <nav className="mt-12">
            <ul className="space-y-4">
              {["Home", "Explore", "Share", "About"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`block py-2 px-4 rounded-lg transition-colors ${
                      item === "Explore"
                        ? "bg-gray-100 text-gray-900"
                        : "hover:bg-gray-50"
                    }`}
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

      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white shadow-xl rounded-2xl mb-8">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-16 h-16 mr-4 rounded-full"
                  />
                  <div>
                    <CardTitle className="text-3xl font-bold text-gray-900">
                      {experience.role}
                    </CardTitle>
                    <p className="text-xl text-gray-600">
                      {experience.company}
                    </p>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-900 text-lg px-3 py-1 rounded-full"
                >
                  Difficulty: {experience.difficulty}/10
                </Badge>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(experience.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Duration: {experience.duration}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-6 text-gray-700">{experience.review}</p>
              <div className="flex items-center mb-6 bg-gray-50 p-4 rounded-xl">
                <Avatar className="w-12 h-12 mr-4">
                  <AvatarImage
                    src="/placeholder.svg"
                    alt={experience.interviewer}
                  />
                  <AvatarFallback>
                    {experience.interviewer
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">
                    {experience.interviewer}
                  </p>
                  <p className="text-sm text-gray-600">
                    {experience.interviewerRole}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="rounds" className="mb-8">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100 rounded-xl p-1">
              <TabsTrigger value="rounds" className="rounded-lg">
                Interview Rounds
              </TabsTrigger>
              <TabsTrigger value="insights" className="rounded-lg">
                Insights & Advice
              </TabsTrigger>
              <TabsTrigger value="overall" className="rounded-lg">
                Overall Experience
              </TabsTrigger>
            </TabsList>
            <TabsContent value="rounds">
              <Card className="bg-white shadow-lg rounded-2xl">
                <CardContent className="pt-6">
                  {experience.rounds.map((round, index) => (
                    <div
                      key={index}
                      className="mb-6 last:mb-0 bg-gray-50 p-4 rounded-xl"
                    >
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {round.title}
                      </h3>
                      <p className="text-gray-700">{round.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="insights">
              <Card className="bg-white shadow-lg rounded-2xl">
                <CardContent className="pt-6">
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-6">
                      {[
                        {
                          icon: GraduationCap,
                          title: "Advice for Juniors",
                          content: experience.juniorAdvice,
                        },
                        {
                          icon: Activity,
                          title: "Stress Management",
                          content: experience.stressManagement,
                        },
                        {
                          icon: Users,
                          title: "Role of Extracurriculars",
                          content: experience.extracurriculars,
                        },
                        {
                          icon: Code,
                          title: "Tips for Technical Round",
                          content: experience.technicalTips,
                        },
                        {
                          icon: CheckCircle,
                          title: "Key Selection Factors",
                          content: experience.selectionFactors,
                        },
                        {
                          icon: FileText,
                          title: "Written/Online Test Insights",
                          content: experience.writtenTestInsights,
                        },
                        {
                          icon: List,
                          title: "Placement Procedure Overview",
                          content: experience.placementProcedure,
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-xl p-4 transition-all hover:shadow-md"
                        >
                          <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-900">
                            <item.icon className="w-5 h-5 mr-2 text-gray-600" />
                            {item.title}
                          </h3>
                          <p className="text-gray-700">{item.content}</p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="overall">
              <Card className="bg-white shadow-lg rounded-2xl">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Overall Experience
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {experience.overallExperience}
                  </p>
                  <h3 className="text-2xl font-bold mt-6 mb-4 text-gray-900">
                    About the Interviewer
                  </h3>
                  <p className="text-gray-700">{experience.interviewerBio}</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex justify-center"
        >
          <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6">
            Back to Experiences
          </Button>
        </motion.div>
      </main>
    </div>
  );
}
