
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-gradient text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 rounded-b-3xl">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
          Your Personalized Path to Tech Internships
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          InternRoute helps students get internship-ready with a personalized roadmap, curated resources, and real-time listings.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-white text-intern-purple hover:bg-gray-100"
            onClick={() => navigate('/roadmap-selection')}
          >
            Create My Roadmap
          </Button>
          <Button 
            size="lg" 
            className="bg-white text-intern-purple hover:bg-gray-100 border-white"
            onClick={() => navigate('/internships')}
          >
            Browse Internships
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
