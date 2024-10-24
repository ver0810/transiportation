import React from "react";
// import "../../../styles/card2.css";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title = " ",
  children,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="border border-[#16dcdf] rounded-md before:">
      <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-gray-500" />
      {title && (
        <h1 className="text-lg font-bold text-[#16dcdf] flex items-center justify-center">
          {title}
        </h1>
      )}
      <div className="flex items-center justify-center p-4 flex-grow">
        {children}
      </div>
    </div>
  );
};

export default Card;
