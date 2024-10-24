import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title = " ",
  children,
  className = "",
}) => {
  return (
    <div
      className={`relative p-[1px] rounded-lg overflow-hidden bg-opacity-50 bg-[#14344f] shadow-lg  ${className}`}>
      <div className="flex items-center justify-center px-4 py-2">
        <h2 className="text-lg font-semibold text-cyan-100">{title}</h2>
      </div>
      <div className="p-4 flex-grow">{children}</div>
    </div>
  );
};

export default Card;
