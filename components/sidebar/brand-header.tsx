const BrandHeader = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-4 mx-0 -mt-4 mb-3 flex items-center gap-3">
      <div className="bg-white/20 rounded-full p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
          <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
          <path d="M12 3v6" />
        </svg>
      </div>
      <div>
        <h1 className="text-lg font-bold">Sitara Home Decor</h1>
        <p className="text-xs text-white/70">PDP Conversion Improvement</p>
      </div>
    </div>
  );
};

export default BrandHeader;
