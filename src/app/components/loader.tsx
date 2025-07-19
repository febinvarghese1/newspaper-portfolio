'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoaderProps {
  onLoadingComplete: () => void;
}

export default function Loader({ onLoadingComplete }: LoaderProps) {
    const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    let progress = 0;

    const interval = setInterval(() => {
      progress += Math.random() * 20;
      
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        // Small delay to show 100% before hiding
        setTimeout(() => {
          onLoadingComplete();
        }, 800);
      }
      
      setLoadingProgress(progress);
    }, 300);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${loadingProgress}%`,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const dotVariants = {
    animate: {
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-[#f5f5dc] flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="font-[CloisterBlack] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-black mb-4 sm:mb-6 lg:mb-8"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Great things take time
        </motion.h1>
        
        <motion.div
          className="flex justify-center items-center gap-1 sm:gap-2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <motion.span
            variants={dotVariants}
            animate="animate"
            transition={{ delay: 0 }}
          >
            .
          </motion.span>
          <motion.span
            variants={dotVariants}
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            .
          </motion.span>
          <motion.span
            variants={dotVariants}
            animate="animate"
            transition={{ delay: 0.4 }}
          >
            .
          </motion.span>
        </motion.div>

        <motion.div
          className="mt-6 sm:mt-8 lg:mt-10 w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <div className="w-full bg-gray-300 border-2 sm:border-4 border-black h-2 sm:h-3 lg:h-4">
            <motion.div
              className="bg-black h-full"
              variants={progressVariants}
              initial="hidden"
              animate="visible"
            />
          </div>
          <motion.p
            className="font-[clarendon] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2 sm:mt-3 text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {Math.round(loadingProgress)}%
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
} 