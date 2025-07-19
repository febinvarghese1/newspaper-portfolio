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
    <div className="flex gap-6 relative">
 
      
      {/* Experience content */}
      <div className="flex flex-col gap-4 px-6 pb-8 flex-1">
        {companyLogo && (
          
        <img
          src={companyLogo}
          alt={`${companyName}-logo`}
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover"
          }}
        />
        )}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl leading-[1] font-[FG-condensed]">
            {companyName}
          </h1>
          <p className="text-2xl font-[clarendon] text-[#212121]">
            {position}
          </p>
          <p className="text-xl font-[clarendon] text-[#212121]">
            {duration}
          </p>
          <ol className="list-disc pl-8 font-[clarendon] text-lg leading-[1.6] text-[#212121]">
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