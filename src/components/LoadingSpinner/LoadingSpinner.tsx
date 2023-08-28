import { FC } from "react";

const LoadingSpinner: FC = () => {
  return (
    <div className="container mx-auto max-w-lg flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default LoadingSpinner;
