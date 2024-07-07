import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, GitBranch, TrendingUp, BarChart, CheckCircle, GitFork, Group, Award } from "lucide-react";
import modulesData from "./modules.json";

const iconComponents = {
  Brain: <Brain className="w-12 h-12 text-blue-500" />,
  GitBranch: <GitBranch className="w-12 h-12 text-green-500" />,
  TrendingUp: <TrendingUp className="w-12 h-12 text-purple-500" />,
  BarChart: <BarChart className="w-12 h-12 text-orange-500" />,
  CheckCircle: <CheckCircle className="w-12 h-12 text-red-500" />,
  GitFork: <GitFork className="w-12 h-12 text-indigo-500" />,
  Group: <Group className="w-12 h-12 text-pink-500" />,
  Award: <Award className="w-12 h-12 text-yellow-500" />,
};

const App = () => {
  const [currentModule, setCurrentModule] = useState(0);

  const modules = modulesData.map((module) => ({
    ...module,
    icon: iconComponents[module.icon],
  }));

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

export default App;
