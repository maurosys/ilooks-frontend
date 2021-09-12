import MegaMenuTwo from "./MegaMenuTwo";

//TYPES
import { CategoryRequest, SubCategoryRequest } from "@type/request";

interface HeaderProps {
  categories?: CategoryRequest[];
  subCategories?: SubCategoryRequest[];
}

const Header = (props: HeaderProps) => {
  const { categories, subCategories } = props;

  return (
    <>
      <div className="header-area">
        <MegaMenuTwo categories={categories} subCategories={subCategories} />
      </div>
    </>
  );
};
export default Header;
