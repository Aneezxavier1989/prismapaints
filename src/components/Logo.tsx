import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Abstract Prism Shape */}
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="prism-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" /> {/* red-500 */}
            <stop offset="25%" stopColor="#F59E0B" /> {/* amber-500 */}
            <stop offset="50%" stopColor="#10B981" /> {/* emerald-500 */}
            <stop offset="75%" stopColor="#3B82F6" /> {/* blue-500 */}
            <stop offset="100%" stopColor="#8B5CF6" /> {/* violet-500 */}
          </linearGradient>
          <clipPath id="prism-clip">
            <path d="M50 5L95 85H5L50 5Z" />
          </clipPath>
        </defs>
        
        {/* Main Triangle */}
        <path 
          d="M50 5L95 85H5L50 5Z" 
          fill="url(#prism-gradient)" 
          className="drop-shadow-lg"
        />
        
        {/* Internal Facets */}
        <path 
          d="M50 5L72.5 45L50 85" 
          stroke="white" 
          strokeWidth="0.5" 
          strokeOpacity="0.3"
        />
        <path 
          d="M50 5L27.5 45L50 85" 
          stroke="white" 
          strokeWidth="0.5" 
          strokeOpacity="0.3"
        />
        <path 
          d="M27.5 45L72.5 45" 
          stroke="white" 
          strokeWidth="0.5" 
          strokeOpacity="0.3"
        />
        
        {/* Light Refraction Effect */}
        <path 
          d="M50 5L95 85L50 85L50 5Z" 
          fill="white" 
          fillOpacity="0.1"
        />
      </svg>
    </div>
  );
};
