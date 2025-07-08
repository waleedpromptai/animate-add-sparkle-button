
import { useState } from "react";
import { Plus, FolderPlus, Layers, PenTool } from "lucide-react";

interface AddButtonProps {
  onCreateCategory: () => void;
  onCreateSubCategory: () => void;
  onCreatePrompt: () => void;
}

export const AddButton = ({
  onCreateCategory,
  onCreateSubCategory,
  onCreatePrompt,
}: AddButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleActionClick = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  const actions = [
    {
      icon: FolderPlus,
      label: "Create Category",
      onClick: () => handleActionClick(onCreateCategory),
    },
    {
      icon: Layers,
      label: "Create Sub Category",
      onClick: () => handleActionClick(onCreateSubCategory),
    },
    {
      icon: PenTool,
      label: "Create Prompt",
      onClick: () => handleActionClick(onCreatePrompt),
    },
  ];

  return (
    <div 
      className="fixed top-8 right-8 z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Backdrop overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm animate-fade-in" />
      )}

      <div className="flex items-start gap-4">
        {/* Side list of actions */}
        <div className={`
          flex flex-col gap-2 transition-all duration-500 ease-out
          ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
        `}>
          {actions.map((action, index) => (
            <div
              key={action.label}
              className={`
                transition-all duration-300 ease-out
                ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
              `}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={action.onClick}
                className="
                  flex items-center gap-3 px-4 py-3 bg-white/90 backdrop-blur-sm
                  rounded-lg shadow-lg border border-white/50 hover:bg-white
                  transition-all duration-200 ease-out hover:shadow-xl
                  text-slate-700 hover:text-slate-900 whitespace-nowrap
                  transform hover:scale-105
                "
              >
                <action.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{action.label}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Main add button */}
        <button
          className={`
            relative w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 
            rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 
            transition-all duration-300 ease-spring flex items-center justify-center
            border-4 border-white/20 backdrop-blur-sm flex-shrink-0
            ${isOpen ? 'rotate-45 scale-110' : 'rotate-0 scale-100'}
          `}
        >
          <Plus className="w-8 h-8 text-white transition-transform duration-300" />
          
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-white/30 scale-0 opacity-0 animate-ping" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-50 blur-xl animate-pulse" />
        </button>
      </div>
    </div>
  );
};
