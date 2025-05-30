import Image from "next/image";

export interface MarketResearchContentProps {
  competitorImages?: Array<{
    src: string;
    alt: string;
    label: string;
  }>;
  competitorImageUrl?: string;
  competitorImageAlt?: string;
  competitorLabels?: string[];
}

export function MarketResearchContent({
  competitorImages,
  competitorImageUrl,
  competitorImageAlt,
  competitorLabels,
}: MarketResearchContentProps) {
  if (competitorImages) {
    // New format with individual competitor images
    return (
      <div className="mb-4">
        <div className="grid grid-cols-2 gap-3 mb-4">
          {competitorImages.map((image, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={600}
                className="w-full h-auto"
              />
              <div className="bg-gray-100 p-2 text-center text-xs font-medium">
                <div>{image.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Legacy format with single comparison image
  if (competitorImageUrl && competitorLabels) {
    return (
      <div className="mb-4">
        <Image
          src={competitorImageUrl}
          alt={competitorImageAlt || "Competitor comparison"}
          width={1200}
          height={600}
          className="w-full h-auto mb-1 border"
        />
        <div className="grid grid-cols-2 gap-3 mb-4">
          {competitorLabels.map((label, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-2 text-center text-xs font-medium">
                <div>{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
