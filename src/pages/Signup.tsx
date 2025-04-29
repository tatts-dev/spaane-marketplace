import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Logo from '@/components/Logo';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/components/ui/use-toast';

enum UserType {
  CLIENT = 'client',
  FREELANCER = 'freelancer',
}

const Signup: React.FC = () => {
  const { signUp, user, session } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [userType, setUserType] = useState<UserType>(UserType.CLIENT);
  const [loading, setLoading] = useState(false);
  
  // Client form state
  const [clientFirstName, setClientFirstName] = useState('');
  const [clientLastName, setClientLastName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientPassword, setClientPassword] = useState('');
  const [clientConfirmPassword, setClientConfirmPassword] = useState('');
  
  // Freelancer form state
  const [freelancerFirstName, setFreelancerFirstName] = useState('');
  const [freelancerLastName, setFreelancerLastName] = useState('');
  const [freelancerEmail, setFreelancerEmail] = useState('');
  const [freelancerPhone, setFreelancerPhone] = useState('');
  const [freelancerProfession, setFreelancerProfession] = useState('');
  const [freelancerPassword, setFreelancerPassword] = useState('');
  const [freelancerConfirmPassword, setFreelancerConfirmPassword] = useState('');
  
  // Add effect to handle automatic redirection after signup
  useEffect(() => {
    if (user && session) {
      const userType = user.user_metadata.user_type;
      if (userType === 'client') {
        navigate('/client/dashboard');
      } else if (userType === 'freelancer') {
        navigate('/freelancer/dashboard');
      } else {
        navigate('/');
      }
    }
  }, [user, session, navigate]);
  
  const handleUserTypeChange = (value: string) => {
    setUserType(value as UserType);
  };

  const handleClientSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (clientPassword !== clientConfirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setLoading(true);
      await signUp(
        clientEmail,
        clientPassword,
        UserType.CLIENT,
        clientFirstName,
        clientLastName
      );
      toast({
        title: "Success",
        description: "Account created successfully!",
        variant: "default",
      });
      // Redirection will be handled by the useEffect hook
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFreelancerSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (freelancerPassword !== freelancerConfirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setLoading(true);
      await signUp(
        freelancerEmail,
        freelancerPassword,
        UserType.FREELANCER,
        freelancerFirstName,
        freelancerLastName
      );
      toast({
        title: "Success",
        description: "Account created successfully!",
        variant: "default",
      });
      // Redirection will be handled by the useEffect hook
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-spaane-green p-8 text-white flex flex-col justify-center">
          <div className="mb-8 flex justify-center md:justify-start">
            <Logo />
          </div>
          <h1 className="text-3xl font-bold mb-4">Join Spaane Marketplace</h1>
          <p className="mb-6">
            {userType === UserType.CLIENT
              ? 'Find qualified professionals for your home maintenance and repair needs.'
              : 'Connect with clients in your area and grow your business.'}
          </p>
          <div className="bg-black/20 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Why Join?</h3>
            <ul className="space-y-2">
              {userType === UserType.CLIENT ? (
                <>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Access to verified professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Secure payment system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Quality guarantees</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Find local clients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Build your reputation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Secure, timely payments</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 p-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold">Create Your Account</h2>
            <p className="text-gray-600">
              Already have an account? <Link to="/login" className="text-spaane-green hover:underline">Login</Link>
            </p>
          </div>
          
          <Tabs defaultValue={UserType.CLIENT} onValueChange={handleUserTypeChange} className="mb-6">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value={UserType.CLIENT}>Client</TabsTrigger>
              <TabsTrigger value={UserType.FREELANCER}>Freelancer</TabsTrigger>
            </TabsList>
            
            <TabsContent value={UserType.CLIENT}>
              <form className="space-y-4" onSubmit={handleClientSignup}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="client-first-name">First Name</Label>
                    <Input 
                      id="client-first-name" 
                      placeholder="John" 
                      value={clientFirstName}
                      onChange={(e) => setClientFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client-last-name">Last Name</Label>
                    <Input 
                      id="client-last-name" 
                      placeholder="Doe" 
                      value={clientLastName}
                      onChange={(e) => setClientLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="client-email">Email</Label>
                  <Input 
                    id="client-email" 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="client-phone">Phone Number</Label>
                  <Input 
                    id="client-phone" 
                    placeholder="+27 12 345 6789" 
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="client-password">Password</Label>
                  <Input 
                    id="client-password" 
                    type="password" 
                    value={clientPassword}
                    onChange={(e) => setClientPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="client-confirm-password">Confirm Password</Label>
                  <Input 
                    id="client-confirm-password" 
                    type="password" 
                    value={clientConfirmPassword}
                    onChange={(e) => setClientConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="pt-2">
                  <Button 
                    className="w-full bg-spaane-green hover:bg-spaane-dark" 
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? 'Signing Up...' : 'Sign Up as Client'}
                  </Button>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value={UserType.FREELANCER}>
              <form className="space-y-4" onSubmit={handleFreelancerSignup}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="freelancer-first-name">First Name</Label>
                    <Input 
                      id="freelancer-first-name" 
                      placeholder="John" 
                      value={freelancerFirstName}
                      onChange={(e) => setFreelancerFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="freelancer-last-name">Last Name</Label>
                    <Input 
                      id="freelancer-last-name" 
                      placeholder="Smith" 
                      value={freelancerLastName}
                      onChange={(e) => setFreelancerLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="freelancer-email">Email</Label>
                  <Input 
                    id="freelancer-email" 
                    type="email" 
                    placeholder="john.smith@example.com" 
                    value={freelancerEmail}
                    onChange={(e) => setFreelancerEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="freelancer-phone">Phone Number</Label>
                  <Input 
                    id="freelancer-phone" 
                    placeholder="+27 12 345 6789" 
                    value={freelancerPhone}
                    onChange={(e) => setFreelancerPhone(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="freelancer-profession">Primary Profession</Label>
                  <select 
                    id="freelancer-profession" 
                    className="w-full border border-gray-300 rounded-md p-2"
                    value={freelancerProfession}
                    onChange={(e) => setFreelancerProfession(e.target.value)}
                    required
                  >
                    <option value="">Select your profession</option>
                    <option value="electrician">Electrician</option>
                    <option value="plumber">Plumber</option>
                    <option value="carpenter">Carpenter</option>
                    <option value="welder">Welder</option>
                    <option value="painter">Painter</option>
                    <option value="gardener">Gardener</option>
                    <option value="pool-cleaner">Pool Cleaner</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="freelancer-password">Password</Label>
                  <Input 
                    id="freelancer-password" 
                    type="password" 
                    value={freelancerPassword}
                    onChange={(e) => setFreelancerPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="freelancer-confirm-password">Confirm Password</Label>
                  <Input 
                    id="freelancer-confirm-password" 
                    type="password" 
                    value={freelancerConfirmPassword}
                    onChange={(e) => setFreelancerConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="pt-2">
                  <Button 
                    className="w-full bg-spaane-green hover:bg-spaane-dark" 
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? 'Signing Up...' : 'Sign Up as Freelancer'}
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
          
          <p className="text-xs text-gray-500 text-center mt-6">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
