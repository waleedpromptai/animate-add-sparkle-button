
import { useState } from "react";
import { Plus, FileText, Image, Video, StickyNote, Calendar } from "lucide-react";
import { ActionButton } from "./ActionButton";

interface AddButtonProps {
  onCreatePost: () => void;
  onAddPhoto: () => void;
  onAddVideo: () => void;
  onAddNote: () => void;
  onAddEvent: () => void;
}

export const AddButton = ({
  onCreatePost,
  onAddPhoto,
  onAddVideo,
  onAddNote,
  onAddEvent,
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
      icon: FileText,
      label: "Create Post",
      onClick: () => handleActionClick(onCreatePost),
      color: "from-blue-500 to-blue-600",
      delay: "delay-[50ms]",
    },
    {
      icon: Image,
      label: "Add Photo",
      onClick: () => handleActionClick(onAddPhoto),
      color: "from-green-500 to-green-600",
      delay: "delay-[100ms]",
    },
    {
      icon: Video,
      label: "Add Video",
      onClick: () => handleActionClick(onAddVideo),
      color: "from-purple-500 to-purple-600",
      delay: "delay-[150ms]",
    },
    {
      icon: StickyNote,
      label: "Add Note",
      onClick: () => handleActionClick(onAddNote),
      color: "from-yellow-500 to-yellow-600",
      delay: "delay-[200ms]",
    },
    {
      icon: Calendar,
      label: "Add Event",
      onClick: () => handleActionClick(onAddEvent),
      color: "from-red-500 to-red-600",
      delay: "delay-[250ms]",
    },
  ];

  return (
    <div 
      className="fixed bottom-8 right-8 z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Backdrop overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm animate-fade-in" />
      )}

      {/* Action buttons */}
      <div className="relative">
        {actions.map((action, index) => (
          <ActionButton
            key={action.label}
            icon={action.icon}
            label={action.label}
            onClick={action.onClick}
            color={action.color}
            isVisible={isOpen}
            delay={action.delay}
            index={index}
          />
        ))}

        {/* Main add button */}
        <button
          className={`
            relative w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 
            rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 
            transition-all duration-300 ease-spring flex items-center justify-center
            border-4 border-white/20 backdrop-blur-sm
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
