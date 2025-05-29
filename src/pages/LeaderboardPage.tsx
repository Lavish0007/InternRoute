
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Award, Star, Calendar } from 'lucide-react';

type LeaderboardUser = {
  id: string;
  name: string;
  avatar: string;
  degree: string;
  year: string;
  progress: number;
  badges: string[];
  streak: number;
  joinedDate: string;
  rank: number;
};

const mockLeaderboardData: LeaderboardUser[] = [
  {
    id: '1',
    name: 'Ananya Sharma',
    avatar: 'AS',
    degree: 'B.Tech',
    year: '3',
    progress: 92,
    badges: ['Coding Expert', 'Fast Learner', 'Perfect Attendance'],
    streak: 24,
    joinedDate: '2024-12-15',
    rank: 1
  },
  {
    id: '2',
    name: 'Rahul Kumar',
    avatar: 'RK',
    degree: 'BCA',
    year: '2',
    progress: 88,
    badges: ['Project Master', 'Team Player'],
    streak: 19,
    joinedDate: '2025-01-05',
    rank: 2
  },
  {
    id: '3',
    name: 'Priya Patel',
    avatar: 'PP',
    degree: 'B.Sc',
    year: '3',
    progress: 85,
    badges: ['Quick Learner', 'Consistent'],
    streak: 30,
    joinedDate: '2024-12-20',
    rank: 3
  },
  {
    id: '4',
    name: 'Aditya Singh',
    avatar: 'AS',
    degree: 'B.Tech',
    year: '4',
    progress: 82,
    badges: ['Problem Solver', 'Code Guru'],
    streak: 15,
    joinedDate: '2025-01-10',
    rank: 4
  },
  {
    id: '5',
    name: 'Neha Gupta',
    avatar: 'NG',
    degree: 'MCA',
    year: '1',
    progress: 78,
    badges: ['Fast Learner'],
    streak: 12,
    joinedDate: '2025-01-15',
    rank: 5
  },
  {
    id: '6',
    name: 'Vikram Mehra',
    avatar: 'VM',
    degree: 'B.E',
    year: '2',
    progress: 75,
    badges: ['Consistent', 'Team Player'],
    streak: 21,
    joinedDate: '2025-01-03',
    rank: 6
  },
  {
    id: '7',
    name: 'Deepika Reddy',
    avatar: 'DR',
    degree: 'B.Tech',
    year: '3',
    progress: 72,
    badges: ['Project Master'],
    streak: 17,
    joinedDate: '2024-12-28',
    rank: 7
  },
  {
    id: '8',
    name: 'Mohammad Ali',
    avatar: 'MA',
    degree: 'B.Sc',
    year: '3',
    progress: 70,
    badges: ['Quick Learner'],
    streak: 14,
    joinedDate: '2025-01-02',
    rank: 8
  },
  {
    id: '9',
    name: 'Anjali Desai',
    avatar: 'AD',
    degree: 'BCA',
    year: '2',
    progress: 68,
    badges: ['Code Guru'],
    streak: 11,
    joinedDate: '2025-01-12',
    rank: 9
  },
  {
    id: '10',
    name: 'Raj Malhotra',
    avatar: 'RM',
    degree: 'B.E',
    year: '4',
    progress: 65,
    badges: ['Problem Solver'],
    streak: 9,
    joinedDate: '2025-01-20',
    rank: 10
  }
];

const LeaderboardPage = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>(mockLeaderboardData);
  const [currentUser, setCurrentUser] = useState<LeaderboardUser | null>(null);
  const [filter, setFilter] = useState<'all' | 'week' | 'month'>('all');
  
  useEffect(() => {
    // Calculate current user's stats (if we had real user auth)
    // This is a mock implementation - in a real app this would use actual user data
    const userData = localStorage.getItem('internRouteUserData');
    const progressData = localStorage.getItem('internRouteProgress');
    
    if (userData && progressData) {
      const user = JSON.parse(userData);
      const progress = JSON.parse(progressData);
      
      // Calculate user's progress if they have any
      let userProgress = 0;
      if (progress && progress[user.interest]) {
        // Assuming each roadmap has 5 steps total
        userProgress = Math.round((progress[user.interest].length / 5) * 100);
      }
      
      // Create a mock user entry for the current user
      const mockCurrentUser: LeaderboardUser = {
        id: 'current',
        name: 'You',
        avatar: 'YO',
        degree: user.degree || 'B.Tech',
        year: user.year || '2',
        progress: userProgress,
        badges: userProgress > 50 ? ['Fast Learner'] : [],
        streak: Math.floor(Math.random() * 10) + 1, // Random streak between 1-10
        joinedDate: new Date().toISOString().split('T')[0],
        rank: 0 // Will calculate below
      };
      
      // Insert user into leaderboard based on progress
      const updatedLeaderboard = [...mockLeaderboardData];
      
      // Find where user ranks
      const userRank = updatedLeaderboard.findIndex(u => u.progress <= mockCurrentUser.progress);
      if (userRank >= 0) {
        mockCurrentUser.rank = userRank + 1;
        
        // Update ranks for users below current user
        for (let i = userRank; i < updatedLeaderboard.length; i++) {
          updatedLeaderboard[i].rank = i + 2;
        }
        
        // Insert user at the right position
        updatedLeaderboard.splice(userRank, 0, mockCurrentUser);
      } else {
        // User is last
        mockCurrentUser.rank = updatedLeaderboard.length + 1;
        updatedLeaderboard.push(mockCurrentUser);
      }
      
      setLeaderboard(updatedLeaderboard);
      setCurrentUser(mockCurrentUser);
    }
    
    // Apply filter
    applyFilter(filter);
  }, [filter]);
  
  const applyFilter = (selectedFilter: 'all' | 'week' | 'month') => {
    let filteredData = [...mockLeaderboardData];
    
    if (selectedFilter === 'week') {
      // Simulate filtering for weekly leaderboard
      // In a real app, this would filter based on actual weekly data
      filteredData = filteredData
        .map(user => ({...user, progress: Math.floor(user.progress * 0.7 + Math.random() * 30)}))
        .sort((a, b) => b.progress - a.progress)
        .map((user, i) => ({...user, rank: i + 1}));
    } else if (selectedFilter === 'month') {
      // Simulate filtering for monthly leaderboard
      filteredData = filteredData
        .map(user => ({...user, progress: Math.floor(user.progress * 0.8 + Math.random() * 20)}))
        .sort((a, b) => b.progress - a.progress)
        .map((user, i) => ({...user, rank: i + 1}));
    }
    
    // If we have a current user, insert them in the filtered list too
    if (currentUser) {
      const updatedCurrentUser = {...currentUser};
      if (selectedFilter === 'week') {
        updatedCurrentUser.progress = Math.floor(updatedCurrentUser.progress * 0.7 + Math.random() * 30);
      } else if (selectedFilter === 'month') {
        updatedCurrentUser.progress = Math.floor(updatedCurrentUser.progress * 0.8 + Math.random() * 20);
      }
      
      // Find new rank
      const userRank = filteredData.findIndex(u => u.progress <= updatedCurrentUser.progress);
      if (userRank >= 0) {
        updatedCurrentUser.rank = userRank + 1;
        
        // Update ranks for users below current user
        for (let i = userRank; i < filteredData.length; i++) {
          filteredData[i].rank = i + 2;
        }
        
        // Insert user at the right position
        filteredData.splice(userRank, 0, updatedCurrentUser);
      } else {
        // User is last
        updatedCurrentUser.rank = filteredData.length + 1;
        filteredData.push(updatedCurrentUser);
      }
      
      setCurrentUser(updatedCurrentUser);
    }
    
    setLeaderboard(filteredData);
  };
  
  const getRankClass = (rank: number) => {
    switch(rank) {
      case 1: return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 2: return 'bg-gray-100 text-gray-800 border-gray-300';
      case 3: return 'bg-amber-100 text-amber-800 border-amber-300';
      default: return 'bg-white text-gray-700 border-gray-200';
    }
  };
  
  const getRankIcon = (rank: number) => {
    switch(rank) {
      case 1: return <Trophy className="h-5 w-5 text-yellow-600" />;
      case 2: return <Trophy className="h-5 w-5 text-gray-500" />;
      case 3: return <Trophy className="h-5 w-5 text-amber-600" />;
      default: return <span className="font-medium">{rank}</span>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Leaderboard</h1>
            <p className="text-gray-600 mt-2 mb-6">
              See how you rank against other learners on InternRoute
            </p>
            
            {/* Filter tabs */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium border rounded-l-lg ${
                    filter === 'all' 
                      ? 'bg-intern-purple text-white border-intern-purple'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                  onClick={() => setFilter('all')}
                >
                  All Time
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium border-t border-b border-r ${
                    filter === 'month'
                      ? 'bg-intern-purple text-white border-intern-purple'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                  onClick={() => setFilter('month')}
                >
                  This Month
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium border-t border-b border-r rounded-r-lg ${
                    filter === 'week'
                      ? 'bg-intern-purple text-white border-intern-purple'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                  onClick={() => setFilter('week')}
                >
                  This Week
                </button>
              </div>
            </div>
            
            {/* Top 3 users */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {leaderboard.slice(0, 3).map((user) => (
                <Card 
                  key={user.id} 
                  className={`border-2 ${
                    user.id === 'current' ? 'border-intern-purple bg-intern-purple-light' : ''
                  } ${user.rank === 1 ? 'shadow-lg' : ''}`}
                >
                  <CardHeader className={`rounded-t-md ${
                    user.rank === 1 ? 'bg-yellow-50' : 
                    user.rank === 2 ? 'bg-gray-50' : 'bg-amber-50'
                  }`}>
                    <div className="flex justify-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-semibold ${
                        user.rank === 1 ? 'bg-yellow-200 text-yellow-800' :
                        user.rank === 2 ? 'bg-gray-200 text-gray-800' :
                        'bg-amber-200 text-amber-800'
                      }`}>
                        {user.avatar}
                      </div>
                    </div>
                    <CardTitle className="text-center mt-2">
                      {user.id === 'current' ? 'You' : user.name}
                      {user.id === 'current' && <span className="text-sm ml-2">(You)</span>}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-4">
                    <div className="flex justify-center items-center mb-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        user.rank === 1 ? 'bg-yellow-100' :
                        user.rank === 2 ? 'bg-gray-100' :
                        'bg-amber-100'
                      }`}>
                        {user.rank === 1 && <Trophy className="h-6 w-6 text-yellow-600" />}
                        {user.rank === 2 && <Award className="h-6 w-6 text-gray-500" />}
                        {user.rank === 3 && <Award className="h-6 w-6 text-amber-600" />}
                      </div>
                    </div>
                    
                    <p className={`font-semibold ${
                      user.rank === 1 ? 'text-yellow-800' :
                      user.rank === 2 ? 'text-gray-700' :
                      'text-amber-800'
                    }`}>
                      {user.rank === 1 ? '1st Place' : 
                      user.rank === 2 ? '2nd Place' :
                      '3rd Place'}
                    </p>
                    
                    <div className="mt-3">
                      <div className="flex justify-between items-center text-sm mb-1">
                        <span className="font-medium">Progress</span>
                        <span>{user.progress}%</span>
                      </div>
                      <Progress 
                        value={user.progress} 
                        className="h-2" 
                        indicatorClassName={
                          user.rank === 1 ? 'bg-yellow-500' :
                          user.rank === 2 ? 'bg-gray-500' :
                          'bg-amber-500'
                        } 
                      />
                    </div>
                    
                    <div className="flex items-center justify-center mt-3 space-x-1">
                      <Star className="h-4 w-4 text-intern-purple" />
                      <span className="text-sm">{user.streak} day streak</span>
                    </div>
                    
                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                      {user.badges.slice(0, 2).map((badge, i) => (
                        <Badge key={i} variant="outline" className="bg-white">
                          {badge}
                        </Badge>
                      ))}
                      {user.badges.length > 2 && (
                        <Badge variant="outline" className="bg-white">
                          +{user.badges.length - 2}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Rest of leaderboard */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rank
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Progress
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Streak
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Badges
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {leaderboard.slice(3).map((user) => (
                      <tr 
                        key={user.id} 
                        className={`${user.id === 'current' ? 'bg-intern-purple-light' : 'hover:bg-gray-50'}`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${getRankClass(user.rank)}`}>
                            {getRankIcon(user.rank)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              {user.avatar}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {user.id === 'current' ? 'You' : user.name}
                                {user.id === 'current' && <span className="text-xs ml-1">(You)</span>}
                              </div>
                              <div className="text-sm text-gray-500">
                                {user.degree}, {user.year}{user.year === '1' ? 'st' : user.year === '2' ? 'nd' : user.year === '3' ? 'rd' : 'th'} year
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-40">
                            <div className="flex justify-between text-xs mb-1">
                              <span></span>
                              <span>{user.progress}%</span>
                            </div>
                            <Progress value={user.progress} className="h-2" />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm">
                            <Star className="h-4 w-4 text-intern-purple mr-1" />
                            <span>{user.streak} days</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex gap-1 flex-wrap">
                            {user.badges.slice(0, 2).map((badge, i) => (
                              <Badge key={i} variant="outline" className="bg-white text-xs">
                                {badge}
                              </Badge>
                            ))}
                            {user.badges.length > 2 && (
                              <Badge variant="outline" className="bg-white text-xs">
                                +{user.badges.length - 2}
                              </Badge>
                            )}
                            {user.badges.length === 0 && (
                              <span className="text-sm text-gray-500">No badges yet</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Current user stats if not in top 10 */}
            {currentUser && currentUser.rank > 10 && (
              <div className="mt-6 p-4 bg-intern-purple-light rounded-lg border border-intern-purple">
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-200">
                      <span className="font-medium">{currentUser.rank}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      {currentUser.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium">
                        You
                      </div>
                      <div className="flex items-center text-sm mt-1">
                        <Progress value={currentUser.progress} className="w-40 h-2 mr-2" />
                        <span>{currentUser.progress}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LeaderboardPage;
