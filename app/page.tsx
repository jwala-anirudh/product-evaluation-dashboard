"use client";

import { OriginalImageModal } from "@/components/original-image-modal";
import { PdpAnalysisModal } from "@/components/pdp-analysis-modal";
import { ProductSection } from "@/components/product-section";
import RugDetails from "@/components/rug-details";
import BrandHeader from "@/components/sidebar/brand-header";
import PoweredBy from "@/components/sidebar/powered-by";
import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ProductEvaluationDashboard() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [isPdpAnalysisOpen, setIsPdpAnalysisOpen] = useState(false);
  const [isOriginalImageOpen, setIsOriginalImageOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
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

  // All available products with their metadata
  const allProducts = [
    {
      name: "Indira Geometric Hand-Knotted Rug",
      displayName: "Indira Geometric Rug",
      id: "IGR-2025-01",
      thumbnail: "/indira-geometric-rug-thumbnail.png",
      tags: ["geometric", "hand-knotted", "rug", "wool", "viscose", "gray"],
    },
    {
      name: "Wooly Rug",
      displayName: "Wooly Rug",
      id: "WR-2025-01",
      thumbnail: "/wooly-rug-thumbnail-small.png",
      tags: ["rug", "diamond", "pattern", "handcrafted"],
    },
    {
      name: "Tibeten Woven Rug",
      displayName: "Tibeten Woven Rug",
      id: "TWR-2025-02",
      thumbnail: "/tibeten-rug-thumbnail-small.png",
      tags: ["tibetan", "woven", "rug", "traditional"],
    },
    {
      name: "Antique Brass Linen Shade Floor Lamp",
      displayName: "Antique Brass Lamp",
      id: "ABL-2025-03",
      thumbnail: "/antique-brass-lamp-thumbnail-fixed.png",
      tags: ["lamp", "brass", "antique", "floor", "linen", "shade"],
    },
    {
      name: "Verity Yara Abstract Rug",
      displayName: "Verity Yara Rug",
      id: "VYR-2025-04",
      thumbnail: "/verity-yara-rug-thumbnail-small.png",
      tags: ["abstract", "rug", "verity", "yara", "contemporary"],
    },
    {
      name: "Braxton Accent Chair, Blue",
      displayName: "Braxton Accent Chair",
      id: "BAC-2025-06",
      thumbnail: "/braxton-accent-chair-blue.png",
      tags: ["chair", "accent", "blue", "braxton", "upholstered"],
    },
  ];

  // Filter products based on search query
  const filteredProducts = allProducts.filter((product) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.displayName.toLowerCase().includes(searchLower) ||
      product.id.toLowerCase().includes(searchLower) ||
      product.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  });

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
        <BrandHeader />

        {/* Powered by Sitara AI */}
        <PoweredBy />

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
            placeholder="Search products, IDs, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-10 py-2 w-full border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        <div className="mt-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm text-muted-foreground">Product ID</h3>
            {searchQuery && (
              <span className="text-xs text-gray-500">
                {filteredProducts.length} result
                {filteredProducts.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className={`flex flex-col items-center p-2 rounded-md cursor-pointer border transition-all duration-200 ${
                      isSelected(product.name)
                        ? "bg-blue-50 border-blue-300 shadow-sm"
                        : "border-gray-100 hover:border-gray-200 hover:bg-gray-50"
                    }`}
                    onClick={() => handleProductSelect(product.name)}
                  >
                    <div className="w-full h-20 relative mb-1">
                      <Image
                        src={product.thumbnail}
                        alt={`${product.name} Thumbnail`}
                        fill
                        className="object-contain rounded-sm"
                      />
                      {isSelected(product.name) && (
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
                      <span className="text-xs font-medium block text-center">
                        {product.displayName}
                      </span>
                      <span className="text-[10px] text-gray-500 text-center">
                        ID: {product.id}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">
                    <Search className="h-12 w-12 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-500">
                    No products found matching "{searchQuery}"
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Try searching for product names, IDs, or keywords
                  </p>
                </div>
              )}
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
                <RugDetails
                  productName="Indira Geometric Hand-Knotted Rug"
                  productId="IGR-2025-01"
                  thumbnail="/indira-geometric-rug-thumbnail.png"
                  activeTab={activeTabIndira}
                  onTabChange={setActiveTabIndira}
                  onOpenPdpAnalysis={openPdpAnalysis}
                  onDownloadImage={handleDownloadImage}
                  stepDescriptions={stepDescriptions}
                />
              )}

              {selectedProducts.includes("Wooly Rug") && (
                <ProductSection
                  productName="Wooly Rug"
                  productId="WR-2025-01"
                  thumbnail="/wooly-rug-thumbnail-small.png"
                  category="Indoor"
                  style="Premium • Handcrafted"
                  badges={[
                    "Diamond Pattern",
                    "Wool",
                    "Terracotta",
                    "Sustainable",
                  ]}
                  activeTab={activeTabWooly}
                  onTabChange={setActiveTabWooly}
                  onOpenPdpAnalysis={openPdpAnalysis}
                  onDownloadImage={handleDownloadImage}
                  stepDescriptions={stepDescriptions}
                  marketResearchContent={
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
                  }
                  keyInsights={[
                    "Room Style: Scandinavian x Mid-century blend",
                    "Palette: Warm creams, terracotta, soft taupe or olive green",
                    "Furniture: Soft modern lines, natural wood tones",
                    "Textures: Woven throw on sofa, ceramic decor, wool rug grain visible",
                    "Rug fully visible in foreground, angled.",
                    "Lamp positioned to one side, grounded with a side table.",
                    "Couch and soft furnishing to establish scale and softness.",
                  ]}
                  dtcCopyContent={
                    <div className="bg-gray-50 p-4 rounded-md border">
                      <p className="text-sm mb-3">
                        <strong>
                          Wooly – A Plush Hand-Tufted Rug That Marries Comfort
                          with Global Charm
                        </strong>
                      </p>
                      <p className="text-sm mb-3">
                        Wrap your home in warmth and artisanal character with
                        the Wooly rug — a hand-tufted masterpiece that blends
                        cozy texture with worldly elegance. Inspired by bohemian
                        aesthetics and made for modern living, this rug offers a
                        soft, welcoming foundation that brings soulful comfort
                        to any room.
                      </p>
                      <p className="text-sm mb-3">
                        <strong>HAND-TUFTED TEXTURE:</strong> Crafted in India
                        by skilled artisans using a luxurious blend of 60% wool,
                        35% cotton, and 5% nylon for a richly textured, medium
                        pile surface that feels as good as it looks.
                      </p>
                      <p className="text-sm mb-3">
                        <strong>SOFT & DURABLE:</strong> The plush-yet-resilient
                        medium pile is cozy underfoot while withstanding
                        everyday wear — ideal for homes with kids, pets, and
                        high-traffic areas.
                      </p>
                      <p className="text-sm mb-3">
                        <strong>WASHABLE CONVENIENCE:</strong> Machine-washable
                        design allows for effortless cleaning. For best results,
                        wash on a delicate setting using water only and hang to
                        dry.
                      </p>
                      <p className="text-sm mb-3">
                        <strong>GLOBAL-INSPIRED STYLE:</strong> Earthy tones and
                        subtle texture lend this piece a worldly, bohemian feel
                        — perfect for layering into modern, rustic, or eclectic
                        interiors.
                      </p>
                      <p className="text-sm mb-3">
                        <strong>FAMILY-FRIENDLY FUNCTION:</strong> Designed to
                        slip seamlessly under furniture and doors, making it
                        perfect for living rooms, dining rooms, kitchens, and
                        entryways.
                      </p>
                      <p className="text-sm mb-3">
                        <strong>Usage Suggestions</strong>
                      </p>
                      <p className="text-sm mb-3">
                        Pair with neutral furnishings and textured accessories
                        for a grounded, organic vibe. Ideal under dining tables,
                        beds, or in cozy reading corners.
                      </p>
                      <p className="text-sm mb-3">
                        <strong>Additional Tips</strong>
                      </p>
                      <p className="text-sm mb-3">
                        We recommend using a non-skid rug pad to enhance comfort
                        and reduce shifting. Larger sizes may require commercial
                        washers or gentle hose-off cleaning.
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
                          Note: This description is crafted specifically for ABC
                          Brand's DTC website and direct marketing channels.
                        </em>
                      </p>
                    </div>
                  }
                  dtcContentImages={[
                    {
                      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2020%2C%202025%2C%2002_52_27%20PM-TqmjnYNSdaUJjvzQsOJhlwXb5SwugO.png",
                      alt: "Wooly Rug with Youri Lamp in living room",
                      title: "Living Room Setting",
                      downloadUrl:
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2020%2C%202025%2C%2002_52_27%20PM-TqmjnYNSdaUJjvzQsOJhlwXb5SwugO.png",
                      downloadFileName: "Wooly-Rug-Youri-Lamp-Living-Room.png",
                    },
                    {
                      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2020%2C%202025%2C%2002_42_23%20PM%20%281%29-u2b447JXbUIESc3CkwVa7UVAegsyBS.png",
                      alt: "Wooly Rug with Youri Lamp in modern setting",
                      title: "Modern Setting",
                      downloadUrl:
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2020%2C%202025%2C%2002_42_23%20PM%20%281%29-u2b447JXbUIESc3CkwVa7UVAegsyBS.png",
                      downloadFileName:
                        "Wooly-Rug-Youri-Lamp-Modern-Setting.png",
                    },
                  ]}
                />
              )}

              {selectedProducts.includes("Tibeten Woven Rug") && (
                <ProductSection
                  productName="Tibeten Woven Rug"
                  productId="TWR-2025-02"
                  thumbnail="/tibeten-rug-thumbnail-small.png"
                  category="Indoor"
                  style="Premium • Hand-Loomed"
                  badges={[
                    "Grid Pattern",
                    "Wool Blend",
                    "Beige/Gray",
                    "Low Pile",
                  ]}
                  activeTab={activeTabTibeten}
                  onTabChange={setActiveTabTibeten}
                  onOpenPdpAnalysis={openPdpAnalysis}
                  onDownloadImage={handleDownloadImage}
                  stepDescriptions={stepDescriptions}
                  marketResearchContent={
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
                  }
                  keyInsights={[
                    "Use the lamp to anchor one side of the frame; don't center it.",
                    "Lamp adds verticality — great for balancing a low-sitting rug.",
                    "Ensure texture of lamp shade is visible — soft light helps.",
                    "Consider a warm taupe to beige background to contrast with the Tibetan weave.",
                    "If pattern is complex, go for a straight-on or top-down angle.",
                    "Use this look for SKUs with stronger texture/pattern emphasis.",
                  ]}
                  dtcCopyContent={
                    <div className="bg-gray-50 p-4 rounded-md border">
                      <p className="text-sm mb-3">
                        <strong>
                          Tibeten Woven Rug - Sophisticated Grid Pattern
                        </strong>
                      </p>
                      <p className="text-sm mb-3">
                        Elevate your interior with our meticulously hand-loomed
                        Tibeten Woven Rug, featuring a refined grid pattern in
                        neutral beige and gray tones. This premium wool blend
                        rug combines traditional craftsmanship with contemporary
                        design sensibilities.
                      </p>
                      <p className="text-sm mb-3">
                        The subtle geometric grid creates visual depth while
                        maintaining understated elegance, making it perfect for
                        modern and transitional spaces. Its low-pile
                        construction ensures durability and easy maintenance
                        without compromising on comfort.
                      </p>
                      <p className="text-sm">
                        Ideal for high-traffic areas, this versatile piece
                        complements both minimalist and maximalist design
                        approaches.
                      </p>
                      <p className="text-xs mt-2">
                        <em>
                          Note: This description is crafted specifically for ABC
                          Brand's DTC website and direct marketing channels.
                        </em>
                      </p>
                    </div>
                  }
                  dtcContentImages={[
                    {
                      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2020%2C%202025%2C%2004_06_59%20PM-xAe7cvGgHdD1pacmY96zZlUsPnRIsY.png",
                      alt: "Tibeten Woven Rug with Ceduna Floor Lamp in modern living room",
                      title: "Modern Living Room",
                      downloadUrl:
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2020%2C%202025%2C%2004_06_59%20PM-xAe7cvGgHdD1pacmY96zZlUsPnRIsY.png",
                      downloadFileName:
                        "Tibeten-Rug-Ceduna-Lamp-Living-Room.png",
                    },
                    {
                      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2020%2C%202025%2C%2003_40_27%20PM-5dXU48CUsYZTMv192yN2HovQiqEiCc.png",
                      alt: "Tibeten Woven Rug with Ceduna Floor Lamp in living room with sofa",
                      title: "Sofa Setting",
                      downloadUrl:
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2020%2C%202025%2C%2003_40_27%20PM-5dXU48CUsYZTMv192yN2HovQiqEiCc.png",
                      downloadFileName: "Tibeten-Rug-Ceduna-Lamp-Sofa.png",
                    },
                  ]}
                />
              )}

              {selectedProducts.includes(
                "Antique Brass Linen Shade Floor Lamp"
              ) && (
                <ProductSection
                  productName="Antique Brass Linen Shade Floor Lamp"
                  productId="ABL-2025-03"
                  thumbnail="/antique-brass-lamp-thumbnail-fixed.png"
                  category="Indoor"
                  style="Classic"
                  badges={[
                    "Brass Finish",
                    "Linen Shade",
                    "Adjustable Height",
                    "Dimmable",
                  ]}
                  activeTab={activeTabBrass}
                  onTabChange={setActiveTabBrass}
                  onOpenPdpAnalysis={openPdpAnalysis}
                  onDownloadImage={handleDownloadImage}
                  stepDescriptions={stepDescriptions}
                  marketResearchContent={
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
                  }
                  keyInsights={[
                    "Position lamp strategically near seating to create functional lighting zones.",
                    "Brass finish adds warmth and elegance to neutral-toned spaces.",
                    "Pair with wood tones (medium to dark) for a cohesive, sophisticated look.",
                    "Marble base adds premium feel and balances the tall, slender profile.",
                    "Complementary accent colors: olive green, burnt orange, or deep teal.",
                    "Cylindrical shade provides clean lines that work in both traditional and modern settings.",
                  ]}
                  dtcCopyContent={
                    <div>
                      <p className="text-sm mb-3">
                        <strong>
                          Bryant Adjustable Floor Lamp – Timeless Brass Elegance
                          by Thomas O'Brien
                        </strong>
                      </p>
                      <p className="text-sm mb-3">
                        An architectural silhouette meets understated elegance
                        in this floor lamp by Thomas O'Brien. With its warm
                        antique brass finish and tailored linen shade, it's the
                        perfect balance of form and function.
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
                          Tapered white linen shade for a soft, diffused glow
                        </li>
                        <li>
                          Adjustable height (45"–62") for perfect placement
                          beside sofas or reading chairs
                        </li>
                        <li>
                          ETL certified and dry-rated – safe and elegant for
                          indoor use
                        </li>
                        <li>
                          Designed by Thomas O'Brien, part of the Visual Comfort
                          Signature Collection
                        </li>
                      </ul>
                      <p className="text-sm">
                        Elevate your home with timeless lighting that blends
                        sculptural beauty and practicality. This refined piece
                        is destined to become a beloved fixture in your space.
                      </p>
                      <p className="text-xs mt-2">
                        <em>
                          Note: This description is crafted specifically for ABC
                          Brand's DTC website and direct marketing channels.
                        </em>
                      </p>
                    </div>
                  }
                  dtcContentImages={[
                    {
                      src: "/brass-lamp-coastal-room.png",
                      alt: "Antique Brass Lamp in bright coastal living room with ocean artwork and French doors",
                      title: "Coastal Living Room",
                      downloadUrl: "/brass-lamp-coastal-room.png",
                      downloadFileName: "Brass-Lamp-Coastal-Room.png",
                    },
                    {
                      src: "/brass-lamp-green-chair.jpeg",
                      alt: "Antique Brass Lamp with olive green velvet chair and abstract artwork",
                      title: "Modern Reading Corner",
                      downloadUrl: "/brass-lamp-green-chair.jpeg",
                      downloadFileName: "Brass-Lamp-Green-Chair.jpeg",
                    },
                  ]}
                />
              )}

              {selectedProducts.includes("Verity Yara Abstract Rug") && (
                <ProductSection
                  productName="Verity Yara Abstract Rug"
                  productId="VYR-2025-04"
                  thumbnail="/verity-yara-rug-thumbnail-small.png"
                  category="Indoor"
                  style="Modern"
                  badges={[
                    "Abstract Pattern",
                    "Polypropylene",
                    "Gray/Beige",
                    "Low Maintenance",
                  ]}
                  activeTab={activeTabVerity}
                  onTabChange={setActiveTabVerity}
                  onOpenPdpAnalysis={openPdpAnalysis}
                  onDownloadImage={handleDownloadImage}
                  stepDescriptions={stepDescriptions}
                  marketResearchContent={
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
                  }
                  keyInsights={[
                    "Abstract patterns work best in minimalist, contemporary settings.",
                    "Neutral palette allows for bold accent colors in furniture and decor.",
                    "Marble-like patterns appeal to luxury market segment.",
                    "Low-maintenance materials important for modern lifestyle.",
                    "Versatile size options for various room configurations.",
                  ]}
                  dtcCopyContent={
                    <div>
                      <p className="text-sm mb-3">
                        Discover the Verity Yara – where artful geometry meets
                        soft, lived-in comfort.
                      </p>
                      <p className="text-sm mb-3">
                        This standout from Well Woven's Verity Collection brings
                        a modern twist to traditional design. With abstract
                        geometric patterns layered in cool greys and highlighted
                        by subtle flashes of contemporary color, Yara is the
                        perfect blend of bold style and everyday function. Woven
                        in Turkey with super-soft, durable polyester yarn, it's
                        cozy underfoot yet easy to clean—and built to stay
                        beautiful in high-traffic spaces.
                      </p>
                      <p className="text-sm mb-3">
                        <strong>Why You'll Love It:</strong>
                      </p>
                      <ul className="text-sm mb-3 pl-4 space-y-1">
                        <li>
                          Luxe mid-height pile: cozy, soft, and easy to vacuum
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
                          Durable, shed-free yarn that holds up to daily wear
                        </li>
                        <li>
                          Ideal for contemporary living rooms, bedrooms & home
                          offices
                        </li>
                      </ul>
                      <p className="text-sm mb-3">
                        <strong>Product Details:</strong>
                      </p>
                      <ul className="text-sm mb-3 pl-4 space-y-1">
                        <li>100% polyester yarn</li>
                        <li>Machine-woven in Turkey</li>
                        <li>
                          Rug pad recommended to reduce sliding and extend rug
                          life
                        </li>
                      </ul>
                      <p className="text-sm">
                        <strong>Tip:</strong> Unroll and allow 1–2 days for
                        natural flattening. Color may vary slightly based on
                        lighting and screen settings.
                      </p>
                      <p className="text-xs mt-2">
                        <em>
                          Note: This description is crafted specifically for ABC
                          Brand's DTC website and direct marketing channels.
                        </em>
                      </p>
                    </div>
                  }
                  dtcContentImages={[
                    {
                      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-23%20at%206.49.45%E2%80%AFPM.png-kAJs8HQm8bQ9CaUZDg7YG4txY5A8uY.jpeg",
                      alt: "Verity Yara Abstract Modern Area Rug in minimalist living room with black leather chair and brass chandelier",
                      title: "Minimalist Living Room",
                      downloadUrl:
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-23%20at%206.49.45%E2%80%AFPM.png-kAJs8HQm8bQ9CaUZDg7YG4txY5A8uY.jpeg",
                      downloadFileName:
                        "Verity-Yara-Minimalist-Living-Room.jpeg",
                    },
                    {
                      src: "/verity-yara-lifestyle-1.png",
                      alt: "Verity Yara Abstract Rug in elegant contemporary living room with rattan chair and modern floor lamp",
                      title: "Contemporary Living Room",
                      downloadUrl: "/verity-yara-lifestyle-1.png",
                      downloadFileName:
                        "Verity-Yara-Contemporary-Living-Room.png",
                    },
                  ]}
                />
              )}

              {selectedProducts.includes("Braxton Accent Chair, Blue") && (
                <ProductSection
                  productName="Braxton Accent Chair, Blue"
                  productId="BAC-2025-06"
                  thumbnail="/braxton-accent-chair-blue.png"
                  category="Indoor"
                  style="Mid-Century Modern"
                  badges={[
                    "Blue Upholstery",
                    "Wood Legs",
                    "Accent Chair",
                    "Contemporary",
                  ]}
                  activeTab={activeTabBraxton}
                  onTabChange={setActiveTabBraxton}
                  onOpenPdpAnalysis={openPdpAnalysis}
                  onDownloadImage={handleDownloadImage}
                  stepDescriptions={stepDescriptions}
                  marketResearchContent={
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
                  }
                  keyInsights={[
                    "Bold blue upholstery creates striking focal point in neutral spaces.",
                    "Mid-century modern silhouette appeals to design-conscious consumers.",
                    "Natural wood legs complement brass and warm metal accents.",
                    "Compact size perfect for reading corners and bedroom seating.",
                    "Structured design provides visual anchor in open floor plans.",
                    "Quality construction ensures longevity and investment value.",
                  ]}
                  dtcCopyContent={
                    <div>
                      <p className="text-sm mb-3">
                        <strong>
                          Braxton Accent Chair - Bold Blue Statement Piece
                        </strong>
                      </p>
                      <p className="text-sm mb-3">
                        Make a sophisticated statement with our Braxton Accent
                        Chair in striking blue upholstery. This mid-century
                        modern inspired piece combines timeless design with
                        contemporary comfort, featuring clean lines and a
                        structured silhouette that anchors any space with
                        confidence.
                      </p>
                      <p className="text-sm mb-3">
                        The rich blue fabric creates a beautiful focal point
                        while remaining versatile enough to complement various
                        color palettes. Supported by elegant wood legs with a
                        warm finish, this chair seamlessly bridges traditional
                        craftsmanship with modern aesthetics.
                      </p>
                      <p className="text-sm mb-3">
                        <strong>Key Features:</strong>
                      </p>
                      <ul className="text-sm mb-3 pl-4 space-y-1">
                        <li>
                          Premium blue upholstery for sophisticated color impact
                        </li>
                        <li>Solid wood legs with natural finish</li>
                        <li>
                          Mid-century modern design with contemporary comfort
                        </li>
                        <li>
                          Compact size ideal for reading nooks and bedroom
                          corners
                        </li>
                        <li>Structured silhouette provides visual anchor</li>
                        <li>Quality construction for lasting durability</li>
                      </ul>
                      <p className="text-sm">
                        Perfect for creating intimate seating areas or adding a
                        pop of color to neutral spaces, the Braxton Chair is an
                        investment in both style and comfort.
                      </p>
                      <p className="text-xs mt-2">
                        <em>
                          Note: This description is crafted specifically for ABC
                          Brand's DTC website and direct marketing channels.
                        </em>
                      </p>
                    </div>
                  }
                  dtcContentImages={[
                    {
                      src: "/braxton-chair-lifestyle-modern.png",
                      alt: "Braxton Accent Chair in blue with white credenza, round wood side table, fiddle leaf fig plant, and modern styling in bright contemporary living room",
                      title: "Modern Living Room",
                      downloadUrl: "/braxton-chair-lifestyle-modern.png",
                      downloadFileName: "Braxton-Chair-Modern-Living-Room.png",
                    },
                    {
                      src: "/braxton-chair-lifestyle-midcentury.png",
                      alt: "Braxton Accent Chair in blue with mid-century modern credenza, wooden coffee table, abstract geometric artwork, and ceramic vases",
                      title: "Mid-Century Modern",
                      downloadUrl: "/braxton-chair-lifestyle-midcentury.png",
                      downloadFileName: "Braxton-Chair-Mid-Century-Modern.png",
                    },
                  ]}
                />
              )}

              {selectedProducts.includes("Miya Accent Chair, Beige") && (
                <ProductSection
                  productName="Miya Accent Chair, Beige"
                  productId="MAC-2025-07"
                  thumbnail="/miya-accent-chair-beige.png"
                  category="Indoor"
                  style="Contemporary"
                  badges={[
                    "Beige Upholstery",
                    "Wooden Frame",
                    "Accent Chair",
                    "Modern",
                  ]}
                  activeTab={activeTabMiya}
                  onTabChange={setActiveTabMiya}
                  onOpenPdpAnalysis={openPdpAnalysis}
                  onDownloadImage={handleDownloadImage}
                  stepDescriptions={stepDescriptions}
                  marketResearchContent={
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="border rounded-lg overflow-hidden">
                        <Image
                          src="/miya-chair-lifestyle.jpeg"
                          alt="Miya accent chair in beige with modern wooden side table and abstract art"
                          width={600}
                          height={600}
                          className="w-full h-auto"
                        />
                        <div className="bg-gray-100 p-2 text-center text-xs font-medium">
                          <div>Contemporary Lifestyle</div>
                        </div>
                      </div>
                      <div className="border rounded-lg overflow-hidden">
                        <Image
                          src="/miya-chair-new-lifestyle.jpeg"
                          alt="Miya accent chair in bright modern living room with minimalist decor"
                          width={600}
                          height={600}
                          className="w-full h-auto"
                        />
                        <div className="bg-gray-100 p-2 text-center text-xs font-medium">
                          <div>Modern Living Room Setting</div>
                        </div>
                      </div>
                    </div>
                  }
                  keyInsights={[
                    "Neutral beige upholstery offers versatility across design styles",
                    "Contemporary silhouette appeals to modern aesthetics",
                    "Wooden frame adds warmth and natural element",
                    "Compact design perfect for apartments and small spaces",
                    "Clean lines complement minimalist interiors",
                    "Quality construction ensures durability and comfort",
                  ]}
                  dtcCopyContent={
                    <div>
                      <p className="text-sm mb-3">
                        <strong>
                          Miya Accent Chair - Timeless Elegance in Beige
                        </strong>
                      </p>
                      <p className="text-sm mb-3">
                        Embrace understated sophistication with our Miya Accent
                        Chair in versatile beige. This contemporary piece
                        marries clean lines with exceptional comfort, creating a
                        perfect balance of style and functionality for modern
                        living spaces.
                      </p>
                      <p className="text-sm mb-3">
                        The neutral beige upholstery provides endless styling
                        possibilities while the sleek wooden frame adds a touch
                        of natural warmth. Its thoughtful proportions make it an
                        ideal choice for both compact urban apartments and
                        spacious homes.
                      </p>
                      <p className="text-sm mb-3">
                        <strong>Key Features:</strong>
                      </p>
                      <ul className="text-sm mb-3 pl-4 space-y-1">
                        <li>Premium beige upholstery for versatile styling</li>
                        <li>Solid wooden frame for lasting durability</li>
                        <li>Contemporary design with timeless appeal</li>
                        <li>Ergonomic seat height and depth</li>
                        <li>Perfect scale for various room sizes</li>
                        <li>Easy-care fabric for everyday living</li>
                      </ul>
                      <p className="text-sm">
                        Whether creating a cozy reading nook or completing a
                        living room seating arrangement, the Miya Chair delivers
                        enduring style with everyday practicality.
                      </p>
                    </div>
                  }
                  dtcContentImages={[
                    {
                      src: "/miya-chair-lifestyle-step2.jpeg",
                      alt: "Miya accent chair in beige styled in a modern living room with natural light and minimalist decor",
                      title: "Modern Living Space",
                      downloadUrl: "/miya-chair-lifestyle-step2.jpeg",
                      downloadFileName: "Miya-Chair-Modern-Living-Space.jpeg",
                    },
                    {
                      src: "/miya-chair-lifestyle.jpeg",
                      alt: "Miya accent chair with contemporary side table and abstract wall art",
                      title: "Contemporary Setting",
                      downloadUrl: "/miya-chair-lifestyle.jpeg",
                      downloadFileName: "Miya-Chair-Contemporary-Setting.jpeg",
                    },
                  ]}
                />
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
