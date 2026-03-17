import { Diamond } from 'lucide-react';

export function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/40 to-white/40" />
      <div className="flex items-center gap-2">
        <Diamond className="w-2 h-2 text-white/40 fill-white/40" />
        <Diamond className="w-3 h-3 text-white/60 fill-white/60" />
        <Diamond className="w-2 h-2 text-white/40 fill-white/40" />
      </div>
      <div className="w-20 h-px bg-gradient-to-l from-transparent via-white/40 to-white/40" />
    </div>
  );
}
