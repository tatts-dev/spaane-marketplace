
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Index from "./pages/Index";
import BrowseJobs from "./pages/BrowseJobs";
import HowItWorks from "./pages/HowItWorks";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostJob from "./pages/PostJob";
import NotFound from "./pages/NotFound";
import ClientDashboard from "./pages/client/Dashboard";
import FreelancerDashboard from "./pages/freelancer/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/browse" element={<BrowseJobs />} />
            <Route path="/about" element={<HowItWorks />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/client/dashboard" element={
              <PrivateRoute userType="client">
                <ClientDashboard />
              </PrivateRoute>
            } />
            <Route path="/freelancer/dashboard" element={
              <PrivateRoute userType="freelancer">
                <FreelancerDashboard />
              </PrivateRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
