import Image from "next/image";
import PlaceholderImage from "@/public/images/placeholder.png";

export interface ProductImageProps {
  src?: string;
  alt: string;
}

function ProductImage({ src, alt }: ProductImageProps) {
  return src ? (
    <Image src={src} alt={alt} fill className="object-cover" />
  ) : (
    <Image src={PlaceholderImage} alt={alt} fill className="object-cover" />
  );
}

export default ProductImage;
