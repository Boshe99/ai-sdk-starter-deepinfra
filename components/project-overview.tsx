export const ProjectOverview = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <div className="mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-2xl">D</span>
        </div>
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">
          D1337 AI Console
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Specialized AI Agents for Every Task
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-6 w-full max-w-md">
        <AgentCard 
          name="LobeAgent" 
          description="General Purpose" 
          color="blue"
        />
        <AgentCard 
          name="D1337-ZeroDay" 
          description="Security Research" 
          color="red"
        />
        <AgentCard 
          name="D1337-Flash" 
          description="Fast Response" 
          color="amber"
        />
        <AgentCard 
          name="D1337-Arsenal" 
          description="Advanced Tools" 
          color="purple"
        />
      </div>
      
      <p className="text-sm text-zinc-500 dark:text-zinc-500 max-w-md">
        Select an agent and start chatting. Our specialized AI models are trained for specific operations - from general assistance to advanced security tasks.
      </p>
    </div>
  );
};

const AgentCard = ({
  name,
  description,
  color,
}: {
  name: string;
  description: string;
  color: "blue" | "red" | "amber" | "purple";
}) => {
  const colorClasses = {
    blue: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
    red: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
    amber: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
    purple: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
  };
  
  const dotColors = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    amber: "bg-amber-500",
    purple: "bg-purple-500",
  };
  
  return (
    <div className={`p-3 rounded-xl border ${colorClasses[color]} transition-all hover:scale-105 cursor-pointer`}>
      <div className="flex items-center gap-2 mb-1">
        <span className={`w-2 h-2 rounded-full ${dotColors[color]}`}></span>
        <span className="text-sm font-semibold text-zinc-900 dark:text-white">{name}</span>
      </div>
      <p className="text-xs text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
};
