
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Briefcase, FileText, Settings, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FreelancerDashboard: React.FC = () => {
  // This is a placeholder - will be replaced with Supabase authentication
  const freelancerName = "Sarah Smith";
  const activeProjects = 2;
  const completedProjects = 15;
  const profession = "Electrician";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Freelancer Dashboard</h1>
            <p className="text-gray-600">Welcome back, {freelancerName}</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-spaane-green hover:bg-spaane-dark">
            Find Jobs
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Active Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{activeProjects}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{completedProjects}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">R12,450</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">4.8/5</div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid grid-cols-4 w-full max-w-md mb-8">
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Projects</span>
            </TabsTrigger>
            <TabsTrigger value="proposals" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Proposals</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Active Projects</CardTitle>
                <CardDescription>Your ongoing work</CardDescription>
              </CardHeader>
              <CardContent>
                {activeProjects > 0 ? (
                  <div className="space-y-4">
                    {/* This will be populated with real data from Supabase */}
                    <div className="p-4 border rounded-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">Electrical Rewiring</h3>
                          <p className="text-sm text-gray-600">Client: Jane Cooper</p>
                        </div>
                        <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">In Progress</span>
                      </div>
                      <div className="mt-2 text-sm">
                        <div className="flex justify-between">
                          <span>Due date: May 10, 2025</span>
                          <span>R3,500</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">Security Light Installation</h3>
                          <p className="text-sm text-gray-600">Client: Robert Johnson</p>
                        </div>
                        <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">In Progress</span>
                      </div>
                      <div className="mt-2 text-sm">
                        <div className="flex justify-between">
                          <span>Due date: May 15, 2025</span>
                          <span>R2,200</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="mb-4">You don't have any active projects</p>
                    <Button className="bg-spaane-green hover:bg-spaane-dark">Browse Available Jobs</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="proposals">
            <Card>
              <CardHeader>
                <CardTitle>Your Proposals</CardTitle>
                <CardDescription>Track the status of your job applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Home Electrical Audit</h3>
                        <p className="text-sm text-gray-600">Client: Michael Brown</p>
                      </div>
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">Pending</span>
                    </div>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-between">
                        <span>Submitted: April 22, 2025</span>
                        <span>R1,800 (proposed)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Office Circuit Repair</h3>
                        <p className="text-sm text-gray-600">Client: Lisa Taylor</p>
                      </div>
                      <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">Declined</span>
                    </div>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-between">
                        <span>Submitted: April 15, 2025</span>
                        <span>R2,500 (proposed)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your professional profile</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                      <User size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl">{freelancerName}</h3>
                      <p className="text-spaane-green font-medium">{profession}</p>
                      <p className="text-sm text-gray-600 mt-1">Pretoria, South Africa</p>
                      <div className="mt-4">
                        <Button variant="outline" size="sm">Edit Profile</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">About</h4>
                    <p className="text-sm text-gray-600">
                      Licensed electrician with 8+ years of experience in residential and commercial electrical work.
                      Specializing in installations, repairs, and maintenance.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Electrical Wiring</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Circuit Repair</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Lighting Installation</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Safety Compliance</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Troubleshooting</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Notification Preferences</label>
                    <div className="mt-1">Email, SMS, In-app</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Payment Methods</label>
                    <div className="mt-1">
                      <Button variant="outline">Manage Payment Methods</Button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="mt-1">
                      <Button variant="outline">Change Password</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default FreelancerDashboard;
