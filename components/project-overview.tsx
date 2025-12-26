import Link from "next/link";

export const ProjectOverview = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <div className="mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-red-600 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25">
          <span className="text-white font-bold text-3xl">D</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-3">
          D1337 Agent
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto">
          Specialized AI for Security Operations
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full max-w-2xl">
        <FeatureCard 
          title="Security Analysis"
          description="Advanced vulnerability research and threat intelligence"
          icon="shield"
        />
        <FeatureCard 
          title="Code Review"
          description="Intelligent code analysis and security auditing"
          icon="code"
        />
        <FeatureCard 
          title="Rapid Response"
          description="Fast, accurate answers for security operations"
          icon="zap"
        />
      </div>
      
      <p className="text-sm text-zinc-500 dark:text-zinc-500 max-w-md mb-6">
        D1337 is a specialized AI trained for security operations - from beginner guidance to advanced zero-day hunting.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="https://d1337.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-red-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          Learn More
        </Link>
        <Link
          href="https://console.d1337.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-medium rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          Open Console
        </Link>
      </div>
    </div>
  );
};

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: "shield" | "code" | "zap";
}) => {
  const icons = {
    shield: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    code: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    zap: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  };
  
  return (
    <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-3 mx-auto">
        {icons[icon]}
      </div>
      <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1">{title}</h3>
      <p className="text-xs text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
};
