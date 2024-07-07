import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, GitBranch, TrendingUp } from "lucide-react";

const BeginnerMachineLearningCourse = () => {
  const [currentModule, setCurrentModule] = useState(0);

  const modules = [
    {
      title: "What is Machine Learning?",
      content: "Machine Learning is teaching computers to learn from data, just like how you learn from experience!",
      icon: <Brain className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "Your First ML Concept: Classification",
      content: "Classification is like sorting your toys into different boxes based on their features.",
      icon: <GitBranch className="w-12 h-12 text-green-500" />,
    },
    {
      title: "Fun with Numbers: Prediction",
      content: "Prediction is guessing a number based on other numbers, like guessing how many candies are in a jar.",
      icon: <TrendingUp className="w-12 h-12 text-purple-500" />,
    },
  ];

  const nextModule = () => {
    if (currentModule < modules.length - 1) {
      setCurrentModule(currentModule + 1);
    }
  };

  const prevModule = () => {
    if (currentModule > 0) {
      setCurrentModule(currentModule - 1);
    }
  };

  const progress = ((currentModule + 1) / modules.length) * 100;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-background min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-primary">Machine Learning for Beginners</h1>

      <Card className="mb-6">
        <CardHeader className="text-2xl font-semibold">Welcome!</CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Ready to start your exciting journey into Machine Learning? Don't worry, we'll take it step by step!</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="text-xl font-semibold flex items-center space-x-2">
          {modules[currentModule].icon}
          <span>{modules[currentModule].title}</span>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{modules[currentModule].content}</p>
        </CardContent>
      </Card>

      <div className="flex justify-between mb-6">
        <Button onClick={prevModule} disabled={currentModule === 0}>
          Previous
        </Button>
        <Button onClick={nextModule} disabled={currentModule === modules.length - 1}>
          Next
        </Button>
      </div>

      <Card>
        <CardHeader className="text-lg font-semibold">Your Progress</CardHeader>
        <CardContent>
          <Progress value={progress} className="mb-2" />
          <p className="text-muted-foreground">
            You've completed {currentModule + 1} out of {modules.length} lessons. Keep going!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BeginnerMachineLearningCourse;
