import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed right-0 left-0 w-full top-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex flex-row items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-zinc-900 dark:text-white">D1337 AI</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">Specialized AI Agents</span>
            </div>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 text-sm">
            <span className="px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium">
              LobeAgent
            </span>
            <span className="px-3 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 font-medium">
              D1337-ZeroDay
            </span>
            <span className="px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 font-medium">
              D1337-Flash
            </span>
            <span className="px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium">
              D1337-Arsenal
            </span>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="https://d1337.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
};
