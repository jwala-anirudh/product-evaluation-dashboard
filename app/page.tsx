"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Download, FileText } from "lucide-react";
import { PdpAnalysisModal } from "@/components/pdp-analysis-modal";
import { OriginalImageModal } from "@/components/original-image-modal";

export default function ProductEvaluationDashboard() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [isPdpAnalysisOpen, setIsPdpAnalysisOpen] = useState(false);
  const [isOriginalImageOpen, setIsOriginalImageOpen] = useState(false);
  const [activeTabWooly, setActiveTabWooly] = useState<
    "dtc-copy" | "dtc-content"
  >("dtc-content");
  const [activeTabTibeten, setActiveTabTibeten] = useState<
    "dtc-copy" | "dtc-content"
  >("dtc-content");
  const [activeTabBrass, setActiveTabBrass] = useState<
    "dtc-copy" | "dtc-content"
  >("dtc-content");
  const [activeTabVerity, setActiveTabVerity] = useState<
    "dtc-copy" | "dtc-content"
  >("dtc-content");
  const [activeTabBraxton, setActiveTabBraxton] = useState<
    "dtc-copy" | "dtc-content"
  >("dtc-content");
  const [activeTabMiya, setActiveTabMiya] = useState<
    "dtc-copy" | "dtc-content"
  >("dtc-content");
  const [activeTabIndira, setActiveTabIndira] = useState<
    "dtc-copy" | "dtc-content"
  >("dtc-content");
  const [currentProduct, setCurrentProduct] = useState<string>("");

  const handleProductSelect = (product: string) => {
    if (product === "Indira Geometric Hand-Knotted Rug") {
      setSelectedProducts(["Indira Geometric Hand-Knotted Rug"]);
    } else if (product === "Wooly Rug") {
      setSelectedProducts(["Wooly Rug", "Youri Accent Table Lamp"]);
    } else if (product === "Tibeten Woven Rug") {
      setSelectedProducts(["Tibeten Woven Rug"]);
    } else if (product === "Antique Brass Linen Shade Floor Lamp") {
      setSelectedProducts([
        "Antique Brass Linen Shade Floor Lamp",
        "Ailyn Rustic Lodge Green Upholstered Brown Wood",
      ]);
    } else if (product === "Ceduna Accent Floor Lamp") {
      setSelectedProducts(["Tibeten Woven Rug", "Ceduna Accent Floor Lamp"]);
    } else if (product === "Verity Yara Abstract Rug") {
      setSelectedProducts(["Verity Yara Abstract Rug", "Modern Accent Chair"]);
    } else if (product === "Braxton Accent Chair, Blue") {
      setSelectedProducts(["Braxton Accent Chair, Blue"]);
    } else if (product === "Miya Accent Chair, Beige") {
      setSelectedProducts(["Miya Accent Chair, Beige"]);
    } else {
      setSelectedProducts([product]);
    }
  };

  const isSelected = (product: string) => {
    return selectedProducts.includes(product);
  };

  const openPdpAnalysis = (productName: string) => {
    setCurrentProduct(productName);
    setIsPdpAnalysisOpen(true);
  };

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

  // Step descriptions
  const stepDescriptions = [
    "We Find Leading Market Comparison Examples",
    "Image and Copy Optimized for Conversion",
  ];

  // Handle image download
  const handleDownloadImage = (imageUrl: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex min-h-screen bg-white font-manrope">
      {/* PDP Analysis Modal */}
      <PdpAnalysisModal
        isOpen={isPdpAnalysisOpen}
        onClose={() => setIsPdpAnalysisOpen(false)}
        productName={currentProduct}
      />

      {/* Original Image Modal */}
      <OriginalImageModal
        isOpen={isOriginalImageOpen}
        onClose={() => setIsOriginalImageOpen(false)}
      />

      {/* Sidebar */}
      <div className="w-72 border-r p-4 pt-6 flex flex-col gap-3 overflow-auto h-screen">
        {/* Brand Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-4 -mx-4 -mt-4 mb-3 flex items-center gap-3">
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
            <h1 className="text-lg font-bold">ABC Home Decor</h1>
            <p className="text-xs text-white/70">PDP Conversion Improvement</p>
          </div>
        </div>
        {/* Powered by Sitara AI */}
        <div className="flex items-center justify-center gap-2 px-4 py-1 mb-3 text-xs text-gray-500">
          <span>Powered by</span>
          <div className="flex items-center gap-1">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-26%20at%206.59.24%E2%80%AFPM-gqvRVDjjp8wfOT3VuG79ZjEhIvXmMI.png"
              alt="Sitara AI"
              className="h-3 w-auto"
            />
            <span className="font-medium text-gray-700">AI</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-2">
          <h2 className="font-semibold text-lg">Catalog</h2>
          <div className="flex items-center gap-2">
            <button
              className="flex items-center gap-1 text-xs bg-white border border-gray-200 rounded-md px-2 py-1 hover:bg-gray-50 transition-colors"
              onClick={() => {
                const input = document.createElement("input");
                input.type = "file";
                input.accept = "image/*";
                input.onchange = (e) => {
                  const file = (e.target as HTMLInputElement).files?.[0];
                  if (file) {
                    // In a real app, you would upload the file to a server here
                    alert(
                      `File "${file.name}" selected. In a real app, this would be uploaded.`
                    );
                  }
                };
                input.click();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-upload"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" x2="12" y1="3" y2="15" />
              </svg>
              Upload
            </button>
            <button className="flex items-center gap-1 text-xs bg-blue-600 text-white rounded-md px-2 py-1 hover:bg-blue-700 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              Edit
            </button>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 w-full border rounded-md text-sm"
          />
        </div>

        <div className="mt-2">
          <h3 className="text-sm text-muted-foreground mb-2">Product ID</h3>
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <div
                className={`flex flex-col items-center p-2 rounded-md cursor-pointer border transition-all duration-200 ${
                  isSelected("Indira Geometric Hand-Knotted Rug")
                    ? "bg-blue-50 border-blue-300 shadow-sm"
                    : "border-gray-100 hover:border-gray-200 hover:bg-gray-50"
                }`}
                onClick={() =>
                  handleProductSelect("Indira Geometric Hand-Knotted Rug")
                }
              >
                <div className="w-full h-20 relative mb-1">
                  <Image
                    src="/indira-geometric-rug-thumbnail.png"
                    alt="Indira Geometric Hand-Knotted Rug Thumbnail"
                    fill
                    className="object-contain rounded-sm"
                  />
                  {isSelected("Indira Geometric Hand-Knotted Rug") && (
                    <div className="absolute top-1 right-1 bg-blue-600 rounded-full p-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="mt-1">
                  <span className="text-xs font-medium block">
                    Indira Geometric Rug
                  </span>
                  <span className="text-[10px] text-gray-500">
                    ID: IGR-2025-01
                  </span>
                </div>
              </div>
              <div
                className={`flex flex-col p-2 rounded-md cursor-pointer border transition-all duration-200 ${
                  isSelected("Wooly Rug")
                    ? "bg-blue-50 border-blue-300 shadow-sm"
                    : "border-gray-100 hover:border-gray-200 hover:bg-gray-50"
                }`}
                onClick={() => handleProductSelect("Wooly Rug")}
              >
                <div className="flex items-start gap-2">
                  <div className="w-full h-20 relative mb-1 rounded-sm overflow-hidden">
                    <Image
                      src="/wooly-rug-thumbnail-small.png"
                      alt="Wooly Rug Thumbnail"
                      fill
                      className="object-contain rounded-sm"
                    />
                    {isSelected("Wooly Rug") && (
                      <div className="absolute top-1 right-1 bg-blue-600 rounded-full p-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-1 text-center">
                  <span className="text-xs font-medium block">Wooly Rug</span>
                  <span className="text-[10px] text-gray-500 text-center">
                    ID: WR-2025-01
                  </span>
                </div>
              </div>
              <div
                className={`flex flex-col items-center p-2 rounded-md cursor-pointer border transition-all duration-200 ${
                  isSelected("Tibeten Woven Rug")
                    ? "bg-blue-50 border-blue-300 shadow-sm"
                    : "border-gray-100 hover:border-gray-200 hover:bg-gray-50"
                }`}
                onClick={() => handleProductSelect("Tibeten Woven Rug")}
              >
                <div className="w-full h-20 relative mb-1">
                  <Image
                    src="/tibeten-rug-thumbnail-small.png"
                    alt="Tibeten Woven Rug Thumbnail"
                    fill
                    className="object-contain rounded-sm"
                  />
                  {isSelected("Tibeten Woven Rug") && (
                    <div className="absolute top-1 right-1 bg-blue-600 rounded-full p-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="mt-1">
                  <span className="text-xs font-medium block">
                    Tibeten Woven Rug
                  </span>
                  <span className="text-[10px] text-gray-500">
                    ID: TWR-2025-02
                  </span>
                </div>
              </div>
              <div
                className={`flex flex-col items-center p-2 rounded-md cursor-pointer border transition-all duration-200 ${
                  isSelected("Antique Brass Linen Shade Floor Lamp")
                    ? "bg-blue-50 border-blue-300 shadow-sm"
                    : "border-gray-100 hover:border-gray-200 hover:bg-gray-50"
                }`}
                onClick={() =>
                  handleProductSelect("Antique Brass Linen Shade Floor Lamp")
                }
              >
                <div className="w-full h-20 relative mb-1">
                  <Image
                    src="/antique-brass-lamp-thumbnail-fixed.png"
                    alt="Antique Brass Linen Shade Floor Lamp Thumbnail"
                    fill
                    className="object-contain rounded-sm"
                  />
                  {isSelected("Antique Brass Linen Shade Floor Lamp") && (
                    <div className="absolute top-1 right-1 bg-blue-600 rounded-full p-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="mt-1">
                  <span className="text-xs font-medium block">
                    Antique Brass Lamp
                  </span>
                  <span className="text-[10px] text-gray-500">
                    ID: ABL-2025-03
                  </span>
                </div>
              </div>
              <div
                className={`flex flex-col items-center p-2 rounded-md cursor-pointer border transition-all duration-200 ${
                  isSelected("Verity Yara Abstract Rug")
                    ? "bg-blue-50 border-blue-300 shadow-sm"
                    : "border-gray-100 hover:border-gray-200 hover:bg-gray-50"
                }`}
                onClick={() => handleProductSelect("Verity Yara Abstract Rug")}
              >
                <div className="w-full h-20 relative mb-1">
                  <Image
                    src="/verity-yara-rug-thumbnail-small.png"
                    alt="Verity Yara Abstract Rug Thumbnail"
                    fill
                    className="object-contain rounded-sm"
                  />
                  {isSelected("Verity Yara Abstract Rug") && (
                    <div className="absolute top-1 right-1 bg-blue-600 rounded-full p-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="mt-1">
                  <span className="text-xs font-medium block">
                    Verity Yara Rug
                  </span>
                  <span className="text-[10px] text-gray-500">
                    ID: VYR-2025-04
                  </span>
                </div>
              </div>
              <div
                className={`flex flex-col items-center p-2 rounded-md cursor-pointer border transition-all duration-200 ${
                  isSelected("Braxton Accent Chair, Blue")
                    ? "bg-blue-50 border-blue-300 shadow-sm"
                    : "border-gray-100 hover:border-gray-200 hover:bg-gray-50"
                }`}
                onClick={() =>
                  handleProductSelect("Braxton Accent Chair, Blue")
                }
              >
                <div className="w-full h-20 relative mb-1">
                  <Image
                    src="/braxton-accent-chair-blue.png"
                    alt="Braxton Accent Chair, Blue Thumbnail"
                    fill
                    className="object-contain rounded-sm"
                  />
                  {isSelected("Braxton Accent Chair, Blue") && (
                    <div className="absolute top-1 right-1 bg-blue-600 rounded-full p-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="mt-1">
                  <span className="text-xs font-medium block">
                    Braxton Accent Chair
                  </span>
                  <span className="text-[10px] text-gray-500">
                    ID: BAC-2025-06
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto h-screen">
        <div className="p-6 overflow-auto">
          {selectedProducts.length > 0 ? (
            <>
              {selectedProducts.includes(
                "Indira Geometric Hand-Knotted Rug"
              ) && (
                <div className="mb-8">
                  {/* Product Header */}
                  <div className="border-b pb-4 mb-6">
                    <div className="flex flex-wrap items-center gap-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 relative flex-shrink-0">
                          <Image
                            src="/indira-geometric-rug-thumbnail.png"
                            alt="Indira Geometric Hand-Knotted Rug"
                            width={48}
                            height={48}
                            className="border object-contain rounded-sm"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-base">
                            Indira Geometric Hand-Knotted Wool/Viscose Soft Gray
                            Area Rug
                          </h3>
                          <div className="flex gap-2 text-xs text-gray-600">
                            <span>Indoor</span>
                            <span>•</span>
                            <span>Premium</span>
                            <span>•</span>
                            <span>Hand-Knotted</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Geometric Pattern
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Wool/Viscose
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Soft Gray
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Luxury
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Market Research for Indira Rug */}
                  <div className="mb-8">
                    <div className="border rounded-lg p-4 mb-6">
                      <div className="mb-4 border-b pb-3">
                        <h2 className="text-lg font-semibold">
                          <StepLabel
                            number={1}
                            description={stepDescriptions[0]}
                          />
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="mb-4">
                            <div className="grid grid-cols-2 gap-3 mb-4">
                              <div className="border rounded-lg overflow-hidden">
                                <Image
                                  src="/indira-competitor-1.png"
                                  alt="Geometric hand-knotted rug in modern living room with mid-century wooden furniture and neutral tones"
                                  width={600}
                                  height={600}
                                  className="w-full h-auto"
                                />
                                <div className="bg-gray-100 p-2 text-center text-xs font-medium">
                                  <div>Mid-Century Modern Style</div>
                                </div>
                              </div>
                              <div className="border rounded-lg overflow-hidden">
                                <Image
                                  src="/indira-competitor-2.png"
                                  alt="Geometric diamond pattern rug in contemporary living room with gray sofa and navy accent chair"
                                  width={600}
                                  height={600}
                                  className="w-full h-auto"
                                />
                                <div className="bg-gray-100 p-2 text-center text-xs font-medium">
                                  <div>Contemporary Modern Style</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border-l pl-6">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-medium">
                              Key Insights Applied
                            </h4>
                            <Button
                              className="bg-black text-white hover:bg-black/90 text-sm py-1 h-auto flex items-center gap-1"
                              onClick={() =>
                                openPdpAnalysis(
                                  "Indira Geometric Hand-Knotted Rug"
                                )
                              }
                            >
                              <FileText className="h-3.5 w-3.5" />
                              View Full PDP Analysis-Copy
                            </Button>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-3">
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Geometric patterns work best in clean, modern
                                settings with minimal clutter.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Neutral gray and beige tones complement both
                                warm wood and cool metal finishes.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Hand-knotted texture adds luxury appeal and
                                justifies premium pricing.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Large format rugs anchor seating areas and
                                define conversation spaces.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Sophisticated diamond lattice pattern appeals to
                                design-conscious consumers.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Versatile styling works with both mid-century
                                and contemporary furniture.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 with Tabs for Indira */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <h2 className="text-lg font-semibold w-full">
                        <StepLabel
                          number={2}
                          description={stepDescriptions[1]}
                        />
                      </h2>
                    </div>

                    {/* Tab Navigation */}
                    <div className="mb-6">
                      <div className="flex bg-gray-100 p-1 rounded-lg w-full max-w-md mx-auto">
                        <button
                          onClick={() => setActiveTabIndira("dtc-copy")}
                          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg transition-all duration-200 ${
                            activeTabIndira === "dtc-copy"
                              ? "bg-white text-blue-600 shadow-md"
                              : "text-gray-700 hover:bg-gray-200/50 hover:text-gray-900"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                            <rect
                              width="8"
                              height="4"
                              x="8"
                              y="2"
                              rx="1"
                              ry="1"
                            />
                            <path d="M9 14h6" />
                            <path d="M9 18h6" />
                            <path d="M9 10h6" />
                          </svg>
                          Copy
                        </button>
                        <button
                          onClick={() => setActiveTabIndira("dtc-content")}
                          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg transition-all duration-200 ${
                            activeTabIndira === "dtc-content"
                              ? "bg-white text-blue-600 shadow-md"
                              : "text-gray-700 hover:bg-gray-200/50 hover:text-gray-900"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              width="18"
                              height="18"
                              x="3"
                              y="3"
                              rx="2"
                              ry="2"
                            />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                          </svg>
                          Content
                        </button>
                      </div>
                    </div>

                    {/* Tab Content for Indira */}
                    {activeTabIndira === "dtc-copy" && (
                      <div className="border rounded-lg p-4">
                        <div className="mb-4">
                          <h3 className="font-medium mb-2">
                            Product Description
                          </h3>
                          <div className="bg-gray-50 p-4 rounded-md border">
                            <p className="text-sm mb-3">
                              <strong>
                                Indira Margo – A Hand-Knotted Statement of Soft
                                Geometry and Timeless Texture
                              </strong>
                            </p>
                            <p className="text-sm mb-3">
                              Inspired by Moroccan heirloom design and
                              reimagined for serene, modern homes, the Indira
                              Margo rug creates a calming foundation with plush
                              softness underfoot. Its hand-knotted craftsmanship
                              speaks to quiet luxury, while scalloped edges and
                              a white diamond trellis invite texture and visual
                              rhythm into any space.
                            </p>
                            <p className="text-sm mb-3">
                              <strong>HAND-KNOTTED HERITAGE:</strong> Artfully
                              hand-knotted by skilled artisans in India for
                              exceptional texture, durability, and nuanced
                              patterning
                            </p>
                            <p className="text-sm mb-3">
                              <strong>LUXURIOUS TEXTURE:</strong> Made from a
                              plush blend of natural wool and Tencel™ fibers for
                              a soft, lustrous finish with a high-pile feel
                            </p>
                            <p className="text-sm mb-3">
                              <strong>MODERN MOROCCAN DESIGN:</strong> Features
                              a tone-on-tone gray palette with ivory geometric
                              trellis and scalloped edge for a tactile, elevated
                              aesthetic
                            </p>
                            <p className="text-sm mb-3">
                              <strong>INDOOR-READY COMFORT:</strong> A cozy yet
                              breathable construction that's floor-heating safe
                              and ideal for bedrooms, living rooms, or quiet
                              sitting areas
                            </p>
                            <p className="text-sm mb-3">
                              <strong>EASY CARE:</strong> Vacuum regularly using
                              a suction-only setting. Blot spills immediately.
                              For deep cleaning, professional rug cleaning is
                              recommended
                            </p>
                            <p className="text-sm mb-3">
                              <strong>RUG PAD RECOMMENDED:</strong> Use with a
                              rug pad to prevent shifting and to extend the life
                              of your rug
                            </p>
                            <p className="text-sm mb-3">
                              Size Variance: All sizes are nominal with a
                              variance of +/- 3%
                            </p>
                            <p className="text-sm mb-3">
                              <strong>USAGE SUGGESTIONS</strong>
                            </p>
                            <p className="text-sm">
                              Perfect for bedrooms, reading nooks, or living
                              rooms where soft texture and timeless design
                              elevate a calm, collected atmosphere.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTabIndira === "dtc-content" && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="border rounded-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Image
                              src="/indira-rug-lifestyle-1.jpeg"
                              alt="Indira Geometric Hand-Knotted Rug in sophisticated living room with knitted pouf, brass side table, and abstract artwork"
                              width={800}
                              height={600}
                              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center">
                              <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Contemporary Living Room
                              </span>
                              <button
                                onClick={() =>
                                  handleDownloadImage(
                                    "/indira-rug-lifestyle-1.jpeg",
                                    "Indira-Rug-Contemporary-Living-Room.jpeg"
                                  )
                                }
                                className="bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 hover:bg-gray-50 transition-colors shadow-sm"
                              >
                                <Download className="h-4 w-4" />
                                Download
                              </button>
                            </div>
                          </div>
                          <div className="border rounded-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Image
                              src="/indira-rug-lifestyle-2.jpeg"
                              alt="Indira Geometric Hand-Knotted Rug in elegant room with white paneled walls, natural light, and sophisticated styling"
                              width={800}
                              height={600}
                              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center">
                              <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Elegant Interior Setting
                              </span>
                              <button
                                onClick={() =>
                                  handleDownloadImage(
                                    "/indira-rug-lifestyle-2.jpeg",
                                    "Indira-Rug-Elegant-Interior.jpeg"
                                  )
                                }
                                className="bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 hover:bg-gray-50 transition-colors shadow-sm"
                              >
                                <Download className="h-4 w-4" />
                                Download
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {selectedProducts.includes("Wooly Rug") && (
                <div className="mb-8">
                  {/* Matched Set Title - Moved to top */}
                  <div className="border-b pb-4 mb-6">
                    <h2 className="text-lg font-semibold"></h2>
                  </div>

                  {/* Product Header - New compact layout for Wooly Rug */}
                  <div className="border-b pb-4 mb-6">
                    <div className="flex flex-wrap items-center gap-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 relative flex-shrink-0">
                          <Image
                            src="/wooly-rug-thumbnail-small.png"
                            alt="Wooly Rug"
                            width={48}
                            height={48}
                            className="border object-contain rounded-sm"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-base">Wooly Rug</h3>
                          <div className="flex gap-2 text-xs text-gray-600">
                            <span>Indoor</span>
                            <span>•</span>
                            <span>Premium</span>
                            <span>•</span>
                            <span>Handcrafted</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Diamond Pattern
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Wool
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Terracotta
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Sustainable
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Market Research - Moved to top */}
                  <div className="mb-8">
                    <div className="border rounded-lg p-4 mb-6">
                      <div className="mb-4 border-b pb-3">
                        <h2 className="text-lg font-semibold">
                          <StepLabel
                            number={1}
                            description={stepDescriptions[0]}
                          />
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="mb-4">
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-20%20at%209.36.05%E2%80%AFPM-VxPyfYkZAohLhIJadPVi29sWG95fIO.png"
                              alt="Competitor rugs comparison - Safavieh and Addison"
                              width={1200}
                              height={600}
                              className="w-full h-auto mb-1 border"
                            />
                            <div className="grid grid-cols-2 gap-3 mb-4">
                              <div className="border rounded-lg overflow-hidden">
                                <div className="bg-gray-100 p-2 text-center text-xs font-medium">
                                  <div>Safavieh, Wayfair</div>
                                </div>
                              </div>
                              <div className="border rounded-lg overflow-hidden">
                                <div className="bg-gray-100 p-2 text-center text-xs font-medium">
                                  <div>Addison, Amazon</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border-l pl-6">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-medium">
                              Key Insights Applied
                            </h4>
                            <Button
                              className="bg-black text-white hover:bg-black/90 text-sm py-1 h-auto flex items-center gap-1"
                              onClick={() => openPdpAnalysis("Wooly Rug")}
                            >
                              <FileText className="h-3.5 w-3.5" />
                              View Full PDP Analysis-Copy
                            </Button>
                          </div>
                          <div className="text-sm text-gray-700">
                            <ul className="space-y-1 pl-4">
                              <li className="flex gap-2">
                                <span className="text-green-500 font-bold">
                                  ✓
                                </span>
                                <span>
                                  Room Style: Scandinavian x Mid-century blend
                                </span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-green-500 font-bold">
                                  ✓
                                </span>
                                <span>
                                  Palette: Warm creams, terracotta, soft taupe
                                  or olive green
                                </span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-green-500 font-bold">
                                  ✓
                                </span>
                                <span>
                                  Furniture: Soft modern lines, natural wood
                                  tones
                                </span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-green-500 font-bold">
                                  ✓
                                </span>
                                <span>
                                  Textures: Woven throw on sofa, ceramic decor,
                                  wool rug grain visible
                                </span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-green-500 font-bold">
                                  ✓
                                </span>
                                <span>
                                  Rug fully visible in foreground, angled.
                                </span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-green-500 font-bold">
                                  ✓
                                </span>
                                <span>
                                  Lamp positioned to one side, grounded with a
                                  side table.
                                </span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-green-500 font-bold">
                                  ✓
                                </span>
                                <span>
                                  Couch and soft furnishing to establish scale
                                  and softness.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 with Tabs */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <h2 className="text-lg font-semibold w-full">
                        <StepLabel
                          number={2}
                          description={stepDescriptions[1]}
                        />
                      </h2>
                    </div>

                    {/* Tab Navigation */}
                    <div className="mb-6">
                      <div className="flex bg-gray-100 p-1 rounded-lg w-full max-w-md mx-auto">
                        <button
                          onClick={() => setActiveTabWooly("dtc-copy")}
                          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg transition-all duration-200 ${
                            activeTabWooly === "dtc-copy"
                              ? "bg-white text-blue-600 shadow-md"
                              : "text-gray-700 hover:bg-gray-200/50 hover:text-gray-900"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                            <rect
                              width="8"
                              height="4"
                              x="8"
                              y="2"
                              rx="1"
                              ry="1"
                            />
                            <path d="M9 14h6" />
                            <path d="M9 18h6" />
                            <path d="M9 10h6" />
                          </svg>
                          Copy
                        </button>
                        <button
                          onClick={() => setActiveTabWooly("dtc-content")}
                          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg transition-all duration-200 ${
                            activeTabWooly === "dtc-content"
                              ? "bg-white text-blue-600 shadow-md"
                              : "text-gray-700 hover:bg-gray-200/50 hover:text-gray-900"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              width="18"
                              height="18"
                              x="3"
                              y="3"
                              rx="2"
                              ry="2"
                            />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                          </svg>
                          Content
                        </button>
                      </div>
                    </div>

                    {/* Tab Content */}
                    {activeTabWooly === "dtc-copy" && (
                      <div className="border rounded-lg p-4">
                        <div className="mb-4">
                          <h3 className="font-medium mb-2">
                            Product Description
                          </h3>
                          <div className="bg-gray-50 p-4 rounded-md border">
                            <p className="text-sm mb-3">
                              <strong>
                                Wooly – A Plush Hand-Tufted Rug That Marries
                                Comfort with Global Charm
                              </strong>
                            </p>
                            <p className="text-sm mb-3">
                              Wrap your home in warmth and artisanal character
                              with the Wooly rug — a hand-tufted masterpiece
                              that blends cozy texture with worldly elegance.
                              Inspired by bohemian aesthetics and made for
                              modern living, this rug offers a soft, welcoming
                              foundation that brings soulful comfort to any
                              room.
                            </p>
                            <p className="text-sm mb-3">
                              <strong>HAND-TUFTED TEXTURE:</strong> Crafted in
                              India by skilled artisans using a luxurious blend
                              of 60% wool, 35% cotton, and 5% nylon for a richly
                              textured, medium pile surface that feels as good
                              as it looks.
                            </p>
                            <p className="text-sm mb-3">
                              <strong>SOFT & DURABLE:</strong> The
                              plush-yet-resilient medium pile is cozy underfoot
                              while withstanding everyday wear — ideal for homes
                              with kids, pets, and high-traffic areas.
                            </p>
                            <p className="text-sm mb-3">
                              <strong>WASHABLE CONVENIENCE:</strong>{" "}
                              Machine-washable design allows for effortless
                              cleaning. For best results, wash on a delicate
                              setting using water only and hang to dry.
                            </p>
                            <p className="text-sm mb-3">
                              <strong>GLOBAL-INSPIRED STYLE:</strong> Earthy
                              tones and subtle texture lend this piece a
                              worldly, bohemian feel — perfect for layering into
                              modern, rustic, or eclectic interiors.
                            </p>
                            <p className="text-sm mb-3">
                              <strong>FAMILY-FRIENDLY FUNCTION:</strong>{" "}
                              Designed to slip seamlessly under furniture and
                              doors, making it perfect for living rooms, dining
                              rooms, kitchens, and entryways.
                            </p>
                            <p className="text-sm mb-3">
                              <strong>Usage Suggestions</strong>
                            </p>
                            <p className="text-sm mb-3">
                              Pair with neutral furnishings and textured
                              accessories for a grounded, organic vibe. Ideal
                              under dining tables, beds, or in cozy reading
                              corners.
                            </p>
                            <p className="text-sm mb-3">
                              <strong>Additional Tips</strong>
                            </p>
                            <p className="text-sm mb-3">
                              We recommend using a non-skid rug pad to enhance
                              comfort and reduce shifting. Larger sizes may
                              require commercial washers or gentle hose-off
                              cleaning.
                            </p>
                            <p className="text-sm mb-3">
                              <strong>Sustainability Info</strong>
                            </p>
                            <p className="text-sm">
                              Crafted using natural wool fibers for a lower
                              environmental impact and long-lasting performance.
                            </p>
                            <p className="text-xs mt-2">
                              <em>
                                Note: This description is crafted specifically
                                for ABC Brand's DTC website and direct marketing
                                channels.
                              </em>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTabWooly === "dtc-content" && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="border rounded-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2020%2C%202025%2C%2002_52_27%20PM-TqmjnYNSdaUJjvzQsOJhlwXb5SwugO.png"
                              alt="Wooly Rug with Youri Lamp in living room"
                              width={600}
                              height={400}
                              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center">
                              <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Living Room Setting
                              </span>
                              <button
                                onClick={() =>
                                  handleDownloadImage(
                                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2020%2C%202025%2C%2002_52_27%20PM-TqmjnYNSdaUJjvzQsOJhlwXb5SwugO.png",
                                    "Wooly-Rug-Youri-Lamp-Living-Room.png"
                                  )
                                }
                                className="bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 hover:bg-gray-50 transition-colors shadow-sm"
                              >
                                <Download className="h-4 w-4" />
                                Download
                              </button>
                            </div>
                          </div>
                          <div className="border rounded-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2020%2C%202025%2C%2002_42_23%20PM%20%281%29-u2b447JXbUIESc3CkwVa7UVAegsyBS.png"
                              alt="Wooly Rug with Youri Lamp in modern setting"
                              width={600}
                              height={400}
                              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center">
                              <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Modern Setting
                              </span>
                              <button
                                onClick={() =>
                                  handleDownloadImage(
                                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2020%2C%202025%2C%2002_42_23%20PM%20%281%29-u2b447JXbUIESc3CkwVa7UVAegsyBS.png",
                                    "Wooly-Rug-Youri-Lamp-Modern-Setting.png"
                                  )
                                }
                                className="bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 hover:bg-gray-50 transition-colors shadow-sm"
                              >
                                <Download className="h-4 w-4" />
                                Download
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {selectedProducts.includes("Tibeten Woven Rug") && (
                <div className="mb-8">
                  {/* Matched Set Title - Moved to top */}
                  <div className="border-b pb-4 mb-6">
                    <h2 className="text-lg font-semibold"></h2>
                  </div>

                  {/* Product Header - New compact layout */}
                  <div className="border-b pb-4 mb-6">
                    <div className="flex flex-wrap items-center gap-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 relative flex-shrink-0">
                          <Image
                            src="/tibeten-rug-thumbnail-small.png"
                            alt="Tibeten Woven Rug"
                            width={48}
                            height={48}
                            className="border object-contain rounded-sm"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-base">
                            Tibeten Woven Rug
                          </h3>
                          <div className="flex gap-2 text-xs text-gray-600">
                            <span>Indoor</span>
                            <span>•</span>
                            <span>Premium</span>
                            <span>•</span>
                            <span>Hand-Loomed</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Grid Pattern
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Wool Blend
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Beige/Gray
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Low Pile
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Market Research for Tibeten Set */}
                  <div className="mb-8">
                    <div className="border rounded-lg p-4 mb-6">
                      <div className="mb-4 border-b pb-3">
                        <h2 className="text-lg font-semibold">
                          <StepLabel
                            number={1}
                            description={stepDescriptions[0]}
                          />
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="mb-4">
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-20%20at%209.30.55%E2%80%AFPM-oxTh6MMnzjeOV5lTquGNumGtbZ4pgq.png"
                              alt="Competitor rugs comparison - Jonathan Y and Wayfair"
                              width={1200}
                              height={600}
                              className="w-full h-auto mb-1 border"
                            />
                            <div className="grid grid-cols-2 gap-3 mb-4">
                              <div className="border rounded-lg overflow-hidden">
                                <div className="bg-gray-100 p-2 text-center text-xs font-medium">
                                  <div>Jonathan Y, Wayfair</div>
                                </div>
                              </div>
                              <div className="border rounded-lg overflow-hidden">
                                <div className="bg-gray-100 p-2 text-center text-xs font-medium">
                                  <div>Wayfair</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border-l pl-6">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-medium">
                              Key Insights Applied
                            </h4>
                            <Button
                              className="bg-black text-white hover:bg-black/90 text-sm py-1 h-auto flex items-center gap-1"
                              onClick={() =>
                                openPdpAnalysis("Tibeten Woven Rug")
                              }
                            >
                              <FileText className="h-3.5 w-3.5" />
                              View Full PDP Analysis-Copy
                            </Button>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-3">
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Use the lamp to anchor one side of the frame;
                                don't center it.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Lamp adds verticality — great for balancing a
                                low-sitting rug.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Ensure texture of lamp shade is visible — soft
                                light helps.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Consider a warm taupe to beige background to
                                contrast with the Tibetan weave.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                If pattern is complex, go for a straight-on or
                                top-down angle.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Use this look for SKUs with stronger
                                texture/pattern emphasis.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 with Tabs for Tibeten */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <h2 className="text-lg font-semibold w-full">
                        <StepLabel
                          number={2}
                          description={stepDescriptions[1]}
                        />
                      </h2>
                    </div>

                    {/* Tab Navigation */}
                    <div className="mb-6">
                      <div className="flex bg-gray-100 p-1 rounded-lg w-full max-w-md mx-auto">
                        <button
                          onClick={() => setActiveTabTibeten("dtc-copy")}
                          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg transition-all duration-200 ${
                            activeTabTibeten === "dtc-copy"
                              ? "bg-white text-blue-600 shadow-md"
                              : "text-gray-700 hover:bg-gray-200/50 hover:text-gray-900"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                            <rect
                              width="8"
                              height="4"
                              x="8"
                              y="2"
                              rx="1"
                              ry="1"
                            />
                            <path d="M9 14h6" />
                            <path d="M9 18h6" />
                            <path d="M9 10h6" />
                          </svg>
                          Copy
                        </button>
                        <button
                          onClick={() => setActiveTabTibeten("dtc-content")}
                          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg transition-all duration-200 ${
                            activeTabTibeten === "dtc-content"
                              ? "bg-white text-blue-600 shadow-md"
                              : "text-gray-700 hover:bg-gray-200/50 hover:text-gray-900"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              width="18"
                              height="18"
                              x="3"
                              y="3"
                              rx="2"
                              ry="2"
                            />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                          </svg>
                          Content
                        </button>
                      </div>
                    </div>

                    {/* Tab Content for Tibeten */}
                    {activeTabTibeten === "dtc-copy" && (
                      <div className="border rounded-lg p-4">
                        <div className="mb-4">
                          <h3 className="font-medium mb-2">
                            Product Description
                          </h3>
                          <div className="bg-gray-50 p-4 rounded-md border">
                            <p className="text-sm mb-3">
                              <strong>
                                Tibeten Woven Rug - Sophisticated Grid Pattern
                              </strong>
                            </p>
                            <p className="text-sm mb-3">
                              Elevate your interior with our meticulously
                              hand-loomed Tibeten Woven Rug, featuring a refined
                              grid pattern in neutral beige and gray tones. This
                              premium wool blend rug combines traditional
                              craftsmanship with contemporary design
                              sensibilities.
                            </p>
                            <p className="text-sm mb-3">
                              The subtle geometric grid creates visual depth
                              while maintaining understated elegance, making it
                              perfect for modern and transitional spaces. Its
                              low-pile construction ensures durability and easy
                              maintenance without compromising on comfort.
                            </p>
                            <p className="text-sm">
                              Ideal for high-traffic areas, this versatile piece
                              complements both minimalist and maximalist design
                              approaches.
                            </p>
                            <p className="text-xs mt-2">
                              <em>
                                Note: This description is crafted specifically
                                for ABC Brand's DTC website and direct marketing
                                channels.
                              </em>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTabTibeten === "dtc-content" && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Large featured image */}
                          <div className="border rounded-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2020%2C%202025%2C%2004_06_59%20PM-xAe7cvGgHdD1pacmY96zZlUsPnRIsY.png"
                              alt="Tibeten Woven Rug with Ceduna Floor Lamp in modern living room"
                              width={800}
                              height={600}
                              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center">
                              <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Modern Living Room
                              </span>
                              <button
                                onClick={() =>
                                  handleDownloadImage(
                                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2020%2C%202025%2C%2004_06_59%20PM-xAe7cvGgHdD1pacmY96zZlUsPnRIsY.png",
                                    "Tibeten-Rug-Ceduna-Lamp-Living-Room.png"
                                  )
                                }
                                className="bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 hover:bg-gray-50 transition-colors shadow-sm"
                              >
                                <Download className="h-4 w-4" />
                                Download
                              </button>
                            </div>
                          </div>

                          {/* Two smaller images stacked */}

                          <div className="border rounded-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2020%2C%202025%2C%2003_40_27%20PM-5dXU48CUsYZTMv192yN2HovQiqEiCc.png"
                              alt="Tibeten Woven Rug with Ceduna Floor Lamp in living room with sofa"
                              width={400}
                              height={300}
                              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center">
                              <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Sofa Setting
                              </span>
                              <button
                                onClick={() =>
                                  handleDownloadImage(
                                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2020%2C%202025%2C%2003_40_27%20PM-5dXU48CUsYZTMv192yN2HovQiqEiCc.png",
                                    "Tibeten-Rug-Ceduna-Lamp-Sofa.png"
                                  )
                                }
                                className="bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 hover:bg-gray-50 transition-colors shadow-sm"
                              >
                                <Download className="h-4 w-4" />
                                Download
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {selectedProducts.includes(
                "Antique Brass Linen Shade Floor Lamp"
              ) && (
                <div className="mb-8">
                  {/* Matched Set Title - Moved to top */}
                  <div className="border-b pb-4 mb-6">
                    <h2 className="text-lg font-semibold"></h2>
                  </div>

                  {/* Product Header - New compact layout */}
                  <div className="border-b pb-4 mb-16">
                    <div className="flex flex-wrap items-center gap-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 relative flex-shrink-0">
                          <Image
                            src="/antique-brass-lamp-thumbnail-fixed.png"
                            alt="Antique Brass Linen Shade Floor Lamp"
                            width={48}
                            height={48}
                            className="border object-contain rounded-sm"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-base">
                            Antique Brass Linen Shade Floor Lamp
                          </h3>
                          <div className="flex gap-2 text-xs text-gray-600">
                            <span>Indoor</span>
                            <span>•</span>
                            <span>Premium</span>
                            <span>•</span>
                            <span>Classic</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Brass Finish
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Linen Shade
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Adjustable Height
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Dimmable
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Market Research for Brass Lamp Set */}
                  <div className="mb-16">
                    <div className="border rounded-lg p-4 mb-6">
                      <div className="mb-4 border-b pb-3">
                        <h2 className="text-lg font-semibold">
                          <StepLabel
                            number={1}
                            description={stepDescriptions[0]}
                          />
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="border rounded-lg overflow-hidden">
                              <Image
                                src="/wayfair-brass-lamp.png"
                                alt="Wayfair - Brass floor lamp with white shade next to dark green chair with orange pillow"
                                width={600}
                                height={800}
                                className="w-full h-auto"
                              />
                              <div className="bg-gray-100 p-2 text-center text-xs font-medium">
                                <div>Visual Comfort & Co., Wayfair</div>
                              </div>
                            </div>
                            <div className="border rounded-lg overflow-hidden">
                              <Image
                                src="/serena-lily-brass-lamp.png"
                                alt="Serena & Lily - Brass floor lamp with white shade next to white sofa in bright room"
                                width={600}
                                height={800}
                                className="w-full h-auto"
                              />
                              <div className="bg-gray-100 p-2 text-center text-xs font-medium">
                                <div>Arteriors, Serena & Lily</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border-l pl-6">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-medium">
                              Key Insights Applied
                            </h4>
                            <Button
                              className="bg-black text-white hover:bg-black/90 text-sm py-1 h-auto flex items-center gap-1"
                              onClick={() =>
                                openPdpAnalysis(
                                  "Antique Brass Linen Shade Floor Lamp"
                                )
                              }
                            >
                              <FileText className="h-3.5 w-3.5" />
                              View Full PDP Analysis-Copy
                            </Button>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-3">
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Position lamp strategically near seating to
                                create functional lighting zones.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Brass finish adds warmth and elegance to
                                neutral-toned spaces.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Pair with wood tones (medium to dark) for a
                                cohesive, sophisticated look.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Marble base adds premium feel and balances the
                                tall, slender profile.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Complementary accent colors: olive green, burnt
                                orange, or deep teal.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Cylindrical shade provides clean lines that work
                                in both traditional and modern settings.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 with Tabs for Brass Lamp */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <h2 className="text-lg font-semibold w-full">
                        <StepLabel
                          number={2}
                          description={stepDescriptions[1]}
                        />
                      </h2>
                    </div>

                    {/* Tab Navigation */}
                    <div className="mb-6">
                      <div className="flex bg-gray-100 p-1 rounded-lg w-full max-w-md mx-auto">
                        <button
                          onClick={() => setActiveTabBrass("dtc-copy")}
                          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg transition-all duration-200 ${
                            activeTabBrass === "dtc-copy"
                              ? "bg-white text-blue-600 shadow-md"
                              : "text-gray-700 hover:bg-gray-200/50 hover:text-gray-900"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                            <rect
                              width="8"
                              height="4"
                              x="8"
                              y="2"
                              rx="1"
                              ry="1"
                            />
                            <path d="M9 14h6" />
                            <path d="M9 18h6" />
                            <path d="M9 10h6" />
                          </svg>
                          Copy
                        </button>
                        <button
                          onClick={() => setActiveTabBrass("dtc-content")}
                          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg transition-all duration-200 ${
                            activeTabBrass === "dtc-content"
                              ? "bg-white text-blue-600 shadow-md"
                              : "text-gray-700 hover:bg-gray-200/50 hover:text-gray-900"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              width="18"
                              height="18"
                              x="3"
                              y="3"
                              rx="2"
                              ry="2"
                            />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                          </svg>
                          Content
                        </button>
                      </div>
                    </div>

                    {/* Tab Content for Brass Lamp */}
                    {activeTabBrass === "dtc-copy" && (
                      <div className="border rounded-lg p-4">
                        <div className="mb-4">
                          <h3 className="font-medium mb-2">
                            Product Description
                          </h3>
                          <div className="bg-gray-50 p-4 rounded-md border">
                            <p className="text-sm mb-3">
                              <strong>
                                Bryant Adjustable Floor Lamp – Timeless Brass
                                Elegance by Thomas O'Brien
                              </strong>
                            </p>
                            <p className="text-sm mb-3">
                              An architectural silhouette meets understated
                              elegance in this floor lamp by Thomas O'Brien.
                              With its warm antique brass finish and tailored
                              linen shade, it's the perfect balance of form and
                              function.
                            </p>
                            <p className="text-sm mb-3">
                              <strong>Why You'll Love It:</strong>
                            </p>
                            <ul className="text-sm mb-3 pl-4 space-y-1">
                              <li>
                                Hand-rubbed antique brass finish that naturally
                                patinas over time
                              </li>
                              <li>
                                Tapered white linen shade for a soft, diffused
                                glow
                              </li>
                              <li>
                                Adjustable height (45"–62") for perfect
                                placement beside sofas or reading chairs
                              </li>
                              <li>
                                ETL certified and dry-rated – safe and elegant
                                for indoor use
                              </li>
                              <li>
                                Designed by Thomas O'Brien, part of the Visual
                                Comfort Signature Collection
                              </li>
                            </ul>
                            <p className="text-sm">
                              Elevate your home with timeless lighting that
                              blends sculptural beauty and practicality. This
                              refined piece is destined to become a beloved
                              fixture in your space.
                            </p>
                            <p className="text-xs mt-2">
                              <em>
                                Note: This description is crafted specifically
                                for ABC Brand's DTC website and direct marketing
                                channels.
                              </em>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTabBrass === "dtc-content" && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Two equally sized images side by side */}
                          <div className="border rounded-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Image
                              src="/brass-lamp-coastal-room.png"
                              alt="Antique Brass Lamp in bright coastal living room with ocean artwork and French doors"
                              width={800}
                              height={600}
                              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center">
                              <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Coastal Living Room
                              </span>
                              <button
                                onClick={() =>
                                  handleDownloadImage(
                                    "/brass-lamp-coastal-room.png",
                                    "Brass-Lamp-Coastal-Room.png"
                                  )
                                }
                                className="bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 hover:bg-gray-50 transition-colors shadow-sm"
                              >
                                <Download className="h-4 w-4" />
                                Download
                              </button>
                            </div>
                          </div>
                          <div className="border rounded-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Image
                              src="/brass-lamp-green-chair.jpeg"
                              alt="Antique Brass Lamp with olive green velvet chair and abstract artwork"
                              width={800}
                              height={600}
                              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center">
                              <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Modern Reading Corner
                              </span>
                              <button
                                onClick={() =>
                                  handleDownloadImage(
                                    "/brass-lamp-green-chair.jpeg",
                                    "Brass-Lamp-Green-Chair.jpeg"
                                  )
                                }
                                className="bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 hover:bg-gray-50 transition-colors shadow-sm"
                              >
                                <Download className="h-4 w-4" />
                                Download
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {selectedProducts.includes("Verity Yara Abstract Rug") && (
                <div className="mb-8">
                  {/* Product Title */}
                  <div className="border-b pb-4 mb-6">
                    <h2 className="text-lg font-semibold"></h2>
                  </div>

                  {/* Product Header */}
                  <div className="border-b pb-4 mb-6">
                    <div className="flex flex-wrap items-center gap-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 relative flex-shrink-0">
                          <Image
                            src="/verity-yara-rug-thumbnail-small.png"
                            alt="Verity Yara Abstract Rug"
                            width={48}
                            height={48}
                            className="border object-contain rounded-sm"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-base">
                            Verity Yara Abstract Rug
                          </h3>
                          <div className="flex gap-2 text-xs text-gray-600">
                            <span>Indoor</span>
                            <span>•</span>
                            <span>Premium</span>
                            <span>•</span>
                            <span>Modern</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Abstract Pattern
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Polypropylene
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Gray/Beige
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Low Maintenance
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Market Research */}
                  <div className="mb-8">
                    <div className="border rounded-lg p-4 mb-6">
                      <div className="mb-4 border-b pb-3">
                        <h2 className="text-lg font-semibold">
                          <StepLabel
                            number={1}
                            description={stepDescriptions[0]}
                          />
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="mb-4">
                            <div className="grid grid-cols-2 gap-3 mb-4">
                              <div className="border rounded-lg overflow-hidden">
                                <Image
                                  src="/luxe-weavers-amazon-rug.png"
                                  alt="Luxe Weavers abstract rug from Amazon in modern loft bedroom with exposed beams and bohemian styling"
                                  width={600}
                                  height={600}
                                  className="w-full h-auto"
                                />
                                <div className="bg-gray-100 p-2 text-center text-xs font-medium">
                                  <div>Luxe Weavers, Amazon</div>
                                </div>
                              </div>
                              <div className="border rounded-lg overflow-hidden">
                                <Image
                                  src="/orin-ellis-wayfair-rug.png"
                                  alt="Orin Ellis abstract rug from Wayfair with mid-century modern chair and contemporary styling"
                                  width={600}
                                  height={600}
                                  className="w-full h-auto"
                                />
                                <div className="bg-gray-100 p-2 text-center text-xs font-medium">
                                  <div>Orin Ellis, Wayfair</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border-l pl-6">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-medium">
                              Key Insights Applied
                            </h4>
                            <Button
                              className="bg-black text-white hover:bg-black/90 text-sm py-1 h-auto flex items-center gap-1"
                              onClick={() =>
                                openPdpAnalysis("Verity Yara Abstract Rug")
                              }
                            >
                              <FileText className="h-3.5 w-3.5" />
                              View Full PDP Analysis-Copy
                            </Button>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-3">
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Abstract patterns work best in minimalist,
                                contemporary settings.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Neutral palette allows for bold accent colors in
                                furniture and decor.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Marble-like patterns appeal to luxury market
                                segment.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Low-maintenance materials important for modern
                                lifestyle.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Versatile size options for various room
                                configurations.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 with Tabs */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <h2 className="text-lg font-semibold w-full">
                        <StepLabel
                          number={2}
                          description={stepDescriptions[1]}
                        />
                      </h2>
                    </div>

                    {/* Tab Navigation */}
                    <div className="mb-6">
                      <div className="flex bg-gray-100 p-1 rounded-lg w-full max-w-md mx-auto">
                        <button
                          onClick={() => setActiveTabVerity("dtc-copy")}
                          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg transition-all duration-200 ${
                            activeTabVerity === "dtc-copy"
                              ? "bg-white text-blue-600 shadow-md"
                              : "text-gray-700 hover:bg-gray-200/50 hover:text-gray-900"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                            <rect
                              width="8"
                              height="4"
                              x="8"
                              y="2"
                              rx="1"
                              ry="1"
                            />
                            <path d="M9 14h6" />
                            <path d="M9 18h6" />
                            <path d="M9 10h6" />
                          </svg>
                          Copy
                        </button>
                        <button
                          onClick={() => setActiveTabVerity("dtc-content")}
                          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg transition-all duration-200 ${
                            activeTabVerity === "dtc-content"
                              ? "bg-white text-blue-600 shadow-md"
                              : "text-gray-700 hover:bg-gray-200/50 hover:text-gray-900"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              width="18"
                              height="18"
                              x="3"
                              y="3"
                              rx="2"
                              ry="2"
                            />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                          </svg>
                          Content
                        </button>
                      </div>
                    </div>

                    {/* Tab Content */}
                    {activeTabVerity === "dtc-copy" && (
                      <div className="border rounded-lg p-4">
                        <div className="mb-4">
                          <h3 className="font-medium mb-2">
                            Product Description
                          </h3>
                          <div className="bg-gray-50 p-4 rounded-md border">
                            <p className="text-sm mb-3">
                              Discover the Verity Yara – where artful geometry
                              meets soft, lived-in comfort.
                            </p>
                            <p className="text-sm mb-3">
                              This standout from Well Woven's Verity Collection
                              brings a modern twist to traditional design. With
                              abstract geometric patterns layered in cool greys
                              and highlighted by subtle flashes of contemporary
                              color, Yara is the perfect blend of bold style and
                              everyday function. Woven in Turkey with
                              super-soft, durable polyester yarn, it's cozy
                              underfoot yet easy to clean—and built to stay
                              beautiful in high-traffic spaces.
                            </p>
                            <p className="text-sm mb-3">
                              <strong>Why You'll Love It:</strong>
                            </p>
                            <ul className="text-sm mb-3 pl-4 space-y-1">
                              <li>
                                Luxe mid-height pile: cozy, soft, and easy to
                                vacuum
                              </li>
                              <li>
                                Stain- and fade-resistant: worry-free for busy
                                households
                              </li>
                              <li>
                                Subtle grey palette with stylish color pops:
                                effortlessly modern
                              </li>
                              <li>
                                Durable, shed-free yarn that holds up to daily
                                wear
                              </li>
                              <li>
                                Ideal for contemporary living rooms, bedrooms &
                                home offices
                              </li>
                            </ul>
                            <p className="text-sm mb-3">
                              <strong>Product Details:</strong>
                            </p>
                            <ul className="text-sm mb-3 pl-4 space-y-1">
                              <li>100% polyester yarn</li>
                              <li>Machine-woven in Turkey</li>
                              <li>
                                Rug pad recommended to reduce sliding and extend
                                rug life
                              </li>
                            </ul>
                            <p className="text-sm">
                              <strong>Tip:</strong> Unroll and allow 1–2 days
                              for natural flattening. Color may vary slightly
                              based on lighting and screen settings.
                            </p>
                            <p className="text-xs mt-2">
                              <em>
                                Note: This description is crafted specifically
                                for ABC Brand's DTC website and direct marketing
                                channels.
                              </em>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTabVerity === "dtc-content" && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="border rounded-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-23%20at%206.49.45%E2%80%AFPM.png-kAJs8HQm8bQ9CaUZDg7YG4txY5A8uY.jpeg"
                              alt="Verity Yara Abstract Modern Area Rug in minimalist living room with black leather chair and brass chandelier"
                              width={600}
                              height={400}
                              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center">
                              <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Modern Living Room
                              </span>
                              <button
                                onClick={() =>
                                  handleDownloadImage(
                                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-23%20at%206.49.45%E2%80%AFPM.png-kAJs8HQm8bQ9CaUZDg7YG4txY5A8uY.jpeg",
                                    "Verity-Yara-Modern-Living-Room.jpeg"
                                  )
                                }
                                className="bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 hover:bg-gray-50 transition-colors shadow-sm"
                              >
                                <Download className="h-4 w-4" />
                                Download
                              </button>
                            </div>
                          </div>
                          <div className="border rounded-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Image
                              src="/verity-yara-lifestyle-1.png"
                              alt="Verity Yara Abstract Rug in elegant contemporary living room with rattan chair and modern floor lamp"
                              width={600}
                              height={400}
                              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center">
                              <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Contemporary Living Room
                              </span>
                              <button
                                onClick={() =>
                                  handleDownloadImage(
                                    "/verity-yara-lifestyle-1.png",
                                    "Verity-Yara-Lifestyle-Contemporary.png"
                                  )
                                }
                                className="bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 hover:bg-gray-50 transition-colors shadow-sm"
                              >
                                <Download className="h-4 w-4" />
                                Download
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {selectedProducts.includes("Braxton Accent Chair, Blue") && (
                <div className="mb-8">
                  {/* Product Title */}
                  <div className="border-b pb-4 mb-6">
                    <h2 className="text-lg font-semibold"></h2>
                  </div>

                  {/* Product Header */}
                  <div className="border-b pb-4 mb-6">
                    <div className="flex flex-wrap items-center gap-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 relative flex-shrink-0">
                          <Image
                            src="/braxton-accent-chair-blue.png"
                            alt="Braxton Accent Chair, Blue"
                            width={48}
                            height={48}
                            className="border object-contain rounded-sm"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-base">
                            Braxton Accent Chair, Blue
                          </h3>
                          <div className="flex gap-2 text-xs text-gray-600">
                            <span>Indoor</span>
                            <span>•</span>
                            <span>Premium</span>
                            <span>•</span>
                            <span>Mid-Century Modern</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Blue Upholstery
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Wood Legs
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Accent Chair
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Contemporary
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Market Research for Braxton Accent Chair */}
                  <div className="mb-8">
                    <div className="border rounded-lg p-4 mb-6">
                      <div className="mb-4 border-b pb-3">
                        <h2 className="text-lg font-semibold">
                          <StepLabel
                            number={1}
                            description={stepDescriptions[0]}
                          />
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="mb-4">
                            <div className="grid grid-cols-2 gap-3 mb-4">
                              <div className="border rounded-lg overflow-hidden">
                                <Image
                                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/91xncCSy17L._AC_SL1500_.jpg-2AHM5bs0h5uGb1pbhaQ8UznE6PcRsy.jpeg"
                                  alt="Mid-century modern blue accent chair with wooden legs in living room with wooden credenza, round side table, and brass accents"
                                  width={600}
                                  height={600}
                                  className="w-full h-auto"
                                />
                                <div className="bg-gray-100 p-2 text-center text-xs font-medium">
                                  <div>Mid-Century Modern Collection</div>
                                </div>
                              </div>
                              <div className="border rounded-lg overflow-hidden">
                                <Image
                                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-27%20at%208.58.03%E2%80%AFAM-aM0dhXB0vuVF89oNR3UuYewsL2I9cm.png"
                                  alt="Contemporary navy blue accent chair with wooden legs next to modern wooden credenza and black side table"
                                  width={600}
                                  height={600}
                                  className="w-full h-auto"
                                />
                                <div className="bg-gray-100 p-2 text-center text-xs font-medium">
                                  <div>Contemporary Scandinavian Style</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border-l pl-6">
                          <div className="mb-3">
                            <h4 className="font-medium">
                              Key Insights Applied
                            </h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-3">
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Bold blue upholstery creates striking focal
                                point in neutral spaces.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Mid-century modern silhouette appeals to
                                design-conscious consumers.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Natural wood legs complement brass and warm
                                metal accents.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Compact size perfect for reading corners and
                                bedroom seating.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Structured design provides visual anchor in open
                                floor plans.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Quality construction ensures longevity and
                                investment value.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 with Tabs for Braxton */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <h2 className="text-lg font-semibold w-full">
                        <StepLabel
                          number={2}
                          description={stepDescriptions[1]}
                        />
                      </h2>
                    </div>

                    {/* Tab Navigation */}
                    <div className="mb-6">
                      <div className="flex bg-gray-100 p-1 rounded-lg w-full max-w-md mx-auto">
                        <button
                          onClick={() => setActiveTabBraxton("dtc-copy")}
                          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg transition-all duration-200 ${
                            activeTabBraxton === "dtc-copy"
                              ? "bg-white text-blue-600 shadow-md"
                              : "text-gray-700 hover:bg-gray-200/50 hover:text-gray-900"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                            <rect
                              width="8"
                              height="4"
                              x="8"
                              y="2"
                              rx="1"
                              ry="1"
                            />
                            <path d="M9 14h6" />
                            <path d="M9 18h6" />
                            <path d="M9 10h6" />
                          </svg>
                          Copy
                        </button>
                        <button
                          onClick={() => setActiveTabBraxton("dtc-content")}
                          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg transition-all duration-200 ${
                            activeTabBraxton === "dtc-content"
                              ? "bg-white text-blue-600 shadow-md"
                              : "text-gray-700 hover:bg-gray-200/50 hover:text-gray-900"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              width="18"
                              height="18"
                              x="3"
                              y="3"
                              rx="2"
                              ry="2"
                            />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                          </svg>
                          Content
                        </button>
                      </div>
                    </div>

                    {/* Tab Content for Braxton */}
                    {activeTabBraxton === "dtc-copy" && (
                      <div className="border rounded-lg p-4">
                        <div className="mb-4">
                          <h3 className="font-medium mb-2">
                            Product Description
                          </h3>
                          <div className="bg-gray-50 p-4 rounded-md border">
                            <p className="text-sm mb-3">
                              <strong>
                                Braxton Accent Chair - Bold Blue Statement Piece
                              </strong>
                            </p>
                            <p className="text-sm mb-3">
                              Make a sophisticated statement with our Braxton
                              Accent Chair in striking blue upholstery. This
                              mid-century modern inspired piece combines
                              timeless design with contemporary comfort,
                              featuring clean lines and a structured silhouette
                              that anchors any space with confidence.
                            </p>
                            <p className="text-sm mb-3">
                              The rich blue fabric creates a beautiful focal
                              point while remaining versatile enough to
                              complement various color palettes. Supported by
                              elegant wood legs with a warm finish, this chair
                              seamlessly bridges traditional craftsmanship with
                              modern aesthetics.
                            </p>
                            <p className="text-sm mb-3">
                              <strong>Key Features:</strong>
                            </p>
                            <ul className="text-sm mb-3 pl-4 space-y-1">
                              <li>
                                Premium blue upholstery for sophisticated color
                                impact
                              </li>
                              <li>Solid wood legs with natural finish</li>
                              <li>
                                Mid-century modern design with contemporary
                                comfort
                              </li>
                              <li>
                                Compact size ideal for reading nooks and bedroom
                                corners
                              </li>
                              <li>
                                Structured silhouette provides visual anchor
                              </li>
                              <li>
                                Quality construction for lasting durability
                              </li>
                            </ul>
                            <p className="text-sm">
                              Perfect for creating intimate seating areas or
                              adding a pop of color to neutral spaces, the
                              Braxton Chair is an investment in both style and
                              comfort.
                            </p>
                            <p className="text-xs mt-2">
                              <em>
                                Note: This description is crafted specifically
                                for ABC Brand's DTC website and direct marketing
                                channels.
                              </em>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTabBraxton === "dtc-content" && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* First image - Modern living room with credenza */}
                          <div className="border rounded-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Image
                              src="/braxton-chair-lifestyle-modern.png"
                              alt="Braxton Accent Chair in blue with white credenza, round wood side table, fiddle leaf fig plant, and modern styling in bright contemporary living room"
                              width={800}
                              height={600}
                              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center">
                              <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Modern Living Room
                              </span>
                              <button
                                onClick={() =>
                                  handleDownloadImage(
                                    "/braxton-chair-lifestyle-modern.png",
                                    "Braxton-Chair-Modern-Living-Room.png"
                                  )
                                }
                                className="bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 hover:bg-gray-50 transition-colors shadow-sm"
                              >
                                <Download className="h-4 w-4" />
                                Download
                              </button>
                            </div>
                          </div>

                          {/* Second image - Mid-century modern setting */}
                          <div className="border rounded-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Image
                              src="/braxton-chair-lifestyle-midcentury.png"
                              alt="Braxton Accent Chair in blue with mid-century modern credenza, wooden coffee table, abstract geometric artwork, and ceramic vases"
                              width={800}
                              height={600}
                              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center">
                              <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Mid-Century Modern
                              </span>
                              <button
                                onClick={() =>
                                  handleDownloadImage(
                                    "/braxton-chair-lifestyle-midcentury.png",
                                    "Braxton-Chair-Mid-Century-Modern.png"
                                  )
                                }
                                className="bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 hover:bg-gray-50 transition-colors shadow-sm"
                              >
                                <Download className="h-4 w-4" />
                                Download
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {selectedProducts.includes("Miya Accent Chair, Beige") && (
                <div className="mb-8">
                  {/* Product Title */}
                  <div className="border-b pb-4 mb-6">
                    <h2 className="text-lg font-semibold"></h2>
                  </div>

                  {/* Product Header */}
                  <div className="border-b pb-4 mb-6">
                    <div className="flex flex-wrap items-center gap-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 relative flex-shrink-0">
                          <Image
                            src="/miya-accent-chair-beige.png"
                            alt="Miya Accent Chair, Beige"
                            width={48}
                            height={48}
                            className="border object-contain rounded-sm"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-base">
                            Miya Accent Chair, Beige
                          </h3>
                          <div className="flex gap-2 text-xs text-gray-600">
                            <span>Indoor</span>
                            <span>•</span>
                            <span>Premium</span>
                            <span>•</span>
                            <span>Contemporary</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Beige Upholstery
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Wood Legs
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2">
                              Accent Chair
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Market Research for Miya Accent Chair */}
                  <div className="mb-8">
                    <div className="border rounded-lg p-4 mb-6">
                      <div className="mb-4 border-b pb-3">
                        <h2 className="text-lg font-semibold">
                          <StepLabel
                            number={1}
                            description={stepDescriptions[0]}
                          />
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="mb-4">
                            <div className="grid grid-cols-2 gap-3 mb-4">
                              <div className="border rounded-lg overflow-hidden">
                                <Image
                                  src="/miya-chair-competitor-1.png"
                                  alt="Beige accent chair with wooden frame in Scandinavian-style room with white chest of drawers, pampas grass, woven baskets, and neutral decor"
                                  width={600}
                                  height={600}
                                  className="w-full h-auto"
                                />
                                <div className="bg-gray-100 p-2 text-center text-xs font-medium">
                                  <div>Scandinavian Modern Style</div>
                                </div>
                              </div>
                              <div className="border rounded-lg overflow-hidden">
                                <Image
                                  src="/miya-chair-competitor-2.png"
                                  alt="Beige accent chair with wooden frame and gray throw blanket in cozy living room with natural light, white side table, and warm styling"
                                  width={600}
                                  height={600}
                                  className="w-full h-auto"
                                />
                                <div className="bg-gray-100 p-2 text-center text-xs font-medium">
                                  <div>Cozy Contemporary Style</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border-l pl-6">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-medium">
                              Key Insights Applied
                            </h4>
                            <Button
                              className="bg-black text-white hover:bg-black/90 text-sm py-1 h-auto flex items-center gap-1"
                              onClick={() =>
                                openPdpAnalysis("Miya Accent Chair, Beige")
                              }
                            >
                              <FileText className="h-3.5 w-3.5" />
                              View Full PDP Analysis-Copy
                            </Button>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-3">
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Neutral beige upholstery blends seamlessly with
                                various color schemes.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Scandinavian-inspired design appeals to
                                minimalist aesthetic preferences.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Natural wood frame adds warmth and organic
                                texture to modern spaces.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Versatile neutral tone works as foundation piece
                                or accent in any room.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Comfortable proportions suitable for reading
                                nooks and conversation areas.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-green-500 font-bold">
                                ✓
                              </span>
                              <span>
                                Quality construction ensures durability for
                                everyday use.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 with Tabs for Miya */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <h2 className="text-lg font-semibold w-full">
                        <StepLabel
                          number={2}
                          description={stepDescriptions[1]}
                        />
                      </h2>
                    </div>

                    {/* Tab Navigation */}
                    <div className="mb-6">
                      <div className="flex bg-gray-100 p-1 rounded-lg w-full max-w-md mx-auto">
                        <button
                          onClick={() => setActiveTabMiya("dtc-copy")}
                          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg transition-all duration-200 ${
                            activeTabMiya === "dtc-copy"
                              ? "bg-white text-blue-600 shadow-md"
                              : "text-gray-700 hover:bg-gray-200/50 hover:text-gray-900"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                            <rect
                              width="8"
                              height="4"
                              x="8"
                              y="2"
                              rx="1"
                              ry="1"
                            />
                            <path d="M9 14h6" />
                            <path d="M9 18h6" />
                            <path d="M9 10h6" />
                          </svg>
                          Copy
                        </button>
                        <button
                          onClick={() => setActiveTabMiya("dtc-content")}
                          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg transition-all duration-200 ${
                            activeTabMiya === "dtc-content"
                              ? "bg-white text-blue-600 shadow-md"
                              : "text-gray-700 hover:bg-gray-200/50 hover:text-gray-900"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              width="18"
                              height="18"
                              x="3"
                              y="3"
                              rx="2"
                              ry="2"
                            />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                          </svg>
                          Content
                        </button>
                      </div>
                    </div>

                    {/* Tab Content for Miya */}
                    {activeTabMiya === "dtc-copy" && (
                      <div className="border rounded-lg p-4">
                        <div className="mb-4">
                          <h3 className="font-medium mb-2">
                            Product Description
                          </h3>
                          <div className="bg-gray-50 p-4 rounded-md border">
                            <p className="text-sm mb-3">
                              <strong>
                                Miya Accent Chair - Timeless Beige Elegance
                              </strong>
                            </p>
                            <p className="text-sm mb-3">
                              Embrace understated sophistication with our Miya
                              Accent Chair in warm beige upholstery. This
                              contemporary piece combines Scandinavian-inspired
                              minimalism with exceptional comfort, featuring
                              clean lines and a welcoming silhouette that
                              enhances any living space.
                            </p>
                            <p className="text-sm mb-3">
                              The neutral beige fabric serves as a versatile
                              foundation piece, seamlessly integrating with
                              existing decor while adding a touch of refined
                              comfort. Supported by a sturdy wooden frame with
                              natural finish, this chair embodies the perfect
                              balance of form and function.
                            </p>
                            <p className="text-sm mb-3">
                              <strong>Key Features:</strong>
                            </p>
                            <ul className="text-sm mb-3 pl-4 space-y-1">
                              <li>
                                Premium beige upholstery for versatile styling
                              </li>
                              <li>Solid wood frame with natural finish</li>
                              <li>
                                Contemporary design with Scandinavian influences
                              </li>
                              <li>
                                Comfortable proportions for extended seating
                              </li>
                              <li>
                                Neutral tone complements any color palette
                              </li>
                              <li>Durable construction for everyday use</li>
                            </ul>
                            <p className="text-sm">
                              Perfect for creating cozy reading corners or
                              adding extra seating to living areas, the Miya
                              Chair offers timeless appeal and lasting comfort.
                            </p>
                            <p className="text-xs mt-2">
                              <em>
                                Note: This description is crafted specifically
                                for ABC Brand's DTC website and direct marketing
                                channels.
                              </em>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTabMiya === "dtc-content" && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="border rounded-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Image
                              src="/miya-chair-lifestyle.jpeg"
                              alt="Miya Accent Chair in beige with natural wood frame in Scandinavian-style living room with white walls, natural light, and minimalist decor"
                              width={800}
                              height={600}
                              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center">
                              <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Scandinavian Living Room
                              </span>
                              <button
                                onClick={() =>
                                  handleDownloadImage(
                                    "/miya-chair-lifestyle.jpeg",
                                    "Miya-Chair-Scandinavian-Living-Room.jpeg"
                                  )
                                }
                                className="bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 hover:bg-gray-50 transition-colors shadow-sm"
                              >
                                <Download className="h-4 w-4" />
                                Download
                              </button>
                            </div>
                          </div>
                          <div className="border rounded-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Image
                              src="/miya-chair-new-lifestyle.jpeg"
                              alt="Miya Accent Chair in beige with cozy throw blanket in warm contemporary living room with natural textures and soft lighting"
                              width={800}
                              height={600}
                              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center">
                              <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Cozy Contemporary Setting
                              </span>
                              <button
                                onClick={() =>
                                  handleDownloadImage(
                                    "/miya-chair-new-lifestyle.jpeg",
                                    "Miya-Chair-Contemporary-Setting.jpeg"
                                  )
                                }
                                className="bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 hover:bg-gray-50 transition-colors shadow-sm"
                              >
                                <Download className="h-4 w-4" />
                                Download
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-500">
                Select a product from the sidebar to view details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
