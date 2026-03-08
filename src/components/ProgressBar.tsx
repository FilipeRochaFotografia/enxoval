import React from 'react';
import { motion } from 'motion/react';

export function ProgressBar({ current, total }: { current: number; total: number }) {
  const progress = (current / total) * 100;
  
  return (
    <div className="w-full h-2 bg-white/60 rounded-full overflow-hidden mb-8 shadow-inner">
      <motion.div 
        className="h-full bg-[#CFE8F3] rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
}
