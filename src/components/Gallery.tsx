import Image from "next/image";
import { gallery } from "@/data/gallery";

export default function Gallery({ limit }: { limit?: number }) {
  const items = limit ? gallery.slice(0, limit) : gallery;
  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <div className="gallery-item" key={item.id}>
          <div className="gallery-photo">
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
