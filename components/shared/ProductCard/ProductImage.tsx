import Image from "next/image";
import PlaceholderImage from "@/public/images/placeholder.png";
import { AspectRatio } from "../../../@shadcn/components/ui/aspect-ratio";

export interface ProductImageProps {
  src?: string;
  alt: string;
}

function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <AspectRatio ratio={1 / 1}>
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" />
      ) : (
        <Image src={PlaceholderImage} alt={alt} fill className="object-cover" />
      )}
    </AspectRatio>
  );
}

export default ProductImage;
