import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 via-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-sm shadow-purple-500/20">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-lg font-bold text-zinc-900 dark:text-white">D1337 Agent</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Specialized AI trained for security operations - from beginner guidance to advanced zero-day hunting.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Capabilities</h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span>Security Analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span>Vulnerability Research</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>Code Review</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>Threat Intelligence</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="https://d1337.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Official Website
                </Link>
              </li>
              <li>
                <Link 
                  href="https://console.d1337.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  D1337 Console
                </Link>
              </li>
              <li>
                <Link 
                  href="https://d1337.ai/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="https://d1337.ai/terms" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-500">
            &copy; {currentYear} D1337 AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
