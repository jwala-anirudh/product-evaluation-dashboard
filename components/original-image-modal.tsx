"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { X, ZoomIn, ZoomOut, Download } from "lucide-react";

interface OriginalImageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OriginalImageModal({
  isOpen,
  onClose,
}: OriginalImageModalProps) {
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
    const link = document.createElement("a");
    link.href = "/original-product-image.png";
    link.download = "Visual-Comfort-Bryant-Original-Image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 overflow-y-auto font-manrope">
      <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">Original Product Image</h3>
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
              aria-label="Download image"
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
              src="/original-product-image.png"
              alt="Visual Comfort Bryant Modern Antique Brass Linen Shade Floor Lamp - Original Product Page"
              width={1000}
              height={1200}
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
