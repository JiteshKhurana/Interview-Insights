"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Building,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";

// Mock data for experiences
const experiences = [
  {
    id: 1,
    company: "Tech Giant Inc.",
    logo: "/tech-giant-logo.svg",
    role: "Software Engineer",
    date: "2023/05/15",
    difficulty: 4,
    review:
      "The interview process was challenging but fair. They focused on algorithmic problems and system design.",
  },
  {
    id: 2,
    company: "Startup Innovate",
    logo: "/startup-innovate-logo.svg",
    role: "Full Stack Developer",
    date: "2023-06-02",
    difficulty: 3,
    review:
      "Great experience! The team was friendly, and the technical questions were practical and relevant to their tech stack.",
  },
  {
    id: 3,
    company: "Finance Solutions",
    logo: "/finance-solutions-logo.svg",
    role: "Data Analyst",
    date: "2023-04-20",
    difficulty: 5,
    review:
      "Rigorous process with multiple rounds. Heavy focus on statistical analysis and machine learning concepts.",
  },
  {
    id: 4,
    company: "E-commerce Leaders",
    logo: "/ecommerce-leaders-logo.svg",
    role: "UX Designer",
    date: "2023-07-10",
    difficulty: 2,
    review:
      "The interview was more of a conversation about my portfolio. They were interested in my design process and problem-solving skills.",
  },
  {
    id: 5,
    company: "Cloud Services Pro",
    logo: "/cloud-services-pro-logo.svg",
    role: "DevOps Engineer",
    date: "2023-05-28",
    difficulty: 4,
    review:
      "In-depth technical questions about CI/CD, containerization, and cloud platforms. Also included a hands-on task.",
  },
  {
    id: 6,
    company: "AI Research Lab",
    logo: "/ai-research-lab-logo.svg",
    role: "Machine Learning Engineer",
    date: "2023-06-15",
    difficulty: 5,
    review:
      "Extremely challenging interview with complex ML problems. They also assessed my research experience and paper implementations.",
  },
];

const ExploreExperiencesComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState("all");

  const filteredExperiences = experiences.filter(
    (exp) =>
      (exp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.role.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedRole === "all" || exp.role === selectedRole) &&
      (selectedDifficulty === "all" ||
        exp.difficulty === parseInt(selectedDifficulty)) &&
      (selectedCompany === "all" || exp.company === selectedCompany)
  );

  const uniqueCompanies = [...new Set(experiences.map((exp) => exp.company))];
  const uniqueRoles = [...new Set(experiences.map((exp) => exp.role))];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Explore Experiences
        </h2>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 rounded-full bg-gray-100 p-1">
            <TabsTrigger value="all" className="rounded-full">
              All Experiences
            </TabsTrigger>
            <TabsTrigger value="company" className="rounded-full">
              By Company
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <div className="flex-grow">
                <Input
                  type="text"
                  placeholder="Search by company or role"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-full border-gray-300 focus:ring-black focus:border-black"
                />
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="rounded-full">
                    <Filter className="mr-2 h-4 w-4" /> Filters
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <Select
                      value={selectedRole}
                      onValueChange={setSelectedRole}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Roles</SelectItem>
                        {uniqueRoles.map((role) => (
                          <SelectItem key={role} value={role}>
                            {role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select
                      value={selectedDifficulty}
                      onValueChange={setSelectedDifficulty}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Difficulties</SelectItem>
                        {[1, 2, 3, 4, 5].map((difficulty) => (
                          <SelectItem
                            key={difficulty}
                            value={difficulty.toString()}
                          >
                            {difficulty} -{" "}
                            {difficulty === 1
                              ? "Very Easy"
                              : difficulty === 5
                              ? "Very Difficult"
                              : ["Easy", "Moderate", "Difficult"][
                                  difficulty - 2
                                ]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select
                      value={selectedCompany}
                      onValueChange={setSelectedCompany}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Company" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Companies</SelectItem>
                        {uniqueCompanies.map((company) => (
                          <SelectItem key={company} value={company}>
                            {company}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredExperiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-white shadow-lg rounded-2xl border-none hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center">
                        <span>{exp.role}</span>
                        <Badge
                          variant="outline"
                          className="bg-gray-100 text-gray-800"
                        >
                          Difficulty: {exp.difficulty}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center mb-2">
                        <Building className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex items-center mb-4">
                        <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {new Date(exp.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{exp.review}</p>
                      <Button
                        variant="outline"
                        className="w-full rounded-full hover:bg-black hover:text-white transition-colors"
                      >
                        Read Full Experience
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="company">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {uniqueCompanies.map((company) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-white shadow-lg rounded-2xl border-none hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Avatar className="w-16 h-16 mr-4">
                          <AvatarImage
                            src={
                              experiences.find((exp) => exp.company === company)
                                ?.logo
                            }
                            alt={company}
                          />
                          <AvatarFallback>
                            {company
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-semibold">{company}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        {
                          experiences.filter((exp) => exp.company === company)
                            .length
                        }{" "}
                        interview experiences
                      </p>
                      <Button
                        variant="outline"
                        className="w-full rounded-full hover:bg-black hover:text-white transition-colors"
                      >
                        View Experiences
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="rounded-full">
              <ChevronLeft className="w-4 h-4 mr-2" /> Previous
            </Button>
            <span className="text-sm text-gray-600">Page 1 of 5</span>
            <Button variant="outline" className="rounded-full">
              Next <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExploreExperiencesComponent;
