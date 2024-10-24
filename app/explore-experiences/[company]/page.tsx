"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ChevronLeft,
  Calendar,
  Clock,
  Star,
  ThumbsUp,
  ThumbsDown,
  ChevronRight,
} from "lucide-react";

// Mock data for a company's experiences
const companyExperiences = {
  name: "Tech Giant Inc.",
  logo: "/tech-giant-logo.svg",
  experiences: [
    {
      id: 1,
      studentName: "Alice Johnson",
      role: "Software Engineer",
      date: "2023-05-15",
      duration: "3 hours",
      difficulty: 4,
      offer: true,
      review:
        "The interview process was comprehensive and challenging. It consisted of multiple rounds, each focusing on different aspects of software engineering.",
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
      pros: [
        "Fair evaluation",
        "Friendly interviewers",
        "Interesting technical problems",
      ],
      cons: ["Long process", "Limited feedback"],
    },
    {
      id: 2,
      studentName: "Bob Smith",
      role: "Product Manager",
      date: "2023-06-10",
      duration: "2.5 hours",
      difficulty: 3,
      offer: false,
      review:
        "The interview was focused on product sense and analytical skills. The interviewers were friendly and the questions were relevant to the role.",
      rounds: [
        {
          title: "Initial Screen",
          description:
            "30-minute call with a recruiter to discuss background and interest in the role.",
        },
        {
          title: "Product Case Study",
          description:
            "Given a hypothetical product problem to solve. Evaluated approach to problem-solving and product thinking.",
        },
        {
          title: "Analytical Interview",
          description:
            "Questions on metrics, A/B testing, and data-driven decision making.",
        },
        {
          title: "Behavioral Interview",
          description:
            "Discussed past experiences, leadership style, and collaboration with cross-functional teams.",
        },
      ],
      pros: [
        "Well-structured process",
        "Relevant case studies",
        "Opportunity to showcase skills",
      ],
      cons: ["Limited time for questions", "Lack of technical depth"],
    },
    {
      id: 3,
      studentName: "Charlie Davis",
      role: "Data Scientist",
      date: "2023-07-05",
      duration: "4 hours",
      difficulty: 5,
      offer: true,
      review:
        "The interview process was rigorous and comprehensive, covering various aspects of data science and machine learning.",
      rounds: [
        {
          title: "Technical Phone Screen",
          description:
            "1-hour call discussing basic statistical concepts and machine learning algorithms.",
        },
        {
          title: "Take-home Assignment",
          description:
            "Given a dataset and 48 hours to perform analysis and build a predictive model.",
        },
        {
          title: "On-site Interviews",
          description:
            "Full day of interviews including coding, machine learning theory, and a presentation of the take-home assignment.",
        },
      ],
      pros: [
        "In-depth technical discussions",
        "Opportunity to showcase practical skills",
        "Friendly and knowledgeable interviewers",
      ],
      cons: [
        "Intense time pressure",
        "Limited feedback on take-home assignment",
      ],
    },
  ],
};

const ViewExperiences = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            className="rounded-full"
            onClick={() => window.history.back()}
          >
            <ChevronLeft className="w-4 h-4 mr-2" /> Back to Companies
          </Button>
          <div className="flex items-center">
            <Avatar className="w-16 h-16 mr-4">
              <AvatarImage
                src={companyExperiences.logo}
                alt={companyExperiences.name}
              />
              <AvatarFallback>
                {companyExperiences.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold">{companyExperiences.name}</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyExperiences.experiences.map((exp) => (
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
                      className={`${
                        exp.offer
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {exp.offer ? "Offer Received" : "No Offer"}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{exp.studentName}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {new Date(exp.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-center col-span-2">
                      <Star className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        Difficulty: {exp.difficulty}/5
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {exp.review}
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full rounded-full hover:bg-black hover:text-white transition-colors"
                      >
                        Read Full Experience
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>
                          {exp.role} Interview Experience
                        </DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="mt-4 max-h-[calc(80vh-100px)]">
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold mb-2">Overview</h3>
                            <p className="text-gray-600">{exp.review}</p>
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">
                              Interview Rounds
                            </h3>
                            {exp.rounds.map((round, index) => (
                              <div key={index} className="mb-2">
                                <h4 className="font-medium">{round.title}</h4>
                                <p className="text-sm text-gray-600">
                                  {round.description}
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className="flex space-x-4">
                            <div className="flex-1">
                              <h3 className="font-semibold mb-2 flex items-center">
                                <ThumbsUp className="w-4 h-4 mr-2 text-green-500" />{" "}
                                Pros
                              </h3>
                              <ul className="list-disc list-inside text-sm text-gray-600">
                                {exp.pros.map((pro, index) => (
                                  <li key={index}>{pro}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold mb-2 flex items-center">
                                <ThumbsDown className="w-4 h-4 mr-2 text-red-500" />{" "}
                                Cons
                              </h3>
                              <ul className="list-disc list-inside text-sm text-gray-600">
                                {exp.cons.map((con, index) => (
                                  <li key={index}>{con}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="rounded-full">
              <ChevronLeft className="w-4 h-4 mr-2" /> Previous
            </Button>
            <span className="text-sm text-gray-600">Page 1 of 3</span>
            <Button variant="outline" className="rounded-full">
              Next <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ViewExperiences;
