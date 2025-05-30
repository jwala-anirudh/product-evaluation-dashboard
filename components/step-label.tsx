// Standardized step label component with enhanced styling
const StepLabel = ({
  number,
  description,
}: {
  number: number;
  description: string;
}) => (
  <div className="flex items-center mb-4">
    <div className="flex items-center justify-center bg-blue-600 text-white rounded-full w-8 h-8 mr-3 text-sm font-bold shadow-sm">
      {number}
    </div>
    <div className="flex flex-col">
      <span className="text-gray-500 text-xs uppercase tracking-wider font-medium">
        Step {number}
      </span>
      <span className="text-black font-semibold">
        {number === 1
          ? "Market Benchmark Matches"
          : "New Image and Copy Optimized for Conversion"}
      </span>
    </div>
  </div>
);

export default StepLabel;
