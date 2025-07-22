'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import BackgroundImage from '@/assets/images/background-new.png';
import Monitor from "@/assets/images/illustrations/monitor.jpg";
import Rose from "@/assets/images/illustrations/rose.png";
import Band from "@/assets/images/illustrations/band.png";
import Grapes from "@/assets/images/illustrations/grapes.png";
import House from "@/assets/images/illustrations/house.png";
import Factory from "@/assets/images/illustrations/new-factory.png";
import Weaver from "@/assets/images/illustrations/weaver.png";
import SingleRose from "@/assets/images/illustrations/single-rose.png";
import CompanyLogo from "@/assets/images/illustrations/company-logo.png";
import Coding from "@/assets/images/illustrations/body-builder.png";
import Award from "@/assets/images/illustrations/gramaphone.png";
import heroImage from "@/assets/images/image.png";

interface LoaderProps {
  onLoadingComplete: () => void;
}

export default function Loader({ onLoadingComplete }: LoaderProps) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingStatus, setLoadingStatus] = useState('Initializing...');

  useEffect(() => {
    const loadAssets = async () => {
      try {
        const images = [
          BackgroundImage.src,
          Monitor.src,
          Rose.src,
          Band.src,
          Grapes.src,
          House.src,
          Factory.src,
          Weaver.src,
          SingleRose.src,
          CompanyLogo.src,
          Coding.src,
          Award.src,
          heroImage.src
        ];

        const totalAssets = images.length + 1; 
        let loadedAssets = 0;

        const updateProgress = () => {
          loadedAssets++;
          const progress = Math.min((loadedAssets / totalAssets) * 100, 100);
          setLoadingProgress(progress);
        };

        setLoadingStatus('Loading images...');
        const imagePromises = images.map((src) => {
          return new Promise<void>((resolve) => {
            const img = new Image();
            const timeout = setTimeout(() => {
              console.warn(`Image load timeout: ${src}`);
              updateProgress();
              resolve();
            }, 10000); 

            img.onload = () => {
              clearTimeout(timeout);
              updateProgress();
              resolve();
            };
            img.onerror = () => {
              clearTimeout(timeout);
              console.warn(`Image failed to load: ${src}`);
              updateProgress();
              resolve();
            };
            img.src = src;
          });
        });

        await Promise.race([
          Promise.all(imagePromises),
          new Promise(resolve => setTimeout(resolve, 15000)) 
        ]);

        setLoadingStatus('Loading fonts...');
        try {
          
          await Promise.race([
            document.fonts.ready,
            new Promise(resolve => setTimeout(resolve, 10000)) 
          ]);
          
          const customFonts = [
            'CloisterBlack',
            'FG-condensed', 
            'applewood',
            'clarendon',
            'Lucian'
          ];
          
          await new Promise(resolve => setTimeout(resolve, 800));
          
          updateProgress();
          setLoadingStatus('Ready!');
        } catch (error) {
          console.warn('Fonts failed to load:', error);
          updateProgress();
          setLoadingStatus('Ready!');
        }

        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      } catch (error) {
        console.error('Loader error:', error);
        setLoadingProgress(100);
        setLoadingStatus('Ready!');
        setTimeout(() => {
          onLoadingComplete();
        }, 1000);
      }
    };

    loadAssets();
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
          <motion.p
            className="font-[clarendon] text-xs sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-2 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {loadingStatus}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
} 