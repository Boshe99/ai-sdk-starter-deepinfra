import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed right-0 left-0 w-full top-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex flex-row items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 via-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-purple-500/20">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-zinc-900 dark:text-white">D1337 Agent</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">Security AI</span>
            </div>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 text-sm">
            <Link 
              href="https://d1337.ai" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              About
            </Link>
            <Link 
              href="https://console.d1337.ai" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Console
            </Link>
            <Link 
              href="https://d1337.ai/docs" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Docs
            </Link>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="https://console.d1337.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-red-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};
