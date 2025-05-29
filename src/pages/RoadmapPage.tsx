import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, BookOpen, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';

type RoadmapItem = {
  id: string;
  title: string;
  description: string;
  resources: { title: string; url: string; type: 'video' | 'article' | 'tutorial' }[];
  timeEstimate: string;
  completed: boolean;
};

type Roadmap = {
  title: string;
  description: string;
  steps: RoadmapItem[];
};

const webDevRoadmap: Roadmap = {
  title: "Web Development Roadmap",
  description: "A comprehensive learning path for becoming a web developer",
  steps: [
    {
      id: "html-css",
      title: "HTML & CSS Foundations",
      description: "Learn the basics of HTML structure and CSS styling",
      timeEstimate: "2-3 weeks",
      resources: [
        { 
          title: "HTML Crash Course", 
          url: "https://www.youtube.com/watch?v=UB1O30fR-EE", 
          type: "video" 
        },
        { 
          title: "CSS Fundamentals", 
          url: "https://www.w3schools.com/css/", 
          type: "tutorial" 
        }
      ],
      completed: false
    },
    {
      id: "javascript",
      title: "JavaScript Basics",
      description: "Master the fundamentals of JavaScript programming",
      timeEstimate: "4-6 weeks",
      resources: [
        { 
          title: "JavaScript for Beginners", 
          url: "https://www.javascript.com/learn", 
          type: "tutorial" 
        },
        { 
          title: "JavaScript Crash Course", 
          url: "https://www.youtube.com/watch?v=hdI2bqOjy3c", 
          type: "video" 
        }
      ],
      completed: false
    },
    {
      id: "react",
      title: "React Framework",
      description: "Learn component-based UI development with React",
      timeEstimate: "6-8 weeks",
      resources: [
        { 
          title: "React Documentation", 
          url: "https://react.dev/learn", 
          type: "article" 
        },
        { 
          title: "Full React Tutorial", 
          url: "https://www.youtube.com/watch?v=j942wKiXFu8", 
          type: "video" 
        }
      ],
      completed: false
    },
    {
      id: "backend",
      title: "Backend Development",
      description: "Build server-side applications with Node.js and Express",
      timeEstimate: "6-8 weeks",
      resources: [
        { 
          title: "Node.js Crash Course", 
          url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4", 
          type: "video" 
        },
        { 
          title: "Express.js Guide", 
          url: "https://expressjs.com/en/guide/routing.html", 
          type: "article" 
        }
      ],
      completed: false
    },
    {
      id: "projects",
      title: "Portfolio Projects",
      description: "Build real-world projects to showcase your skills",
      timeEstimate: "8-10 weeks",
      resources: [
        { 
          title: "10 Web Dev Project Ideas", 
          url: "https://www.freecodecamp.org/news/how-to-build-a-portfolio-website/", 
          type: "article" 
        },
        { 
          title: "Full Stack Project Tutorial", 
          url: "https://www.youtube.com/watch?v=7CqJlxBYj-M", 
          type: "video" 
        }
      ],
      completed: false
    }
  ]
};

const aiRoadmap: Roadmap = {
  title: "AI/ML Development Roadmap",
  description: "A structured learning path for AI and Machine Learning",
  steps: [
    {
      id: "python",
      title: "Python Programming",
      description: "Master Python programming language fundamentals",
      timeEstimate: "4-5 weeks",
      resources: [
        { 
          title: "Python for Everybody", 
          url: "https://www.py4e.com/", 
          type: "tutorial" 
        },
        { 
          title: "Python Crash Course", 
          url: "https://www.youtube.com/watch?v=JJmcL1N2KQs", 
          type: "video" 
        }
      ],
      completed: false
    },
    {
      id: "data-analysis",
      title: "Data Analysis",
      description: "Learn data manipulation with NumPy, Pandas and visualization",
      timeEstimate: "5-6 weeks",
      resources: [
        { 
          title: "Data Analysis with Python", 
          url: "https://www.youtube.com/watch?v=r-uOLxNrNk8", 
          type: "video" 
        },
        { 
          title: "Pandas Documentation", 
          url: "https://pandas.pydata.org/docs/", 
          type: "article" 
        }
      ],
      completed: false
    },
    {
      id: "ml-basics",
      title: "ML Fundamentals",
      description: "Understand core ML concepts and algorithms",
      timeEstimate: "8-10 weeks",
      resources: [
        { 
          title: "Machine Learning Crash Course", 
          url: "https://developers.google.com/machine-learning/crash-course", 
          type: "tutorial" 
        },
        { 
          title: "ML Zero to Hero", 
          url: "https://www.youtube.com/watch?v=VwVg9jCtqaU", 
          type: "video" 
        }
      ],
      completed: false
    },
    {
      id: "deep-learning",
      title: "Deep Learning",
      description: "Learn neural networks with TensorFlow/PyTorch",
      timeEstimate: "10-12 weeks",
      resources: [
        { 
          title: "Deep Learning Specialization", 
          url: "https://www.coursera.org/specializations/deep-learning", 
          type: "tutorial" 
        },
        { 
          title: "PyTorch Tutorial", 
          url: "https://pytorch.org/tutorials/", 
          type: "article" 
        }
      ],
      completed: false
    },
    {
      id: "ai-projects",
      title: "AI Projects",
      description: "Build practical AI applications for your portfolio",
      timeEstimate: "8-10 weeks",
      resources: [
        { 
          title: "Kaggle Competitions", 
          url: "https://www.kaggle.com/competitions", 
          type: "tutorial" 
        },
        { 
          title: "AI Project Ideas", 
          url: "https://github.com/topics/ai-projects", 
          type: "article" 
        }
      ],
      completed: false
    }
  ]
};

const mobileRoadmap: Roadmap = {
  title: "Mobile Development Roadmap",
  description: "A guide to becoming a mobile app developer",
  steps: [
    {
      id: "programming-basics",
      title: "Programming Fundamentals",
      description: "Learn programming basics with JavaScript/Java/Swift",
      timeEstimate: "4-6 weeks",
      resources: [
        { 
          title: "JavaScript for Mobile", 
          url: "https://www.youtube.com/watch?v=DLX62G4lc44", 
          type: "video" 
        },
        { 
          title: "Mobile Dev Foundations", 
          url: "https://www.codecademy.com/learn/paths/mobile-development", 
          type: "tutorial" 
        }
      ],
      completed: false
    },
    {
      id: "react-native",
      title: "React Native",
      description: "Build cross-platform mobile apps with React Native",
      timeEstimate: "8-10 weeks",
      resources: [
        { 
          title: "React Native Documentation", 
          url: "https://reactnative.dev/docs/getting-started", 
          type: "article" 
        },
        { 
          title: "React Native Crash Course", 
          url: "https://www.youtube.com/watch?v=Hf4MJH0jDb4", 
          type: "video" 
        }
      ],
      completed: false
    },
    {
      id: "mobile-ui",
      title: "Mobile UI/UX Design",
      description: "Learn mobile interface design principles",
      timeEstimate: "4-5 weeks",
      resources: [
        { 
          title: "Mobile UI Design Course", 
          url: "https://www.udemy.com/course/ui-design/", 
          type: "tutorial" 
        },
        { 
          title: "Mobile Design Guidelines", 
          url: "https://material.io/design/guidelines-overview", 
          type: "article" 
        }
      ],
      completed: false
    },
    {
      id: "native-features",
      title: "Device Features & APIs",
      description: "Implement native device features and APIs",
      timeEstimate: "6-8 weeks",
      resources: [
        { 
          title: "Working with Device APIs", 
          url: "https://reactnative.dev/docs/native-modules-intro", 
          type: "article" 
        },
        { 
          title: "Camera & Location Tutorial", 
          url: "https://www.youtube.com/watch?v=q7ld1DFDb8A", 
          type: "video" 
        }
      ],
      completed: false
    },
    {
      id: "mobile-projects",
      title: "Mobile App Projects",
      description: "Build complete mobile applications for your portfolio",
      timeEstimate: "8-12 weeks",
      resources: [
        { 
          title: "10 App Project Ideas", 
          url: "https://blog.bitsrc.io/10-react-native-project-ideas-for-beginners-15bebe156fab", 
          type: "article" 
        },
        { 
          title: "Full App Development Tutorial", 
          url: "https://www.youtube.com/watch?v=0-S5a0eXPoc", 
          type: "video" 
        }
      ],
      completed: false
    }
  ]
};

const backendRoadmap: Roadmap = {
  title: "Backend Development Roadmap",
  description: "A comprehensive path to becoming a backend developer",
  steps: [
    {
      id: "programming-lang",
      title: "Programming Language",
      description: "Master a backend language (Node.js, Python, Java)",
      timeEstimate: "6-8 weeks",
      resources: [
        { 
          title: "Node.js Beginner's Guide", 
          url: "https://nodejs.dev/en/learn/", 
          type: "tutorial" 
        },
        { 
          title: "Python Backend Development", 
          url: "https://www.youtube.com/watch?v=jBzwzrDvZ18", 
          type: "video" 
        }
      ],
      completed: false
    },
    {
      id: "databases",
      title: "Databases",
      description: "Learn SQL and NoSQL database management",
      timeEstimate: "5-7 weeks",
      resources: [
        { 
          title: "SQL Tutorial", 
          url: "https://www.w3schools.com/sql/", 
          type: "tutorial" 
        },
        { 
          title: "MongoDB Crash Course", 
          url: "https://www.youtube.com/watch?v=-56x56UppqQ", 
          type: "video" 
        }
      ],
      completed: false
    },
    {
      id: "apis",
      title: "API Development",
      description: "Create RESTful and GraphQL APIs",
      timeEstimate: "6-8 weeks",
      resources: [
        { 
          title: "REST API Tutorial", 
          url: "https://restfulapi.net/", 
          type: "article" 
        },
        { 
          title: "Building APIs with Node.js", 
          url: "https://www.youtube.com/watch?v=L72fhGm1tfE", 
          type: "video" 
        }
      ],
      completed: false
    },
    {
      id: "auth-security",
      title: "Authentication & Security",
      description: "Implement user authentication and security best practices",
      timeEstimate: "4-6 weeks",
      resources: [
        { 
          title: "Web Security Guide", 
          url: "https://owasp.org/www-project-top-ten/", 
          type: "article" 
        },
        { 
          title: "JWT Authentication Tutorial", 
          url: "https://www.youtube.com/watch?v=7Q17ubqLfaM", 
          type: "video" 
        }
      ],
      completed: false
    },
    {
      id: "backend-projects",
      title: "Backend Projects",
      description: "Build full backend systems and APIs",
      timeEstimate: "8-10 weeks",
      resources: [
        { 
          title: "Backend Project Ideas", 
          url: "https://github.com/florinpop17/app-ideas", 
          type: "article" 
        },
        { 
          title: "Full Stack MERN Project", 
          url: "https://www.youtube.com/watch?v=ngc9gnGgUdA", 
          type: "video" 
        }
      ],
      completed: false
    }
  ]
};

const getRoadmapByInterest = (interest: string): Roadmap => {
  switch (interest) {
    case 'webdev':
      return webDevRoadmap;
    case 'ai':
      return aiRoadmap;
    case 'mobile':
      return mobileRoadmap;
    case 'backend':
      return backendRoadmap;
    default:
      return webDevRoadmap;
  }
};

// Helper function to get year suffix
const getYearSuffix = (year: string): string => {
  if (year === "1") return "st";
  if (year === "2") return "nd";
  if (year === "3") return "rd";
  return "th";
};

const RoadmapPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<{ degree: string; year: string; interest: string } | null>(null);
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
  const [overallProgress, setOverallProgress] = useState(0);
  
  useEffect(() => {
    // Retrieve user data from localStorage
    const storedData = localStorage.getItem('internRouteUserData');
    
    if (!storedData) {
      toast("No user data found", {
        description: "Please select a roadmap to continue",
      });
      setTimeout(() => navigate('/roadmap-selection'), 2000);
      return;
    }
    
    const parsedData = JSON.parse(storedData);
    setUserData(parsedData);
    
    // If interest is not set, redirect to roadmap selection
    if (!parsedData.interest) {
      toast("Please select a roadmap", {
        description: "Choose your area of interest",
      });
      setTimeout(() => navigate('/roadmap-selection'), 2000);
      return;
    }
    
    // Get the appropriate roadmap based on user's interest
    const selectedRoadmap = getRoadmapByInterest(parsedData.interest);
    
    // Check if we have stored progress data
    const progressData = localStorage.getItem('internRouteProgress');
    if (progressData) {
      const parsedProgress = JSON.parse(progressData);
      if (parsedProgress[parsedData.interest]) {
        // Apply stored completion status to steps
        selectedRoadmap.steps = selectedRoadmap.steps.map(step => ({
          ...step,
          completed: parsedProgress[parsedData.interest].includes(step.id)
        }));
      }
    }
    
    setRoadmap(selectedRoadmap);
    
    // Calculate initial progress
    calculateProgress(selectedRoadmap);
  }, [navigate]);
  
  const calculateProgress = (roadmapData: Roadmap) => {
    if (!roadmapData) return;
    
    const completedSteps = roadmapData.steps.filter(step => step.completed).length;
    const totalSteps = roadmapData.steps.length;
    const progress = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;
    
    setOverallProgress(progress);
  };
  
  const toggleStepCompletion = (stepId: string) => {
    if (!roadmap || !userData) return;
    
    const updatedSteps = roadmap.steps.map(step => 
      step.id === stepId ? { ...step, completed: !step.completed } : step
    );
    
    const updatedRoadmap = { ...roadmap, steps: updatedSteps };
    setRoadmap(updatedRoadmap);
    
    // Save progress to localStorage
    const progressData = localStorage.getItem('internRouteProgress') || '{}';
    const parsedProgress = JSON.parse(progressData);
    
    // Get current completed step IDs for this interest
    const completedStepIds = updatedSteps
      .filter(step => step.completed)
      .map(step => step.id);
    
    // Update progress for this interest
    parsedProgress[userData.interest] = completedStepIds;
    
    // Save back to localStorage
    localStorage.setItem('internRouteProgress', JSON.stringify(parsedProgress));
    
    // Recalculate progress percentage
    calculateProgress(updatedRoadmap);
    
    // Show congratulation when completing a step
    const step = roadmap.steps.find(s => s.id === stepId);
    if (!step?.completed) {
      toast("Step completed!", {
        description: `You've completed "${step?.title}". Keep up the great work!`,
      });
    }
  };

  if (!userData || !roadmap) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow pt-20 pb-16 px-4 flex items-center justify-center">
          <p>Loading your personalized roadmap...</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Get the appropriate suffix for the year
  const yearSuffix = getYearSuffix(userData.year);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20 pb-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Your Personalized Learning Roadmap</h1>
            <p className="text-gray-600 mt-2">
              Based on your {userData.degree} degree, {userData.year}{yearSuffix} year, and interest in {roadmap.title.split(" ")[0]}
            </p>
            
            <div className="mt-4 flex justify-end">
              <Button 
                variant="outline" 
                onClick={() => navigate('/roadmap-selection')}
                className="text-intern-purple"
              >
                Change Roadmap
              </Button>
            </div>
            
            <div className="mt-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="mb-2 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                <span className="text-sm font-medium text-intern-purple">{overallProgress}%</span>
              </div>
              <Progress value={overallProgress} className="h-2" indicatorClassName="bg-intern-purple" />
            </div>
          </div>
          
          <div className="space-y-8">
            {roadmap.steps.map((step, index) => (
              <Card 
                key={step.id} 
                className={`border-l-4 ${step.completed ? 'border-l-green-500 bg-green-50' : 'border-l-intern-purple'} hover:shadow-md transition-shadow`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div 
                      className={`mt-1 rounded-full p-2 ${step.completed ? 'bg-green-100 text-green-600' : 'bg-intern-purple-light text-intern-purple'}`}
                      onClick={() => toggleStepCompletion(step.id)}
                    >
                      {step.completed ? (
                        <CheckCircle className="h-6 w-6 cursor-pointer" />
                      ) : (
                        <div className="h-6 w-6 rounded-full border-2 border-current cursor-pointer" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold">
                            <span className="text-gray-500 mr-2">Step {index + 1}:</span> {step.title}
                          </h3>
                          <p className="text-gray-600 mt-1">{step.description}</p>
                        </div>
                        <Badge variant="outline" className="bg-intern-purple-light text-intern-purple border-none">
                          {step.timeEstimate}
                        </Badge>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="text-sm font-medium flex items-center gap-1 mb-2">
                          <BookOpen className="h-4 w-4" />
                          <span>Learning Resources</span>
                        </h4>
                        <div className="grid gap-2">
                          {step.resources.map((resource, i) => (
                            <a 
                              key={i}
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-intern-purple hover:text-intern-purple-dark transition-colors"
                            >
                              <ArrowRight className="h-3 w-3" />
                              {resource.title}
                              <Badge variant="outline" className="ml-1 text-xs bg-white">
                                {resource.type}
                              </Badge>
                            </a>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 flex justify-end">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => toggleStepCompletion(step.id)}
                          className={step.completed ? 'bg-green-50 text-green-700 hover:bg-green-100 border-green-200' : ''}
                        >
                          {step.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 flex justify-end">
            <Button 
              onClick={() => navigate('/internships')}
              className="bg-intern-purple hover:bg-intern-purple-dark"
            >
              View Related Internships
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RoadmapPage;
