const PoweredBy = () => {
  return (
    <div className="flex items-center justify-center gap-2 px-4 py-1 mb-4 text-xs text-gray-500">
      <span>Powered by</span>
      <div className="flex items-center gap-1">
        <img
          src="https://framerusercontent.com/images/ObFDJ7WghqSbOTKKNAhcDQJqPc.png"
          alt="Sitara AI"
          className="h-3 w-auto filter invert"
        />
        <span className="font-medium text-gray-700">AI</span>
      </div>
    </div>
  );
};

export default PoweredBy;
