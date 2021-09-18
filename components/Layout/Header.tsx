import { useState, useEffect } from "react";
import MegaMenuTwo from "./MegaMenuTwo";

//TYPES
import { CategoryRequest, SubCategoryRequest } from "@type/request";
import { GetStaticProps } from "next";
import { getAPIClient } from "@services/api";

interface HeaderProps {
  categories?: CategoryRequest[];
  subCategories?: SubCategoryRequest[];
}

const Header = (props: HeaderProps) => {
  // const { categories, subCategories } = props;
  // const [categories, setCategories] = useState([]);
  // const [subCategories, setSubCategories] = useState([]);
  // const api = getAPIClient();

  // useEffect(() => {
  //   const getDatas = async () => {
  //     const categories = await api.get("category");
  //     const subCategories = await api.get("subcategory");
  //     setCategories(categories.data);
  //     setSubCategories(subCategories.data);
  //   };
  //   getDatas();
  // }, []);

  return (
    <>
      <div className="header-area">
        <MegaMenuTwo />
      </div>
    </>
  );
};

export default Header;
