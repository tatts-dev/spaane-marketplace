
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CardContent, Card } from '@/components/ui/card';

const PostJob: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Post a New Job</h1>
            <p className="text-gray-600 mt-2">
              Get connected with qualified professionals in your area
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="job-title">Job Title</Label>
                    <Input 
                      id="job-title" 
                      placeholder="e.g., Electrical Wiring Repair, Leaking Pipe Fix"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="job-category">Category</Label>
                    <select 
                      id="job-category" 
                      className="w-full border border-gray-300 rounded-md p-2"
                    >
                      <option value="">Select a category</option>
                      <option value="electrician">Electrician</option>
                      <option value="plumber">Plumber</option>
                      <option value="carpenter">Carpenter</option>
                      <option value="welder">Welder</option>
                      <option value="painter">Painter</option>
                      <option value="gardener">Gardener</option>
                      <option value="pool-cleaner">Pool Cleaner</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="job-budget">Budget Range (ZAR)</Label>
                      <div className="flex items-center space-x-2">
                        <Input id="job-budget-min" placeholder="Min" />
                        <span>-</span>
                        <Input id="job-budget-max" placeholder="Max" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="job-urgency">Urgency</Label>
                      <select 
                        id="job-urgency" 
                        className="w-full border border-gray-300 rounded-md p-2"
                      >
                        <option value="standard">Standard</option>
                        <option value="urgent">Urgent (within 24 hours)</option>
                        <option value="immediate">Immediate (within 6 hours)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="job-location">Location</Label>
                    <Input id="job-location" placeholder="Your address or area in Pretoria" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="job-description">Job Description</Label>
                    <Textarea 
                      id="job-description" 
                      rows={5}
                      placeholder="Describe the job in detail. Include any specific requirements or challenges that professionals should be aware of."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Photos (Optional)</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                      <div className="space-y-2">
                        <div className="text-gray-500">
                          Upload photos to help professionals understand the job better
                        </div>
                        <Button variant="outline" className="mt-2">
                          Upload Photos
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full bg-spaane-green hover:bg-spaane-dark">
                      Post Job
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Tips for getting great responses:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-spaane-green font-bold mr-2">•</span>
                  <span>Be as specific as possible about the job requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-spaane-green font-bold mr-2">•</span>
                  <span>Add photos to help professionals understand the job better</span>
                </li>
                <li className="flex items-start">
                  <span className="text-spaane-green font-bold mr-2">•</span>
                  <span>Set a realistic budget based on the scope of work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-spaane-green font-bold mr-2">•</span>
                  <span>Be clear about the timeframe and any deadline requirements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostJob;
