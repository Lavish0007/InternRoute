
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarCheck, BookOpen } from 'lucide-react';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl?: string;
};

// Mock blog data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Web Development as a College Student',
    excerpt: 'Learn the essential steps to begin your journey in web development while still in college.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Priya Sharma',
    publishDate: '2025-05-10',
    readTime: '5 min',
    category: 'Web Development',
    tags: ['HTML', 'CSS', 'JavaScript', 'Beginners'],
    imageUrl: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=800'
  },
  {
    id: '2',
    title: 'How to Prepare for Technical Interviews',
    excerpt: 'A comprehensive guide to ace your technical interviews and land your dream internship.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Rahul Verma',
    publishDate: '2025-05-08',
    readTime: '8 min',
    category: 'Career',
    tags: ['Interview', 'Data Structures', 'Algorithms'],
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800'
  },
  {
    id: '3',
    title: 'Introduction to Machine Learning for Students',
    excerpt: 'Discover the fundamentals of machine learning and how to start building your first models.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Amit Singh',
    publishDate: '2025-05-05',
    readTime: '10 min',
    category: 'AI/ML',
    tags: ['Python', 'Machine Learning', 'Data Science'],
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800'
  },
  {
    id: '4',
    title: 'Building Your First Mobile App with React Native',
    excerpt: 'Step-by-step guide to create your first cross-platform mobile application.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Neha Gupta',
    publishDate: '2025-05-01',
    readTime: '7 min',
    category: 'Mobile Development',
    tags: ['React Native', 'JavaScript', 'Mobile'],
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800'
  },
  {
    id: '5',
    title: 'Securing Your First Backend Developer Internship',
    excerpt: 'Practical tips to help you land and succeed in your first backend development internship.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Vikram Kapoor',
    publishDate: '2025-04-28',
    readTime: '6 min',
    category: 'Backend',
    tags: ['Node.js', 'Express', 'MongoDB', 'Career'],
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800'
  },
  {
    id: '6',
    title: 'Portfolio Projects That Will Impress Recruiters',
    excerpt: 'Learn about the types of projects that will make your resume stand out from the crowd.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Ananya Patel',
    publishDate: '2025-04-25',
    readTime: '8 min',
    category: 'Career',
    tags: ['Portfolio', 'Projects', 'GitHub'],
    imageUrl: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=800'
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">InternRoute Blog</h1>
            <p className="text-gray-600 text-center mb-6">
              Insights, tips, and resources to help you navigate your tech career journey
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                  {post.imageUrl && (
                    <div className="h-48 w-full overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <CardHeader className="pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-intern-purple-light text-intern-purple border-none">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-gray-500 text-sm">
                        <CalendarCheck className="h-3.5 w-3.5 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 line-clamp-2 hover:text-intern-purple">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center mt-3 text-sm text-gray-500">
                      <BookOpen className="h-3.5 w-3.5 mr-1" />
                      <span>{post.readTime} read</span>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0 mt-auto">
                    <Button className="w-full bg-intern-purple hover:bg-intern-purple-dark">
                      Read Article
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
