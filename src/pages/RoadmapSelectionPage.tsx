
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const RoadmapSelectionPage = () => {
  const navigate = useNavigate();
  
  // Function to set interest in localStorage and navigate to form
  const selectRoadmap = (interest: string) => {
    // Get existing data or create new object
    const userData = JSON.parse(localStorage.getItem('internRouteUserData') || '{}');
    
    // Update interest
    userData.interest = interest;
    
    // Save back to localStorage
    localStorage.setItem('internRouteUserData', JSON.stringify(userData));
    
    // Navigate to form page to complete other details if they don't exist
    if (!userData.degree || !userData.year) {
      navigate('/form');
    } else {
      // If user data is complete, go directly to roadmap
      navigate('/roadmap');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900">Choose Your Learning Path</h1>
            <p className="text-gray-600 mt-2">
              Select a roadmap below to get started with your tech learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Web Development */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-intern-purple">
              <CardHeader>
                <CardTitle className="text-xl">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-full bg-intern-purple-light p-2 w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-intern-purple">
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                </div>
                <p className="text-gray-600">Learn frontend and backend skills to build responsive websites and web applications.</p>
                <ul className="mt-4 space-y-1 text-sm text-gray-600">
                  <li>• HTML, CSS, JavaScript</li>
                  <li>• Frontend frameworks like React</li>
                  <li>• Backend development</li>
                  <li>• Database integration</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => selectRoadmap('webdev')} 
                  className="w-full bg-intern-purple hover:bg-intern-purple-dark"
                >
                  Select Web Development
                </Button>
              </CardFooter>
            </Card>
            
            {/* AI/ML */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-intern-purple">
              <CardHeader>
                <CardTitle className="text-xl">AI & Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-full bg-intern-purple-light p-2 w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-intern-purple">
                    <path d="M12 2v8"></path>
                    <path d="m4.93 10.93 1.41 1.41"></path>
                    <path d="M2 18h2"></path>
                    <path d="M20 18h2"></path>
                    <path d="m19.07 10.93-1.41 1.41"></path>
                    <path d="M22 22H2"></path>
                    <path d="M16 6 8 14"></path>
                    <path d="m16 14-2 2-6-6 2-2"></path>
                  </svg>
                </div>
                <p className="text-gray-600">Dive into artificial intelligence and machine learning with a focus on practical applications.</p>
                <ul className="mt-4 space-y-1 text-sm text-gray-600">
                  <li>• Python programming</li>
                  <li>• Data analysis</li>
                  <li>• Machine learning algorithms</li>
                  <li>• Deep learning</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => selectRoadmap('ai')} 
                  className="w-full bg-intern-purple hover:bg-intern-purple-dark"
                >
                  Select AI/ML
                </Button>
              </CardFooter>
            </Card>
            
            {/* Mobile Development */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-intern-purple">
              <CardHeader>
                <CardTitle className="text-xl">Mobile Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-full bg-intern-purple-light p-2 w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-intern-purple">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                </div>
                <p className="text-gray-600">Build applications for iOS and Android platforms using modern frameworks.</p>
                <ul className="mt-4 space-y-1 text-sm text-gray-600">
                  <li>• Mobile UI/UX design</li>
                  <li>• React Native</li>
                  <li>• Native device features</li>
                  <li>• App publishing</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => selectRoadmap('mobile')} 
                  className="w-full bg-intern-purple hover:bg-intern-purple-dark"
                >
                  Select Mobile Development
                </Button>
              </CardFooter>
            </Card>
            
            {/* Backend Development */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-intern-purple">
              <CardHeader>
                <CardTitle className="text-xl">Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-full bg-intern-purple-light p-2 w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-intern-purple">
                    <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                    <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                    <line x1="6" x2="6.01" y1="6" y2="6"></line>
                    <line x1="6" x2="6.01" y1="18" y2="18"></line>
                  </svg>
                </div>
                <p className="text-gray-600">Develop server-side applications, APIs, and database systems.</p>
                <ul className="mt-4 space-y-1 text-sm text-gray-600">
                  <li>• Server programming</li>
                  <li>• Database management</li>
                  <li>• API development</li>
                  <li>• Authentication & security</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => selectRoadmap('backend')} 
                  className="w-full bg-intern-purple hover:bg-intern-purple-dark"
                >
                  Select Backend Development
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RoadmapSelectionPage;
