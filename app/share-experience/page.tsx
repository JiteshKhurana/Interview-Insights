"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import {
  GraduationCap,
  Activity,
  Users,
  Code,
  CheckCircle,
  FileText,
  List,
  User,
  ChevronRight,
} from "lucide-react";

const ShareYourStoryComponent = () => {
  const [difficulty, setDifficulty] = useState(5);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden border-none">
          <CardHeader className="bg-black p-8 text-white">
            <CardTitle className="text-4xl font-bold text-center tracking-tight">
              Share Your Interview Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="rounded-xl border-gray-300 focus:ring-black focus:border-black"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="company"
                    className="text-sm font-medium text-gray-700"
                  >
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    placeholder="Enter company name"
                    className="rounded-xl border-gray-300 focus:ring-black focus:border-black"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="role"
                    className="text-sm font-medium text-gray-700"
                  >
                    Job Role
                  </Label>
                  <Input
                    id="role"
                    placeholder="Enter job role"
                    className="rounded-xl border-gray-300 focus:ring-black focus:border-black"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="difficulty"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    <Activity className="w-4 h-4 mr-2" />
                    Interview Difficulty
                  </Label>
                  <div className="flex items-center space-x-4">
                    <Slider
                      id="difficulty"
                      min={1}
                      max={10}
                      step={1}
                      value={[difficulty]}
                      onValueChange={(value) => setDifficulty(value[0])}
                      className="flex-grow"
                    />
                    <span className="text-2xl font-bold">{difficulty}</span>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              {[
                {
                  id: "juniorAdvice",
                  icon: GraduationCap,
                  label: "Advice for juniors during placement season",
                },
                {
                  id: "stressManagement",
                  icon: Activity,
                  label: "How to manage stress during placements",
                },
                {
                  id: "extracurriculars",
                  icon: Users,
                  label: "Role of extracurriculars and societies",
                },
                {
                  id: "technicalTips",
                  icon: Code,
                  label: "Tips for cracking the technical round",
                },
                {
                  id: "selectionFactors",
                  icon: CheckCircle,
                  label: "Key factors for your selection",
                },
                {
                  id: "testInsights",
                  icon: FileText,
                  label: "Insights on the written/online tests",
                },
                {
                  id: "placementProcedure",
                  icon: List,
                  label: "Placement procedure overview",
                },
              ].map((field, index) => (
                <div key={field.id} className="space-y-2">
                  <Label
                    htmlFor={field.id}
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    <field.icon className="w-4 h-4 mr-2" />
                    {field.label}
                  </Label>
                  <Textarea
                    id={field.id}
                    placeholder={`Share your ${field.label.toLowerCase()}`}
                    className="rounded-xl border-gray-300 focus:ring-black focus:border-black"
                    rows={4}
                    required
                  />
                  {index < 6 && <Separator className="my-6" />}
                </div>
              ))}

              <div className="space-y-2">
                <Label
                  htmlFor="introduction"
                  className="text-sm font-medium text-gray-700 flex items-center"
                >
                  <User className="w-4 h-4 mr-2" />
                  Brief introduction of yourself
                </Label>
                <Textarea
                  id="introduction"
                  placeholder="Tell us a bit about yourself"
                  className="rounded-xl border-gray-300 focus:ring-black focus:border-black"
                  rows={4}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-black text-white rounded-xl py-4 text-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center group"
              >
                Submit Your Story
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ShareYourStoryComponent;
