import React from 'react';
import { motion } from 'motion/react';

interface OptionButtonProps {
  key?: React.Key;
  label: string;
  selected: boolean;
  onClick: () => void;
}

export function OptionButton({ label, selected, onClick }: OptionButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full text-left p-5 rounded-2xl transition-all duration-200 border ${
        selected 
          ? 'bg-white border-[#CFE8F3] shadow-md ring-2 ring-[#CFE8F3]/50' 
          : 'bg-white/70 border-white/50 shadow-sm hover:bg-white hover:shadow-md'
      }`}
    >
      <span className={`text-[15px] ${selected ? 'font-medium text-[#4A4A4A]' : 'text-[#6B6B6B]'}`}>
        {label}
      </span>
    </motion.button>
  );
}
