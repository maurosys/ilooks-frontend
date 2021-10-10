import ImageGallery from "react-image-gallery";

//STYLES
import styles from "./productimage.module.css";

//TYPES
import { ImagesCarousel } from "pages/product/[id]";
interface ProductImageProps {
  images: ImagesCarousel[];
}

const ProductImage = ({ images }: ProductImageProps) => {
  const imagesDefault = images.map((image) => ({
    original: image.image,
    thumbnail: image.image,
  }));

  return (
    <div className="col-lg-6 col-md-6">
      <ImageGallery
        additionalClass={styles.imagegallery}
        items={imagesDefault}
      />
    </div>
  );
};

export default ProductImage;
