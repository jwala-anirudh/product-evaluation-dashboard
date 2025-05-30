import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import StepLabel from "@/components/step-label";

export interface ProductSectionProps {
  productName: string;
  productId: string;
  thumbnail: string;
  category: string;
  style: string;
  badges: string[];
  activeTab: "dtc-copy" | "dtc-content";
  onTabChange: (tab: "dtc-copy" | "dtc-content") => void;
  onOpenPdpAnalysis: (productName: string) => void;
  onDownloadImage: (imageUrl: string, fileName: string) => void;
  stepDescriptions: string[];
  marketResearchContent: React.ReactNode;
  keyInsights: string[];
  dtcCopyContent: React.ReactNode;
  dtcContentImages: Array<{
    src: string;
    alt: string;
    title: string;
    downloadUrl: string;
    downloadFileName: string;
  }>;
}

export function ProductSection({
  productName,
  productId,
  thumbnail,
  category,
  style,
  badges,
  activeTab,
  onTabChange,
  onOpenPdpAnalysis,
  onDownloadImage,
  stepDescriptions,
  marketResearchContent,
  keyInsights,
  dtcCopyContent,
  dtcContentImages,
}: ProductSectionProps) {
  return (
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
                src={thumbnail}
                alt={productName}
                width={48}
                height={48}
                className="border object-contain rounded-sm"
              />
            </div>
            <div>
              <h3 className="font-bold text-base">{productName}</h3>
              <div className="flex gap-2 text-xs text-gray-600">
                <span>{category}</span>
                <span>•</span>
                <span>Premium</span>
                <span>•</span>
                <span>{style}</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-1">
                {badges.map((badge, index) => (
                  <Badge
                    key={index}
                    className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs py-0 px-2"
                  >
                    {badge}
                  </Badge>
                ))}
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
              <StepLabel number={1} description={stepDescriptions[0]} />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>{marketResearchContent}</div>

            <div className="border-l pl-6">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium">Key Insights Applied</h4>
                <Button
                  className="bg-black text-white hover:bg-black/90 text-sm py-1 h-auto flex items-center gap-1"
                  onClick={() => onOpenPdpAnalysis(productName)}
                >
                  <FileText className="h-3.5 w-3.5" />
                  View Full PDP Analysis-Copy
                </Button>
              </div>
              <ul className="text-sm text-gray-700 space-y-3">
                {keyInsights.map((insight, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2 with Tabs */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-lg font-semibold w-full">
            <StepLabel number={2} description={stepDescriptions[1]} />
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="flex bg-gray-100 p-1 rounded-lg w-full max-w-md mx-auto">
            <button
              onClick={() => onTabChange("dtc-copy")}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg transition-all duration-200 ${
                activeTab === "dtc-copy"
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
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                <path d="M9 14h6" />
                <path d="M9 18h6" />
                <path d="M9 10h6" />
              </svg>
              Copy
            </button>
            <button
              onClick={() => onTabChange("dtc-content")}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg transition-all duration-200 ${
                activeTab === "dtc-content"
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
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
              Content
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "dtc-copy" && (
          <div className="border rounded-lg p-4">
            <div className="mb-4">
              <h3 className="font-medium mb-2">Product Description</h3>
              <div className="bg-gray-50 p-4 rounded-md border">
                {dtcCopyContent}
              </div>
            </div>
          </div>
        )}

        {activeTab === "dtc-content" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dtcContentImages.map((image, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-medium text-sm block mb-2">
                      {image.title}
                    </span>
                    <button
                      onClick={() =>
                        onDownloadImage(
                          image.downloadUrl,
                          image.downloadFileName
                        )
                      }
                      className="bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
