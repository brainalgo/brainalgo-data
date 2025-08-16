import { Brain } from 'lucide-react';

interface BrainAlgoLogoProps {
  className?: string;
}

export function BrainAlgoLogo({ className = "" }: BrainAlgoLogoProps) {
  return (
    <div className={`w-8 h-8 bg-primary rounded-lg flex items-center justify-center ${className}`}>
      <Brain className="h-5 w-5 text-primary-foreground" />
    </div>
  );
}
