
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/sonner';

type UserFormData = {
  degree: string;
  year: string;
  interest: string;
};

const UserForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserFormData>({
    degree: '',
    year: '',
    interest: '',
  });

  const handleChange = (field: keyof UserFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.degree || !formData.year || !formData.interest) {
      toast("Please fill all the fields", {
        description: "All fields are required to generate your personalized roadmap.",
      });
      return;
    }
    
    // Store data in localStorage for now
    localStorage.setItem('internRouteUserData', JSON.stringify(formData));
    
    // Show success message
    toast("Information submitted successfully!", {
      description: "Generating your personalized roadmap...",
    });
    
    // Redirect to roadmap page
    // In a real app, we might call an API here first
    setTimeout(() => navigate('/roadmap'), 1500);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Card className="shadow-lg border-t-4 border-t-intern-purple">
        <CardHeader>
          <CardTitle className="text-2xl">Create Your Personalized Roadmap</CardTitle>
          <CardDescription>
            Fill out the form below to get a tailored learning path and internship recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="degree">Degree Program</Label>
              <Select onValueChange={(value) => handleChange('degree', value)}>
                <SelectTrigger id="degree">
                  <SelectValue placeholder="Select your degree" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="btech">B.Tech</SelectItem>
                  <SelectItem value="be">B.E</SelectItem>
                  <SelectItem value="bsc">B.Sc (Computer Science)</SelectItem>
                  <SelectItem value="bca">BCA</SelectItem>
                  <SelectItem value="mca">MCA</SelectItem>
                  <SelectItem value="mtech">M.Tech</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="year">Current Year</Label>
              <Select onValueChange={(value) => handleChange('year', value)}>
                <SelectTrigger id="year">
                  <SelectValue placeholder="Select your year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1st Year</SelectItem>
                  <SelectItem value="2">2nd Year</SelectItem>
                  <SelectItem value="3">3rd Year</SelectItem>
                  <SelectItem value="4">4th Year</SelectItem>
                  <SelectItem value="5">5th Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-3">
              <Label>Area of Interest</Label>
              <RadioGroup onValueChange={(value) => handleChange('interest', value)} className="grid grid-cols-2 gap-4">
                <div>
                  <RadioGroupItem value="webdev" id="webdev" className="peer sr-only" />
                  <Label
                    htmlFor="webdev"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-intern-purple-light peer-data-[state=checked]:border-intern-purple [&:has([data-state=checked])]:border-intern-purple"
                  >
                    <div className="mb-3 rounded-full bg-intern-purple-light p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-intern-purple"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                    </div>
                    <div className="text-center">Web Dev</div>
                  </Label>
                </div>
                
                <div>
                  <RadioGroupItem value="ai" id="ai" className="peer sr-only" />
                  <Label
                    htmlFor="ai"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-intern-purple-light peer-data-[state=checked]:border-intern-purple [&:has([data-state=checked])]:border-intern-purple"
                  >
                    <div className="mb-3 rounded-full bg-intern-purple-light p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-intern-purple"><path d="M12 2v8"></path><path d="m4.93 10.93 1.41 1.41"></path><path d="M2 18h2"></path><path d="M20 18h2"></path><path d="m19.07 10.93-1.41 1.41"></path><path d="M22 22H2"></path><path d="M16 6 8 14"></path><path d="m16 14-2 2-6-6 2-2"></path></svg>
                    </div>
                    <div className="text-center">AI/ML</div>
                  </Label>
                </div>
                
                <div>
                  <RadioGroupItem value="mobile" id="mobile" className="peer sr-only" />
                  <Label
                    htmlFor="mobile"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-intern-purple-light peer-data-[state=checked]:border-intern-purple [&:has([data-state=checked])]:border-intern-purple"
                  >
                    <div className="mb-3 rounded-full bg-intern-purple-light p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-intern-purple"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
                    </div>
                    <div className="text-center">Mobile Dev</div>
                  </Label>
                </div>
                
                <div>
                  <RadioGroupItem value="backend" id="backend" className="peer sr-only" />
                  <Label
                    htmlFor="backend"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-intern-purple-light peer-data-[state=checked]:border-intern-purple [&:has([data-state=checked])]:border-intern-purple"
                  >
                    <div className="mb-3 rounded-full bg-intern-purple-light p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-intern-purple"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
                    </div>
                    <div className="text-center">Backend</div>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            onClick={handleSubmit}
            className="w-full bg-intern-purple hover:bg-intern-purple-dark"
          >
            Generate My Roadmap
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserForm;
