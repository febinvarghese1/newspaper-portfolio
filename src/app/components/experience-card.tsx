import React from "react";

interface ExperienceCardProps {
  companyLogo?: string;
  companyName: string;
  position: string;
  duration: string;
  responsibilities: string[];
  isLast?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  companyLogo,
  companyName,
  position,
  duration,
  responsibilities,
  isLast = false
}) => {
  return (
    <div className="flex gap-3 sm:gap-4 lg:gap-6 relative">
      {/* Experience content */}
      <div className="flex flex-col gap-3 sm:gap-4 px-3 sm:px-4 lg:px-6 pb-4 sm:pb-6 lg:pb-8 flex-1">
        {companyLogo && (
          <img
            src={companyLogo}
            alt={`${companyName}-logo`}
            className="w-full max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] h-[150px] sm:h-[180px] lg:h-[200px] self-center xl:self-start"
            style={{
              objectFit: "cover"
            }}
          />
        )}
        <div className="flex flex-col gap-1 sm:gap-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1] font-[FG-condensed]">
            {companyName}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-[clarendon] text-[#212121]">
            {position}
          </p>
          <p className="text-base sm:text-lg md:text-xl font-[clarendon] text-[#212121]">
            {duration}
          </p>
          <ol className="list-disc pl-4 sm:pl-6 lg:pl-8 font-[clarendon] text-sm sm:text-base md:text-lg leading-[1.6] text-[#212121]">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>
                {responsibility}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard; 