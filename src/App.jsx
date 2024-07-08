import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, GitBranch, TrendingUp, BarChart, CheckCircle, GitFork, Group, Award } from "lucide-react";
import modulesData from "./modules.json";
import LanguageSelector from "./LanguageSelector";

const App = () => {
  // Translation hook
  const { t } = useTranslation();

  // State hook to keep track of the current module index
  const [currentModule, setCurrentModule] = useState(0);

  // Memoizing icon components to avoid unnecessary re-renders
  const iconComponents = useMemo(
    () => ({
      Brain: <Brain className="w-8 h-8 sm:w-12 sm:h-12 text-blue-500" />,
      GitBranch: <GitBranch className="w-8 h-8 sm:w-12 sm:h-12 text-green-500" />,
      TrendingUp: <TrendingUp className="w-8 h-8 sm:w-12 sm:h-12 text-purple-500" />,
      BarChart: <BarChart className="w-8 h-8 sm:w-12 sm:h-12 text-orange-500" />,
      CheckCircle: <CheckCircle className="w-8 h-8 sm:w-12 sm:h-12 text-red-500" />,
      GitFork: <GitFork className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-500" />,
      Group: <Group className="w-8 h-8 sm:w-12 sm:h-12 text-pink-500" />,
      Award: <Award className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-500" />,
    }),
    []
  );

  // Mapping module data to include corresponding icons
  const modules = modulesData.map((module, index) => ({
    ...module,
    title: t(`modules.${index}.title`),
    content: t(`modules.${index}.content`),
    icon: iconComponents[module.icon],
  }));

  // Function to go to the next module, if there is one
  const nextModule = () => {
    if (currentModule < modules.length - 1) {
      setCurrentModule(currentModule + 1);
    }
  };

  // Function to go to the previous module, if there is one
  const prevModule = () => {
    if (currentModule > 0) {
      setCurrentModule(currentModule - 1);
    }
  };

  // Calculate the progress percentage based on the current module index
  const progress = ((currentModule + 1) / modules.length) * 100;

  return (
    <div className="p-4 sm:p-6 max-w-full sm:max-w-2xl mx-auto bg-background min-h-screen">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center text-primary">{t("title")}</h1>

      {/* Language Selector */}
      <LanguageSelector />

      {/* Initial welcome card */}
      <Card className="mb-4 sm:mb-6 shadow-lg rounded-lg">
        <CardHeader className="text-xl sm:text-2xl font-semibold text-gray-800">{t("welcome")}</CardHeader>
        <CardContent className="text-gray-700">
          <p className="text-muted-foreground">{t("welcomeContent")}</p>
        </CardContent>
      </Card>

      {/* Current module card */}
      <Card className="mb-4 sm:mb-6 shadow-lg rounded-lg">
        <CardHeader className="text-lg sm:text-xl font-semibold flex items-center space-x-2 text-gray-800">
          {modules[currentModule].icon}
          <span>{modules[currentModule].title}</span>
        </CardHeader>
        <CardContent className="text-gray-700">
          <p className="text-muted-foreground">{modules[currentModule].content}</p>
        </CardContent>
      </Card>

      {/* Navigation buttons */}
      <div className="flex justify-between mb-4 sm:mb-6">
        <Button onClick={prevModule} disabled={currentModule === 0} className="bg-primary hover:bg-primary-dark text-white rounded-lg py-2 px-4 transition-all duration-200 disabled:opacity-50">
          Previous
        </Button>
        <Button onClick={nextModule} disabled={currentModule === modules.length - 1} className="bg-primary hover:bg-primary-dark text-white rounded-lg py-2 px-4 transition-all duration-200 disabled:opacity-50">
          Next
        </Button>
      </div>

      {/* Progress card */}
      <Card className="shadow-lg rounded-lg">
        <CardHeader className="text-lg font-semibold text-gray-800">{t("yourProgress")}</CardHeader>
        <CardContent className="text-gray-700">
          <Progress value={progress} className="mb-2 bg-gray-200" />
          <p className="text-muted-foreground">{t("completed", { currentModule: currentModule + 1, totalModules: modules.length })}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
