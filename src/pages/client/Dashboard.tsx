
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Briefcase, FileText, Settings, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ClientDashboard: React.FC = () => {
  // This is a placeholder - will be replaced with Supabase authentication
  const clientName = "John Doe";
  const activeJobs = 3;
  const completedJobs = 8;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Client Dashboard</h1>
            <p className="text-gray-600">Welcome back, {clientName}</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-spaane-green hover:bg-spaane-dark">
            Post New Job
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Active Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{activeJobs}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Completed Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{completedJobs}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Spent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">R4,850</div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="grid grid-cols-4 w-full max-w-md mb-8">
            <TabsTrigger value="jobs" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Jobs</span>
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
          
          <TabsContent value="jobs">
            <Card>
              <CardHeader>
                <CardTitle>Your Jobs</CardTitle>
                <CardDescription>Manage your posted job listings</CardDescription>
              </CardHeader>
              <CardContent>
                {activeJobs > 0 ? (
                  <div className="space-y-4">
                    {/* This will be populated with real data from Supabase */}
                    <div className="p-4 border rounded-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">Bathroom Renovation</h3>
                          <p className="text-sm text-gray-600">Posted 2 days ago</p>
                        </div>
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Active</span>
                      </div>
                      <p className="mt-2 text-sm">5 proposals received</p>
                    </div>
                    
                    <div className="p-4 border rounded-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">Kitchen Plumbing</h3>
                          <p className="text-sm text-gray-600">Posted 5 days ago</p>
                        </div>
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Active</span>
                      </div>
                      <p className="mt-2 text-sm">3 proposals received</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="mb-4">You haven't posted any jobs yet</p>
                    <Button className="bg-spaane-green hover:bg-spaane-dark">Post Your First Job</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="proposals">
            <Card>
              <CardHeader>
                <CardTitle>Proposals</CardTitle>
                <CardDescription>Review proposals from freelancers</CardDescription>
              </CardHeader>
              <CardContent>
                <p>You have proposals from 8 freelancers to review.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your client profile details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <div className="mt-1">{clientName}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1">john.doe@example.com</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <div className="mt-1">Pretoria, South Africa</div>
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
                    <div className="mt-1">Email, In-app</div>
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

export default ClientDashboard;
