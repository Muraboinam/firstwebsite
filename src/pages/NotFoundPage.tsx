import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-slate-800 mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6">Page Not Found</h2>
        <p className="text-slate-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="btn-primary inline-flex items-center"
        >
          <ArrowLeft size={18} className="mr-2" />
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;