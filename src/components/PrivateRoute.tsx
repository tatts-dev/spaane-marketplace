
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/components/ui/use-toast';

interface PrivateRouteProps {
  children: React.ReactNode;
  userType?: 'client' | 'freelancer';
}

const PrivateRoute = ({ children, userType }: PrivateRouteProps) => {
  const { user, session, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !session) {
      toast({
        title: "Authentication required",
        description: "Please login to access this page",
        variant: "destructive",
      });
      navigate('/login');
    }

    if (user && userType) {
      const userMetadata = user.user_metadata;
      if (userMetadata.user_type !== userType) {
        toast({
          title: "Access denied",
          description: `This page is only accessible to ${userType}s`,
          variant: "destructive",
        });
        navigate('/');
      }
    }
  }, [user, session, loading, navigate, userType]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return session ? <>{children}</> : null;
};

export default PrivateRoute;
