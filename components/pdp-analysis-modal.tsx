"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { X, ZoomIn, ZoomOut, Download } from "lucide-react";

interface PdpAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export function PdpAnalysisModal({
  isOpen,
  onClose,
  productName,
}: PdpAnalysisModalProps) {
  const [scale, setScale] = useState(1);
  const contentRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 2.5));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleDownload = () => {
    let imageUrl = "/pdp-analysis-detailed.png";
    let fileName = "Visual-Comfort-Bryant-PDP-Analysis.png";

    if (productName === "Wooly Rug") {
      imageUrl = "/wooly-rug-detailed-analysis.png";
      fileName = "Wooly-Rug-PDP-Analysis.png";
    } else if (productName === "Verity Yara Abstract Rug") {
      imageUrl = "/verity-yara-pdp-analysis.png";
      fileName = "Verity-Yara-PDP-Analysis.png";
    } else if (productName === "Tibeten Woven Rug") {
      imageUrl = "/tibeten-rug-pdp-analysis.png";
      fileName = "Tibeten-Woven-Rug-PDP-Analysis.png";
    } else if (productName === "Indira Geometric Hand-Knotted Rug") {
      imageUrl = "/indira-rug-pdp-analysis.png";
      fileName = "Indira-Geometric-Rug-PDP-Analysis.png";
    }

    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Determine which image to show based on product name
  const getAnalysisImage = () => {
    if (productName === "Wooly Rug") {
      return "/wooly-rug-detailed-analysis.png";
    } else if (productName === "Verity Yara Abstract Rug") {
      return "/verity-yara-pdp-analysis.png";
    } else if (productName === "Tibeten Woven Rug") {
      return "/tibeten-rug-pdp-analysis.png";
    } else if (productName === "Indira Geometric Hand-Knotted Rug") {
      return "/indira-rug-pdp-analysis.png";
    }
    return "/pdp-analysis-detailed.png";
  };

  const getImageAlt = () => {
    if (productName === "Wooly Rug") {
      return "Detailed PDP analysis for Wooly Hand-Tufted Rug showing copy assessment (A- grade) and visual assessment (C grade) with comprehensive copywriting evaluation, visual scorecard, and competitor comparison";
    } else if (productName === "Verity Yara Abstract Rug") {
      return "Detailed PDP analysis showing copy assessment (B- grade) and visual assessment (C+ grade) for Well Woven Verity Yara Abstract Modern Area Rug with comprehensive copywriting evaluation and visual scorecard";
    } else if (productName === "Tibeten Woven Rug") {
      return "Detailed PDP analysis showing copy assessment (C grade) and visual assessment (C+ grade) for Tibeten Woven Rug with comprehensive copywriting evaluation, visual scorecard, and competitor comparison";
    } else if (productName === "Indira Geometric Hand-Knotted Rug") {
      return "Detailed PDP analysis showing copy assessment (A- grade) and visual assessment (B grade) for Indira Geometric Hand-Knotted Rug with comprehensive copywriting evaluation, visual scorecard, and competitor comparison";
    }
    return "Detailed PDP analysis showing image assessment (B grade) and copy assessment (C grade) for Visual Comfort Bryant Modern Antique Brass Linen Shade Floor Lamp";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 overflow-y-auto font-manrope">
      <div className="relative bg-white rounded-lg shadow-lg max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">PDP Copy & Image Analysis</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={zoomOut}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Zoom out"
            >
              <ZoomOut className="h-5 w-5" />
            </button>
            <button
              onClick={zoomIn}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Zoom in"
            >
              <ZoomIn className="h-5 w-5" />
            </button>
            <button
              onClick={handleDownload}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Download analysis"
            >
              <Download className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div
          className="overflow-auto p-2 flex-1"
          ref={contentRef}
          style={{
            maxHeight: "calc(90vh - 70px)",
          }}
        >
          <div
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top center",
              transition: "transform 0.2s ease-out",
            }}
            className="relative"
          >
            <Image
              src={getAnalysisImage() || "/placeholder.svg"}
              alt={getImageAlt()}
              width={1000}
              height={1800}
              className="w-full h-auto"
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
