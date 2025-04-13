
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { UserRoundCheck, FileSpreadsheet, Briefcase } from 'lucide-react';

const steps = [
  {
    icon: <UserRoundCheck size={48} className="text-spaane-green" />,
    title: "Create Account",
    description: "Sign up as a client looking to hire professionals or as a freelancer offering your services.",
    details: "It's very easy to open an account and get started. Simply provide your basic information and verify your email."
  },
  {
    icon: <FileSpreadsheet size={48} className="text-spaane-green" />,
    title: "Complete Your Profile",
    description: "Fill in your profile details and add all required documentation.",
    details: "Clients can specify their requirements and preferences. Freelancers need to upload qualifications and certifications to verify their skills."
  },
  {
    icon: <Briefcase size={48} className="text-spaane-green" />,
    title: "Apply For Jobs Or Hire",
    description: "Clients can post jobs while freelancers can apply for available opportunities.",
    details: "Apply and get your preferable jobs with all the requirements. Clients can review applications and select the best professional for their needs."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-spaane-green text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">How It Works?</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Spaane Marketplace connects homeowners with qualified trade professionals in a few simple steps
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-gray-100 p-4 rounded-full">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-700 mb-4">{step.description}</p>
                <p className="text-gray-600 text-sm">{step.details}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How do I sign up as a freelancer?",
                  answer: "To sign up as a freelancer, click on the 'Sign Up' button and select the 'Freelancer' option. Complete your profile and upload your qualifications for verification."
                },
                {
                  question: "Is there a fee for posting jobs?",
                  answer: "Posting jobs as a client is completely free. You only pay when you hire a professional for your job."
                },
                {
                  question: "How does the subscription model work for freelancers?",
                  answer: "Freelancers can access basic features for free, but a subscription gives you priority listings, advanced search options, and more visibility to potential clients."
                },
                {
                  question: "How are payments handled?",
                  answer: "We use a secure payment system where clients pay through our platform. Funds are released to freelancers once the client confirms that the job has been completed satisfactorily."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
