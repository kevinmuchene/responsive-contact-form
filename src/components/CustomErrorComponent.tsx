import React from "react";

type CustomErrorProps = {
  children: React.ReactNode;
};

const CustomError: React.FC<CustomErrorProps> = ({ children }) => {
  return (
    <div aria-live="polite" className="text-red-500 text-sm mt-1">
      {children}
    </div>
  );
};

export default CustomError;
