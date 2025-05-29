
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { CalendarCheck, Building, MapPin } from 'lucide-react';

type Internship = {
  id: string;
  title: string;
  company: string;
  location: string;
  stipend: string;
  duration: string;
  tags: string[];
  applyUrl: string;
  postedDate: string;
  isRemote: boolean;
  description: string;
};

// Mock internship data
const internships: Internship[] = [
  {
    id: '1',
    title: 'Frontend Developer Intern',
    company: 'TechCorp Solutions',
    location: 'Bangalore, India',
    stipend: '₹15,000/month',
    duration: '3 months',
    tags: ['React', 'JavaScript', 'CSS', 'Web Development'],
    applyUrl: 'https://example.com/apply',
    postedDate: '2025-04-25',
    isRemote: false,
    description: 'Join our team to build modern web applications using React and related technologies. You will work on real client projects under the guidance of senior developers.'
  },
  {
    id: '2',
    title: 'Machine Learning Intern',
    company: 'DataMinds AI',
    location: 'Remote',
    stipend: '₹20,000/month',
    duration: '6 months',
    tags: ['Python', 'TensorFlow', 'Data Science', 'AI/ML'],
    applyUrl: 'https://example.com/apply',
    postedDate: '2025-05-02',
    isRemote: true,
    description: 'Work on cutting-edge ML projects and help build intelligent systems. You will gain experience with data processing, model training, and deployment of machine learning models.'
  },
  {
    id: '3',
    title: 'Android Developer Intern',
    company: 'MobileFirst Apps',
    location: 'Pune, India',
    stipend: '₹12,000/month',
    duration: '4 months',
    tags: ['Java', 'Kotlin', 'Android Studio', 'Mobile Development'],
    applyUrl: 'https://example.com/apply',
    postedDate: '2025-04-29',
    isRemote: false,
    description: 'Develop Android applications and gain hands-on experience in the mobile development lifecycle. You will work with senior developers to build features for our consumer apps.'
  },
  {
    id: '4',
    title: 'Backend Developer Intern',
    company: 'ServerStack',
    location: 'Remote',
    stipend: '₹18,000/month',
    duration: '3 months',
    tags: ['Node.js', 'Express', 'MongoDB', 'API Development'],
    applyUrl: 'https://example.com/apply',
    postedDate: '2025-05-05',
    isRemote: true,
    description: 'Build robust backend systems and RESTful APIs. You will work on database design, authentication systems, and implementing business logic in a Node.js environment.'
  },
  {
    id: '5',
    title: 'Data Science Intern',
    company: 'AnalyticsPro',
    location: 'Hyderabad, India',
    stipend: '₹25,000/month',
    duration: '6 months',
    tags: ['Python', 'SQL', 'Data Analysis', 'Pandas', 'AI/ML'],
    applyUrl: 'https://example.com/apply',
    postedDate: '2025-04-20',
    isRemote: false,
    description: 'Help our team analyze large datasets and extract meaningful insights. You will learn data visualization, statistical analysis, and predictive modeling techniques.'
  },
  {
    id: '6',
    title: 'Full Stack Developer Intern',
    company: 'WebSolutions Inc',
    location: 'Chennai, India',
    stipend: '₹22,000/month',
    duration: '4 months',
    tags: ['React', 'Node.js', 'MongoDB', 'Web Development'],
    applyUrl: 'https://example.com/apply',
    postedDate: '2025-05-10',
    isRemote: false,
    description: 'Work across the full web stack to build complete applications. You will gain experience with React frontends, Node.js backends, and database design and implementation.'
  },
  {
    id: '7',
    title: 'DevOps Intern',
    company: 'CloudNative Systems',
    location: 'Remote',
    stipend: '₹20,000/month',
    duration: '5 months',
    tags: ['AWS', 'Docker', 'CI/CD', 'Linux'],
    applyUrl: 'https://example.com/apply',
    postedDate: '2025-05-08',
    isRemote: true,
    description: 'Learn modern DevOps practices and help automate our development pipeline. You will work with containerization, cloud services, and CI/CD workflows.'
  },
  {
    id: '8',
    title: 'UI/UX Design Intern',
    company: 'DesignLab',
    location: 'Mumbai, India',
    stipend: '₹15,000/month',
    duration: '3 months',
    tags: ['Figma', 'UI Design', 'User Research', 'Prototyping'],
    applyUrl: 'https://example.com/apply',
    postedDate: '2025-04-22',
    isRemote: false,
    description: 'Create beautiful and intuitive user interfaces for web and mobile applications. You will collaborate with developers and product managers to bring designs to life.'
  }
];

const InternshipsPage = () => {
  const [filteredInternships, setFilteredInternships] = useState<Internship[]>(internships);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState<'all' | 'remote' | 'onsite'>('all');
  const [categoryFilter, setcategoryFilter] = useState('all');
  const [userData, setUserData] = useState<{ interest: string } | null>(null);

  useEffect(() => {
    // Retrieve user data from localStorage to suggest relevant internships
    const storedData = localStorage.getItem('internRouteUserData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }

    // Filter based on current filters
    applyFilters();
  }, []);

  const applyFilters = () => {
    let results = [...internships];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        internship =>
          internship.title.toLowerCase().includes(query) ||
          internship.company.toLowerCase().includes(query) ||
          internship.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Apply location filter
    if (locationFilter !== 'all') {
      results = results.filter(internship => 
        locationFilter === 'remote' ? internship.isRemote : !internship.isRemote
      );
    }

    // Apply category/tag filter
    if (categoryFilter !== 'all') {
      results = results.filter(internship =>
        internship.tags.some(tag => tag.toLowerCase().includes(categoryFilter.toLowerCase()))
      );
    }

    setFilteredInternships(results);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setTimeout(applyFilters, 300);
  };

  // Handle location filter change
  const handleLocationFilterChange = (value: 'all' | 'remote' | 'onsite') => {
    setLocationFilter(value);
    setTimeout(applyFilters, 300);
  };

  // Handle category filter change
  const handleCategoryFilterChange = (value: string) => {
    setcategoryFilter(value);
    setTimeout(applyFilters, 300);
  };

  // Get recommended category based on user interest
  const getRecommendedCategory = () => {
    if (!userData) return 'all';
    
    switch (userData.interest) {
      case 'webdev':
        return 'Web Development';
      case 'ai':
        return 'AI/ML';
      case 'mobile':
        return 'Mobile Development';
      case 'backend':
        return 'API Development';
      default:
        return 'all';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Internship Opportunities</h1>
            <p className="text-gray-600 mt-2 mb-6">
              Find the perfect internship to kickstart your tech career
            </p>

            {/* Filters and search */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Input 
                    type="text" 
                    placeholder="Search by title, company, or skills..." 
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
                
                <Select 
                  value={locationFilter} 
                  onValueChange={(value: 'all' | 'remote' | 'onsite') => handleLocationFilterChange(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="remote">Remote Only</SelectItem>
                    <SelectItem value="onsite">Onsite Only</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select 
                  value={categoryFilter} 
                  onValueChange={handleCategoryFilterChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="AI/ML">AI/ML</SelectItem>
                    <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                    <SelectItem value="Data">Data Science/Analysis</SelectItem>
                    <SelectItem value="DevOps">DevOps/Cloud</SelectItem>
                    <SelectItem value="UI">UI/UX Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {userData && (
                <div className="mt-4 text-left">
                  <p className="text-sm text-gray-600">
                    Based on your profile: <Button 
                      variant="link" 
                      className="p-0 h-auto text-intern-purple" 
                      onClick={() => {
                        const recommended = getRecommendedCategory();
                        handleCategoryFilterChange(recommended);
                      }}
                    >
                      Show recommended internships
                    </Button>
                  </p>
                </div>
              )}
            </div>
            
            {/* Results count */}
            <p className="text-sm text-left text-gray-600 mb-4">
              Found {filteredInternships.length} internships
            </p>
            
            {/* Internship listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredInternships.map(internship => (
                <Card key={internship.id} className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <h2 className="text-xl font-semibold text-gray-900">{internship.title}</h2>
                      {internship.isRemote ? (
                        <Badge className="bg-green-100 text-green-800 border-none">Remote</Badge>
                      ) : (
                        <Badge className="bg-blue-100 text-blue-800 border-none">Onsite</Badge>
                      )}
                    </div>
                    
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Building className="h-4 w-4 mr-2" />
                        <span>{internship.company}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{internship.location}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <CalendarCheck className="h-4 w-4 mr-2" />
                        <span>{internship.duration} • {internship.stipend}</span>
                      </div>
                    </div>
                    
                    <p className="mt-4 text-gray-600 line-clamp-2">{internship.description}</p>
                    
                    <div className="mt-4 space-x-2 space-y-2">
                      {internship.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="bg-intern-purple-light text-intern-purple border-none">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="bg-gray-50 px-6 py-3 flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Posted: {new Date(internship.postedDate).toLocaleDateString()}
                    </span>
                    
                    <Button asChild className="bg-intern-purple hover:bg-intern-purple-dark">
                      <a href={internship.applyUrl} target="_blank" rel="noopener noreferrer">
                        Apply Now
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {/* Empty state */}
            {filteredInternships.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-2">No internships match your filters</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('');
                    setLocationFilter('all');
                    setcategoryFilter('all');
                    setFilteredInternships(internships);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InternshipsPage;
