import { Download, FileText } from "lucide-react";
import Image from "next/image";
import StepLabel from "./step-label";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface RugDetailsProps {
  productName: string;
  productId: string;
  thumbnail: string;
  activeTab: "dtc-copy" | "dtc-content";
  onTabChange: (tab: "dtc-copy" | "dtc-content") => void;
  onOpenPdpAnalysis: (productName: string) => void;
  onDownloadImage: (imageUrl: string, fileName: string) => void;
  stepDescriptions: string[];
}

const RugDetails = ({
  productName,
  productId,
  thumbnail,
  activeTab,
  onTabChange,
  onOpenPdpAnalysis,
  onDownloadImage,
  stepDescriptions,
}: RugDetailsProps) => {
  return (
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
                Indira Geometric Hand-Knotted Wool/Viscose Soft Gray Area Rug
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
              <StepLabel number={1} description={stepDescriptions[0]} />
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
                <li className="flex gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>
                    Geometric patterns work best in clean, modern settings with
                    minimal clutter.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>
                    Neutral gray and beige tones complement both warm wood and
                    cool metal finishes.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>
                    Hand-knotted texture adds luxury appeal and justifies
                    premium pricing.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>
                    Large format rugs anchor seating areas and define
                    conversation spaces.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>
                    Sophisticated diamond lattice pattern appeals to
                    design-conscious consumers.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>
                    Versatile styling works with both mid-century and
                    contemporary furniture.
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

        {/* Tab Content for Indira */}
        {activeTab === "dtc-copy" && (
          <div className="border rounded-lg p-4">
            <div className="mb-4">
              <h3 className="font-medium mb-2">Product Description</h3>
              <div className="bg-gray-50 p-4 rounded-md border">
                <p className="text-sm mb-3">
                  <strong>
                    Indira Margo – A Hand-Knotted Statement of Soft Geometry and
                    Timeless Texture
                  </strong>
                </p>
                <p className="text-sm mb-3">
                  Inspired by Moroccan heirloom design and reimagined for
                  serene, modern homes, the Indira Margo rug creates a calming
                  foundation with plush softness underfoot. Its hand-knotted
                  craftsmanship speaks to quiet luxury, while scalloped edges
                  and a white diamond trellis invite texture and visual rhythm
                  into any space.
                </p>
                <p className="text-sm mb-3">
                  <strong>HAND-KNOTTED HERITAGE:</strong> Artfully hand-knotted
                  by skilled artisans in India for exceptional texture,
                  durability, and nuanced patterning
                </p>
                <p className="text-sm mb-3">
                  <strong>LUXURIOUS TEXTURE:</strong> Made from a plush blend of
                  natural wool and Tencel™ fibers for a soft, lustrous finish
                  with a high-pile feel
                </p>
                <p className="text-sm mb-3">
                  <strong>MODERN MOROCCAN DESIGN:</strong> Features a
                  tone-on-tone gray palette with ivory geometric trellis and
                  scalloped edge for a tactile, elevated aesthetic
                </p>
                <p className="text-sm mb-3">
                  <strong>INDOOR-READY COMFORT:</strong> A cozy yet breathable
                  construction that's floor-heating safe and ideal for bedrooms,
                  living rooms, or quiet sitting areas
                </p>
                <p className="text-sm mb-3">
                  <strong>EASY CARE:</strong> Vacuum regularly using a
                  suction-only setting. Blot spills immediately. For deep
                  cleaning, professional rug cleaning is recommended
                </p>
                <p className="text-sm mb-3">
                  <strong>RUG PAD RECOMMENDED:</strong> Use with a rug pad to
                  prevent shifting and to extend the life of your rug
                </p>
                <p className="text-sm mb-3">
                  Size Variance: All sizes are nominal with a variance of +/- 3%
                </p>
                <p className="text-sm mb-3">
                  <strong>USAGE SUGGESTIONS</strong>
                </p>
                <p className="text-sm">
                  Perfect for bedrooms, reading nooks, or living rooms where
                  soft texture and timeless design elevate a calm, collected
                  atmosphere.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "dtc-content" && (
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
                      onDownloadImage(
                        "/indira-rug-lifestyle-1.jpeg",
                        "Indira-Rug-Contemporary-Living.jpeg"
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
                      onDownloadImage(
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
  );
};

export default RugDetails;
