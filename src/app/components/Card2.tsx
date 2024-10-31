"use client";
import React from "react";
import BorderBox12 from "@jiaminghi/data-view-react/es/borderBox12";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card2: React.FC<CardProps> = ({
  title = " ",
  children,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <BorderBox12>
      <div>
        {title === " " ? null : (
          <div className="flex items-center justify-center">
            <h2 className="text-lg font-semibold text-cyan-100">{title}</h2>
          </div>
        )}
        <div className="relative flex items-center justify-center">
          {children}
        </div>
      </div>
    </BorderBox12>
  );
};

const Card3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <BorderBox12>
      <div className="w-full h-full p-2 flex items-center justify-center">
        {children}
      </div>
    </BorderBox12>
  );
};

export { Card2, Card3 };
