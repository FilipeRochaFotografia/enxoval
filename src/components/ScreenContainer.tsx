import { motion } from 'motion/react';
import React from 'react';

export function ScreenContainer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`min-h-[100dvh] w-full flex flex-col items-center justify-center p-6 max-w-md mx-auto ${className}`}
    >
      {children}
    </motion.div>
  );
}
