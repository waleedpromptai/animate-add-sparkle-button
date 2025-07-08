
import { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  color: string;
  isVisible: boolean;
  delay: string;
  index: number;
}

export const ActionButton = ({
  icon: Icon,
  label,
  onClick,
  color,
  isVisible,
  delay,
  index,
}: ActionButtonProps) => {
  const angle = (index * 60) - 120; // Spread buttons in a fan pattern
  const radius = 80; // Distance from main button
  
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <div
      className={`
        absolute bottom-4 right-4 transition-all duration-500 ease-out
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        ${delay}
      `}
      style={{
        transform: isVisible 
          ? `translate(${x}px, ${y}px)` 
          : 'translate(0px, 0px)',
      }}
    >
      {/* Label */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap">
        <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg border border-white/50">
          {label}
        </span>
      </div>

      {/* Action button */}
      <button
        onClick={onClick}
        className={`
          relative w-12 h-12 bg-gradient-to-r ${color} rounded-full 
          shadow-xl hover:shadow-2xl transform hover:scale-110 
          transition-all duration-200 ease-out flex items-center justify-center
          border-2 border-white/30 backdrop-blur-sm
          hover:rotate-12 active:scale-95
        `}
      >
        <Icon className="w-5 h-5 text-white" />
        
        {/* Hover glow */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${color} opacity-0 hover:opacity-50 blur-lg transition-opacity duration-200`} />
      </button>
    </div>
  );
};
